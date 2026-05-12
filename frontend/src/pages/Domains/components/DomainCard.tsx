import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { CheckCircle2, TrendingUp, Users, BookOpen } from 'lucide-react';

export interface Domain {
  id: string;
  slug: string;
  title: string;
  icon: string;
  color: string;
  description: string;
  moduleCount: number;
  studentCount: number;
  salaryAvg: string;
  demandLevel: string;
  isEnrolled?: boolean;
}

interface DomainCardProps {
  domain: Domain;
  index: number;
}

export const DomainCard = ({ domain, index }: DomainCardProps) => {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      whileHover={{ y: -4 }}
      className="group relative bg-bg-elevated border border-border-subtle rounded-2xl overflow-hidden shadow-sm hover:shadow-md hover:border-brand-500/30 transition-all duration-300"
    >
      {/* Accent Top Bar */}
      <div 
        className="h-1.5 w-full" 
        style={{ backgroundColor: domain.color }} 
      />

      <div className="p-6 flex flex-col h-full">
        {/* Header */}
        <div className="flex justify-between items-start mb-4">
          <div 
            className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl shadow-sm border border-border-subtle transition-transform group-hover:scale-110 duration-300"
            style={{ backgroundColor: `${domain.color}10`, borderColor: `${domain.color}20` }}
          >
            {domain.icon}
          </div>
          
          <div className="flex flex-col items-end gap-1">
            <div className={`px-2 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider ${
              domain.demandLevel === 'High' ? 'bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400' :
              domain.demandLevel === 'Rising' ? 'bg-amber-100 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400' :
              'bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400'
            }`}>
              {domain.demandLevel} Demand
            </div>
            {domain.isEnrolled && (
              <div className="flex items-center gap-1 text-[10px] font-bold text-green-600 dark:text-green-400">
                <CheckCircle2 className="w-3 h-3" />
                ENROLLED
              </div>
            )}
          </div>
        </div>

        {/* Content */}
        <h3 className="text-lg font-bold text-text-primary mb-2 group-hover:text-brand-600 transition-colors">
          {domain.title}
        </h3>
        <p className="text-sm text-text-secondary line-clamp-2 mb-6 flex-1">
          {domain.description}
        </p>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-text-tertiary" />
            <span className="text-xs font-semibold text-text-secondary">{domain.moduleCount} Modules</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4 text-text-tertiary" />
            <span className="text-xs font-semibold text-text-secondary">{domain.studentCount}+ Learners</span>
          </div>
          <div className="flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-text-tertiary" />
            <span className="text-xs font-semibold text-text-secondary">{domain.salaryAvg} avg.</span>
          </div>
        </div>

        {/* Action */}
        <button
          onClick={() => navigate(`/domains/${domain.slug}`)}
          className={`w-full h-11 rounded-lg font-bold text-sm transition-all duration-200 flex items-center justify-center gap-2 ${
            domain.isEnrolled 
              ? 'bg-bg-secondary text-text-primary border border-border-default hover:bg-border-subtle'
              : 'bg-brand-600 text-white hover:bg-brand-700 shadow-sm'
          }`}
        >
          {domain.isEnrolled ? 'View Path' : 'Enroll Now'}
          <span className="group-hover:translate-x-1 transition-transform">→</span>
        </button>
      </div>
    </motion.div>
  );
};
