import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Zap } from 'lucide-react';
import { toast } from 'sonner';

import { StepIndicator } from './components/StepIndicator';
import { GoalStep } from './steps/GoalStep';
import { LevelStep } from './steps/LevelStep';
import { ResumeStep } from './steps/ResumeStep';
import { DomainStep } from './steps/DomainStep';
import { ReadyStep } from './steps/ReadyStep';
import api from '../../services/api.client';
import { useAuthStore } from '../../store';

const TOTAL_STEPS = 5;

export const OnboardingFlow = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [direction, setDirection] = useState(1); // 1 for forward, -1 for backward
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();
  const { user, setUser } = useAuthStore();

  // Load from localStorage or start fresh
  const [onboardingData, setOnboardingData] = useState(() => {
    const saved = localStorage.getItem('nexrole_onboarding');
    return saved ? JSON.parse(saved) : {
      targetRole: '',
      companyType: '',
      experienceLevel: '',
      hoursPerWeek: 8,
      skills: [],
      resumeUploaded: false,
      selectedDomain: null
    };
  });

  // Save to localStorage whenever data changes
  useEffect(() => {
    localStorage.setItem('nexrole_onboarding', JSON.stringify(onboardingData));
  }, [onboardingData]);

  const updateData = (newData: any) => {
    setOnboardingData((prev: any) => ({ ...prev, ...newData }));
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentStep((prev) => Math.min(prev + 1, TOTAL_STEPS));
  };

  const handleBack = () => {
    setDirection(-1);
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const handleSubmit = async () => {
    try {
      setIsSubmitting(true);
      
      // Post to backend with mapped keys
      const response = await api.post('/auth/onboarding', {
        targetRole: onboardingData.targetRole,
        targetCompany: onboardingData.companyType,
        experienceLevel: onboardingData.experienceLevel.toUpperCase(),
        weeklyHours: onboardingData.hoursPerWeek,
        selectedDomainSlug: onboardingData.selectedDomain,
        skills: onboardingData.skills
      });
      
      const body = response.data as any;
      
      // Update local user state so OnboardingGuard lets them pass
      if (user) {
        setUser({ 
          ...user, 
          ...body.data.user,
          onboarded: body.data.user.onboardingComplete 
        });
      }

      // Clear cache
      localStorage.removeItem('nexrole_onboarding');
      
      // Go to dashboard
      navigate('/dashboard');
    } catch (error: any) {
      toast.error(error.response?.data?.message || 'Failed to complete onboarding');
      setIsSubmitting(false);
    }
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 40 : -40,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 40 : -40,
      opacity: 0
    })
  };

  return (
    <div className="min-h-screen bg-bg-primary flex flex-col items-center">
      
      {/* Minimal Header */}
      <header className="w-full h-20 flex items-center justify-center px-6 border-b border-transparent">
        <div className="flex items-center gap-2">
          <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-blue-50 dark:bg-blue-900/30">
            <Zap className="w-5 h-5 text-brand-600 dark:text-brand-400" />
          </div>
          <span className="font-display font-bold text-lg tracking-tight text-text-primary">
            NexRole AI
          </span>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 w-full max-w-2xl px-6 py-12 flex flex-col">
        
        {/* Only show progress indicator for steps 1-4 */}
        {currentStep < TOTAL_STEPS && (
          <StepIndicator currentStep={currentStep} totalSteps={TOTAL_STEPS - 1} />
        )}

        <div className="relative flex-1">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentStep}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
              className="w-full"
            >
              {currentStep === 1 && (
                <GoalStep 
                  data={onboardingData} 
                  updateData={updateData} 
                  onNext={handleNext} 
                />
              )}
              {currentStep === 2 && (
                <LevelStep 
                  data={onboardingData} 
                  updateData={updateData} 
                  onNext={handleNext} 
                  onBack={handleBack} 
                />
              )}
              {currentStep === 3 && (
                <ResumeStep 
                  data={onboardingData} 
                  updateData={updateData} 
                  onNext={handleNext} 
                  onBack={handleBack} 
                />
              )}
              {currentStep === 4 && (
                <DomainStep 
                  data={onboardingData} 
                  updateData={updateData} 
                  onNext={handleNext} 
                  onBack={handleBack} 
                />
              )}
              {currentStep === TOTAL_STEPS && (
                <ReadyStep 
                  data={onboardingData} 
                  onSubmit={handleSubmit}
                  isSubmitting={isSubmitting}
                />
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
};

export default OnboardingFlow;
