import { create } from 'zustand';

interface XPState {
  xp: number;
  level: string;
  streak: number;
  setXP: (xp: number) => void;
  setLevel: (level: string) => void;
  setStreak: (streak: number) => void;
  addXP: (amount: number) => void;
}

export const useXPSlice = create<XPState>()((set) => ({
  xp: 0,
  level: 'Beginner',
  streak: 0,
  setXP: (xp) => set({ xp }),
  setLevel: (level) => set({ level }),
  setStreak: (streak) => set({ streak }),
  addXP: (amount) => set((state) => ({ xp: state.xp + amount })),
}));
