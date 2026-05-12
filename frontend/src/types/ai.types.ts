export interface AIMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: string;
}

export interface AITutorSession {
  id: string;
  moduleId: string;
  messages: AIMessage[];
  createdAt: string;
}

export interface LearningPath {
  id: string;
  userId: string;
  domainId: string;
  targetRole: string;
  milestones: LearningMilestone[];
  generatedAt: string;
}

export interface LearningMilestone {
  week: number;
  title: string;
  description: string;
  modules: string[];
  skills: string[];
}
