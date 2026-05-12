import api from './api.client';
import type { ApiResponse } from '../types/api.types';

export interface ProgressStats {
  totalXP: number;
  level: string;
  streak: number;
  modulesCompleted: number;
  domainsEnrolled: number;
  jobMatchScore: number;
}

export const progressService = {
  getStats: () =>
    api.get<ApiResponse<ProgressStats>>('/progress/stats'),

  getDomainProgress: (domainId: string) =>
    api.get<ApiResponse<{ progress: number; completedModules: number; totalModules: number }>>(`/progress/domain/${domainId}`),
};
