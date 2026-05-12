import React, { useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Zap, Home, BookOpen, Globe, Bot, Briefcase, 
  Target, Trophy, User, Settings, ChevronLeft, ChevronRight, Flame, Moon, Sun
} from 'lucide-react';
import { useUIStore, useAuthStore } from '../../store';
import { useTheme } from 'next-themes';

const mainNavItems = [
  { icon: Home, label: 'Dashboard', href: '/dashboard' },
  { icon: BookOpen, label: 'My Learning', href: '/learning' },
  { icon: Globe, label: 'Domains', href: '/domains' },
  { icon: Bot, label: 'AI Tutor', href: '/ai-tutor' },
  { icon: Briefcase, label: 'Career Hub', href: '/career' },
  { icon: Target, label: 'Interview Prep', href: '/interview-prep' },
  { icon: Trophy, label: 'Leaderboard', href: '/leaderboard' },
];

const secondaryNavItems = [
  { icon: User, label: 'Profile', href: '/profile' },
  { icon: Settings, label: 'Settings', href: '/settings' },
];

export const Sidebar = () => {
  const { sidebarCollapsed, toggleSidebar } = useUIStore();
  const { user } = useAuthStore();
  const { resolvedTheme, setTheme } = useTheme();
  const isDark = resolvedTheme === 'dark';
  const location = useLocation();

  // Sync state to local storage is handled by Zustand persist in your setup normally,
  // but if not, we can ensure it's synced if needed. 

  return (
    <motion.aside
      initial={false}
      animate={{ width: sidebarCollapsed ? 72 : 240 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="fixed left-0 top-0 bottom-0 z-30 flex flex-col bg-bg-primary border-r border-border-subtle overflow-hidden"
    >
      {/* Top Logo */}
      <div className="h-16 flex items-center px-4 shrink-0">
        <div className="flex items-center gap-3 w-full">
          <div className="w-8 h-8 rounded-lg bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center shrink-0">
            <Zap className="w-5 h-5 text-brand-600 dark:text-brand-400" />
          </div>
          <AnimatePresence>
            {!sidebarCollapsed && (
              <motion.span
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.2 }}
                className="font-display font-bold text-lg tracking-tight text-text-primary whitespace-nowrap"
              >
                NexRole AI
              </motion.span>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* User Card */}
      <div className="px-4 py-4 mb-2 shrink-0">
        <div className={`flex items-center gap-3 ${sidebarCollapsed ? 'justify-center' : ''}`}>
          <div className="relative shrink-0">
            <div className="w-10 h-10 rounded-full border-2 border-purple-500 p-0.5 overflow-hidden bg-bg-secondary flex items-center justify-center">
              {/* Fallback avatar */}
              <span className="text-sm font-bold text-text-secondary">
                {user?.name?.charAt(0) || 'U'}
              </span>
            </div>
            {/* Online indicator */}
            <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-bg-primary rounded-full" />
          </div>
          
          <AnimatePresence>
            {!sidebarCollapsed && (
              <motion.div
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: 'auto' }}
                exit={{ opacity: 0, width: 0 }}
                className="flex flex-col overflow-hidden whitespace-nowrap"
              >
                <span className="text-sm font-bold text-text-primary truncate">{user?.name || 'Student'}</span>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400 border border-purple-200 dark:border-purple-800">
                    ⚡ ML Practitioner
                  </span>
                </div>
                <div className="mt-2 flex items-center gap-2">
                  <div className="flex-1 h-1.5 bg-border-default rounded-full overflow-hidden">
                    <div className="h-full bg-brand-500 w-[90%]" />
                  </div>
                  <span className="text-[10px] text-text-tertiary">450/500</span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto overflow-x-hidden px-3 py-2 custom-scrollbar">
        <div className="flex flex-col gap-1 mb-6">
          {mainNavItems.map((item) => {
            const isActive = location.pathname.startsWith(item.href) && 
                            (item.href !== '/dashboard' || location.pathname === '/dashboard');
            
            return (
              <NavLink
                key={item.label}
                to={item.href}
                className="relative flex items-center h-10 rounded-lg group transition-colors"
                title={sidebarCollapsed ? item.label : undefined}
              >
                {/* Active Background */}
                {isActive && (
                  <motion.div 
                    layoutId="sidebar-active"
                    className="absolute inset-0 bg-brand-50 dark:bg-brand-500/10 rounded-lg"
                    initial={false}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                
                {/* Active Accent Bar */}
                {isActive && (
                  <div className="absolute left-0 top-1 bottom-1 w-1 bg-brand-500 rounded-r-full" />
                )}

                <div className={`relative z-10 flex items-center w-full ${sidebarCollapsed ? 'justify-center' : 'px-3'}`}>
                  <item.icon 
                    className={`w-5 h-5 shrink-0 transition-colors ${
                      isActive 
                        ? 'text-brand-600 dark:text-brand-400' 
                        : 'text-text-secondary group-hover:text-text-primary'
                    }`} 
                  />
                  <AnimatePresence>
                    {!sidebarCollapsed && (
                      <motion.span
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -10 }}
                        className={`ml-3 text-sm font-medium whitespace-nowrap transition-colors ${
                          isActive 
                            ? 'text-brand-700 dark:text-brand-300 font-semibold' 
                            : 'text-text-secondary group-hover:text-text-primary'
                        }`}
                      >
                        {item.label}
                      </motion.span>
                    )}
                  </AnimatePresence>
                </div>
              </NavLink>
            );
          })}
        </div>

        <div className="h-px bg-border-subtle mx-3 mb-4" />

        <div className="flex flex-col gap-1">
          {secondaryNavItems.map((item) => {
            const isActive = location.pathname.startsWith(item.href);
            return (
              <NavLink
                key={item.label}
                to={item.href}
                className={`flex items-center h-10 rounded-lg group transition-colors ${
                  isActive ? 'bg-brand-50 dark:bg-brand-500/10' : 'hover:bg-bg-secondary'
                }`}
                title={sidebarCollapsed ? item.label : undefined}
              >
                <div className={`flex items-center w-full ${sidebarCollapsed ? 'justify-center' : 'px-3'}`}>
                  <item.icon 
                    className={`w-5 h-5 shrink-0 transition-colors ${
                      isActive ? 'text-brand-600 dark:text-brand-400' : 'text-text-tertiary group-hover:text-text-primary'
                    }`} 
                  />
                  <AnimatePresence>
                    {!sidebarCollapsed && (
                      <motion.span
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -10 }}
                        className={`ml-3 text-sm font-medium whitespace-nowrap transition-colors ${
                          isActive ? 'text-brand-700 dark:text-brand-300' : 'text-text-secondary group-hover:text-text-primary'
                        }`}
                      >
                        {item.label}
                      </motion.span>
                    )}
                  </AnimatePresence>
                </div>
              </NavLink>
            );
          })}
        </div>
      </nav>

      {/* Bottom Section */}
      <div className="p-4 border-t border-border-subtle shrink-0 flex flex-col gap-4">
        {/* Streak */}
        <div className={`flex items-center ${sidebarCollapsed ? 'justify-center' : 'gap-3 px-2'}`}>
          <div className="relative">
            <Flame className="w-5 h-5 text-amber-500 fill-amber-500 animate-[pulse_2s_ease-in-out_infinite]" />
            {/* Glow */}
            <div className="absolute inset-0 bg-amber-500 blur-md opacity-30 animate-[pulse_2s_ease-in-out_infinite]" />
          </div>
          {!sidebarCollapsed && (
            <span className="text-sm font-bold text-amber-600 dark:text-amber-500 whitespace-nowrap">
              7 day streak
            </span>
          )}
        </div>

        {/* Theme Toggle & Collapse */}
        <div className={`flex items-center ${sidebarCollapsed ? 'flex-col gap-4' : 'justify-between'}`}>
          <button
            onClick={() => setTheme(isDark ? 'light' : 'dark')}
            className="w-8 h-8 rounded-full bg-bg-secondary flex items-center justify-center text-text-secondary hover:text-text-primary hover:bg-border-subtle transition-colors"
            title="Toggle theme"
          >
            {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
          
          <button
            onClick={toggleSidebar}
            className="w-8 h-8 rounded-full bg-bg-secondary flex items-center justify-center text-text-secondary hover:text-text-primary hover:bg-border-subtle transition-colors"
            title={sidebarCollapsed ? "Expand sidebar" : "Collapse sidebar"}
          >
            <motion.div animate={{ rotate: sidebarCollapsed ? 180 : 0 }}>
              <ChevronLeft className="w-4 h-4" />
            </motion.div>
          </button>
        </div>
      </div>
    </motion.aside>
  );
};
