import React from 'react';
import { XCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const ErrorPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-[calc(100vh-64px)] w-full flex flex-col items-center justify-center relative bg-white dark:bg-[#080B14] px-4 overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <span className="text-[120px] md:text-[200px] font-black text-slate-900/5 dark:text-white/5 tracking-tighter">
          500
        </span>
      </div>
      
      <div className="relative z-10 flex flex-col items-center text-center">
        <div className="w-16 h-16 bg-red-100 dark:bg-red-900/30 text-red-500 rounded-full flex items-center justify-center mb-6">
          <XCircle className="w-8 h-8" />
        </div>
        <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-50 mb-3">Something went wrong</h1>
        <p className="text-slate-500 dark:text-slate-400 max-w-md mb-8">
          We're aware of the issue and working to fix it. Please try again or return to your dashboard.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 w-full max-w-sm">
          <button 
            onClick={() => window.location.reload()}
            className="flex-1 py-3 px-6 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 font-medium rounded-md transition-colors"
          >
            Try Again
          </button>
          <button 
            onClick={() => navigate('/dashboard')}
            className="flex-1 py-3 px-6 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition-colors shadow-sm"
          >
            Go to Dashboard
          </button>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
