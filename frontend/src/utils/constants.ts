export const XP_REWARDS = {
  MODULE_COMPLETE: 50,
  QUIZ_PERFECT: 100,
  QUIZ_PASS: 75,
  DAILY_LOGIN: 10,
  STREAK_7_DAYS: 200,
  STREAK_30_DAYS: 1000,
  PROJECT_SUBMIT: 150,
  FIRST_ENROLLMENT: 25,
  ONBOARDING_COMPLETE: 25,
  DOMAIN_COMPLETE: 500,
}

export const LEVELS = [
  { level: 1, name: 'AI Newcomer', minXP: 0 },
  { level: 2, name: 'Prompt Learner', minXP: 200 },
  { level: 3, name: 'ML Practitioner', minXP: 500 },
  { level: 4, name: 'AI Builder', minXP: 1000 },
  { level: 5, name: 'LLM Engineer', minXP: 2000 },
  { level: 6, name: 'AI Architect', minXP: 4000 },
  { level: 7, name: 'GenAI Expert', minXP: 7000 },
  { level: 8, name: 'AI Pioneer', minXP: 12000 },
]

export const DOMAINS = [
  { slug: 'generative-ai-engineering', name: 'Generative AI Engineering', icon: '⚡', color: '#7c3aed' },
  { slug: 'ai-agentic-systems', name: 'AI Agentic Systems', icon: '🤖', color: '#0369a1' },
  { slug: 'mlops-llmops', name: 'MLOps / LLMOps', icon: '⚙️', color: '#0f766e' },
  { slug: 'ai-cybersecurity', name: 'AI-Powered Cybersecurity', icon: '🛡️', color: '#dc2626' },
  { slug: 'ai-cloud-architecture', name: 'AI Cloud Architecture', icon: '☁️', color: '#0284c7' },
  { slug: 'data-engineering-ai', name: 'Data Engineering for AI', icon: '📊', color: '#16a34a' },
  { slug: 'ai-product-management', name: 'AI Product Management', icon: '📋', color: '#d97706' },
  { slug: 'robotics-ai-automation', name: 'Robotics & AI Automation', icon: '🦾', color: '#9333ea' },
]

export const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000'
export const AI_SERVICE_URL = import.meta.env.VITE_AI_SERVICE_URL || 'http://localhost:8001'
