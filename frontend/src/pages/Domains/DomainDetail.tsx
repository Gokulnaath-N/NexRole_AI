import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronRight, 
  Clock, 
  Users, 
  TrendingUp, 
  CheckCircle2, 
  Lock, 
  PlayCircle,
  BookOpen,
  Trophy,
  ArrowRight,
  Info,
  Github,
  Sparkles,
  AlertCircle,
  Loader2
} from 'lucide-react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';

import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { learningService } from '../../services/learning.service';
import { Skeleton } from '../../components/skeletons';

export const DomainDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const [activeTab, setActiveTab] = useState('overview');
  const [isEnrolling, setIsEnrolling] = useState(false);

  // Fetch Domain Details
  const { data: domain, isLoading, error } = useQuery({
    queryKey: ['domain', slug],
    queryFn: () => learningService.getDomain(slug!),
    enabled: !!slug
  });

  const handleEnroll = async () => {
    if (isEnrolling) return;
    setIsEnrolling(true);
    try {
      await learningService.enrollInDomain(slug!);
      queryClient.invalidateQueries({ queryKey: ['domain', slug] });
      queryClient.invalidateQueries({ queryKey: ['user-stats'] });
      toast.success(`Enrolled in ${domain.name}! 🎉`);
    } catch (err) {
      toast.error('Enrollment failed. Please try again.');
    } finally {
      setIsEnrolling(false);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-bg-primary p-12">
        <Skeleton className="h-[300px] w-full rounded-3xl mb-12" />
        <div className="max-w-6xl mx-auto grid grid-cols-3 gap-12">
          <div className="col-span-2 space-y-6">
            <Skeleton className="h-12 w-1/3" />
            <div className="grid grid-cols-2 gap-4">
              {Array.from({ length: 4 }).map((_, i) => <Skeleton key={i} className="h-24 w-full" />)}
            </div>
          </div>
          <Skeleton className="h-[400px] w-full" />
        </div>
      </div>
    );
  }

  if (error || !domain) {
    return (
      <div className="min-h-screen bg-bg-primary flex flex-col items-center justify-center p-6 text-center">
        <AlertCircle className="w-16 h-16 text-red-500 mb-4" />
        <h2 className="text-2xl font-bold mb-2">Domain Not Found</h2>
        <Button onClick={() => navigate('/domains')}>Back to Explorer</Button>
      </div>
    );
  }

  const isEnrolled = domain.isEnrolled;
  const progress = domain.userProgress || { percent: 0, completedModules: 0, totalModules: domain.modules?.length || 0 };

  const isUnlocked = (moduleIndex: number) => {
    if (moduleIndex === 0) return true;
    const prevModule = domain.modules[moduleIndex - 1];
    return prevModule.userProgress?.completed === true;
  };

  return (
    <div className="flex flex-col min-h-screen bg-bg-primary">
      {/* Hero Section */}
      <section 
        className="relative py-16 px-6 lg:px-12 text-white overflow-hidden"
        style={{ 
          background: `linear-gradient(135deg, ${domain.color || '#3B82F6'} 0%, #080B14 100%)`
        }}
      >
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8 relative z-10">
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="w-24 h-24 lg:w-32 lg:h-32 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center text-5xl lg:text-6xl shadow-2xl"
          >
            {domain.icon}
          </motion.div>
          
          <div className="flex-1 text-center md:text-left">
            <motion.h1 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="text-4xl lg:text-5xl font-display font-black mb-4"
            >
              {domain.name}
            </motion.h1>
            <motion.p 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="text-lg text-white/80 max-w-2xl mb-8"
            >
              {domain.description}
            </motion.p>
            
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="flex flex-wrap items-center justify-center md:justify-start gap-6 text-sm font-medium text-white/70"
            >
              <div className="flex items-center gap-2"><BookOpen className="w-4 h-4" /> {domain.modules?.length} Modules</div>
              <div className="flex items-center gap-2"><Users className="w-4 h-4" /> {domain._count?.enrollments || 0} Enrolled</div>
              <div className="flex items-center gap-2"><TrendingUp className="w-4 h-4" /> High Demand</div>
              <div className="flex items-center gap-2 text-white font-bold bg-white/10 px-3 py-1 rounded-full">{domain.demandScore}% Demand</div>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="w-full md:w-auto"
          >
            {isEnrolled ? (
              <Button 
                size="lg" 
                onClick={() => navigate(`/learn/${domain.currentModuleId || domain.modules[0]?.id}`)}
                className="w-full md:w-auto bg-white text-brand-600 hover:bg-white/90 shadow-xl font-black rounded-2xl h-14 px-8"
              >
                Continue Learning <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            ) : (
              <Button 
                size="lg" 
                onClick={handleEnroll}
                disabled={isEnrolling}
                className="w-full md:w-auto bg-brand-500 text-white hover:bg-brand-600 shadow-xl font-black rounded-2xl h-14 px-8 border-2 border-white/20"
              >
                {isEnrolling ? <Loader2 className="w-5 h-5 animate-spin" /> : "Enroll Now — Free"}
              </Button>
            )}
          </motion.div>
        </div>
        
        {/* Background Decoration */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-white/5 to-transparent pointer-events-none" />
      </section>

      {/* Progress Bar (Only if enrolled) */}
      {isEnrolled && (
        <div className="bg-bg-secondary/50 border-b border-border-subtle py-4">
          <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-4">
            <span className="text-[10px] font-black text-text-tertiary uppercase tracking-widest">Your Progress</span>
            <div className="flex-1 w-full h-3 bg-bg-primary rounded-full overflow-hidden border border-border-subtle">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: `${progress.percent}%` }}
                className="h-full bg-brand-500 rounded-full"
                transition={{ duration: 1, ease: "easeOut" }}
              />
            </div>
            <span className="text-sm font-bold text-brand-600">{progress.percent}% Complete</span>
          </div>
        </div>
      )}

      {/* Main Content */}
      <main className="max-w-6xl mx-auto w-full px-6 py-12">
        <Tabs defaultValue="overview" onValueChange={setActiveTab} className="w-full">
          <TabsList className="w-full justify-start bg-transparent border-b border-border-subtle rounded-none h-auto p-0 mb-8 overflow-x-auto no-scrollbar">
            {['Overview', 'Curriculum', 'Projects', 'Career Paths'].map((tab) => (
              <TabsTrigger 
                key={tab}
                value={tab.toLowerCase().replace(' ', '-')}
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-brand-500 data-[state=active]:bg-transparent data-[state=active]:text-brand-600 px-8 py-4 font-bold text-sm transition-all"
              >
                {tab}
              </TabsTrigger>
            ))}
          </TabsList>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              {/* Overview Tab */}
              <TabsContent value="overview" className="mt-0">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                  <div className="lg:col-span-2 space-y-12">
                    <div>
                      <h3 className="text-2xl font-bold mb-6">Learning Outcomes</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {(domain.learningPoints || ['Master Core Concepts', 'Hands-on Projects', 'Real-world Scenarios', 'AI Tools']).map((point: string, i: number) => (
                          <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-bg-secondary border border-border-subtle">
                            <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                            <span className="text-sm font-medium text-text-secondary">{point}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold mb-6">Domain Certification</h3>
                      <Card className="p-8 border-brand-100 bg-brand-50/10 dark:bg-brand-900/5 relative overflow-hidden">
                        <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
                          <div className="w-24 h-24 rounded-full bg-brand-100 text-brand-600 flex items-center justify-center shadow-inner">
                            <Trophy className="w-12 h-12" />
                          </div>
                          <div className="flex-1 text-center md:text-left">
                            <h4 className="text-xl font-black mb-2">Verified Professional Certificate</h4>
                            <p className="text-sm text-text-secondary mb-4">Complete all modules and projects to earn a shareable certificate for your LinkedIn and Resume.</p>
                            <Badge className="bg-brand-500 uppercase px-4 py-1">NexRole Verified</Badge>
                          </div>
                        </div>
                        <Sparkles className="absolute -bottom-4 -right-4 w-32 h-32 text-brand-500/5" />
                      </Card>
                    </div>
                  </div>

                  <div className="space-y-8">
                    <Card className="p-6 border-border-subtle shadow-sm">
                      <h4 className="font-bold mb-4 flex items-center gap-2">
                        <Info className="w-4 h-4 text-brand-500" />
                        Key Details
                      </h4>
                      <div className="space-y-4">
                        <div className="flex justify-between text-sm">
                          <span className="text-text-tertiary">Difficulty</span>
                          <span className="font-bold">Intermediate</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-text-tertiary">Duration</span>
                          <span className="font-bold">~14 Hours</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-text-tertiary">Language</span>
                          <span className="font-bold">English</span>
                        </div>
                      </div>
                    </Card>

                    <Card className="p-6 border-border-subtle shadow-sm">
                      <h4 className="font-bold mb-4 flex items-center gap-2">
                        <Sparkles className="w-4 h-4 text-purple-500" />
                        Domain Tags
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {['Artificial Intelligence', 'Software Engineering', 'Machine Learning', 'Future Tech'].map((t, i) => (
                          <Badge key={i} variant="secondary" className="bg-bg-secondary text-text-secondary border-border-subtle">
                            {t}
                          </Badge>
                        ))}
                      </div>
                    </Card>
                  </div>
                </div>
              </TabsContent>

              {/* Curriculum Tab */}
              <TabsContent value="curriculum" className="mt-0">
                <div className="space-y-4">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-2xl font-bold">Curriculum</h3>
                    <span className="text-sm text-text-tertiary font-medium">{domain.modules?.length} Modules</span>
                  </div>
                  
                  {domain.modules?.map((m: any, i: number) => {
                    const unlocked = isUnlocked(i);
                    const completed = m.userProgress?.completed;
                    const inProgress = !completed && unlocked;

                    return (
                      <div 
                        key={m.id}
                        className={`group flex flex-col md:flex-row md:items-center gap-6 p-6 rounded-2xl border transition-all duration-300 ${
                          !unlocked 
                            ? 'opacity-50 bg-bg-secondary/50 border-border-subtle cursor-not-allowed' 
                            : 'bg-bg-elevated border-border-subtle hover:border-brand-500/30 hover:shadow-lg'
                        } ${inProgress ? 'ring-2 ring-brand-500 ring-offset-2' : ''}`}
                        onClick={() => {
                          if (!unlocked) {
                            toast.info('Complete the previous module to unlock this one!');
                            return;
                          }
                          navigate(`/learn/${m.id}`);
                        }}
                      >
                        <div className="flex items-center gap-4 shrink-0">
                          <div className="w-10 h-10 rounded-full bg-bg-secondary flex items-center justify-center font-black text-xs text-text-tertiary border border-border-subtle">
                            {i + 1}
                          </div>
                          {completed ? (
                            <CheckCircle2 className="w-6 h-6 text-green-500" />
                          ) : !unlocked ? (
                            <Lock className="w-6 h-6 text-text-tertiary" />
                          ) : (
                            <PlayCircle className="w-6 h-6 text-brand-500 group-hover:scale-110 transition-transform" />
                          )}
                        </div>

                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-1">
                            <h4 className={`font-bold transition-colors ${unlocked ? 'text-text-primary group-hover:text-brand-600' : 'text-text-tertiary'}`}>
                              {m.title}
                            </h4>
                            <Badge variant="outline" className="text-[10px] h-5 px-2 font-black uppercase tracking-tighter">
                              {m.type}
                            </Badge>
                          </div>
                          <div className="flex items-center gap-4 text-[10px] text-text-tertiary font-black uppercase tracking-widest">
                            <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {m.duration} min</span>
                            <span className="flex items-center gap-1"><Trophy className="w-3 h-3" /> {m.xpReward} XP</span>
                          </div>
                        </div>

                        <div className="shrink-0 md:ml-auto">
                          {completed ? (
                            <Button size="sm" variant="ghost" className="text-green-600 font-bold">Review</Button>
                          ) : !unlocked ? (
                            <Button disabled size="sm" variant="ghost" className="text-text-tertiary">Locked</Button>
                          ) : (
                            <Button size="sm" className="bg-brand-600 font-bold px-6">
                              {inProgress ? 'Continue' : 'Start'}
                            </Button>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </TabsContent>

              {/* Projects Tab */}
              <TabsContent value="projects" className="mt-0">
                <div className="flex flex-col items-center justify-center py-20 text-center space-y-4">
                  <div className="w-20 h-20 rounded-full bg-bg-secondary flex items-center justify-center">
                    <Github className="w-10 h-10 text-text-tertiary" />
                  </div>
                  <h3 className="text-xl font-bold">Projects coming soon</h3>
                  <p className="text-text-tertiary max-w-sm">We are finalizing the hands-on projects for this domain. Stay tuned!</p>
                </div>
              </TabsContent>

              {/* Career Paths Tab */}
              <TabsContent value="career-paths" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[
                    { role: 'AI Engineer', companyType: 'AI Startups', salary: '₹18L - ₹45L' },
                    { role: 'MLOps Lead', companyType: 'Tier 1 MNC', salary: '₹30L - ₹65L' },
                    { role: 'Solutions Architect', companyType: 'Enterprise', salary: '₹25L - ₹55L' },
                  ].map((path, i) => (
                    <Card key={i} className="p-8 border-border-subtle hover:border-brand-500/30 transition-all text-center group">
                      <div className="w-16 h-16 rounded-2xl bg-brand-50 text-brand-600 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500 shadow-sm">
                        <TrendingUp className="w-8 h-8" />
                      </div>
                      <h4 className="text-xl font-black mb-2">{path.role}</h4>
                      <Badge variant="outline" className="mb-6 uppercase text-[10px] tracking-widest">{path.companyType}</Badge>
                      <div className="flex flex-col">
                        <span className="text-[10px] font-bold text-text-tertiary uppercase tracking-tighter">Avg Salary</span>
                        <span className="text-lg font-black text-brand-600">{path.salary}</span>
                      </div>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </motion.div>
          </AnimatePresence>
        </Tabs>
      </main>
    </div>
  );
};

export default DomainDetail;
