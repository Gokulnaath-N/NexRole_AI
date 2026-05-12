export type ModuleType = 'READING' | 'QUIZ' | 'PROJECT' | 'VIDEO' | 'CODE';
export type ModuleStatus = 'LOCKED' | 'AVAILABLE' | 'IN_PROGRESS' | 'COMPLETED';

export interface Module {
  id: string;
  title: string;
  description?: string;
  type: ModuleType;
  content?: string;
  duration: string;
  xpReward: number;
  order: number;
  domainId: string;
  status?: ModuleStatus;
}

export interface ModuleProgress {
  moduleId: string;
  userId: string;
  status: ModuleStatus;
  completedAt?: string;
  xpEarned: number;
}
