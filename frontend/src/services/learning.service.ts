import api from './api.client';

export const learningService = {
  getModule: (moduleId: string) =>
    api.get(`/modules/${moduleId}`).then(r => r.data.data),

  markComplete: (moduleId: string) =>
    api.post(`/modules/${moduleId}/complete`).then(r => r.data.data),

  getDomainProgress: (slug: string) =>
    api.get(`/progress/domain/${slug}`).then(r => r.data.data),

  getAllProgress: () =>
    api.get('/progress/all').then(r => r.data.data),

  getProgressAnalytics: () =>
    api.get('/progress/analytics').then(r => r.data.data),

  enrollInDomain: (slug: string) =>
    api.post(`/domains/${slug}/enroll`).then(r => r.data.data),

  getDomain: (slug: string) =>
    api.get(`/domains/${slug}`).then(r => r.data.data),

  getAllDomains: () =>
    api.get('/domains').then(r => r.data.data),

  getQuizForModule: (moduleId: string) =>
    api.get(`/quiz/module/${moduleId}`).then(r => r.data.data),

  submitQuizAnswer: (quizId: string, selectedAnswer: number) =>
    api.post(`/quiz/${quizId}/submit`, { selectedAnswer })
      .then(r => r.data.data),

  getQuizResults: (moduleId: string) =>
    api.get(`/quiz/module/${moduleId}/results`).then(r => r.data.data),
};
