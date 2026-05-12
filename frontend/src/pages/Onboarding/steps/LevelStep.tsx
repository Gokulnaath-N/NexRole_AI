import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sprout, Zap, Flame, Lightbulb } from 'lucide-react';

const LEVELS = [
  {
    id: 'beginner',
    title: 'New to AI/ML — I know programming basics',
    desc: "Perfect if: You know Python but haven't touched ML yet",
    icon: Sprout,
    color: 'text-green-500',
    bg: 'bg-green-100 dark:bg-green-900/30',
    border: 'border-green-500',
    accent: 'bg-green-500'
  },
  {
    id: 'intermediate',
    title: "ML Practitioner — I've built ML models before",
    desc: "Perfect if: You know scikit-learn, pandas, basic neural nets",
    icon: Zap,
    color: 'text-brand-500',
    bg: 'bg-brand-100 dark:bg-brand-900/30',
    border: 'border-brand-500',
    accent: 'bg-brand-500'
  },
  {
    id: 'advanced',
    title: "AI Engineer — I work with LLMs and AI systems",
    desc: "Perfect if: You've deployed ML to production",
    icon: Flame,
    color: 'text-purple-500',
    bg: 'bg-purple-100 dark:bg-purple-900/30',
    border: 'border-purple-500',
    accent: 'bg-purple-500'
  }
];

interface LevelStepProps {
  data: any;
  updateData: (data: any) => void;
  onNext: () => void;
  onBack: () => void;
}

export const LevelStep = ({ data, updateData, onNext, onBack }: LevelStepProps) => {
  const hours = data.hoursPerWeek || 8;
  const level = data.experienceLevel || '';

  const calculateDays = () => {
    let base = 90;
    if (level === 'intermediate') base = 60;
    if (level === 'advanced') base = 30;
    
    // Adjust based on hours (assuming 8 hours is baseline)
    const factor = 8 / hours;
    return Math.round(base * factor);
  };

  const isValid = level !== '';

  return (
    <div className="w-full">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-display font-bold text-text-primary mb-3">
          Where are you right now?
        </h1>
      </div>

      <div className="space-y-10">
        {/* Level Cards */}
        <div className="space-y-4">
          {LEVELS.map((lvl) => {
            const isSelected = level === lvl.id;
            const Icon = lvl.icon;

            return (
              <motion.div
                key={lvl.id}
                whileTap={{ scale: 0.99 }}
                onClick={() => updateData({ experienceLevel: lvl.id })}
                className={`relative overflow-hidden rounded-xl border-2 cursor-pointer transition-all duration-200 flex items-center p-4 h-[84px] ${
                  isSelected 
                    ? `border-border-strong bg-bg-secondary shadow-md` 
                    : 'border-border-default bg-bg-primary hover:border-border-strong'
                }`}
              >
                {/* Left accent bar */}
                {isSelected && (
                  <motion.div 
                    layoutId="accentBar"
                    className={`absolute left-0 top-0 bottom-0 w-1.5 ${lvl.accent}`} 
                  />
                )}

                <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ml-2 mr-4 ${lvl.bg} ${lvl.color}`}>
                  <Icon className="w-6 h-6" />
                </div>

                <div className="flex-1">
                  <h4 className="font-bold text-sm text-text-primary mb-0.5">{lvl.title}</h4>
                  <p className="text-xs text-text-secondary">{lvl.desc}</p>
                </div>

                <div className="shrink-0 ml-4 mr-2">
                  <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors ${
                    isSelected ? 'border-brand-500 bg-brand-500' : 'border-border-strong'
                  }`}>
                    {isSelected && <div className="w-2 h-2 bg-white rounded-full" />}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Hours Slider */}
        <div className="bg-bg-secondary rounded-xl p-6 border border-border-subtle">
          <div className="flex justify-between items-end mb-6">
            <label className="block text-sm font-semibold text-text-primary">
              How many hours per week can you dedicate?
            </label>
            <span className="text-brand-600 dark:text-brand-400 font-bold">
              {hours} hours/week
            </span>
          </div>

          <div className="relative pt-2 pb-6 px-2">
            <input
              type="range"
              min="1"
              max="20"
              step="1"
              value={hours}
              onChange={(e) => updateData({ hoursPerWeek: parseInt(e.target.value) })}
              className="w-full h-2 bg-border-default rounded-full appearance-none cursor-pointer"
              style={{
                background: `linear-gradient(to right, var(--blue-500) 0%, var(--blue-500) ${((hours-1)/19)*100}%, var(--border-default) ${((hours-1)/19)*100}%, var(--border-default) 100%)`
              }}
            />
            {/* Custom slider thumb styles normally done in global CSS for cross-browser, but inline tailwind works for webkit mostly */}
            <style dangerouslySetInnerHTML={{__html: `
              input[type=range]::-webkit-slider-thumb {
                appearance: none;
                width: 24px;
                height: 24px;
                background: white;
                border: 3px solid var(--blue-500);
                border-radius: 50%;
                box-shadow: 0 2px 6px rgba(0,0,0,0.15);
                cursor: pointer;
                transition: transform 0.1s;
              }
              input[type=range]::-webkit-slider-thumb:hover {
                transform: scale(1.15);
              }
            `}} />

            <div className="absolute left-0 right-0 bottom-0 flex justify-between text-[11px] font-medium text-text-tertiary px-2">
              <span>1hr</span>
              <span>5hrs</span>
              <span>10hrs</span>
              <span>15hrs</span>
              <span>20hrs</span>
            </div>
          </div>

          {/* Dynamic Preview Card */}
          <AnimatePresence>
            {level && (
              <motion.div
                initial={{ opacity: 0, height: 0, marginTop: 0 }}
                animate={{ opacity: 1, height: 'auto', marginTop: 16 }}
                className="bg-brand-50 dark:bg-brand-900/10 border border-brand-200 dark:border-brand-900/30 rounded-lg p-3 flex items-start gap-3"
              >
                <Lightbulb className="w-5 h-5 text-brand-500 shrink-0 mt-0.5" />
                <p className="text-sm text-text-secondary leading-snug">
                  At <strong>{hours} hours/week</strong> as a {level.charAt(0).toUpperCase() + level.slice(1)}, 
                  expect to be job-ready in <strong className="text-text-primary">~{calculateDays()} days</strong>.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="flex gap-4 pt-4">
          <button
            onClick={onBack}
            className="px-6 h-12 flex items-center justify-center rounded-lg font-semibold text-text-secondary bg-bg-secondary hover:bg-border-subtle transition-colors border border-border-default"
          >
            Back
          </button>
          <button
            onClick={onNext}
            disabled={!isValid}
            className={`flex-1 h-12 flex items-center justify-center rounded-lg font-bold text-white transition-all duration-300 ${
              isValid 
                ? 'bg-brand-600 hover:bg-brand-700 shadow-md hover:shadow-lg' 
                : 'bg-brand-300 dark:bg-brand-800/50 cursor-not-allowed opacity-70'
            }`}
          >
            Next Step →
          </button>
        </div>
      </div>
    </div>
  );
};
