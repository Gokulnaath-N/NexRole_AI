import { useQuery } from '@tanstack/react-query';
import { get } from '../services/api.client';
import { getLevelFromXP } from '../utils/getLevelFromXP';

export interface DashboardStats {
  xp: number;
  streak: number;
  longestStreak: number;
  modulesCompleted: number;
  level: number;
  levelName: string;
  xpToNextLevel: number;
  enrolledDomains: number;
}

export interface ContinueLearningData {
  domainName: string;
  domainSlug: string;
  moduleTitle: string;
  moduleId: string;
  percentComplete: number;
  estimatedTimeRemaining: number;
  xpReward: number;
  moduleOrder: number;
  totalModules: number;
}

export interface ActivityItem {
  id: string;
  type: string;
  title: string;
  domain: string;
  time: string;
}

export interface WeeklyDay {
  date: string;
  count: number;
}

export const useDashboardStats = () =>
  useQuery({
    queryKey: ['dashboard-stats'],
    queryFn: async () => {
      const [meRes, progressRes] = await Promise.all([
        get<any>('/auth/me'),
        get<any>('/progress/all'),
      ]);
      const user = meRes.data?.data;
      const allProgress: any[] = progressRes.data?.data ?? [];

      const totalModules = allProgress.reduce((s: number, p: any) => s + (p.completedModules ?? 0), 0);

      const xp = user?.xp ?? 0;
      const levelInfo = getLevelFromXP(xp);

      return {
        xp,
        streak: user?.streak ?? 0,
        longestStreak: user?.longestStreak ?? 0,
        modulesCompleted: totalModules,
        level: levelInfo.level,
        levelName: levelInfo.name,
        xpToNextLevel: levelInfo.nextLevelXP - xp,
        xpForCurrentLevel: levelInfo.minXP,
        xpForNextLevel: levelInfo.nextLevelXP,
        enrolledDomains: allProgress.length,
      } as DashboardStats & { xpForCurrentLevel: number; xpForNextLevel: number };
    },
    staleTime: 30_000,
  });

export const useContinueLearning = () =>
  useQuery({
    queryKey: ['continue-learning'],
    queryFn: async () => {
      const res = await get<any>('/progress/all');
      const allProgress: any[] = res.data?.data ?? [];
      if (!allProgress.length) return null;

      // Find the first domain with incomplete modules
      const active = allProgress.find((p: any) => p.progressPercent < 100 && p.nextModule);
      if (!active) return null;

      return {
        domainName: active.domain.name,
        domainSlug: active.domain.slug,
        moduleTitle: active.nextModule.title,
        moduleId: active.nextModule.id,
        percentComplete: active.progressPercent,
        estimatedTimeRemaining: active.nextModule.durationMinutes ?? 15,
        xpReward: active.nextModule.xpReward ?? 50,
        moduleOrder: active.nextModule.order ?? 1,
        totalModules: active.totalModules,
      } as ContinueLearningData;
    },
    staleTime: 30_000,
  });

export const useRecentActivity = () =>
  useQuery({
    queryKey: ['recent-activity'],
    queryFn: async () => {
      const res = await get<any>('/notifications');
      const notifications: any[] = res.data?.data?.notifications ?? [];
      return notifications.slice(0, 5).map((n: any) => ({
        id: n.id,
        type: n.type,
        title: n.title,
        domain: n.type === 'WELCOME' ? 'System' : 'Platform',
        time: new Date(n.createdAt).toLocaleDateString(),
        createdAt: n.createdAt,
      })) as ActivityItem[];
    },
    staleTime: 30_000,
  });

export const useWeeklyStreak = () =>
  useQuery({
    queryKey: ['weekly-streak'],
    queryFn: async () => {
      const res = await get<any>('/progress/analytics');
      return res.data?.data as {
        streakData: { currentStreak: number; longestStreak: number };
        weeklyProgress: WeeklyDay[];
      };
    },
    staleTime: 30_000,
  });
