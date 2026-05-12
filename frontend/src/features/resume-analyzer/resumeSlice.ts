import { create } from 'zustand';

interface ResumeState {
  skills: string[];
  gaps: string[];
  score: number | null;
  isAnalyzing: boolean;
  setResult: (result: { skills: string[]; gaps: string[]; score: number }) => void;
  setAnalyzing: (v: boolean) => void;
  reset: () => void;
}

export const useResumeSlice = create<ResumeState>()((set) => ({
  skills: [],
  gaps: [],
  score: null,
  isAnalyzing: false,
  setResult: ({ skills, gaps, score }) => set({ skills, gaps, score }),
  setAnalyzing: (isAnalyzing) => set({ isAnalyzing }),
  reset: () => set({ skills: [], gaps: [], score: null }),
}));
