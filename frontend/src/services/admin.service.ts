import api from './api.client';
import type { ApiResponse, PaginatedResponse } from '../types/api.types';

export const adminService = {
  getStats: () =>
    api.get<ApiResponse<Record<string, number>>>('/admin/stats'),

  getUsers: (page = 1) =>
    api.get<PaginatedResponse<any>>(`/admin/users?page=${page}`),

  updateUserRole: (userId: string, role: string) =>
    api.patch<ApiResponse>(`/admin/users/${userId}/role`, { role }),

  getDomains: (page = 1) =>
    api.get<PaginatedResponse<any>>(`/admin/domains?page=${page}`),

  createDomain: (data: any) =>
    api.post<ApiResponse>('/admin/domains', data),

  updateDomain: (id: string, data: any) =>
    api.put<ApiResponse>(`/admin/domains/${id}`, data),

  deleteDomain: (id: string) =>
    api.delete<ApiResponse>(`/admin/domains/${id}`),
};
