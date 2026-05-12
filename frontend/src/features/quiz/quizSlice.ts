import { create } from 'zustand';
import type { QuizQuestion } from '../../types/quiz.types';

interface QuizState {
  questions: QuizQuestion[];
  currentIndex: number;
  answers: number[];
  isSubmitted: boolean;
  setQuestions: (questions: QuizQuestion[]) => void;
  setAnswer: (index: number, answer: number) => void;
  nextQuestion: () => void;
  submit: () => void;
  reset: () => void;
}

export const useQuizSlice = create<QuizState>()((set) => ({
  questions: [],
  currentIndex: 0,
  answers: [],
  isSubmitted: false,
  setQuestions: (questions) => set({ questions, answers: new Array(questions.length).fill(-1) }),
  setAnswer: (index, answer) =>
    set((state) => {
      const answers = [...state.answers];
      answers[index] = answer;
      return { answers };
    }),
  nextQuestion: () => set((state) => ({ currentIndex: state.currentIndex + 1 })),
  submit: () => set({ isSubmitted: true }),
  reset: () => set({ questions: [], currentIndex: 0, answers: [], isSubmitted: false }),
}));
