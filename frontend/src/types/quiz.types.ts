export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation?: string;
  xpReward: number;
}

export interface QuizAttempt {
  id: string;
  userId: string;
  moduleId: string;
  score: number;
  totalQuestions: number;
  xpEarned: number;
  completedAt: string;
  answers: number[];
}

export interface QuizResult {
  score: number;
  totalQuestions: number;
  xpEarned: number;
  passed: boolean;
  correctAnswers: number[];
}
