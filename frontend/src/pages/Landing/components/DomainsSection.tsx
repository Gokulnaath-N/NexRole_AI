import React from 'react';
import { motion } from 'framer-motion';

const domains = [
  { id: 1, title: 'Generative AI Engineering', icon: '⚡', color: '#7c3aed', demand: 'HOT', salary: '₹22L–₹55L', modules: 8, enrolled: 1240 },
  { id: 2, title: 'AI Agentic Systems', icon: '🤖', color: '#0369a1', demand: 'EMERGING', salary: '₹20L–₹48L', modules: 6, enrolled: 890 },
  { id: 3, title: 'MLOps / LLMOps', icon: '⚙️', color: '#0f766e', demand: 'HOT', salary: '₹18L–₹45L', modules: 7, enrolled: 1560 },
  { id: 4, title: 'AI Cybersecurity', icon: '🛡️', color: '#dc2626', demand: 'RISING', salary: '₹16L–₹42L', modules: 5, enrolled: 430 },
  { id: 5, title: 'AI Cloud Architecture', icon: '☁️', color: '#0284c7', demand: 'RISING', salary: '₹18L–₹40L', modules: 6, enrolled: 670 },
  { id: 6, title: 'Data Engineering for AI', icon: '📊', color: '#16a34a', demand: 'HOT', salary: '₹16L–₹38L', modules: 7, enrolled: 2100 },
  { id: 7, title: 'AI Product Management', icon: '📋', color: '#d97706', demand: 'EMERGING', salary: '₹20L–₹50L', modules: 5, enrolled: 520 },
  { id: 8, title: 'Robotics & Automation', icon: '🦾', color: '#9333ea', demand: 'EMERGING', salary: '₹14L–₹35L', modules: 8, enrolled: 310 },
];

const LandingDomainCard = ({ domain, index }: { domain: any, index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group relative flex flex-col bg-bg-elevated rounded-xl shadow-sm border border-border-subtle overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl dark:hover:shadow-lg"
      style={{
        // Dark mode hover border and glow using CSS variables overridden locally
        '--hover-color': domain.color,
      } as React.CSSProperties}
    >
      {/* Top Accent Band */}
      <div className="h-1 w-full" style={{ backgroundColor: domain.color }} />
      
      <div className="p-6 flex flex-col flex-1 relative z-10 bg-bg-elevated dark:group-hover:bg-[#161B27] transition-colors">
        
        {/* Glow effect on hover in dark mode */}
        <div 
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none hidden dark:block rounded-xl border border-transparent"
          style={{ 
            boxShadow: `0 0 20px ${domain.color}40`,
            borderColor: `${domain.color}60`
          }}
        />

        <div className="flex justify-between items-start mb-4">
          <div 
            className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl border"
            style={{ 
              backgroundColor: `${domain.color}15`,
              borderColor: `${domain.color}30`
            }}
          >
            {domain.icon}
          </div>
          
          {domain.demand === 'HOT' && (
            <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400 border border-red-200 dark:border-red-800">
              🔥 HOT
            </span>
          )}
          {domain.demand === 'EMERGING' && (
            <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400 border border-amber-200 dark:border-amber-800">
              🚀 EMERGING
            </span>
          )}
          {domain.demand === 'RISING' && (
            <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 border border-green-200 dark:border-green-800">
              📈 RISING
            </span>
          )}
        </div>

        <h3 className="text-lg font-semibold text-text-primary mb-2 line-clamp-1">{domain.title}</h3>
        <p className="text-sm text-text-secondary mb-6 line-clamp-2">
          Master the tools and techniques required by top tech companies hiring for this role.
        </p>

        <div className="mt-auto">
          <div className="flex items-center gap-2 text-xs text-text-tertiary font-medium mb-4 flex-wrap">
            <span>{domain.modules} modules</span>
            <span>•</span>
            <span>{domain.salary}</span>
            <span>•</span>
            <span>{domain.enrolled} enrolled</span>
          </div>

          <div 
            className="text-sm font-semibold inline-flex items-center gap-1 group/link"
            style={{ color: domain.color }}
          >
            Start Learning <span className="transition-transform group-hover/link:translate-x-1">→</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export const DomainsSection = () => {
  return (
    <section id="domains" className="py-24 bg-bg-secondary relative">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-text-primary mb-4">
            Master 8 AI-First Domains
          </h2>
          <p className="text-lg text-text-secondary">
            Every domain is mapped to real company hiring patterns and live job market demand. 
            Pick your path and become indispensable.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {domains.map((domain, idx) => (
            <LandingDomainCard key={domain.id} domain={domain} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};
