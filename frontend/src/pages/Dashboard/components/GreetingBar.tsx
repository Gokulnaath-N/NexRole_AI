import React from 'react';
import { useAuthStore } from '../../../store';
import { motion } from 'framer-motion';
import { useDashboardStats } from '../../../hooks/useDashboard';

export const GreetingBar = () => {
  const { user } = useAuthStore();
  const { data } = useDashboardStats();

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good morning';
    if (hour < 18) return 'Good afternoon';
    return 'Good evening';
  };

  const firstName = user?.name?.split(' ')[0] || 'Learner';
  const xp = data?.xp ?? 0;
  const streak = data?.streak ?? 0;
  const levelName = data?.levelName ?? 'Beginner';
  const xpForCurrentLevel = (data as any)?.xpForCurrentLevel ?? 0;
  const xpForNextLevel = (data as any)?.xpForNextLevel ?? 100;
  const xpProgress = xpForNextLevel > 0 ? Math.min(((xp - xpForCurrentLevel) / (xpForNextLevel - xpForCurrentLevel)) * 100, 100) : 0;

  return (
    <div className="w-full flex flex-col md:flex-row md:items-center justify-between gap-6">
      <div>
        <motion.h1 initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}
          className="text-3xl font-display font-bold text-text-primary mb-2">
          {getGreeting()}, {firstName} 👋
        </motion.h1>
        <motion.p initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }}
          className="text-base text-text-secondary max-w-2xl">
          {streak > 0
            ? <>You're on a <strong className="text-amber-500 font-bold">{streak}-day streak</strong>. Complete today's lesson to keep it going.</>
            : 'Start learning today to build your streak!'}
        </motion.p>
      </div>

      <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }}
        className="shrink-0 bg-bg-elevated border border-border-subtle rounded-xl p-4 shadow-sm flex items-center gap-4 min-w-[240px]">
        <div className="w-12 h-12 rounded-full border-4 border-brand-100 dark:border-brand-900/30 flex items-center justify-center bg-brand-500 text-white font-bold text-lg">
          ⚡
        </div>
        <div className="flex-1">
          <div className="flex justify-between items-end mb-1">
            <span className="font-bold text-lg text-brand-600 dark:text-brand-400 leading-none">{xp} XP</span>
            <span className="text-xs font-semibold text-text-secondary">{levelName}</span>
          </div>
          <div className="h-1.5 w-full bg-bg-tertiary rounded-full overflow-hidden mt-2 mb-1">
            <motion.div initial={{ width: 0 }} animate={{ width: `${xpProgress}%` }} transition={{ duration: 1 }}
              className="h-full bg-gradient-to-r from-brand-400 to-purple-500 rounded-full" />
          </div>
          <div className="text-[10px] text-text-tertiary text-right">
            {data?.xpToNextLevel ?? '...'} XP to Next Level
          </div>
        </div>
      </motion.div>
    </div>
  );
};
