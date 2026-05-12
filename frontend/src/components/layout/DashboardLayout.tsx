import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Sidebar } from './Sidebar';
import { useUIStore, useAuthStore } from '../../store';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Bell, Menu, X, User, Settings, Trophy, LogOut } from 'lucide-react';

export const DashboardLayout = () => {
  const { sidebarCollapsed } = useUIStore();
  const { user, clearUser } = useAuthStore();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchFocused, setSearchFocused] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-bg-primary text-text-primary flex">
      {/* Desktop Sidebar */}
      <div className="hidden md:block">
        <Sidebar />
      </div>

      {/* Main Content Area */}
      <div 
        className="flex-1 flex flex-col min-w-0 transition-all duration-300 ease-in-out"
        style={{ marginLeft: window.innerWidth > 768 ? (sidebarCollapsed ? '72px' : '240px') : '0' }}
      >
        {/* Top Navbar */}
        <header className="sticky top-0 z-20 h-16 bg-bg-primary/90 backdrop-blur-md border-b border-border-subtle flex items-center justify-between px-4 md:px-8">
          
          {/* Mobile Hamburger */}
          <button 
            className="md:hidden p-2 -ml-2 text-text-secondary"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu className="w-6 h-6" />
          </button>

          {/* Left: Page Title (Dynamic) - currently hardcoded or managed by context, 
              but since it's an Outlet wrapper, we can just show a breadcrumb or generic for now */}
          <div className="hidden md:flex items-center gap-2">
            <h1 className="text-lg font-bold">Overview</h1>
          </div>

          {/* Center: Global Search */}
          <div className="flex-1 max-w-xl mx-4 flex justify-center relative z-50">
            <div className={`relative transition-all duration-300 ${searchFocused ? 'w-full max-w-[500px]' : 'w-full max-w-[380px]'}`}>
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-4 w-4 text-text-tertiary" />
              </div>
              <input
                type="text"
                onFocus={() => setSearchFocused(true)}
                onBlur={() => setTimeout(() => setSearchFocused(false), 200)}
                placeholder="Search modules, domains, jobs... (Cmd+K)"
                className="block w-full pl-10 pr-3 py-2 border border-border-default rounded-lg bg-bg-secondary text-sm focus:outline-none focus:border-brand-500 focus:bg-bg-primary focus:ring-1 focus:ring-brand-500 transition-all placeholder:text-text-tertiary"
              />
              
              {/* Search Dropdown Mock */}
              <AnimatePresence>
                {searchFocused && (
                  <motion.div
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 5 }}
                    className="absolute top-full left-0 right-0 mt-2 bg-bg-elevated border border-border-subtle rounded-xl shadow-xl overflow-hidden"
                  >
                    <div className="p-3">
                      <h4 className="text-xs font-bold text-text-tertiary uppercase tracking-wider mb-2 px-2">Recent Searches</h4>
                      <div className="space-y-1">
                        {['Prompt Engineering', 'RAG Architecture', 'Google interview questions'].map(s => (
                          <div key={s} className="px-2 py-1.5 text-sm hover:bg-bg-secondary rounded cursor-pointer flex items-center gap-2">
                            <Search className="w-3.5 h-3.5 text-text-tertiary" />
                            {s}
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Right: Actions */}
          <div className="flex items-center gap-3 md:gap-4 shrink-0 relative">
            <button className="relative p-2 text-text-secondary hover:text-text-primary transition-colors">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border border-bg-primary" />
            </button>
            
            {/* Custom User Dropdown */}
            <div className="relative">
              <button 
                onClick={() => setUserMenuOpen(!userMenuOpen)}
                onBlur={() => setTimeout(() => setUserMenuOpen(false), 200)}
                className="w-8 h-8 rounded-full border border-border-strong overflow-hidden bg-brand-100 dark:bg-brand-900/30 flex items-center justify-center text-brand-700 dark:text-brand-300 font-bold text-sm"
              >
                {user?.name?.charAt(0) || 'U'}
              </button>

              <AnimatePresence>
                {userMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: 10 }}
                    transition={{ duration: 0.15 }}
                    className="absolute right-0 top-full mt-2 w-56 bg-bg-elevated border border-border-subtle rounded-xl shadow-xl py-1 z-50 origin-top-right"
                  >
                    <div className="px-4 py-3 border-b border-border-subtle">
                      <p className="text-sm font-medium leading-none">{user?.name || 'User'}</p>
                      <p className="text-[10px] font-bold text-purple-600 dark:text-purple-400 mt-1">⚡ ML Practitioner</p>
                    </div>
                    <div className="py-1">
                      <button className="w-full px-4 py-2 text-left text-sm text-text-secondary hover:text-text-primary hover:bg-bg-secondary flex items-center gap-2">
                        <User className="w-4 h-4" /> Profile
                      </button>
                      <button className="w-full px-4 py-2 text-left text-sm text-text-secondary hover:text-text-primary hover:bg-bg-secondary flex items-center gap-2">
                        <Settings className="w-4 h-4" /> Settings
                      </button>
                      <button className="w-full px-4 py-2 text-left text-sm text-text-secondary hover:text-text-primary hover:bg-bg-secondary flex items-center gap-2">
                        <Trophy className="w-4 h-4" /> Leaderboard
                      </button>
                    </div>
                    <div className="border-t border-border-subtle py-1">
                      <button 
                        onClick={() => clearUser()}
                        className="w-full px-4 py-2 text-left text-sm text-red-600 hover:bg-red-50 dark:hover:bg-red-900/10 flex items-center gap-2 font-medium"
                      >
                        <LogOut className="w-4 h-4" /> Sign Out
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </header>

        {/* Main Dashboard Content */}
        <main className="flex-1 p-4 md:p-8">
          <Outlet />
        </main>
      </div>

      {/* Mobile Sidebar Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/50 z-40 md:hidden backdrop-blur-sm"
            />
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed inset-y-0 left-0 w-[280px] bg-bg-primary z-50 md:hidden border-r border-border-subtle"
            >
              {/* Mobile Sidebar content is basically a full-width Sidebar without collapse logic */}
              <div className="absolute top-4 right-4 z-50">
                <button onClick={() => setMobileMenuOpen(false)} className="p-2 bg-bg-secondary rounded-full text-text-secondary">
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="h-full w-full pointer-events-auto">
                 <Sidebar /> 
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};
