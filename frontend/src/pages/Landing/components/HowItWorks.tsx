import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Target, Sparkles, Trophy } from 'lucide-react';

const steps = [
  {
    id: 1,
    icon: Target,
    title: 'Set Your Target',
    desc: "Tell us your target company type and role. Whether it's Google, a startup, or freelance — we build a path for that specific goal.",
    color: 'text-blue-500',
    bg: 'bg-blue-50 dark:bg-blue-900/20',
    border: 'border-blue-200 dark:border-blue-800'
  },
  {
    id: 2,
    icon: Sparkles,
    title: 'AI Builds Your Roadmap',
    desc: 'Gemini AI analyzes your current skills, experience level, and time availability to generate a personalized week-by-week 90-day roadmap. Instantly.',
    color: 'text-purple-500',
    bg: 'bg-purple-50 dark:bg-purple-900/20',
    border: 'border-purple-200 dark:border-purple-800'
  },
  {
    id: 3,
    icon: Trophy,
    title: 'Learn, Build, Get Hired',
    desc: 'Complete modules, build real projects, pass AI mock interviews, earn verified certificates, and land the job with a 94% match score to your target role.',
    color: 'text-green-500',
    bg: 'bg-green-50 dark:bg-green-900/20',
    border: 'border-green-200 dark:border-green-800'
  }
];

export const HowItWorks = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  // For the dashed line on desktop
  const pathLength = useTransform(scrollYProgress, [0, 0.8], [0, 1]);

  return (
    <section id="how-it-works" className="py-24 bg-bg-primary overflow-hidden">
      <div className="max-w-7xl mx-auto px-6" ref={containerRef}>
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-text-primary mb-4">
            How NexRole AI Works
          </h2>
          <p className="text-lg text-text-secondary">
            From zero to job-ready in 90 days. Here's the path.
          </p>
        </div>

        <div className="relative">
          {/* Desktop SVG Line Connector */}
          <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-1 z-0">
            <svg width="100%" height="100%" preserveAspectRatio="none">
              <line 
                x1="0" y1="2" x2="100%" y2="2" 
                stroke="var(--border-strong)" 
                strokeWidth="2" 
                strokeDasharray="8 8" 
                className="opacity-30"
              />
              <motion.line 
                x1="0" y1="2" x2="100%" y2="2" 
                stroke="var(--blue-500)" 
                strokeWidth="2" 
                strokeDasharray="8 8" 
                style={{ pathLength }}
              />
            </svg>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
            {steps.map((step, idx) => (
              <motion.div 
                key={step.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                className="flex flex-col items-center text-center group"
              >
                {/* Number Indicator */}
                <div className="w-8 h-8 rounded-full bg-bg-primary border-2 border-border-default flex items-center justify-center text-sm font-bold text-text-secondary mb-6 group-hover:border-brand-500 group-hover:text-brand-600 transition-colors z-10 relative">
                  {step.id}
                </div>

                {/* Icon Box */}
                <div className={`w-20 h-20 rounded-2xl ${step.bg} ${step.border} border flex items-center justify-center mb-6 transform group-hover:-translate-y-2 transition-transform duration-300`}>
                  <step.icon className={`w-10 h-10 ${step.color}`} strokeWidth={1.5} />
                </div>

                <h3 className="text-xl font-bold text-text-primary mb-3">
                  {step.title}
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
