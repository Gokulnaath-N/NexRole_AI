import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from 'next-themes';

export const ThemeToggle: React.FC = () => {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const isDark = resolvedTheme === 'dark';

  const toggle = () => setTheme(isDark ? 'light' : 'dark');

  return (
    <button
      onClick={toggle}
      className="relative flex items-center justify-between w-[56px] h-[28px] p-1 bg-slate-200 dark:bg-slate-700 rounded-full cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-colors"
      aria-label="Toggle Theme"
    >
      <div className="z-10 flex items-center justify-center w-5 h-5 text-amber-500">
        <Sun className="w-3.5 h-3.5" />
      </div>
      <div className="z-10 flex items-center justify-center w-5 h-5 text-blue-400">
        <Moon className="w-3.5 h-3.5" />
      </div>

      <motion.div
        initial={false}
        animate={{ x: isDark ? 28 : 0 }}
        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
        className="absolute left-1 w-5 h-5 bg-white dark:bg-slate-900 rounded-full shadow-sm"
      />
    </button>
  );
};

export default ThemeToggle;
