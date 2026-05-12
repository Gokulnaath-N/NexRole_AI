import axios from 'axios'
import prisma from '../../config/db'
import redis from '../../config/redis'
import { env } from '../../config/env'
import { AppError } from '../../middlewares/errorHandler'
import { GenerateRoadmapRequest, GeneratedRoadmap, WeeklyTasksResponse, RoadmapSummary } from './learningPath.types'

const REGEN_TTL = 60 * 60 * 24 // 24 hours in seconds

// ─── FUNCTION 1 ───────────────────────────────────────────────────────────────

export const generateRoadmapWithGemini = async (request: GenerateRoadmapRequest): Promise<GeneratedRoadmap> => {
  const domain = await prisma.domain.findUnique({ where: { slug: request.selectedDomainSlug } })
  if (!domain) throw new AppError('Domain not found', 404)

  const prompt = `
You are a senior AI career coach at a top tech company in India.
Generate a personalized learning roadmap for this learner:

Target Role: ${request.targetRole}
Target Company: ${request.targetCompany}
Target Company Type: ${request.companyType}
Experience Level: ${request.experienceLevel}
Available Hours Per Week: ${request.weeklyHours}
Current Skills: ${request.currentSkills.join(', ') || 'None mentioned'}
Primary Learning Domain: ${request.selectedDomainSlug}

Company Type Context:
- PRODUCT: Focus on system design, scalability, research papers, open source
- SERVICE: Focus on client delivery, certifications, documentation, cost optimization
- STARTUP: Focus on full-stack AI, speed, building MVPs, wearing multiple hats
- FREELANCE: Focus on portfolio, niche expertise, client communication, pricing

Calculate duration:
- BEGINNER + less than 5 hrs/week = 90 days
- BEGINNER + 5-10 hrs/week = 60 days
- INTERMEDIATE + any = 45-60 days
- ADVANCED + any = 30-45 days

Return ONLY valid JSON matching this exact structure:
{
  "title": "90-Day GenAI Engineer Roadmap for Product Companies",
  "targetRole": "${request.targetRole}",
  "targetCompany": "${request.targetCompany}",
  "durationDays": 90,
  "totalWeeks": 13,
  "weeklyHours": ${request.weeklyHours},
  "overview": "Two sentence overview of what this roadmap covers and achieves.",
  "weeks": [
    {
      "weekNumber": 1,
      "theme": "LLM Foundations & Transformer Architecture",
      "goals": [
        "Understand how transformers work at a conceptual level",
        "Run your first LLM inference locally using Ollama",
        "Complete 2 hands-on coding exercises with OpenAI API"
      ],
      "modules": [
        "Introduction to Large Language Models",
        "Prompt Engineering Fundamentals"
      ],
      "project": "Build a simple Q&A bot using Gemini API",
      "estimatedHours": ${request.weeklyHours}
    }
  ],
  "keyMilestones": [
    { "week": 4, "milestone": "First working RAG application deployed", "badge": "🚀" },
    { "week": 8, "milestone": "Full LLM pipeline in production", "badge": "⚡" },
    { "week": 13, "milestone": "Portfolio-ready AI project complete", "badge": "🏆" }
  ],
  "careerOutcome": "After completing this roadmap you will be able to...",
  "salaryRange": "₹18L - ₹35L"
}

Generate ALL weeks (not just 1). Make goals specific and actionable.
Tailor everything to Indian job market and the specific company type.
`

  const response = await axios.post(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${env.GEMINI_API_KEY}`,
    {
      contents: [{ parts: [{ text: prompt }] }],
      generationConfig: {
        temperature: 0.4,
        maxOutputTokens: 4096,
        responseMimeType: 'application/json',
      },
    },
    { timeout: 60000 }
  )

  const text = response.data.candidates[0].content.parts[0].text
  let roadmap: GeneratedRoadmap
  try {
    roadmap = JSON.parse(text)
  } catch {
    throw new AppError('Failed to parse Gemini roadmap response', 500)
  }

  await prisma.learningPath.create({
    data: {
      domainId: domain.id,
      companyTarget: request.targetCompany,
      roleTarget: request.targetRole,
      durationDays: roadmap.durationDays,
      moduleOrder: roadmap as object,
    },
  })

  return roadmap
}

// ─── FUNCTION 2 ───────────────────────────────────────────────────────────────

export const getUserRoadmap = async (userId: string, domainSlug: string) => {
  const user = await prisma.user.findUnique({ where: { id: userId } })
  if (!user) throw new AppError('User not found', 404)

  const domain = await prisma.domain.findUnique({ where: { slug: domainSlug } })
  if (!domain) throw new AppError('Domain not found', 404)

  const enrollment = await prisma.enrollment.findUnique({
    where: { userId_domainId: { userId, domainId: domain.id } },
  })
  if (!enrollment) throw new AppError('Not enrolled in this domain', 403)

  const existing = await prisma.learningPath.findFirst({
    where: {
      domainId: domain.id,
      roleTarget: user.targetRole || undefined,
      companyTarget: user.targetCompany || undefined,
    },
    orderBy: { createdAt: 'desc' },
  })

  let roadmap: GeneratedRoadmap

  if (existing) {
    roadmap = existing.moduleOrder as unknown as GeneratedRoadmap
  } else {
    roadmap = await generateRoadmapWithGemini({
      targetRole: user.targetRole || 'AI Engineer',
      targetCompany: user.targetCompany || 'Product Company',
      companyType: 'PRODUCT',
      experienceLevel: user.experienceLevel,
      weeklyHours: user.weeklyHours,
      currentSkills: user.skills,
      selectedDomainSlug: domainSlug,
    })
  }

  // Calculate current week based on enrollment date
  const daysSinceEnrollment = Math.floor(
    (Date.now() - enrollment.enrolledAt.getTime()) / (1000 * 60 * 60 * 24)
  )
  const currentWeek = Math.min(Math.floor(daysSinceEnrollment / 7) + 1, roadmap.totalWeeks)

  return { ...roadmap, currentWeek }
}

// ─── FUNCTION 3 ───────────────────────────────────────────────────────────────

export const getWeeklyTasks = async (
  userId: string,
  domainSlug: string,
  weekNumber: number
): Promise<WeeklyTasksResponse> => {
  const roadmapData = await getUserRoadmap(userId, domainSlug)
  const week = roadmapData.weeks.find((w) => w.weekNumber === weekNumber)
  if (!week) throw new AppError(`Week ${weekNumber} not found in roadmap`, 404)

  const domain = await prisma.domain.findUnique({
    where: { slug: domainSlug },
    include: { modules: { where: { status: 'PUBLISHED' } } },
  })
  if (!domain) throw new AppError('Domain not found', 404)

  // Match week module titles to actual DB modules (case-insensitive partial match)
  const matchedModules = domain.modules.filter((m) =>
    week.modules.some((wm) => m.title.toLowerCase().includes(wm.toLowerCase()) || wm.toLowerCase().includes(m.title.toLowerCase()))
  )
  const matchedModuleIds = matchedModules.map((m) => m.id)

  const completedProgress = await prisma.progress.findMany({
    where: { userId, moduleId: { in: matchedModuleIds }, completed: true },
  })
  const completedModuleIds = new Set(completedProgress.map((p) => p.moduleId))

  const completedModules = matchedModules.filter((m) => completedModuleIds.has(m.id)).map((m) => m.title)
  const pendingModules = matchedModules.filter((m) => !completedModuleIds.has(m.id)).map((m) => m.title)

  // Goals: mark completed if all modules for that week are done
  const allModulesDone = pendingModules.length === 0 && matchedModules.length > 0
  const completedGoals = allModulesDone ? week.goals : []
  const pendingGoals = allModulesDone ? [] : week.goals

  const totalItems = week.modules.length + week.goals.length
  const completedItems = completedModules.length + completedGoals.length
  const weekProgress = totalItems > 0 ? Math.round((completedItems / totalItems) * 100) : 0

  return { week, completedGoals, pendingGoals, completedModules, pendingModules, weekProgress }
}

// ─── FUNCTION 4 ───────────────────────────────────────────────────────────────

export const getAllUserRoadmaps = async (userId: string): Promise<RoadmapSummary[]> => {
  const user = await prisma.user.findUnique({ where: { id: userId } })
  if (!user) throw new AppError('User not found', 404)

  const enrollments = await prisma.enrollment.findMany({
    where: { userId },
    include: { domain: true },
  })

  const completedProgress = await prisma.progress.findMany({
    where: { userId, completed: true },
    include: { module: { select: { domainId: true } } },
  })

  const results: RoadmapSummary[] = []

  for (const enrollment of enrollments) {
    const domain = enrollment.domain

    const existing = await prisma.learningPath.findFirst({
      where: { domainId: domain.id },
      orderBy: { createdAt: 'desc' },
    })

    let roadmap: GeneratedRoadmap | null = existing
      ? (existing.moduleOrder as unknown as GeneratedRoadmap)
      : null

    if (!roadmap) continue // Skip domains with no roadmap yet

    const daysSinceEnrollment = Math.floor(
      (Date.now() - enrollment.enrolledAt.getTime()) / (1000 * 60 * 60 * 24)
    )
    const currentWeek = Math.min(Math.floor(daysSinceEnrollment / 7) + 1, roadmap.totalWeeks)

    const domainCompletedCount = completedProgress.filter(
      (p) => p.module.domainId === domain.id
    ).length

    const totalModules = await prisma.module.count({
      where: { domainId: domain.id, status: 'PUBLISHED' },
    })

    const overallProgress =
      totalModules > 0 ? Math.round((domainCompletedCount / totalModules) * 100) : 0

    const nextMilestone =
      roadmap.keyMilestones.find((m) => m.week >= currentWeek)?.milestone || null

    results.push({
      domainName: domain.name,
      domainIcon: domain.icon,
      targetRole: roadmap.targetRole,
      durationDays: roadmap.durationDays,
      currentWeek,
      overallProgress,
      nextMilestone,
    })
  }

  return results
}

// ─── FUNCTION 5 ───────────────────────────────────────────────────────────────

export const regenerateRoadmap = async (userId: string, domainSlug: string): Promise<GeneratedRoadmap> => {
  const regenKey = `roadmap_regen:${userId}:${domainSlug}`
  const lastRegen = await redis.get(regenKey)
  if (lastRegen) throw new AppError('Can only regenerate roadmap once per 24 hours', 429)

  const user = await prisma.user.findUnique({ where: { id: userId } })
  if (!user) throw new AppError('User not found', 404)

  const domain = await prisma.domain.findUnique({ where: { slug: domainSlug } })
  if (!domain) throw new AppError('Domain not found', 404)

  // Delete existing roadmap for this domain
  await prisma.learningPath.deleteMany({
    where: {
      domainId: domain.id,
      roleTarget: user.targetRole || undefined,
      companyTarget: user.targetCompany || undefined,
    },
  })

  // Set rate limit key before generating (prevent double-click abuse)
  await redis.set(regenKey, '1', 'EX', REGEN_TTL)

  const roadmap = await generateRoadmapWithGemini({
    targetRole: user.targetRole || 'AI Engineer',
    targetCompany: user.targetCompany || 'Product Company',
    companyType: 'PRODUCT',
    experienceLevel: user.experienceLevel,
    weeklyHours: user.weeklyHours,
    currentSkills: user.skills,
    selectedDomainSlug: domainSlug,
  })

  return roadmap
}
