import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Building2, Factory, Rocket, UserCircle, CheckCircle2 } from 'lucide-react';

const SUGGESTIONS = [
  "GenAI Engineer", "MLOps Engineer", "AI Product Manager", 
  "Data Engineer for AI", "AI Security Analyst", "AI Cloud Architect",
  "LLM Engineer", "AI Research Engineer", "Prompt Engineer", 
  "AI Solutions Architect"
];

const COMPANY_TYPES = [
  {
    id: 'product',
    title: 'Product Company',
    icon: Building2,
    examples: 'Google, OpenAI, Meta, Flipkart style',
    focus: 'Focus: System design, research, scale'
  },
  {
    id: 'service',
    title: 'Service Company',
    icon: Factory,
    examples: 'TCS, Infosys, Wipro, Accenture',
    focus: 'Focus: Client delivery, certifications'
  },
  {
    id: 'startup',
    title: 'Startup',
    icon: Rocket,
    examples: 'Series A/B tech startups',
    focus: 'Focus: Full-stack AI, speed, MVPs'
  },
  {
    id: 'freelance',
    title: 'Freelance / Independent',
    icon: UserCircle,
    examples: 'Build your own AI projects',
    focus: 'Focus: Portfolio, niche expertise'
  }
];

interface GoalStepProps {
  data: any;
  updateData: (data: any) => void;
  onNext: () => void;
}

export const GoalStep = ({ data, updateData, onNext }: GoalStepProps) => {
  const [roleInput, setRoleInput] = useState(data.targetRole || '');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const filteredSuggestions = SUGGESTIONS.filter(s => 
    s.toLowerCase().includes(roleInput.toLowerCase()) && s !== roleInput
  ).slice(0, 5);

  const handleSelectRole = (role: string) => {
    setRoleInput(role);
    updateData({ targetRole: role });
    setShowSuggestions(false);
    inputRef.current?.blur();
  };

  const handleCompanySelect = (typeId: string) => {
    updateData({ companyType: typeId });
  };

  const isValid = data.targetRole?.length > 2 && data.companyType;

  return (
    <div className="w-full">
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-display font-bold text-text-primary mb-3">
          Let's build your personalized path
        </h1>
        <p className="text-base text-text-secondary">
          Tell us your goal and we'll generate your AI-powered roadmap in seconds.
        </p>
      </div>

      <div className="space-y-10">
        {/* Role Input */}
        <div>
          <label className="block text-sm font-semibold text-text-primary mb-3">
            What role are you targeting?
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-text-tertiary" />
            </div>
            <input
              ref={inputRef}
              type="text"
              value={roleInput}
              onChange={(e) => {
                setRoleInput(e.target.value);
                updateData({ targetRole: e.target.value });
                setShowSuggestions(true);
              }}
              onFocus={() => setShowSuggestions(true)}
              className="block w-full pl-12 pr-4 py-4 bg-bg-primary border-2 border-border-default rounded-xl text-text-primary text-base font-medium focus:outline-none focus:border-brand-500 transition-colors shadow-sm"
              placeholder="e.g. GenAI Engineer"
            />
            
            {/* Autocomplete Dropdown */}
            <AnimatePresence>
              {showSuggestions && filteredSuggestions.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute top-full left-0 right-0 mt-2 bg-bg-elevated border border-border-subtle rounded-xl shadow-xl z-20 overflow-hidden"
                >
                  {filteredSuggestions.map((suggestion, idx) => (
                    <div
                      key={idx}
                      onClick={() => handleSelectRole(suggestion)}
                      className="px-4 py-3 hover:bg-bg-secondary cursor-pointer flex items-center gap-3 transition-colors border-b border-border-subtle last:border-0"
                    >
                      <Search className="w-4 h-4 text-text-tertiary" />
                      <span className="text-sm font-medium text-text-primary">{suggestion}</span>
                    </div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Company Type Grid */}
        <div>
          <label className="block text-sm font-semibold text-text-primary mb-3">
            What type of company?
          </label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {COMPANY_TYPES.map((type) => {
              const isSelected = data.companyType === type.id;
              const Icon = type.icon;
              
              return (
                <motion.div
                  key={type.id}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleCompanySelect(type.id)}
                  className={`relative p-4 rounded-xl border-2 cursor-pointer transition-all duration-200 h-[100px] flex items-center ${
                    isSelected 
                      ? 'border-brand-500 bg-brand-50 dark:bg-brand-950/30 shadow-md' 
                      : 'border-border-default bg-bg-primary hover:border-brand-300 hover:bg-bg-secondary'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center shrink-0 ${
                      isSelected ? 'bg-brand-100 text-brand-600 dark:bg-brand-900/50 dark:text-brand-400' : 'bg-bg-tertiary text-text-secondary'
                    }`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className={`font-bold text-sm mb-1 ${isSelected ? 'text-brand-700 dark:text-brand-300' : 'text-text-primary'}`}>
                        {type.title}
                      </h4>
                      <p className="text-[11px] text-text-tertiary leading-tight mb-0.5">{type.examples}</p>
                      <p className="text-[11px] font-medium text-text-secondary">{type.focus}</p>
                    </div>
                  </div>
                  
                  {isSelected && (
                    <motion.div 
                      initial={{ scale: 0 }} 
                      animate={{ scale: 1 }} 
                      className="absolute top-3 right-3 text-brand-600 dark:text-brand-400"
                    >
                      <CheckCircle2 className="w-5 h-5 fill-current text-white dark:text-bg-primary" />
                    </motion.div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>

        <div className="pt-6">
          <button
            onClick={onNext}
            disabled={!isValid}
            className={`w-full h-12 flex items-center justify-center rounded-lg font-bold text-white transition-all duration-300 ${
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
