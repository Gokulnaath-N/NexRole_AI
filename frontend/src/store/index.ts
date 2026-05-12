import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface User {
  id: string;
  uid: string;
  name: string;
  email: string;
  image?: string;
  photoURL?: string;
  role: string;
  onboarded: boolean;
  onboardingComplete?: boolean;
  xp?: number;
  level?: string;
  streak?: number;
  targetRole?: string;
  targetCompany?: string;
  currentLevel?: string;
  experienceLevel?: string;
  weeklyHours?: number;
  skills?: string[];
  enrolledDomains?: any[];
}

interface AuthState {
  user: User | null;
  loading: boolean;
  setUser: (user: User | null) => void;
  clearUser: () => void;
}

export const useAuthStore = create<AuthState>()((set) => ({
  user: null,
  loading: true,
  setUser: (user) => set({ user, loading: false }),
  clearUser: () => set({ user: null, loading: false }),
}));

interface UIState {
  sidebarCollapsed: boolean;
  theme: 'light' | 'dark';
  toggleSidebar: () => void;
  setTheme: (theme: 'light' | 'dark') => void;
}

export const useUIStore = create<UIState>()(
  persist(
    (set) => ({
      sidebarCollapsed: false,
      theme: 'dark',
      toggleSidebar: () => set((state) => ({ sidebarCollapsed: !state.sidebarCollapsed })),
      setTheme: (theme) => set({ theme }),
    }),
    {
      name: 'ui-storage',
    }
  )
);

interface NotificationState {
  unreadCount: number;
  setUnreadCount: (count: number) => void;
}

export const useNotificationStore = create<NotificationState>()((set) => ({
  unreadCount: 0,
  setUnreadCount: (count) => set({ unreadCount: count }),
}));
