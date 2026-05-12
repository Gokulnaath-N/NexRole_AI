export interface GenerateRoadmapRequest {
  targetRole: string
  targetCompany: string
  companyType: 'PRODUCT' | 'SERVICE' | 'STARTUP' | 'FREELANCE'
  experienceLevel: 'BEGINNER' | 'INTERMEDIATE' | 'ADVANCED'
  weeklyHours: number
  currentSkills: string[]
  selectedDomainSlug: string
}

export interface RoadmapWeek {
  weekNumber: number
  theme: string
  goals: string[]
  modules: string[]
  project?: string
  estimatedHours: number
}

export interface GeneratedRoadmap {
  title: string
  targetRole: string
  targetCompany: string
  durationDays: number
  totalWeeks: number
  weeklyHours: number
  overview: string
  weeks: RoadmapWeek[]
  keyMilestones: Array<{
    week: number
    milestone: string
    badge: string
  }>
  careerOutcome: string
  salaryRange: string
}

export interface WeeklyTasksResponse {
  week: RoadmapWeek
  completedGoals: string[]
  pendingGoals: string[]
  completedModules: string[]
  pendingModules: string[]
  weekProgress: number
}

export interface RoadmapSummary {
  domainName: string
  domainIcon: string
  targetRole: string
  durationDays: number
  currentWeek: number
  overallProgress: number
  nextMilestone: string | null
}
