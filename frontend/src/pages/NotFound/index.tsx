import React from 'react';
import { Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const NotFoundPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-[calc(100vh-64px)] w-full flex flex-col items-center justify-center relative bg-white dark:bg-[#080B14] px-4 overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <span className="text-[120px] md:text-[200px] font-black text-slate-900/5 dark:text-white/5 tracking-tighter">
          404
        </span>
      </div>
      
      <div className="relative z-10 flex flex-col items-center text-center">
        <div className="w-16 h-16 bg-slate-100 dark:bg-slate-800 text-slate-400 rounded-full flex items-center justify-center mb-6">
          <Search className="w-8 h-8" />
        </div>
        <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-50 mb-3">Page not found</h1>
        <p className="text-slate-500 dark:text-slate-400 max-w-md mb-8">
          The page you're looking for doesn't exist or was moved. Here are some helpful links:
        </p>
        
        <div className="flex flex-col sm:flex-row gap-3 w-full max-w-md">
          <button 
            onClick={() => navigate('/dashboard')}
            className="flex-1 py-2.5 px-4 border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/50 text-slate-700 dark:text-slate-300 font-medium rounded-md transition-colors"
          >
            Dashboard
          </button>
          <button 
            onClick={() => navigate('/domains')}
            className="flex-1 py-2.5 px-4 border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/50 text-slate-700 dark:text-slate-300 font-medium rounded-md transition-colors"
          >
            Domains
          </button>
          <button 
            onClick={() => navigate('/career')}
            className="flex-1 py-2.5 px-4 border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/50 text-slate-700 dark:text-slate-300 font-medium rounded-md transition-colors"
          >
            Career Hub
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
