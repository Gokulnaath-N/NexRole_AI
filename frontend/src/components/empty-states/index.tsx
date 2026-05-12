import React from 'react';
import { BookOpen, Briefcase, Award, Bell, Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface EmptyStateProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  action?: { label: string; onClick?: () => void; href?: string };
}

export const EmptyState: React.FC<EmptyStateProps> = ({ icon, title, description, action }) => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center py-16 text-center px-4 w-full h-full">
      <div className="w-16 h-16 rounded-2xl bg-slate-50 dark:bg-slate-800/50 flex items-center justify-center mb-6 text-slate-400 dark:text-slate-500">
        {React.cloneElement(icon as React.ReactElement, { className: 'w-8 h-8 text-slate-400 dark:text-slate-500' })}
      </div>
      <h3 className="text-[18px] font-semibold text-slate-900 dark:text-slate-50 mb-2">{title}</h3>
      <p className="text-[14px] text-slate-500 dark:text-slate-400 max-w-sm mb-6">{description}</p>
      
      {action && (
        <button
          onClick={() => {
            if (action.onClick) action.onClick();
            else if (action.href) navigate(action.href);
          }}
          className="px-6 py-2.5 border-2 border-blue-600 text-blue-600 dark:border-blue-500 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 font-medium rounded-md transition-colors"
        >
          {action.label}
        </button>
      )}
    </div>
  );
};

export const NoDomainsEnrolled = () => (
  <EmptyState
    icon={<BookOpen />}
    title="No domains yet"
    description="Pick an AI domain and start your personalized journey"
    action={{ label: 'Browse Domains', href: '/domains' }}
  />
);

export const NoJobsFound = ({ onClear }: { onClear: () => void }) => (
  <EmptyState
    icon={<Briefcase />}
    title="No jobs match your filters"
    description="Try adjusting your filters or clearing the search"
    action={{ label: 'Clear Filters', onClick: onClear }}
  />
);

export const NoCertificates = () => (
  <EmptyState
    icon={<Award />}
    title="No certificates yet"
    description="Complete all modules in a domain to earn your first certificate"
    action={{ label: 'Start Learning', href: '/domains' }}
  />
);

export const NoNotifications = () => (
  <EmptyState
    icon={<Bell />}
    title="You're all caught up!"
    description="No new notifications right now"
  />
);

export const NoSearchResults = ({ query }: { query: string }) => (
  <EmptyState
    icon={<Search />}
    title={`No results for "${query}"`}
    description="Try different keywords or browse domains directly"
    action={{ label: 'Browse Domains', href: '/domains' }}
  />
);
