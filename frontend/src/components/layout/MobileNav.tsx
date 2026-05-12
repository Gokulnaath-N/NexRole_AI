import React from 'react';
import { Home, Globe, BookOpen, Briefcase, User } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

export const MobileNav: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { id: 'dashboard', path: '/dashboard', label: 'Home', icon: Home },
    { id: 'domains', path: '/domains', label: 'Domains', icon: Globe },
    { id: 'learn', path: '/learn/current', label: 'Learn', icon: BookOpen },
    { id: 'career', path: '/career', label: 'Career', icon: Briefcase },
    { id: 'profile', path: '/profile', label: 'Profile', icon: User }
  ];

  const isActive = (path: string) => {
    if (path === '/learn/current' && location.pathname.startsWith('/learn')) return true;
    return location.pathname === path;
  };

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 h-[64px] bg-white/80 dark:bg-[#0D1117]/80 backdrop-blur-md border-t border-slate-200 dark:border-slate-800 z-50 pb-safe">
      <div className="flex justify-around items-center h-full px-2">
        {navItems.map((item) => {
          const active = isActive(item.path);
          const Icon = item.icon;
          
          return (
            <button
              key={item.id}
              onClick={() => navigate(item.path)}
              className="relative flex flex-col items-center justify-center w-16 h-full text-slate-500 dark:text-slate-400"
            >
              {active && (
                <motion.div
                  layoutId="mobileNavIndicator"
                  className="absolute top-1 w-1.5 h-1.5 rounded-full bg-blue-500"
                />
              )}
              
              <motion.div
                animate={{ scale: active ? 1.1 : 1 }}
                className={active ? 'text-blue-600 dark:text-blue-500 mb-1' : 'mb-1'}
              >
                <Icon className="w-[24px] h-[24px]" />
              </motion.div>
              
              <span className={`text-[10px] font-medium ${active ? 'text-blue-600 dark:text-blue-500' : ''}`}>
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default MobileNav;
