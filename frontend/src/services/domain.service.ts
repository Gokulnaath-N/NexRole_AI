import api from './api.client';
import type { ApiResponse, PaginatedResponse } from '../types/api.types';
import type { Domain, Enrollment } from '../types/domain.types';

export const domainService = {
  getAll: (params?: { search?: string; page?: number }) =>
    api.get<PaginatedResponse<Domain>>('/domains', { params }),

  getBySlug: (slug: string) =>
    api.get<ApiResponse<Domain>>(`/domains/${slug}`),

  enroll: (domainId: string) =>
    api.post<ApiResponse<Enrollment>>(`/domains/${domainId}/enroll`),

  getEnrollments: () =>
    api.get<ApiResponse<Enrollment[]>>('/domains/my-enrollments'),
};
