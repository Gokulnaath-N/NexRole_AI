import api from './api.client';
import type { ApiResponse } from '../types/api.types';
import type { User } from '../types/user.types';

export const authService = {
  sync: (data: { uid: string; name: string; email: string; image?: string }) =>
    api.post<ApiResponse<{ user: User }>>('/auth/sync', data),

  completeOnboarding: (data: { targetRole: string; level: string; domainIds: string[] }) =>
    api.post<ApiResponse<{ user: User }>>('/auth/onboarding', data),

  getMe: () =>
    api.get<ApiResponse<{ user: User }>>('/auth/me'),
};
