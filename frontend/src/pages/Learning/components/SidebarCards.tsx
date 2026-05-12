import React from 'react';
import { Clock, BookOpen, Trophy, Target } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

interface SidebarCardProps {
  module: any;
}

export const ModuleInfo = ({ module }: SidebarCardProps) => {
  const infoItems = [
    { label: 'Duration', value: `${module.duration || 15} min`, icon: Clock, color: 'text-blue-500' },
    { label: 'Type', value: module.type || 'Reading', icon: BookOpen, color: 'text-purple-500' },
    { label: 'XP Reward', value: `${module.xpReward || 50} XP`, icon: Trophy, color: 'text-amber-500' },
    { label: 'Difficulty', value: module.difficulty || 'Intermediate', icon: Target, color: 'text-green-500' }
  ];

  return (
    <Card className="p-5 border-border-subtle bg-bg-elevated shadow-sm">
      <h4 className="text-[10px] font-black text-text-tertiary uppercase tracking-widest mb-4">Module Information</h4>
      <div className="space-y-4">
        {infoItems.map((item, i) => (
          <div key={i} className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <item.icon className={`w-4 h-4 ${item.color}`} />
              <span className="text-xs font-bold text-text-secondary">{item.label}</span>
            </div>
            <span className="text-xs font-black text-text-primary">{item.value}</span>
          </div>
        ))}
      </div>
    </Card>
  );
};

export const LearningProgress = ({ module }: SidebarCardProps) => {
  const percent = module.totalModules ? Math.round((module.moduleIndex / module.totalModules) * 100) : 0;
  
  return (
    <Card className="p-5 border-border-subtle bg-bg-elevated shadow-sm overflow-hidden relative">
      <h4 className="text-[10px] font-black text-text-tertiary uppercase tracking-widest mb-4">Your Progress</h4>
      
      <div className="flex items-center gap-6 mb-4">
        <div className="relative w-16 h-16 shrink-0">
          <svg className="w-full h-full" viewBox="0 0 36 36">
            <path
              className="stroke-bg-secondary"
              strokeWidth="3"
              fill="none"
              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
            />
            <path
              className="stroke-brand-500 transition-all duration-1000 ease-out"
              strokeDasharray={`${percent}, 100`}
              strokeWidth="3"
              strokeLinecap="round"
              fill="none"
              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-sm font-black text-brand-600">{percent}%</span>
          </div>
        </div>
        
        <div className="flex-1">
          <div className="text-xs font-bold text-text-primary mb-1">Domain Completion</div>
          <div className="text-[10px] font-medium text-text-tertiary">{module.moduleIndex} of {module.totalModules} modules</div>
        </div>
      </div>

      <div className="space-y-3 pt-4 border-t border-border-subtle">
        <div className="flex items-center justify-between text-[10px] font-black uppercase tracking-tighter">
          <span className="text-text-tertiary">Next Milestone</span>
          <span className="text-brand-600">
            {module.totalModules - module.moduleIndex > 0 
              ? `${module.totalModules - module.moduleIndex} Modules left` 
              : 'Goal Reached!'}
          </span>
        </div>
        <Progress value={percent} className="h-1.5" />
      </div>

      <div className="absolute top-0 right-0 p-2">
        <Trophy className="w-12 h-12 text-brand-500/5 rotate-12" />
      </div>
    </Card>
  );
};
