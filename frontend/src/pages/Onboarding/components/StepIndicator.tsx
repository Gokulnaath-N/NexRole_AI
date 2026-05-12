import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

interface StepIndicatorProps {
  currentStep: number;
  totalSteps: number;
}

const labels = ['Goal', 'Level', 'Resume', 'Domain'];

export const StepIndicator = ({ currentStep, totalSteps }: StepIndicatorProps) => {
  // Calculate progress line width
  // 4 dots = 3 segments. Progress is based on completed segments.
  const progressPercent = ((currentStep - 1) / (totalSteps - 1)) * 100;

  return (
    <div className="w-full max-w-md mx-auto mb-16 relative">
      <div className="flex justify-between items-center mb-10">
        <div className="w-8" /> {/* Spacer */}
        <div className="text-[13px] font-medium text-text-tertiary">
          Step {Math.min(currentStep, totalSteps)} of {totalSteps}
        </div>
      </div>

      <div className="relative">
        {/* Background Line */}
        <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-border-subtle -translate-y-1/2 z-0" />
        
        {/* Active Progress Line */}
        <div 
          className="absolute top-1/2 left-0 h-[2px] bg-brand-500 -translate-y-1/2 z-0 transition-all duration-500 ease-in-out"
          style={{ width: `${progressPercent}%` }}
        />

        {/* Dots */}
        <div className="relative z-10 flex justify-between items-center">
          {Array.from({ length: totalSteps }).map((_, idx) => {
            const stepNum = idx + 1;
            const isActive = stepNum === currentStep;
            const isPast = stepNum < currentStep;

            return (
              <div key={stepNum} className="flex flex-col items-center">
                <div className="h-6 flex items-center justify-center">
                  {isPast ? (
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      className="w-5 h-5 rounded-full bg-brand-500 flex items-center justify-center border-2 border-bg-primary shadow-sm"
                    >
                      <Check className="w-3 h-3 text-white" strokeWidth={3} />
                    </motion.div>
                  ) : isActive ? (
                    <div className="relative flex items-center justify-center">
                      <div className="absolute w-7 h-7 rounded-full bg-brand-500/20 animate-ping" style={{ animationDuration: '3s' }} />
                      <div className="w-3.5 h-3.5 rounded-full bg-brand-500 border-2 border-bg-primary z-10 shadow-sm" />
                    </div>
                  ) : (
                    <div className="w-2.5 h-2.5 rounded-full bg-border-strong border-2 border-bg-primary shadow-sm" />
                  )}
                </div>
                
                <span 
                  className={`absolute mt-8 text-[11px] font-bold tracking-wide uppercase transition-colors duration-300 ${
                    isActive ? 'text-brand-600 dark:text-brand-400' : 'text-text-tertiary'
                  }`}
                >
                  {labels[idx]}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
