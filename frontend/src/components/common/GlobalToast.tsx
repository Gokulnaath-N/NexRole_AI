import React from 'react';
import { Toaster, toast } from 'sonner';
import { Star, ArrowUpCircle } from 'lucide-react';

export const GlobalToast = () => {
  return (
    <Toaster
      position="bottom-right"
      expand={false}
      richColors={true}
      toastOptions={{
        style: {
          background: 'var(--bg-elevated)',
          border: '1px solid var(--border-default)',
          color: 'var(--text-primary)',
          borderRadius: '12px',
          fontSize: '14px',
        },
        className: 'nexrole-toast',
      }}
    />
  );
};

export const toastSuccess = (message: string, description?: string) => {
  toast.success(message, { description });
};

export const toastError = (message: string, description?: string) => {
  toast.error(message, { description });
};

export const toastInfo = (message: string, description?: string) => {
  toast.info(message, { description });
};

export const toastXP = (amount: number) => {
  toast.custom((t) => (
    <div className="flex items-center gap-3 bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800/50 p-4 rounded-xl shadow-sm w-[356px]">
      <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center shrink-0">
        <Star className="w-4 h-4 text-white fill-current" />
      </div>
      <div>
        <p className="text-sm font-bold text-blue-700 dark:text-blue-300">+{amount} XP earned</p>
        <p className="text-xs text-blue-600/80 dark:text-blue-400/80">Keep up the great work!</p>
      </div>
    </div>
  ));
};

export const toastLevelUp = (levelName: string) => {
  toast.custom((t) => (
    <div className="flex items-center gap-3 bg-gradient-to-r from-purple-500 to-blue-500 p-4 rounded-xl shadow-md w-[356px] text-white">
      <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center shrink-0 border border-white/30">
        <ArrowUpCircle className="w-6 h-6" />
      </div>
      <div>
        <p className="text-xs uppercase font-bold tracking-wider text-white/80 mb-0.5">Level Up!</p>
        <p className="text-base font-bold">You're now a {levelName} ⚡</p>
      </div>
    </div>
  ), { duration: 5000 });
};
