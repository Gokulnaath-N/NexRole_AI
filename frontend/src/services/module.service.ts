import api from './api.client';
import type { ApiResponse } from '../types/api.types';
import type { Module, ModuleProgress } from '../types/module.types';

export const moduleService = {
  getByDomain: (domainId: string) =>
    api.get<ApiResponse<Module[]>>(`/modules?domainId=${domainId}`),

  getById: (moduleId: string) =>
    api.get<ApiResponse<Module>>(`/modules/${moduleId}`),

  markComplete: (moduleId: string) =>
    api.post<ApiResponse<ModuleProgress>>(`/modules/${moduleId}/complete`),

  getProgress: (moduleId: string) =>
    api.get<ApiResponse<ModuleProgress>>(`/modules/${moduleId}/progress`),
};
