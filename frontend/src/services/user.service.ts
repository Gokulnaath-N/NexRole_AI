import api from './api.client';
import type { ApiResponse } from '../types/api.types';
import type { UserProfile } from '../types/user.types';

export const userService = {
  getProfile: (userId: string) =>
    api.get<ApiResponse<UserProfile>>(`/users/${userId}`),

  updateProfile: (data: Partial<UserProfile>) =>
    api.patch<ApiResponse<UserProfile>>('/users/me', data),

  uploadAvatar: (file: File) => {
    const form = new FormData();
    form.append('avatar', file);
    return api.post<ApiResponse<{ imageUrl: string }>>('/users/me/avatar', form, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
  },

  deleteAccount: () =>
    api.delete<ApiResponse>('/users/me'),
};
