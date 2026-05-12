import React from 'react';
import { motion } from 'framer-motion';
import { GreetingBar } from './components/GreetingBar';
import { StatsRow } from './components/StatsRow';
import { ContinueLearning } from './components/ContinueLearning';
import { TwoColumnRow } from './components/TwoColumnRow';
import { RecommendedDomains } from './components/RecommendedDomains';
import { DailyChallenge } from './components/DailyChallenge';

const sectionVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.45, ease: 'easeOut' }
  })
};

const Section = ({ children, index }: { children: React.ReactNode; index: number }) => (
  <motion.div
    custom={index}
    initial="hidden"
    animate="visible"
    variants={sectionVariants}
  >
    {children}
  </motion.div>
);

export const DashboardPage = () => {
  return (
    <div className="flex flex-col gap-8 max-w-[1400px] mx-auto w-full">
      
      {/* Greeting Bar */}
      <Section index={0}>
        <GreetingBar />
      </Section>

      {/* Stats Row */}
      <Section index={1}>
        <StatsRow />
      </Section>

      {/* Continue Learning */}
      <Section index={2}>
        <ContinueLearning />
      </Section>

      {/* Two Column: Activity + Streak */}
      <Section index={3}>
        <TwoColumnRow />
      </Section>

      {/* Recommended Domains */}
      <Section index={4}>
        <RecommendedDomains />
      </Section>

      {/* Daily Challenge */}
      <Section index={5}>
        <DailyChallenge />
      </Section>

    </div>
  );
};

export default DashboardPage;
