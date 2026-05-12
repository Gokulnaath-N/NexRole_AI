import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Zap } from 'lucide-react';

export const AuthLayout = () => {
  const location = useLocation();
  
  const getQuote = () => {
    switch (location.pathname) {
      case '/auth/login':
        return "Welcome back. Your AI career path awaits.";
      case '/auth/register':
        return "Start your 90-day journey to an AI career today.";
      case '/auth/forgot-password':
        return "We'll get you back on track in seconds.";
      default:
        return "Your AI career path awaits.";
    }
  };

  return (
    <div className="flex min-h-screen bg-bg-primary">
      {/* Left Panel (Hidden on Mobile) */}
      <div className="hidden lg:flex flex-col w-[40%] relative overflow-hidden text-white" style={{ background: 'linear-gradient(145deg, #0F172A 0%, #1a0a2e 50%, #0F172A 100%)' }}>
        
        {/* Ambient CSS Animation */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-brand-500/10 blur-[100px] animate-[pulse_60s_ease-in-out_infinite]" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] rounded-full bg-purple-500/10 blur-[120px] animate-[pulse_60s_ease-in-out_infinite_reverse]" />
          <div className="absolute top-[40%] left-[60%] w-[400px] h-[400px] rounded-full bg-teal-500/10 blur-[100px] animate-[pulse_45s_ease-in-out_infinite]" />
        </div>

        <div className="relative z-10 flex flex-col h-full p-12">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <span className="font-display font-bold text-xl tracking-tight text-white">
              NexRole AI
            </span>
          </div>

          {/* Centered Content */}
          <div className="flex-1 flex flex-col justify-center max-w-md">
            <h1 className="text-3xl font-light italic text-white leading-snug mb-10">
              "{getQuote()}"
            </h1>

            {/* Testimonial Card */}
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-5 border border-white/10">
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-amber-400 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-sm text-white/80 leading-relaxed mb-4">
                "NexRole AI gave me a clear path. Got hired as a GenAI Engineer in 4 months."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-xs font-bold text-white">
                  AK
                </div>
                <div>
                  <div className="text-xs font-bold text-white/90">Arjun K.</div>
                  <div className="text-[11px] text-white/60">GenAI Engineer · Juspay</div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Stats */}
          <div className="mt-auto">
            <p className="text-xs text-white/40 font-medium tracking-wide">
              2,400+ learners · 8 domains · 94% job match
            </p>
          </div>
        </div>
      </div>

      {/* Right Panel (Form) */}
      <div className="flex-1 flex flex-col justify-center items-center p-6 bg-white dark:bg-[#080B14]">
        <div className="w-full max-w-[400px]">
          {/* Mobile Logo (hidden on desktop) */}
          <div className="lg:hidden flex items-center gap-2 mb-10">
            <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-brand-50 dark:bg-brand-900/30">
              <Zap className="w-5 h-5 text-brand-600 dark:text-brand-400" />
            </div>
            <span className="font-display font-bold text-xl tracking-tight text-text-primary">
              NexRole AI
            </span>
          </div>

          <Outlet />
        </div>
      </div>
    </div>
  );
};
