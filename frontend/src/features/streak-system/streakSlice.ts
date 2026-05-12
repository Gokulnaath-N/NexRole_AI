import { create } from 'zustand';

interface StreakState {
  streak: number;
  lastActivity: string | null;
  setStreak: (streak: number) => void;
  setLastActivity: (date: string) => void;
}

export const useStreakSlice = create<StreakState>()((set) => ({
  streak: 0,
  lastActivity: null,
  setStreak: (streak) => set({ streak }),
  setLastActivity: (lastActivity) => set({ lastActivity }),
}));
