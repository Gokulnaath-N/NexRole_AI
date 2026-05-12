import api from './api.client';
import type { ApiResponse, PaginatedResponse } from '../types/api.types';

export interface Notification {
  id: string;
  userId: string;
  title: string;
  message: string;
  type: string;
  read: boolean;
  createdAt: string;
}

export const notificationService = {
  getAll: (page = 1) =>
    api.get<PaginatedResponse<Notification>>(`/notifications?page=${page}`),

  markRead: (id: string) =>
    api.patch<ApiResponse>(`/notifications/${id}/read`),

  markAllRead: () =>
    api.patch<ApiResponse>('/notifications/read-all'),

  getUnreadCount: () =>
    api.get<ApiResponse<{ count: number }>>('/notifications/unread-count'),
};
