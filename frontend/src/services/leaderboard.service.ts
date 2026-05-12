import api from './api.client';
import type { ApiResponse } from '../types/api.types';

export interface LeaderboardEntry {
  rank: number;
  userId: string;
  name: string;
  image?: string;
  xp: number;
  level: string;
  streak: number;
}

export const leaderboardService = {
  getGlobal: (period: 'weekly' | 'alltime' = 'weekly') =>
    api.get<ApiResponse<LeaderboardEntry[]>>(`/leaderboard?period=${period}`),

  getByDomain: (domainId: string) =>
    api.get<ApiResponse<LeaderboardEntry[]>>(`/leaderboard/domain/${domainId}`),

  getMyRank: () =>
    api.get<ApiResponse<{ rank: number; xp: number }>>('/leaderboard/my-rank'),
};
