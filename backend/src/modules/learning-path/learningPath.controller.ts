import { Request, Response } from 'express'
import { z } from 'zod'
import { asyncHandler } from '../../middlewares/errorHandler'
import { sendSuccess } from '../../utils/response.utils'
import {
  generateRoadmapWithGemini,
  getUserRoadmap,
  getWeeklyTasks,
  getAllUserRoadmaps,
  regenerateRoadmap,
} from './learningPath.service'

export const generateRoadmapSchema = z.object({
  targetRole: z.string().min(3).max(100),
  targetCompany: z.string().min(2).max(100),
  companyType: z.enum(['PRODUCT', 'SERVICE', 'STARTUP', 'FREELANCE']),
  experienceLevel: z.enum(['BEGINNER', 'INTERMEDIATE', 'ADVANCED']),
  weeklyHours: z.number().min(1).max(40),
  currentSkills: z.array(z.string()).max(30).default([]),
  selectedDomainSlug: z.string().min(3),
})

// POST /learning-path/generate
export const generateRoadmap = asyncHandler(async (req: Request, res: Response) => {
  const roadmap = await generateRoadmapWithGemini(req.body)
  return sendSuccess(res, roadmap, 'Roadmap generated successfully', 201)
})

// GET /learning-path/domain/:slug
export const getRoadmap = asyncHandler(async (req: Request, res: Response) => {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const userId = req.user!.id
  const { slug } = req.params
  const roadmap = await getUserRoadmap(userId, slug)
  return sendSuccess(res, roadmap, 'Roadmap retrieved successfully')
})

// GET /learning-path/domain/:slug/week/:weekNumber
export const getWeekTasks = asyncHandler(async (req: Request, res: Response) => {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const userId = req.user!.id
  const { slug, weekNumber } = req.params
  const week = await getWeeklyTasks(userId, slug, Number(weekNumber))
  return sendSuccess(res, week, 'Weekly tasks retrieved successfully')
})

// GET /learning-path/all
export const getAllRoadmaps = asyncHandler(async (req: Request, res: Response) => {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const userId = req.user!.id
  const summaries = await getAllUserRoadmaps(userId)
  return sendSuccess(res, summaries, 'All roadmaps retrieved successfully')
})

// POST /learning-path/domain/:slug/regenerate
export const regenRoadmap = asyncHandler(async (req: Request, res: Response) => {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const userId = req.user!.id
  const { slug } = req.params
  const roadmap = await regenerateRoadmap(userId, slug)
  return sendSuccess(res, roadmap, 'Roadmap regenerated successfully')
})
