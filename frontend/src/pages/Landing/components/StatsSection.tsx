import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const useCountUp = (end: number, duration: number = 2000, prefix: string = '', suffix: string = '') => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;
    
    let startTime: number | null = null;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      // Easing function: easeOutQuart
      const easeProgress = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeProgress * end));
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(end); // Ensure we end exactly on the target number
      }
    };
    
    requestAnimationFrame(animate);
  }, [end, duration, isInView]);

  return { count, ref, formattedValue: `${prefix}${count.toLocaleString()}${suffix}` };
};

const StatItem = ({ end, label, prefix = '', suffix = '' }: { end: number, label: string, prefix?: string, suffix?: string }) => {
  const { ref, formattedValue } = useCountUp(end, 2500, prefix, suffix);
  
  return (
    <div ref={ref} className="flex flex-col items-center text-center">
      <div className="text-4xl md:text-5xl font-display font-bold text-white mb-2">
        {formattedValue}
      </div>
      <div className="text-sm font-medium text-blue-100/80 uppercase tracking-wider">
        {label}
      </div>
    </div>
  );
};

export const StatsSection = () => {
  return (
    <section className="py-20 relative overflow-hidden bg-brand-900 dark:bg-[#060810]">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-to-r from-brand-900 via-brand-800 to-brand-900 dark:from-transparent dark:via-brand-900/20 dark:to-transparent" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9InJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNSkiLz48L3N2Zz4=')] opacity-30" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-6 divide-x-0 md:divide-x divide-white/10">
          <StatItem end={2400} suffix="+" label="Active Learners" />
          <StatItem end={8} label="AI Domains" />
          <StatItem end={94} suffix="%" label="Job Match Rate" />
          <StatItem end={24} prefix="₹" suffix="L" label="Avg Salary Gain" />
        </div>
      </div>
    </section>
  );
};
