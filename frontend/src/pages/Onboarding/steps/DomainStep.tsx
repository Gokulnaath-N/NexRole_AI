import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Sparkles } from 'lucide-react';

const domains = [
  { id: 'generative-ai-engineering', title: 'Generative AI Engineering', icon: '⚡', color: '#7c3aed', matchRole: 'GenAI Engineer' },
  { id: 'ai-agentic-systems', title: 'AI Agentic Systems', icon: '🤖', color: '#0369a1', matchRole: 'AI Solutions Architect' },
  { id: 'mlops-llmops', title: 'MLOps / LLMOps', icon: '⚙️', color: '#0f766e', matchRole: 'MLOps Engineer' },
  { id: 'ai-cybersecurity', title: 'AI-Powered Cybersecurity', icon: '🛡️', color: '#dc2626', matchRole: 'AI Security Analyst' },
  { id: 'ai-cloud-architecture', title: 'AI Cloud Architecture', icon: '☁️', color: '#0284c7', matchRole: 'AI Cloud Architect' },
  { id: 'data-engineering-ai', title: 'Data Engineering for AI', icon: '📊', color: '#16a34a', matchRole: 'Data Engineer for AI' },
  { id: 'ai-product-management', title: 'AI Product Management', icon: '📋', color: '#d97706', matchRole: 'AI Product Manager' },
  { id: 'robotics-ai-automation', title: 'Robotics & AI Automation', icon: '🦾', color: '#9333ea', matchRole: 'Robotics' },
];

interface DomainStepProps {
  data: any;
  updateData: (data: any) => void;
  onNext: () => void;
  onBack: () => void;
}

export const DomainStep = ({ data, updateData, onNext, onBack }: DomainStepProps) => {
  const selectedDomainId = data.selectedDomain;
  const targetRole = data.targetRole || '';

  // Simple recommendation logic based on typed role
  const recommendedDomain = domains.find(d => 
    targetRole.toLowerCase().includes(d.matchRole.toLowerCase())
  ) || domains[0];

  const handleSelect = (id: string) => {
    updateData({ selectedDomain: id });
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-display font-bold text-text-primary mb-3">
          Choose your first domain
        </h1>
        <p className="text-base text-text-secondary">
          You can enroll in multiple domains later. Pick the one closest to your target role.
        </p>
      </div>

      {targetRole && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 flex items-center justify-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-50 dark:bg-brand-900/20 border border-brand-200 dark:border-brand-500/30">
            <Sparkles className="w-4 h-4 text-brand-500" />
            <span className="text-sm font-medium text-brand-700 dark:text-brand-300">
              Based on your goal ({targetRole}), we recommend <strong>{recommendedDomain.title}</strong>
            </span>
          </div>
        </motion.div>
      )}

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
        {domains.map((domain) => {
          const isSelected = selectedDomainId === domain.id;
          const isRecommended = domain.id === recommendedDomain.id;

          return (
            <motion.div
              key={domain.id}
              whileTap={{ scale: 0.98 }}
              onClick={() => handleSelect(domain.id)}
              className={`relative flex flex-col items-center text-center p-5 rounded-xl border-2 cursor-pointer transition-all duration-200 ${
                isSelected 
                  ? 'border-brand-500 bg-brand-50/50 dark:bg-brand-900/10 shadow-md' 
                  : 'border-border-default bg-bg-primary hover:border-brand-300'
              }`}
            >
              {isRecommended && !isSelected && (
                <div className="absolute -top-2.5 bg-brand-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow-sm">
                  RECOMMENDED
                </div>
              )}

              <div 
                className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-3 shadow-sm"
                style={{ backgroundColor: `${domain.color}15`, border: `1px solid ${domain.color}30` }}
              >
                {domain.icon}
              </div>
              
              <h4 className={`font-bold text-sm leading-tight ${isSelected ? 'text-brand-700 dark:text-brand-300' : 'text-text-primary'}`}>
                {domain.title}
              </h4>

              {isSelected && (
                <motion.div 
                  initial={{ scale: 0 }} 
                  animate={{ scale: 1 }} 
                  className="absolute top-2 right-2 text-brand-600 dark:text-brand-400"
                >
                  <CheckCircle2 className="w-5 h-5 fill-current text-white dark:text-bg-primary" />
                </motion.div>
              )}
            </motion.div>
          );
        })}
      </div>

      <div className="flex gap-4">
        <button
          onClick={onBack}
          className="px-6 h-12 flex items-center justify-center rounded-lg font-semibold text-text-secondary bg-bg-secondary hover:bg-border-subtle transition-colors border border-border-default"
        >
          Back
        </button>
        
        {selectedDomainId ? (
          <motion.button
            initial={{ opacity: 0, flexGrow: 0, width: 0 }}
            animate={{ opacity: 1, flexGrow: 1, width: 'auto' }}
            onClick={onNext}
            className="h-12 flex items-center justify-center rounded-lg font-bold text-white bg-brand-600 hover:bg-brand-700 shadow-md transition-all group overflow-hidden whitespace-nowrap"
          >
            Start My Journey 
            <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
          </motion.button>
        ) : (
          <div className="flex-1" /> // Spacer
        )}
      </div>
    </div>
  );
};

export default DomainStep;
