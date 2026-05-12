import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Play } from 'lucide-react';

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen pt-32 pb-20 flex items-center overflow-hidden">
      {/* Background Treatments */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="hidden dark:block absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-500/10 blur-[120px] rounded-full" />
        <div className="hidden dark:block absolute top-1/2 right-1/4 translate-x-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/10 blur-[120px] rounded-full" />
        <div className="dark:hidden absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-50/50 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9InJnYmEoMTQ4LCAxNjMsIDE4NCwgMC4xKSIvPjwvc3ZnPg==')] opacity-[0.4] dark:opacity-[0.1]" />
        
        {/* Particles */}
        <div className="hidden dark:block absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-0.5 h-0.5 bg-white/15 rounded-full animate-float"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`
              }}
            />
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10 flex flex-col lg:flex-row items-center gap-16">
        
        {/* Left Column */}
        <div className="flex-1 w-full pt-10 lg:pt-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 dark:bg-brand-500/10 border border-transparent dark:border-brand-500/30 dark:shadow-glow-blue mb-8"
          >
            <span className="text-sm font-medium text-brand-600 dark:text-brand-400">
              ⚡ Learn → Build → Get Hired
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
            className="font-display font-extrabold text-[56px] leading-[1.1] md:text-[72px] tracking-tight mb-6"
          >
            <span className="block text-text-primary dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-br dark:from-brand-400 dark:to-purple-500">
              Learn AI.
            </span>
            <span className="block text-text-primary dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-br dark:from-brand-400 dark:to-purple-500">
              Get Hired.
            </span>
            <span className="block text-text-primary">
              Build the Future.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: 'easeOut' }}
            className="text-lg md:text-xl text-text-secondary max-w-[440px] leading-relaxed mb-10"
          >
            Company-specific, role-targeted AI learning paths.
            Built for the job market of 2025–2035.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3, ease: 'easeOut' }}
            className="flex flex-col sm:flex-row items-center gap-4 mb-12"
          >
            <Link
              to="/auth/register"
              className="relative overflow-hidden group w-full sm:w-auto flex items-center justify-center h-[52px] px-8 rounded-lg bg-brand-600 text-white font-medium transition-all hover:bg-brand-700 hover:scale-[1.02] hover:shadow-lg dark:hover:shadow-glow-blue"
            >
              <span className="relative z-10 flex items-center gap-2">
                Start Learning Free
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </span>
              <div className="absolute inset-0 -translate-x-[150%] bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:animate-shimmer pointer-events-none" />
            </Link>
            
            <button className="w-full sm:w-auto flex items-center justify-center h-[52px] px-8 rounded-lg border-2 border-border-subtle hover:border-brand-600 text-text-primary hover:text-brand-600 font-medium transition-all group">
              <Play className="w-4 h-4 mr-2 fill-current" />
              Watch Demo
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-4"
          >
            <div className="flex -space-x-3">
              {[
                { bg: 'bg-red-500', init: 'G' },
                { bg: 'bg-blue-500', init: 'F' },
                { bg: 'bg-green-500', init: 'P' },
                { bg: 'bg-purple-500', init: 'R' },
                { bg: 'bg-amber-500', init: 'M' },
              ].map((avatar, i) => (
                <div key={i} className={`w-10 h-10 rounded-full border-2 border-bg-primary flex items-center justify-center text-white text-xs font-bold ${avatar.bg}`}>
                  {avatar.init}
                </div>
              ))}
            </div>
            <div>
              <div className="flex items-center gap-1 mb-0.5">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-amber-500 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-sm text-text-secondary">
                <span className="font-medium text-text-primary">2,400+ learners</span> trusted by engineers at Google, Flipkart, PhonePe
              </p>
            </div>
          </motion.div>
        </div>

        {/* Right Column (Floating UI Preview) */}
        <div className="flex-1 w-full hidden md:block">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="relative max-w-[520px] mx-auto animate-float"
          >
            {/* Main Domain Card Preview */}
            <div className="relative z-20 bg-bg-elevated rounded-2xl p-6 shadow-2xl border border-border-subtle dark:shadow-glow-purple dark:border-purple-500/30">
              <div className="w-full h-24 rounded-xl bg-gradient-to-r from-purple-500/20 to-brand-500/20 mb-6 flex items-center justify-center overflow-hidden relative">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9InJnYmEoMTQ4LCAxNjMsIDE4NCwgMC4xKSIvPjwvc3ZnPg==')] opacity-20" />
                <span className="text-4xl">⚡</span>
              </div>
              <div className="flex justify-between items-start mb-4">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400">
                      HOT
                    </span>
                    <span className="text-xs text-text-tertiary font-medium">98% Job Demand</span>
                  </div>
                  <h3 className="text-xl font-bold">Generative AI Engineering</h3>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-text-secondary font-medium">Progress</span>
                  <span className="text-brand-600 dark:text-brand-400 font-bold">45%</span>
                </div>
                <div className="h-2 w-full bg-bg-tertiary rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-brand-500 to-purple-500 w-[45%] rounded-full" />
                </div>
              </div>
            </div>

            {/* Sub cards */}
            <div className="flex gap-4 mt-4 relative z-10">
              <div className="flex-1 bg-bg-elevated rounded-xl p-4 shadow-lg border border-border-subtle dark:shadow-glow-amber dark:border-amber-500/20 translate-y-[-20px] ml-4">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xl">🔥</span>
                  <span className="font-bold text-sm">7 Day Streak</span>
                </div>
                <div className="flex gap-1">
                  {[...Array(7)].map((_, i) => (
                    <div key={i} className={`h-6 flex-1 rounded-sm ${i < 4 ? 'bg-amber-500' : 'bg-bg-tertiary'}`} />
                  ))}
                </div>
              </div>

              <div className="flex-1 bg-bg-elevated rounded-xl p-4 shadow-lg border border-border-subtle dark:shadow-glow-blue dark:border-brand-500/20 translate-y-[-10px] mr-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xl">✨</span>
                  <span className="font-bold text-sm">AI Tutor</span>
                </div>
                <div className="bg-bg-tertiary rounded-md p-2 text-xs text-text-tertiary italic">
                  Ask anything about the lesson...
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
