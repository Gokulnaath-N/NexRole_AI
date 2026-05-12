import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Calendar, Target, BookOpen } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface ReadyStepProps {
  data: any;
  onSubmit: () => void;
  isSubmitting: boolean;
}

export const ReadyStep = ({ data, onSubmit, isSubmitting }: ReadyStepProps) => {
  const navigate = useNavigate();

  useEffect(() => {
    // Fire confetti on mount
    const duration = 3000;
    const end = Date.now() + duration;

    const frame = () => {
      confetti({
        particleCount: 5,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ['#3B82F6', '#8B5CF6', '#F59E0B']
      });
      confetti({
        particleCount: 5,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ['#3B82F6', '#8B5CF6', '#F59E0B']
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    };
    frame();
  }, []);

  const handleFinish = () => {
    onSubmit();
  };

  return (
    <div className="w-full flex flex-col items-center text-center">
      
      {/* Animated Checkmark SVG */}
      <div className="mb-8 relative flex justify-center items-center w-24 h-24">
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 52 52"
          className="w-24 h-24 absolute"
        >
          <motion.circle
            cx="26" cy="26" r="25"
            fill="none"
            stroke="#10B981" // green-500
            strokeWidth="2"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          />
          <motion.path
            fill="none"
            stroke="#10B981"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M14.1 27.2l7.1 7.2 16.7-16.8"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.4, delay: 0.6, ease: "easeOut" }}
          />
        </motion.svg>
        {/* Fill color expansion */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.3, delay: 1, type: "spring" }}
          className="w-[50px] h-[50px] bg-green-500 rounded-full flex items-center justify-center z-10"
        >
          <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
          </svg>
        </motion.div>
      </div>

      <motion.h1 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
        className="text-3xl md:text-4xl font-display font-bold text-text-primary mb-8"
      >
        Your AI roadmap is ready!
      </motion.h1>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.4 }}
        className="w-full max-w-sm bg-bg-secondary border border-border-default rounded-2xl p-6 text-left mb-10 shadow-sm"
      >
        <ul className="space-y-4">
          <li className="flex items-start gap-3">
            <Calendar className="w-5 h-5 text-brand-500 shrink-0" />
            <span className="text-sm font-medium text-text-primary">
              90-day personalized roadmap
            </span>
          </li>
          <li className="flex items-start gap-3">
            <Target className="w-5 h-5 text-purple-500 shrink-0" />
            <span className="text-sm font-medium text-text-primary">
              Tailored for {data.targetRole || 'AI Engineer'} at {data.companyType === 'startup' ? 'Startups' : 'Product Companies'}
            </span>
          </li>
          <li className="flex items-start gap-3">
            <BookOpen className="w-5 h-5 text-amber-500 shrink-0" />
            <span className="text-sm font-medium text-text-primary">
              5 modules · Starting from {data.experienceLevel ? data.experienceLevel.charAt(0).toUpperCase() + data.experienceLevel.slice(1) : 'Beginner'} level
            </span>
          </li>
        </ul>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.6 }}
        className="w-full max-w-sm"
      >
        <button
          onClick={handleFinish}
          disabled={isSubmitting}
          className="w-full h-14 flex items-center justify-center rounded-xl font-bold text-lg text-white bg-brand-600 hover:bg-brand-700 shadow-lg hover:shadow-brand-500/25 transition-all disabled:opacity-70 group"
        >
          {isSubmitting ? 'Saving...' : 'Go to Dashboard'}
          {!isSubmitting && <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>}
        </button>
      </motion.div>
    </div>
  );
};
