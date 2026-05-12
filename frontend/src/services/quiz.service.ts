import api from './api.client';
import type { ApiResponse } from '../types/api.types';
import type { QuizQuestion, QuizResult } from '../types/quiz.types';

export const quizService = {
  getQuestions: (moduleId: string) =>
    api.get<ApiResponse<QuizQuestion[]>>(`/quiz/${moduleId}/questions`),

  submit: (moduleId: string, answers: number[]) =>
    api.post<ApiResponse<QuizResult>>(`/quiz/${moduleId}/submit`, { answers }),

  generateAI: (moduleId: string) =>
    api.post<ApiResponse<QuizQuestion[]>>(`/quiz/${moduleId}/generate`),
};
