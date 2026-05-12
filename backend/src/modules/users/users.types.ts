export interface UpdateProfileRequest {
  name?: string;
  targetRole?: string;
  targetCompany?: string;
  experienceLevel?: "BEGINNER" | "INTERMEDIATE" | "ADVANCED";
  weeklyHours?: number;
  image?: string;
}

export interface UserProfileResponse {
  id: string;
  name: string;
  email: string;
  image?: string;
  role: string;
  xp: number;
  streak: number;
  longestStreak: number;
  level: {
    level: number;
    name: string;
    progress: number;
    nextLevelXP: number;
  };
  targetRole?: string;
  targetCompany?: string;
  experienceLevel: string;
  weeklyHours: number;
  onboardingComplete: boolean;
  skills: string[];
  stats: {
    enrolledDomains: number;
    completedModules: number;
    certificates: number;
    quizzesTaken: number;
    avgQuizScore: number;
  };
  enrollments: Array<{
    domain: {
      name: string;
      icon: string;
      color: string;
      slug: string;
    };
    completedModules: number;
    totalModules: number;
    progressPercent: number;
  }>;
  createdAt: string;
}
