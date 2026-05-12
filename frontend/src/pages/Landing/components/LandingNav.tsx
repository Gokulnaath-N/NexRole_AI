import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon, Zap } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from 'next-themes';

const NavLinks = [
  { name: 'Domains', path: '/domains' },
  { name: 'How It Works', path: '#how-it-works' },
  { name: 'Career Hub', path: '/career' },
  { name: 'Pricing', path: '#pricing' },
];

export const LandingNav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();
  const isDark = resolvedTheme === 'dark';
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => setTheme(isDark ? 'light' : 'dark');

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 h-16 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/85 dark:bg-[#080B14]/85 backdrop-blur-xl border-b border-border-subtle shadow-sm' 
          : 'bg-transparent border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
        {/* Left: Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="relative flex items-center justify-center w-8 h-8 rounded-lg bg-blue-50 dark:bg-blue-900/30">
            <Zap className="w-5 h-5 text-brand-600 dark:text-brand-400" />
            <div className="absolute inset-0 rounded-lg opacity-0 dark:group-hover:opacity-100 transition-opacity duration-500 shadow-glow-blue pointer-events-none" />
          </div>
          <span className="font-display font-bold text-lg tracking-tight text-text-primary">
            NexRole AI
          </span>
        </Link>

        {/* Center: Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {NavLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.name}
                to={link.path}
                className={`relative text-sm font-medium transition-colors duration-200 group ${
                  isActive ? 'text-brand-600 dark:text-brand-400' : 'text-text-secondary hover:text-brand-600 dark:hover:text-brand-400'
                }`}
              >
                {link.name}
                <span 
                  className={`absolute -bottom-1 left-0 h-[2px] bg-brand-600 dark:bg-brand-400 transition-transform duration-300 origin-left ${
                    isActive ? 'w-full scale-x-100' : 'w-full scale-x-0 group-hover:scale-x-100'
                  }`}
                />
              </Link>
            );
          })}
        </div>

        {/* Right: Actions */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="p-2 text-text-secondary hover:text-text-primary transition-colors rounded-full hover:bg-bg-tertiary"
            aria-label="Toggle theme"
          >
            <motion.div
              initial={false}
              animate={{ rotate: isDark ? 180 : 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </motion.div>
          </button>
          
          <Link
            to="/auth/login"
            className="text-sm font-medium px-4 py-2 rounded-md text-text-primary hover:text-brand-600 transition-colors border border-transparent hover:border-border-subtle"
          >
            Sign In
          </Link>
          
          <Link
            to="/auth/register"
            className="relative overflow-hidden group px-5 py-2 rounded-md bg-brand-600 text-white text-sm font-medium transition-all hover:bg-brand-700 hover:shadow-md hover:-translate-y-px"
          >
            <span className="relative z-10 flex items-center gap-1">
              Get Started <span className="transition-transform group-hover:translate-x-1">→</span>
            </span>
            {/* Shine effect */}
            <div className="absolute inset-0 -translate-x-[150%] bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:animate-shimmer pointer-events-none" />
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden p-2 text-text-secondary"
          onClick={() => setMobileMenuOpen(true)}
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile Sheet */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 md:hidden"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-[280px] bg-bg-primary/95 backdrop-blur-xl border-l border-border-subtle z-50 p-6 flex flex-col md:hidden"
            >
              <div className="flex justify-end mb-8">
                <button onClick={() => setMobileMenuOpen(false)} className="p-2 text-text-secondary">
                  <X className="w-6 h-6" />
                </button>
              </div>
              
              <div className="flex flex-col gap-6 flex-1">
                {NavLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-lg font-medium text-text-primary"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>

              <div className="flex flex-col gap-4 mt-auto">
                <div className="flex items-center justify-between py-4 border-t border-border-subtle">
                  <span className="text-sm font-medium">Theme</span>
                  <button onClick={toggleTheme} className="p-2 bg-bg-secondary rounded-full">
                    {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                  </button>
                </div>
                <Link
                  to="/auth/login"
                  className="w-full py-3 text-center border border-border-default rounded-md font-medium"
                >
                  Sign In
                </Link>
                <Link
                  to="/auth/register"
                  className="w-full py-3 text-center bg-brand-600 text-white rounded-md font-medium"
                >
                  Get Started
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};
