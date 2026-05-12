import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, PlayCircle, BookOpen, Flame, Bell } from 'lucide-react';
import { useRecentActivity, useWeeklyStreak } from '../../../hooks/useDashboard';
import { formatDistanceToNow } from 'date-fns';
import { useQuery } from '@tanstack/react-query';
import { get } from '../../../services/api.client';

const iconMap: Record<string, any> = {
  WELCOME: BookOpen,
  LEVEL_UP: CheckCircle2,
  CERT_READY: CheckCircle2,
  STREAK_RISK: Flame,
  NEW_JOB: PlayCircle,
  ACHIEVEMENT: CheckCircle2,
  SYSTEM: Bell,
};
const colorMap: Record<string, string> = {
  WELCOME: 'text-brand-500',
  LEVEL_UP: 'text-green-500',
  CERT_READY: 'text-purple-500',
  STREAK_RISK: 'text-amber-500',
  NEW_JOB: 'text-blue-500',
  ACHIEVEMENT: 'text-green-500',
  SYSTEM: 'text-text-secondary',
};

export const TwoColumnRow = () => {
  const { data: analytics, isLoading: analyticsLoading } = useWeeklyStreak();
  const { data: activities, isLoading: activityLoading } = useQuery({
    queryKey: ['recent-notifications'],
    queryFn: async () => {
      const res = await get<any>('/notifications');
      return res.data?.data?.notifications ?? [];
    },
    staleTime: 30_000,
  });

  const weeklyProgress = analytics?.weeklyProgress ?? [];
  const streak = analytics?.streakData?.currentStreak ?? 0;
  const longestStreak = analytics?.streakData?.longestStreak ?? 0;

  // Build 7-day calendar: 0=missed, 1=done, 2=today
  const today = new Date();
  const calendarDays = Array.from({ length: 7 }, (_, i) => {
    const d = new Date(today);
    d.setDate(today.getDate() - (6 - i));
    const dateStr = d.toISOString().split('T')[0];
    const isToday = i === 6;
    const hasActivity = weeklyProgress.find((w: any) => w.date === dateStr && w.count > 0);
    return { status: hasActivity ? (isToday ? 2 : 1) : 0, label: ['M', 'T', 'W', 'T', 'F', 'S', 'S'][d.getDay() === 0 ? 6 : d.getDay() - 1] };
  });

  return (
    <div className="flex flex-col lg:flex-row gap-6 w-full">
      {/* Left: Recent Activity */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
        className="w-full lg:w-[65%] bg-bg-elevated border border-border-subtle rounded-2xl p-6 shadow-sm flex flex-col">
        <h3 className="text-lg font-bold text-text-primary mb-6">Recent Activity</h3>
        {activityLoading ? (
          <div className="space-y-4">{[1,2,3].map(i => <div key={i} className="h-10 bg-bg-tertiary rounded animate-pulse" />)}</div>
        ) : !activities?.length ? (
          <div className="flex flex-col items-center justify-center py-8 text-text-tertiary">
            <Bell className="w-8 h-8 mb-2 opacity-40" />
            <p className="text-sm">No activity yet. Start learning!</p>
          </div>
        ) : (
          <div className="space-y-6">
            {activities.map((item: any, idx: number) => {
              const Icon = iconMap[item.type] ?? Bell;
              const color = colorMap[item.type] ?? 'text-text-secondary';
              return (
                <div key={item.id} className="flex items-start gap-4">
                  <div className="relative mt-0.5">
                    <div className="w-8 h-8 rounded-full bg-bg-secondary flex items-center justify-center shrink-0 border border-border-subtle z-10 relative">
                      <Icon className={`w-4 h-4 ${color}`} />
                    </div>
                    {idx !== activities.length - 1 && (
                      <div className="absolute top-8 left-1/2 -ml-px w-[2px] h-10 bg-border-subtle z-0" />
                    )}
                  </div>
                  <div className="flex-1 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div>
                      <p className="text-sm font-semibold text-text-primary mb-1">{item.title}</p>
                      <span className="inline-block px-2 py-0.5 text-[10px] font-bold rounded bg-bg-secondary text-text-secondary uppercase">
                        {item.type}
                      </span>
                    </div>
                    <span className="text-xs font-medium text-text-tertiary whitespace-nowrap">
                      {item.createdAt ? formatDistanceToNow(new Date(item.createdAt), { addSuffix: true }) : ''}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </motion.div>

      {/* Right: Streak Calendar */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
        className="w-full lg:w-[35%] bg-bg-elevated border border-border-subtle rounded-2xl p-6 shadow-sm flex flex-col">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-bold text-text-primary">This Week</h3>
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-900/30">
            <Flame className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
            <span className="text-xs font-bold text-amber-700 dark:text-amber-400">{streak} day streak</span>
          </div>
        </div>

        {analyticsLoading ? (
          <div className="flex justify-between mb-6">{[1,2,3,4,5,6,7].map(i => <div key={i} className="w-8 h-8 rounded-md bg-bg-tertiary animate-pulse" />)}</div>
        ) : (
          <div className="flex justify-between items-end mb-6">
            {calendarDays.map(({ status, label }, i) => (
              <div key={i} className="flex flex-col items-center gap-2">
                <div className={`w-8 h-8 rounded-md flex items-center justify-center transition-colors ${
                  status === 1 ? 'bg-brand-500 text-white shadow-sm' :
                  status === 2 ? 'bg-brand-500 text-white shadow-sm ring-2 ring-brand-300 ring-offset-2 ring-offset-bg-elevated dark:ring-offset-[#161B27]' :
                  'bg-bg-tertiary text-text-tertiary'
                }`}>
                  {(status === 1 || status === 2) && <CheckCircle2 className="w-4 h-4" />}
                </div>
                <span className={`text-xs font-bold ${status === 2 ? 'text-brand-600 dark:text-brand-400' : 'text-text-tertiary'}`}>
                  {label}
                </span>
              </div>
            ))}
          </div>
        )}

        <div className="bg-bg-secondary rounded-xl p-4 mt-auto">
          {streak > 0 ? (
            <>
              <p className="text-sm font-semibold text-text-primary mb-1">{streak >= 7 ? 'One week strong! 💪' : `${streak} day${streak > 1 ? 's' : ''} in a row! 🔥`}</p>
              <p className="text-xs text-text-secondary">Longest streak: {longestStreak} days. Keep going!</p>
            </>
          ) : (
            <>
              <p className="text-sm font-semibold text-text-primary mb-1">Start your streak today! 🚀</p>
              <p className="text-xs text-text-secondary">Complete a module to begin your learning streak.</p>
            </>
          )}
        </div>
      </motion.div>
    </div>
  );
};
