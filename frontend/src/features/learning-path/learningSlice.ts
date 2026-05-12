import { create } from 'zustand';
import type { Module } from '../../types/module.types';

interface LearningState {
  currentModule: Module | null;
  completedModuleIds: string[];
  setCurrentModule: (module: Module | null) => void;
  markModuleComplete: (moduleId: string) => void;
}

export const useLearningSlice = create<LearningState>()((set) => ({
  currentModule: null,
  completedModuleIds: [],
  setCurrentModule: (currentModule) => set({ currentModule }),
  markModuleComplete: (moduleId) =>
    set((state) => ({
      completedModuleIds: [...new Set([...state.completedModuleIds, moduleId])],
    })),
}));
