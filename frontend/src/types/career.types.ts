export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  type: 'FULL_TIME' | 'PART_TIME' | 'CONTRACT' | 'REMOTE';
  salaryMin?: number;
  salaryMax?: number;
  skills: string[];
  description: string;
  postedAt: string;
  url?: string;
  matchScore?: number;
}

export interface SkillGap {
  skill: string;
  required: boolean;
  userHas: boolean;
  priority: 'HIGH' | 'MEDIUM' | 'LOW';
}

export interface CareerEvaluation {
  matchScore: number;
  strengths: string[];
  gaps: SkillGap[];
  recommendations: string[];
  targetRole: string;
}
