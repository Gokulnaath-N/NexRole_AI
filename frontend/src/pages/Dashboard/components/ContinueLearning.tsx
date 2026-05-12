import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Play, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useContinueLearning } from '../../../hooks/useDashboard';

export const ContinueLearning = () => {
  const navigate = useNavigate();
  const { data, isLoading } = useContinueLearning();

  if (isLoading) {
    return (
      <div className="w-full bg-bg-elevated border border-border-subtle rounded-2xl p-8 animate-pulse">
        <div className="h-4 w-32 bg-bg-tertiary rounded mb-4" />
        <div className="h-6 w-64 bg-bg-tertiary rounded mb-6" />
        <div className="h-2.5 w-full bg-bg-tertiary rounded-full" />
      </div>
    );
  }

  if (!data) {
    return (
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
        className="w-full bg-bg-elevated border border-border-subtle rounded-2xl p-10 flex flex-col items-center text-center shadow-sm">
        <div className="w-16 h-16 bg-brand-50 dark:bg-brand-900/20 rounded-2xl flex items-center justify-center mb-6 border border-brand-100 dark:border-brand-500/20">
          <Sparkles className="w-8 h-8 text-brand-500" />
        </div>
        <h2 className="text-2xl font-bold text-text-primary mb-2">Start your AI learning journey</h2>
        <p className="text-text-secondary max-w-md mb-8">
          Choose a domain and we'll build your personalized roadmap in seconds based on your target role.
        </p>
        <button onClick={() => navigate('/domains')}
          className="px-8 h-12 rounded-xl bg-brand-600 text-white font-bold hover:bg-brand-700 shadow-md transition-colors">
          Browse Domains →
        </button>
      </motion.div>
    );
  }

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
      className="w-full relative overflow-hidden bg-bg-elevated rounded-2xl border border-border-subtle shadow-sm dark:shadow-[0_0_30px_rgba(124,58,237,0.05)]">
      <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-purple-500" />
      <div className="p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pl-8 md:pl-10">
        <div className="flex-1 w-full">
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400 text-xs font-bold rounded-full border border-purple-200 dark:border-purple-800 uppercase tracking-wide">
              {data.domainName}
            </span>
            <span className="text-sm font-medium text-text-tertiary">
              Module {data.moduleOrder} of {data.totalModules}
            </span>
          </div>
          <h2 className="text-xl md:text-2xl font-bold text-text-primary mb-6 leading-tight">
            {data.moduleTitle}
          </h2>
          <div className="w-full max-w-lg">
            <div className="flex justify-between text-sm mb-2">
              <span className="font-semibold text-purple-600 dark:text-purple-400">{data.percentComplete}% complete</span>
              <span className="text-text-secondary font-medium">Est. {Math.round(data.estimatedTimeRemaining / 60 * 10) / 10} hrs remaining</span>
            </div>
            <div className="h-2.5 w-full bg-bg-tertiary rounded-full overflow-hidden">
              <motion.div initial={{ width: 0 }} animate={{ width: `${data.percentComplete}%` }}
                transition={{ duration: 1, ease: 'easeOut' }}
                className="h-full bg-gradient-to-r from-purple-400 to-purple-600 rounded-full" />
            </div>
          </div>
        </div>
        <div className="w-full md:w-auto shrink-0 flex flex-col items-start md:items-end gap-4">
          <button onClick={() => navigate(`/learn/${data.moduleId}`)}
            className="w-full md:w-auto px-8 h-14 rounded-xl bg-brand-600 text-white font-bold hover:bg-brand-700 shadow-md hover:shadow-lg transition-all group flex items-center justify-center gap-3">
            <Play className="w-5 h-5 fill-current" />
            Continue Learning
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </button>
          <div className="flex items-center gap-4 w-full md:justify-end">
            <div className="flex items-center gap-1.5 text-xs font-semibold text-text-secondary bg-bg-secondary px-3 py-1.5 rounded-lg border border-border-subtle">
              <Clock className="w-3.5 h-3.5" />
              Est. {data.estimatedTimeRemaining} min
            </div>
            <span className="text-xs font-bold text-amber-500">+{data.xpReward} XP on completion</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
