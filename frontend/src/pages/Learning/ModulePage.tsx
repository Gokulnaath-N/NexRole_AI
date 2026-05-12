import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import ReactMarkdown from 'react-markdown';
import rehypeHighlight from 'rehype-highlight';
import 'highlight.js/styles/github-dark.css';
import { 
  ChevronLeft, 
  ChevronRight, 
  CheckCircle2, 
  Clock, 
  BookOpen, 
  Trophy, 
  ArrowLeft,
  Share2,
  Bookmark,
  AlertCircle
} from 'lucide-react';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';

import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { AITutor } from './components/AITutor';
import { ModuleInfo, LearningProgress } from './components/SidebarCards';
import { learningService } from '../../services/learning.service';
import { useConfetti } from '../../hooks/useConfetti';
import { ModuleCardSkeleton } from '../../components/skeletons';

export const ModulePage = () => {
  const { moduleId } = useParams();
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { celebrate } = useConfetti();
  const [isCompleting, setIsCompleting] = useState(false);

  const { data: module, isLoading, error } = useQuery({
    queryKey: ['module', moduleId],
    queryFn: () => learningService.getModule(moduleId!),
    enabled: !!moduleId
  });

  const [isCompleted, setIsCompleted] = useState(false);

  useEffect(() => {
    if (module?.userProgress?.completed) {
      setIsCompleted(true);
    } else {
      setIsCompleted(false);
    }
  }, [module]);

  const handleMarkComplete = async () => {
    if (isCompleted || isCompleting) return;
    setIsCompleting(true);
    try {
      const res = await learningService.markComplete(moduleId!);
      const { xpEarned, streakUpdated, levelUp, certificateIssued } = res;
      
      setIsCompleted(true);
      celebrate();
      
      toast.success(`Module complete! +${xpEarned} XP earned 🎉`);
      
      if (streakUpdated) {
        toast.info('🔥 Streak updated!');
      }
      if (levelUp) {
        toast.success(`⚡ Level Up! You are now ${levelUp.newLevelName}`);
      }
      if (certificateIssued) {
        toast.success('🏆 Certificate earned! Check your profile.');
      }

      // Invalidate queries to refresh dashboard/stats
      queryClient.invalidateQueries({ queryKey: ['user-stats'] });
      queryClient.invalidateQueries({ queryKey: ['user-me'] });
      queryClient.invalidateQueries({ queryKey: ['module', moduleId] });

      // Navigate to next module after 2.5s
      if (module.nextModuleId) {
        setTimeout(() => {
          navigate(`/learn/${module.nextModuleId}`);
        }, 2500);
      }
    } catch (err) {
      toast.error('Failed to save progress. Try again.');
    } finally {
      setIsCompleting(false);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-bg-primary p-12">
        <div className="max-w-4xl mx-auto space-y-8">
          <ModuleCardSkeleton />
        </div>
      </div>
    );
  }

  if (error || !module) {
    return (
      <div className="min-h-screen bg-bg-primary flex flex-col items-center justify-center p-6 text-center">
        <div className="w-16 h-16 rounded-full bg-red-50 dark:bg-red-900/20 flex items-center justify-center mb-4">
          <AlertCircle className="w-8 h-8 text-red-500" />
        </div>
        <h2 className="text-2xl font-display font-bold text-text-primary mb-2">Module Not Found</h2>
        <p className="text-text-secondary mb-8 max-w-xs">The module you're looking for doesn't exist or is not available yet.</p>
        <Button onClick={() => navigate('/domains')}>Back to Domains</Button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-bg-primary flex flex-col">
      {/* Learning Navbar */}
      <nav className="sticky top-0 z-50 h-16 bg-bg-primary/80 backdrop-blur-xl border-b border-border-subtle flex items-center px-6 lg:px-8">
        <div className="flex items-center gap-4 flex-1">
          <Button variant="ghost" size="sm" onClick={() => navigate(-1)} className="text-text-tertiary">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back
          </Button>
          <div className="h-4 w-px bg-border-subtle" />
          <div className="flex flex-col">
            <span className="text-[10px] font-black text-brand-600 uppercase tracking-widest leading-none mb-1">
              {module.domain?.name}
            </span>
            <span className="text-sm font-bold text-text-primary leading-none">
              {module.title}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-2 mr-4">
            <span className="text-[10px] font-bold text-text-tertiary uppercase">
              Module {module.moduleIndex} of {module.totalModules}
            </span>
            <Progress value={(module.moduleIndex / module.totalModules) * 100} className="w-24 h-1.5" />
          </div>
          <Button variant="ghost" size="icon" className="text-text-tertiary"><Bookmark className="w-5 h-5" /></Button>
          <Button variant="ghost" size="icon" className="text-text-tertiary"><Share2 className="w-5 h-5" /></Button>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row flex-1 p-6 lg:p-12 gap-12">
        {/* Left Content Panel */}
        <motion.main 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex-1 min-w-0"
        >
          {/* Content Meta */}
          <div className="flex flex-wrap items-center gap-4 mb-8">
            <Badge variant="secondary" className="bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400 border-blue-100 dark:border-blue-800 flex items-center gap-1.5 px-3 py-1">
              <Clock className="w-3 h-3" /> {module.duration || 15} min
            </Badge>
            <Badge variant="secondary" className="bg-purple-50 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400 border-purple-100 dark:border-purple-800 flex items-center gap-1.5 px-3 py-1">
              <BookOpen className="w-3 h-3" /> {module.type}
            </Badge>
            <Badge variant="secondary" className="bg-amber-50 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400 border-amber-100 dark:border-amber-800 flex items-center gap-1.5 px-3 py-1">
              <Trophy className="w-3 h-3" /> +{module.xpReward || 50} XP
            </Badge>
          </div>

          {/* Markdown Content */}
          <article className="prose prose-slate max-w-none dark:prose-invert 
            prose-headings:font-display prose-headings:font-black prose-headings:tracking-tight
            prose-p:text-text-secondary prose-p:leading-relaxed prose-p:text-lg
            prose-pre:bg-slate-900 prose-pre:border prose-pre:border-slate-800 prose-pre:shadow-2xl prose-pre:rounded-2xl
            prose-blockquote:border-l-4 prose-blockquote:border-brand-500 prose-blockquote:bg-brand-50/50 prose-blockquote:dark:bg-brand-950/20 prose-blockquote:py-1 prose-blockquote:rounded-r-xl
          ">
            <ReactMarkdown rehypePlugins={[rehypeHighlight]}>
              {module.content}
            </ReactMarkdown>
          </article>

          {/* Bottom Navigation */}
          <div className="mt-16 pt-8 border-t border-border-subtle flex flex-col sm:flex-row items-center justify-between gap-6">
            {module.prevModuleId ? (
              <Button 
                variant="outline" 
                onClick={() => navigate(`/learn/${module.prevModuleId}`)}
                className="w-full sm:w-auto h-12 px-8 font-bold border-border-default group"
              >
                <ChevronLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" /> 
                Previous Module
              </Button>
            ) : <div className="hidden sm:block w-40" />}
            
            <Button 
              size="lg"
              onClick={handleMarkComplete}
              disabled={isCompleted || isCompleting}
              className={`w-full sm:w-auto h-12 px-12 font-black text-lg transition-all ${
                isCompleted 
                  ? 'bg-green-600 hover:bg-green-600 opacity-100 cursor-default' 
                  : 'bg-brand-600 hover:bg-brand-700 shadow-xl shadow-brand-500/20'
              }`}
            >
              {isCompleting ? (
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Completing...
                </div>
              ) : isCompleted ? (
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5" /> Completed
                </div>
              ) : (
                `Mark Complete — Earn ${module.xpReward || 50} XP`
              )}
            </Button>

            {module.nextModuleId ? (
              <Button 
                variant="outline" 
                onClick={() => navigate(`/learn/${module.nextModuleId}`)}
                className="w-full sm:w-auto h-12 px-8 font-bold border-border-default group"
              >
                Next Module 
                <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            ) : <div className="hidden sm:block w-40" />}
          </div>
        </motion.main>

        {/* Right Sidebar Panel */}
        <aside className="w-full lg:w-[380px] shrink-0">
          <div className="sticky top-28 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <AITutor
                domainSlug={module.domain?.slug}
                moduleId={moduleId}
                contextTitle={`${module.domain?.name ?? 'Course'} · ${module.title}`}
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="space-y-6"
            >
              <ModuleInfo module={module} />
              <LearningProgress module={module} />
            </motion.div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default ModulePage;
