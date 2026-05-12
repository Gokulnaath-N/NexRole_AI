import React from 'react';
import { motion } from 'framer-motion';
import { Flame, Star, BookOpen, Target } from 'lucide-react';
import { useCountUp } from '../../../hooks/useCountUp';
import { useDashboardStats } from '../../../hooks/useDashboard';

const StatCard = ({ icon: Icon, label, value, subtext, color, glowClass, suffix = '', delay }: any) => {
  const displayValue = useCountUp(typeof value === 'number' ? value : 0);
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      className={`relative overflow-hidden bg-bg-elevated border border-border-subtle rounded-2xl p-5 shadow-sm group hover:shadow-md transition-shadow dark:${glowClass} dark:border-${color.split('-')[1]}-500/20`}
    >
      <div className="flex items-center justify-between mb-4">
        <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${color.replace('text', 'bg').replace('500', '100')} dark:${color.replace('text', 'bg').replace('500', '900/30')} ${color}`}>
          <Icon className={`w-5 h-5 ${label === 'Day Streak' ? 'animate-[pulse_2s_ease-in-out_infinite]' : ''}`} />
        </div>
        <div className="flex items-center gap-1 text-[11px] font-bold text-green-600 bg-green-50 px-2 py-1 rounded-md dark:bg-green-900/20 dark:text-green-400">
          <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7"/><path d="M7 7h10v10"/></svg>
          Live
        </div>
      </div>
      <div className="mb-1">
        <span className={`text-3xl font-mono font-bold ${color}`}>{displayValue}{suffix}</span>
      </div>
      <h3 className="text-sm font-semibold text-text-primary mb-3">{label}</h3>
      <p className="text-xs text-text-secondary font-medium">{subtext}</p>
    </motion.div>
  );
};

const SkeletonCard = ({ delay }: { delay: number }) => (
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay }}
    className="bg-bg-elevated border border-border-subtle rounded-2xl p-5 animate-pulse">
    <div className="h-10 w-10 rounded-xl bg-bg-tertiary mb-4" />
    <div className="h-8 w-16 bg-bg-tertiary rounded mb-2" />
    <div className="h-4 w-24 bg-bg-tertiary rounded" />
  </motion.div>
);

export const StatsRow = () => {
  const { data, isLoading } = useDashboardStats();

  if (isLoading) {
    return (
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[0.1, 0.2, 0.3, 0.4].map((d) => <SkeletonCard key={d} delay={d} />)}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      <StatCard icon={Flame} label="Day Streak" value={data?.streak ?? 0} color="text-amber-500"
        glowClass="hover:shadow-glow-amber" subtext={`Best: ${data?.longestStreak ?? 0} days`} delay={0.1} />
      <StatCard icon={Star} label="Total XP" value={data?.xp ?? 0} color="text-brand-500"
        glowClass="hover:shadow-glow-blue" subtext={`${data?.xpToNextLevel ?? 0} XP to next level`} delay={0.2} />
      <StatCard icon={BookOpen} label="Modules Completed" value={data?.modulesCompleted ?? 0} color="text-green-500"
        glowClass="hover:shadow-glow-green" subtext={`Across ${data?.enrolledDomains ?? 0} domains`} delay={0.3} />
      <StatCard icon={Target} label="Level" value={data?.level ?? 1} color="text-purple-500"
        glowClass="hover:shadow-glow-purple" subtext={data?.levelName ?? 'Beginner'} delay={0.4} />
    </div>
  );
};
