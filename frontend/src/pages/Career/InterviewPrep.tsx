import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  Mic, 
  Timer, 
  Play, 
  Pause, 
  RotateCcw, 
  CheckCircle2, 
  AlertCircle, 
  ChevronRight,
  Lightbulb,
  ArrowRight,
  Star,
  Zap,
  Bookmark,
  Send,
  Loader2
} from 'lucide-react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';

import api from '../../services/api.client';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';
import { 
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

const ROLES = [
  { id: 'genai-engineer', name: 'GenAI Engineer', emoji: '⚡' },
  { id: 'mlops-engineer', name: 'MLOps Engineer', emoji: '⚙️' },
  { id: 'data-engineer', name: 'Data Engineer', emoji: '📊' },
  { id: 'ai-pm', name: 'AI Product Manager', emoji: '📋' },
  { id: 'ai-cloud-architect', name: 'AI Cloud Architect', emoji: '☁️' },
  { id: 'ai-security', name: 'AI Security Analyst', emoji: '🛡️' },
];

const CATEGORIES = [
  { id: 'TECHNICAL', label: 'Technical' },
  { id: 'BEHAVIORAL', label: 'Behavioral' },
  { id: 'SYSTEM_DESIGN', label: 'System Design' },
  { id: 'DOMAIN', label: 'Domain' },
];

export const InterviewPrep = () => {
  const queryClient = useQueryClient();
  const [selectedRole, setSelectedRole] = useState(ROLES[0].id);
  const [selectedCategory, setSelectedCategory] = useState('TECHNICAL');
  const [selectedQuestion, setSelectedQuestion] = useState<any>(null);
  const [userAnswer, setUserAnswer] = useState('');
  const [timer, setTimer] = useState(0);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [showModelAnswer, setShowModelAnswer] = useState(false);

  // Timer logic
  useEffect(() => {
    let interval: any;
    if (isTimerRunning) {
      interval = setInterval(() => {
        setTimer(t => t + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isTimerRunning]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const getTimerColor = () => {
    if (timer > 300) return 'text-red-500 bg-red-50 dark:bg-red-900/20';
    if (timer > 180) return 'text-amber-500 bg-amber-50 dark:bg-amber-900/20';
    return 'text-brand-600 bg-brand-50 dark:bg-brand-900/20';
  };

  // Queries
  const { data: questions, isLoading: isLoadingQuestions } = useQuery({
    queryKey: ['interview-questions', selectedRole, selectedCategory],
    queryFn: async () => {
      const res = await api.get(`/interview/questions`, {
        params: { role: selectedRole, category: selectedCategory }
      });
      return res.data.data;
    },
    enabled: !!selectedRole
  });

  // Mutation for evaluation
  const { mutate: evaluate, isPending: isEvaluating, data: evaluation } = useMutation({
    mutationFn: async () => {
      const res = await api.post('/interview/evaluate', {
        question: selectedQuestion.question,
        userAnswer,
        role: selectedRole
      });
      return res.data.data;
    },
    onSuccess: (data) => {
      setIsTimerRunning(false);
      toast.success(`Practice complete! +${data.xpEarned} XP earned`);
      queryClient.invalidateQueries({ queryKey: ['user-stats'] });
      queryClient.invalidateQueries({ queryKey: ['user-me'] });
    },
    onError: () => {
      toast.error('Evaluation failed. Please check your connection.');
    }
  });

  const handleQuestionSelect = (q: any) => {
    setSelectedQuestion(q);
    setUserAnswer('');
    setTimer(0);
    setIsTimerRunning(false);
    setShowModelAnswer(false);
    // Auto-start timer on selection
    setIsTimerRunning(true);
  };

  const wordCount = userAnswer.trim() === '' ? 0 : userAnswer.trim().split(/\s+/).length;

  const getDifficultyColor = (diff: string) => {
    switch (diff) {
      case 'BEGINNER': return 'bg-green-500';
      case 'INTERMEDIATE': return 'bg-amber-500';
      case 'ADVANCED': return 'bg-red-500';
      default: return 'bg-slate-400';
    }
  };

  return (
    <div className="max-w-[1400px] mx-auto p-4 md:p-8">
      <div className="flex flex-col lg:flex-row gap-8">
        
        {/* LEFT PANEL */}
        <aside className="w-full lg:w-[380px] shrink-0 space-y-6">
          <div className="space-y-1">
            <h1 className="text-2xl font-display font-black text-text-primary tracking-tight">Interview Prep</h1>
            <p className="text-sm text-text-tertiary">Practice with real company-style questions</p>
          </div>

          {/* Role Grid */}
          <div className="grid grid-cols-2 gap-2">
            {ROLES.map((role) => (
              <button
                key={role.id}
                onClick={() => setSelectedRole(role.id)}
                className={`p-3 rounded-xl border-2 transition-all flex flex-col items-center gap-1.5 text-center ${
                  selectedRole === role.id 
                    ? 'border-brand-500 bg-brand-50 dark:bg-brand-900/10' 
                    : 'border-border-subtle bg-bg-primary hover:border-border-default'
                }`}
              >
                <span className="text-2xl">{role.emoji}</span>
                <span className={`text-[11px] font-bold ${selectedRole === role.id ? 'text-brand-600' : 'text-text-secondary'}`}>
                  {role.name}
                </span>
                {selectedRole === role.id && (
                  <CheckCircle2 className="w-3 h-3 text-brand-500 absolute top-2 right-2" />
                )}
              </button>
            ))}
          </div>

          {/* Categories */}
          <div className="flex gap-1 p-1 bg-bg-secondary rounded-lg border border-border-subtle overflow-x-auto no-scrollbar">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1.5 rounded-md text-[11px] font-black uppercase tracking-wider transition-all whitespace-nowrap ${
                  selectedCategory === cat.id 
                    ? 'bg-white dark:bg-slate-800 text-brand-600 shadow-sm' 
                    : 'text-text-tertiary hover:text-text-secondary'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Question List */}
          <div className="space-y-2 max-h-[500px] overflow-y-auto pr-2 custom-scrollbar">
            {isLoadingQuestions ? (
              Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="h-14 bg-bg-secondary rounded-lg animate-pulse" />
              ))
            ) : questions?.length > 0 ? (
              questions.map((q: any) => (
                <button
                  key={q.id}
                  onClick={() => handleQuestionSelect(q)}
                  className={`w-full text-left p-3 rounded-lg border transition-all group flex items-start gap-3 ${
                    selectedQuestion?.id === q.id 
                      ? 'border-brand-300 bg-brand-50/50 dark:bg-brand-900/5 dark:border-brand-800 border-l-4 border-l-brand-500' 
                      : 'border-border-subtle bg-bg-primary hover:border-border-default'
                  }`}
                >
                  <div className={`w-2 h-2 rounded-full mt-1.5 shrink-0 ${getDifficultyColor(q.difficulty)}`} />
                  <div className="flex-1 min-w-0">
                    <p className={`text-[13px] leading-tight line-clamp-2 ${selectedQuestion?.id === q.id ? 'font-bold text-text-primary' : 'text-text-secondary'}`}>
                      {q.question}
                    </p>
                  </div>
                  <ChevronRight className={`w-4 h-4 shrink-0 transition-transform ${selectedQuestion?.id === q.id ? 'translate-x-1 text-brand-500' : 'text-text-tertiary'}`} />
                </button>
              ))
            ) : (
              <div className="p-8 text-center bg-bg-secondary rounded-xl border border-dashed border-border-default">
                <p className="text-xs text-text-tertiary">No questions found for this category.</p>
              </div>
            )}
          </div>
        </aside>

        {/* RIGHT PANEL */}
        <main className="flex-1 min-w-0">
          <AnimatePresence mode="wait">
            {!selectedQuestion ? (
              <motion.div 
                key="empty"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="h-full min-h-[500px] flex flex-col items-center justify-center p-12 bg-bg-secondary/50 border-2 border-dashed border-border-subtle rounded-3xl"
              >
                <div className="w-20 h-20 rounded-full bg-white dark:bg-slate-900 shadow-xl flex items-center justify-center mb-6">
                  <Mic className="w-10 h-10 text-text-tertiary" />
                </div>
                <h2 className="text-xl font-display font-bold text-text-primary mb-2">Ready to practice?</h2>
                <p className="text-text-tertiary text-center max-w-sm">Pick a role and a question from the left panel to start your AI-powered interview session.</p>
              </motion.div>
            ) : evaluation && !isEvaluating ? (
              <motion.div
                key="results"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="space-y-6"
              >
                {/* Result Summary */}
                <div className={`p-6 rounded-3xl border-2 flex flex-col md:flex-row items-center gap-6 ${
                  evaluation.verdict === 'STRONG' ? 'border-green-500 bg-green-50/30 dark:bg-green-900/10' :
                  evaluation.verdict === 'GOOD' ? 'border-blue-500 bg-blue-50/30 dark:bg-blue-900/10' :
                  evaluation.verdict === 'NEEDS_WORK' ? 'border-amber-500 bg-amber-50/30 dark:bg-amber-900/10' :
                  'border-red-500 bg-red-50/30 dark:bg-red-900/10'
                }`}>
                  <div className="relative w-24 h-24 shrink-0">
                    <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                      <circle cx="18" cy="18" r="16" fill="none" stroke="currentColor" strokeWidth="3" className="opacity-10" />
                      <motion.circle 
                        cx="18" cy="18" r="16" fill="none" stroke="currentColor" strokeWidth="3"
                        strokeDasharray="100, 100"
                        initial={{ strokeDashoffset: 100 }}
                        animate={{ strokeDashoffset: 100 - (evaluation.overallScore * 10) }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        strokeLinecap="round"
                        className={
                          evaluation.verdict === 'STRONG' ? 'text-green-500' :
                          evaluation.verdict === 'GOOD' ? 'text-blue-500' :
                          evaluation.verdict === 'NEEDS_WORK' ? 'text-amber-500' : 'text-red-500'
                        }
                      />
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <span className="text-2xl font-black">{evaluation.overallScore}</span>
                      <span className="text-[10px] font-bold opacity-60">SCORE</span>
                    </div>
                  </div>
                  
                  <div className="flex-1 text-center md:text-left">
                    <h3 className="text-2xl font-display font-black tracking-tight mb-1">
                      {evaluation.verdict === 'STRONG' ? '💪 Strong Answer!' :
                       evaluation.verdict === 'GOOD' ? '👍 Good Effort!' :
                       evaluation.verdict === 'NEEDS_WORK' ? '⚠️ Needs Improvement' :
                       '❌ Needs Major Work'}
                    </h3>
                    <p className="text-text-secondary">Your answer was evaluated by Gemini for accuracy, clarity, and structure.</p>
                  </div>

                  <div className="flex flex-col gap-2">
                    <Button onClick={() => { setUserAnswer(''); setIsTimerRunning(true); setTimer(0); }} variant="outline">Try Again</Button>
                    <Button onClick={() => { /* Load next question */ }} className="bg-brand-600">Next Question →</Button>
                  </div>
                </div>

                {/* Score Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {[
                    { label: 'Technical Accuracy', score: evaluation.scores.technicalAccuracy, color: 'bg-blue-500' },
                    { label: 'Clarity & Structure', score: evaluation.scores.clarity, color: 'bg-green-500' },
                    { label: 'Completeness', score: evaluation.scores.completeness, color: 'bg-amber-500' },
                    { label: 'STAR Format', score: evaluation.scores.starFormat, color: 'bg-purple-500' },
                  ].map((s, i) => (
                    <Card key={i} className="p-4 border-border-subtle bg-bg-primary">
                      <div className="flex justify-between items-end mb-2">
                        <span className="text-[10px] font-black text-text-tertiary uppercase">{s.label}</span>
                        <span className="text-sm font-black">{s.score}/10</span>
                      </div>
                      <div className="h-1.5 w-full bg-bg-secondary rounded-full overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          animate={{ width: `${s.score * 10}%` }}
                          transition={{ duration: 1, delay: 0.5 + i * 0.1 }}
                          className={`h-full ${s.color}`}
                        />
                      </div>
                    </Card>
                  ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Strengths */}
                  <Card className="p-6 border-green-100 dark:border-green-900/30 bg-green-50/10 dark:bg-green-950/5">
                    <div className="flex items-center gap-2 mb-4">
                      <CheckCircle2 className="w-5 h-5 text-green-500" />
                      <h4 className="font-bold text-green-700 dark:text-green-400">Key Strengths</h4>
                    </div>
                    <ul className="space-y-3">
                      {evaluation.strengths.map((s: string, i: number) => (
                        <motion.li 
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.8 + i * 0.1 }}
                          key={i} className="text-sm text-text-secondary flex items-start gap-2"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-1.5 shrink-0" />
                          {s}
                        </motion.li>
                      ))}
                    </ul>
                  </Card>

                  {/* Improvements */}
                  <Card className="p-6 border-amber-100 dark:border-amber-900/30 bg-amber-50/10 dark:bg-amber-950/5">
                    <div className="flex items-center gap-2 mb-4">
                      <AlertCircle className="w-5 h-5 text-amber-500" />
                      <h4 className="font-bold text-amber-700 dark:text-amber-400">Improvement Areas</h4>
                    </div>
                    <ul className="space-y-3">
                      {evaluation.improvements.map((imp: string, i: number) => (
                        <motion.li 
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 1 + i * 0.1 }}
                          key={i} className="text-sm text-text-secondary flex items-start gap-2"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 shrink-0" />
                          {imp}
                        </motion.li>
                      ))}
                    </ul>
                  </Card>
                </div>

                {/* Model Answer */}
                <div className="border border-border-subtle rounded-2xl overflow-hidden">
                  <button 
                    onClick={() => setShowModelAnswer(!showModelAnswer)}
                    className="w-full p-4 flex items-center justify-between bg-purple-50/50 dark:bg-purple-900/10 hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-colors"
                  >
                    <div className="flex items-center gap-2">
                      <Zap className="w-5 h-5 text-purple-500" />
                      <span className="font-bold text-purple-700 dark:text-purple-400">View Model Answer</span>
                    </div>
                    <ChevronRight className={`w-5 h-5 text-purple-400 transition-transform ${showModelAnswer ? 'rotate-90' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {showModelAnswer && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="bg-bg-primary p-6"
                      >
                        <p className="text-sm text-text-secondary leading-relaxed italic">
                          {evaluation.modelAnswer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ) : (
              <motion.div 
                key="workspace"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-6"
              >
                {/* Question Card */}
                <Card className="relative overflow-hidden border-border-subtle bg-bg-primary shadow-xl rounded-3xl">
                  <div className="h-1.5 w-full bg-gradient-to-r from-brand-500 to-purple-500" />
                  
                  <div className="p-8">
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className="bg-bg-secondary uppercase text-[10px] tracking-widest">{selectedQuestion.category}</Badge>
                        <Badge variant="outline" className="bg-bg-secondary uppercase text-[10px] tracking-widest">{selectedQuestion.difficulty}</Badge>
                      </div>
                      
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <div className={`flex items-center gap-3 px-4 py-2 rounded-2xl font-mono text-sm font-bold shadow-inner ${getTimerColor()}`}>
                              <Timer className="w-4 h-4" />
                              {formatTime(timer)}
                            </div>
                          </TooltipTrigger>
                          <TooltipContent>Session Duration</TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </div>

                    <h2 className="text-2xl md:text-3xl font-display font-black text-text-primary leading-[1.3] mb-4">
                      {selectedQuestion.question}
                    </h2>

                    <div className="flex items-center gap-2">
                      <Button variant="ghost" size="sm" onClick={() => setIsTimerRunning(!isTimerRunning)} className="text-text-tertiary">
                        {isTimerRunning ? <Pause className="w-4 h-4 mr-2" /> : <Play className="w-4 h-4 mr-2" />}
                        {isTimerRunning ? 'Pause' : 'Resume'}
                      </Button>
                      <Button variant="ghost" size="sm" onClick={() => setTimer(0)} className="text-text-tertiary">
                        <RotateCcw className="w-4 h-4 mr-2" /> Reset
                      </Button>
                    </div>
                  </div>
                </Card>

                {/* Answer Area */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <label className="text-sm font-black text-text-tertiary uppercase tracking-widest">Your Answer</label>
                    <span className={`text-xs font-bold ${wordCount < 50 ? 'text-amber-500' : 'text-text-tertiary'}`}>
                      {wordCount} words {wordCount < 50 && '(Min 50 for AI feedback)'}
                    </span>
                  </div>

                  <Textarea
                    value={userAnswer}
                    onChange={(e) => setUserAnswer(e.target.value)}
                    placeholder="Type your answer here. Explain your reasoning step-by-step..."
                    className="min-h-[300px] rounded-3xl p-6 text-base leading-relaxed border-border-subtle bg-bg-primary focus-visible:ring-brand-500 resize-none shadow-sm transition-all"
                  />

                  {/* Tips Section */}
                  <Card className="bg-bg-secondary border-none p-4 rounded-2xl">
                    <div className="flex items-start gap-3">
                      <Lightbulb className="w-5 h-5 text-brand-500 shrink-0 mt-0.5" />
                      <div className="space-y-1">
                        <p className="text-sm font-bold text-text-primary">Pro Tips for this question:</p>
                        <ul className="text-xs text-text-tertiary space-y-1 list-disc pl-4">
                          <li>Start with a high-level summary before diving into details.</li>
                          <li>Mention specific tools like LangChain, PyTorch, or Vector DBs where applicable.</li>
                          <li>Discuss trade-offs (e.g., latency vs accuracy).</li>
                        </ul>
                      </div>
                    </div>
                  </Card>

                  {/* Bottom Actions */}
                  <div className="flex items-center justify-between pt-2">
                    <Button variant="ghost" onClick={() => setUserAnswer('')} className="text-red-500 hover:text-red-600 hover:bg-red-50">
                      Clear Answer
                    </Button>
                    
                    <div className="flex items-center gap-3">
                      <Button variant="outline" className="rounded-xl">Save Draft</Button>
                      <Button 
                        onClick={() => evaluate()}
                        disabled={isEvaluating || wordCount < 10}
                        className="bg-purple-600 hover:bg-purple-700 text-white px-8 rounded-xl h-12 shadow-xl shadow-purple-500/20 font-black"
                      >
                        {isEvaluating ? (
                          <>
                            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                            Gemini evaluating...
                          </>
                        ) : (
                          <>
                            Evaluate with AI 
                            <ArrowRight className="ml-2 w-4 h-4" />
                          </>
                        )}
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
};

export default InterviewPrep;
