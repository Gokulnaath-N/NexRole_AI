import React from 'react';
import { useScroll, motion } from 'framer-motion';

// Component Imports
import { LandingNav } from './components/LandingNav';
import { HeroSection } from './components/HeroSection';
import { LogoStrip } from './components/LogoStrip';
import { DomainsSection } from './components/DomainsSection';
import { HowItWorks } from './components/HowItWorks';
import { FeaturesSection } from './components/FeaturesSection';
import { StatsSection } from './components/StatsSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FinalCTA } from './components/FinalCTA';
import { LandingFooter } from './components/LandingFooter';

export const LandingPage = () => {
  const { scrollYProgress } = useScroll();

  return (
    <div className="min-h-screen bg-bg-primary selection:bg-brand-200 selection:text-brand-900 dark:selection:bg-brand-900/50 dark:selection:text-brand-100 flex flex-col">
      
      {/* Scroll Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-[3px] bg-brand-500 origin-left z-[60]"
        style={{ scaleX: scrollYProgress }}
      />

      <LandingNav />
      
      <main className="flex-1 flex flex-col">
        <HeroSection />
        <LogoStrip />
        <DomainsSection />
        <HowItWorks />
        <FeaturesSection />
        <StatsSection />
        <TestimonialsSection />
        <FinalCTA />
      </main>

      <LandingFooter />
    </div>
  );
};

export default LandingPage;
