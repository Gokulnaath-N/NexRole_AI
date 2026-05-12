import api from './api.client';
import type { ApiResponse, PaginatedResponse } from '../types/api.types';
import type { Job } from '../types/career.types';

export const jobService = {
  getAll: (params?: { search?: string; type?: string; page?: number; domain?: string; location?: string; salaryMin?: number; salaryMax?: number; limit?: number }) =>
    api.get<PaginatedResponse<Job>>('/jobs', { params }),

  getById: (id: string) =>
    api.get<ApiResponse<Job>>(`/jobs/${id}`),

  bookmark: (id: string) =>
    api.post<ApiResponse>(`/jobs/${id}/bookmark`),

  getBookmarked: () =>
    api.get<ApiResponse<Job[]>>('/jobs/bookmarked'),

  getMatchScore: (jobId: string) =>
    api.get<ApiResponse<{ score: number; gaps: string[] }>>(`/jobs/${jobId}/match`),
};
