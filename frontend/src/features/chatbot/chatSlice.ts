import { create } from 'zustand';
import type { AIMessage } from '../../types/ai.types';

interface ChatState {
  sessions: Record<string, AIMessage[]>;
  isTyping: boolean;
  addMessage: (moduleId: string, message: AIMessage) => void;
  setTyping: (v: boolean) => void;
  clearSession: (moduleId: string) => void;
}

export const useChatSlice = create<ChatState>()((set) => ({
  sessions: {},
  isTyping: false,
  addMessage: (moduleId, message) =>
    set((state) => ({
      sessions: {
        ...state.sessions,
        [moduleId]: [...(state.sessions[moduleId] ?? []), message],
      },
    })),
  setTyping: (isTyping) => set({ isTyping }),
  clearSession: (moduleId) =>
    set((state) => {
      const sessions = { ...state.sessions };
      delete sessions[moduleId];
      return { sessions };
    }),
}));
