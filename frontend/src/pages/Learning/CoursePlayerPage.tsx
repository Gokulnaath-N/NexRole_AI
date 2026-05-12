import React, { useEffect, useMemo, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import ReactMarkdown from 'react-markdown';
import rehypeHighlight from 'rehype-highlight';
import 'highlight.js/styles/github-dark.css';
import { toast } from 'sonner';
import {
  ArrowLeft,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Clock,
  ListChecks,
  PlayCircle,
  Sparkles,
} from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

import { learningService } from '../../services/learning.service';
import { youtubeService, YouTubeVideo } from '../../services/youtube.service';
import { aiService } from '../../services/ai.service';
import { AITutor } from './components/AITutor';

type CourseIdParam = { courseId?: string };

const pct = (v: any) => {
  const n = Number(v);
  if (Number.isNaN(n)) return 0;
  return Math.min(100, Math.max(0, n));
};

const notesToMarkdown = (n: any) => {
  if (!n || typeof n !== 'object') return '';
  const lines: string[] = [];
  if (n.title) lines.push(`# ${n.title}`);
  if (n.summary) lines.push(`\n${n.summary}`);
  if (Array.isArray(n.important_points) && n.important_points.length) {
    lines.push(`\n## Important points`);
    for (const p of n.important_points) lines.push(`- ${p}`);
  }
  if (Array.isArray(n.key_concepts) && n.key_concepts.length) {
    lines.push(`\n## Key concepts`);
    for (const kc of n.key_concepts) {
      lines.push(`\n### ${kc.concept || 'Concept'}`);
      if (kc.explanation) lines.push(kc.explanation);
      if (kc.analogy) lines.push(`\n**Analogy:** ${kc.analogy}`);
      if (kc.example) lines.push(`\n**Example:** ${kc.example}`);
    }
  }
  if (Array.isArray(n.common_mistakes) && n.common_mistakes.length) {
    lines.push(`\n## Common mistakes`);
    for (const m of n.common_mistakes) lines.push(`- ${m}`);
  }
  if (Array.isArray(n.interview_tips) && n.interview_tips.length) {
    lines.push(`\n## Interview tips`);
    for (const t of n.interview_tips) lines.push(`- ${t}`);
  }
  if (n.quick_revision) lines.push(`\n## Quick revision\n\n${n.quick_revision}`);
  if (Array.isArray(n.further_reading) && n.further_reading.length) {
    lines.push(`\n## Further reading`);
    for (const r of n.further_reading) lines.push(`- ${r}`);
  }
  return lines.join('\n');
};

export const CoursePlayerPage = () => {
  const { courseId } = useParams<CourseIdParam>();
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const [activeModuleId, setActiveModuleId] = useState<string | null>(null);
  const [tab, setTab] = useState<'lesson' | 'video' | 'notes' | 'quiz'>('lesson');
  const [selectedVideoId, setSelectedVideoId] = useState<string | null>(null);
  const [isCompleting, setIsCompleting] = useState(false);

  const domainSlug = courseId;

  const { data: domain, isLoading: isDomainLoading, error: domainError } = useQuery({
    queryKey: ['learning-domain', domainSlug],
    queryFn: () => learningService.getDomain(domainSlug!),
    enabled: !!domainSlug,
    staleTime: 60_000,
  });

  const { data: domainProgress } = useQuery({
    queryKey: ['learning-domain-progress', domainSlug],
    queryFn: () => learningService.getDomainProgress(domainSlug!),
    enabled: !!domainSlug,
    staleTime: 15_000,
  });

  useEffect(() => {
    if (!domain) return;
    if (activeModuleId) return;
    const resume =
      domainProgress?.nextModule?.id ||
      domainProgress?.currentModuleId ||
      domain?.modules?.find((m: any) => m?.userProgress?.completed !== true)?.id ||
      domain?.modules?.[0]?.id;
    if (resume) setActiveModuleId(resume);
  }, [domain, domainProgress, activeModuleId]);

  const { data: module, isLoading: isModuleLoading } = useQuery({
    queryKey: ['learning-module', activeModuleId],
    queryFn: () => learningService.getModule(activeModuleId!),
    enabled: !!activeModuleId,
  });

  const progressPercent = useMemo(() => {
    const p = domainProgress?.percent ?? domain?.userProgress?.percent;
    return pct(p);
  }, [domainProgress, domain]);

  const moduleTitle = module?.title || 'Module';
  const courseTitle = domain?.name || 'Course';

  const { data: videos, isLoading: isVideosLoading } = useQuery({
    queryKey: ['learning-youtube', domainSlug, module?.title],
    queryFn: async () => {
      const q = `${domain?.name || ''} ${module?.title || ''} tutorial`;
      return youtubeService.searchEducationalVideos(q, 8);
    },
    enabled: tab === 'video' && !!domainSlug && !!module?.title,
    staleTime: 10 * 60_000,
  });

  useEffect(() => {
    if (tab !== 'video') return;
    if (selectedVideoId) return;
    const first = videos?.[0]?.id;
    if (first) setSelectedVideoId(first);
  }, [tab, videos, selectedVideoId]);

  const { data: notes, isFetching: isNotesLoading } = useQuery({
    queryKey: ['learning-notes', activeModuleId],
    queryFn: () => aiService.generateNotesForModule(activeModuleId!),
    enabled: tab === 'notes' && !!activeModuleId,
    staleTime: 10 * 60_000,
  });

  const handleMarkComplete = async () => {
    if (!activeModuleId || isCompleting) return;
    if (module?.userProgress?.completed) return;
    setIsCompleting(true);
    try {
      const res = await learningService.markComplete(activeModuleId);
      toast.success(`Module complete! +${res?.xpEarned ?? 0} XP earned.`);
      queryClient.invalidateQueries({ queryKey: ['learning-module', activeModuleId] });
      queryClient.invalidateQueries({ queryKey: ['learning-domain-progress', domainSlug] });
      queryClient.invalidateQueries({ queryKey: ['my-learning'] });
      if (module?.nextModuleId) setActiveModuleId(module.nextModuleId);
    } catch {
      toast.error('Failed to save progress. Try again.');
    } finally {
      setIsCompleting(false);
    }
  };

  if (isDomainLoading) {
    return (
      <div className="min-h-screen bg-bg-primary p-8">
        <div className="max-w-6xl mx-auto space-y-6">
          <div className="h-10 w-80 bg-bg-secondary rounded-xl animate-pulse" />
          <div className="h-[70vh] bg-bg-secondary rounded-3xl animate-pulse" />
        </div>
      </div>
    );
  }

  if (domainError || !domain) {
    return (
      <div className="min-h-screen bg-bg-primary flex flex-col items-center justify-center p-8 text-center">
        <h2 className="text-2xl font-display font-bold text-text-primary mb-2">Course Not Found</h2>
        <p className="text-text-secondary mb-6 max-w-sm">
          This course is unavailable. Try returning to your learning dashboard.
        </p>
        <Button onClick={() => navigate('/learning')}>Back to My Learning</Button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-bg-primary flex flex-col">
      <nav className="sticky top-0 z-50 h-16 bg-bg-primary/80 backdrop-blur-xl border-b border-border-subtle flex items-center px-4 lg:px-8">
        <div className="flex items-center gap-3 flex-1 min-w-0">
          <Button variant="ghost" size="sm" onClick={() => navigate('/learning')} className="text-text-tertiary">
            <ArrowLeft className="w-4 h-4 mr-2" /> My Learning
          </Button>
          <div className="hidden md:block h-4 w-px bg-border-subtle" />
          <div className="min-w-0">
            <div className="text-[10px] font-black text-brand-600 uppercase tracking-widest truncate">
              {courseTitle}
            </div>
            <div className="text-sm font-bold text-text-primary truncate">{moduleTitle}</div>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <div className="w-44">
            <div className="flex items-center justify-between mb-1 text-[10px] font-bold text-text-tertiary">
              <span>Progress</span>
              <span className="text-brand-600">{progressPercent}%</span>
            </div>
            <Progress value={progressPercent} className="h-2" />
          </div>
          <Badge variant="secondary" className="bg-bg-secondary border-border-subtle">
            <Sparkles className="w-3 h-3 mr-1" /> +{module?.xpReward ?? 50} XP
          </Badge>
        </div>
      </nav>

      <div className="flex-1 flex flex-col lg:flex-row">
        {/* Left Curriculum */}
        <aside className="lg:w-[340px] border-r border-border-subtle bg-bg-secondary/30">
          <div className="p-5 border-b border-border-subtle">
            <div className="flex items-center justify-between gap-3">
              <div className="min-w-0">
                <div className="text-sm font-bold text-text-primary truncate">{domain.name}</div>
                <div className="text-xs text-text-tertiary flex items-center gap-2">
                  <ListChecks className="w-3.5 h-3.5" /> {domain.modules?.length ?? 0} modules
                </div>
              </div>
              <Badge variant="outline" className="text-[10px] font-black">
                {progressPercent}% complete
              </Badge>
            </div>
          </div>

          <div className="p-3 overflow-y-auto max-h-[calc(100vh-4rem-5rem)] lg:max-h-[calc(100vh-4rem)]">
            {(domain.modules ?? []).map((m: any, idx: number) => {
              const selected = m.id === activeModuleId;
              const completed = m.userProgress?.completed === true;
              return (
                <button
                  key={m.id}
                  onClick={() => setActiveModuleId(m.id)}
                  className={`w-full text-left p-3 rounded-2xl border transition-all mb-2 ${
                    selected
                      ? 'bg-bg-elevated border-brand-500/40 shadow-sm'
                      : 'bg-bg-secondary border-border-subtle hover:border-border-strong'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div
                      className={`mt-0.5 w-8 h-8 rounded-xl flex items-center justify-center border shrink-0 ${
                        completed
                          ? 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800'
                          : 'bg-bg-primary border-border-subtle'
                      }`}
                      title={completed ? 'Completed' : 'Not completed'}
                    >
                      {completed ? (
                        <CheckCircle2 className="w-4 h-4 text-green-600 dark:text-green-400" />
                      ) : (
                        <span className="text-xs font-black text-text-tertiary">{idx + 1}</span>
                      )}
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="text-xs font-bold text-text-primary truncate">{m.title}</div>
                      <div className="mt-1 flex items-center gap-2 text-[10px] text-text-tertiary font-medium">
                        <span className="inline-flex items-center gap-1">
                          <Clock className="w-3 h-3" /> {m.durationMinutes ?? 15}m
                        </span>
                        <span className="inline-flex items-center gap-1">
                          <PlayCircle className="w-3 h-3" /> {m.type ?? 'READING'}
                        </span>
                      </div>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 min-w-0">
          <div className="max-w-4xl mx-auto px-4 lg:px-10 py-8">
            <div className="flex flex-col gap-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h1 className="text-2xl font-display font-black text-text-primary">{moduleTitle}</h1>
                  <p className="text-sm text-text-secondary mt-1">{module?.description}</p>
                </div>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    onClick={() => module?.prevModuleId && setActiveModuleId(module.prevModuleId)}
                    disabled={!module?.prevModuleId}
                  >
                    <ChevronLeft className="w-4 h-4 mr-1" /> Prev
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => module?.nextModuleId && setActiveModuleId(module.nextModuleId)}
                    disabled={!module?.nextModuleId}
                  >
                    Next <ChevronRight className="w-4 h-4 ml-1" />
                  </Button>
                </div>
              </div>

              <Tabs value={tab} onValueChange={(v) => setTab(v as any)} className="w-full">
                <TabsList className="w-full justify-start bg-transparent border-b border-border-subtle rounded-none h-auto p-0 overflow-x-auto no-scrollbar">
                  <TabsTrigger
                    value="lesson"
                    className="rounded-none border-b-2 border-transparent data-[state=active]:border-brand-500 data-[state=active]:bg-transparent data-[state=active]:text-brand-600 px-6 py-3 font-bold text-sm"
                  >
                    Lesson
                  </TabsTrigger>
                  <TabsTrigger
                    value="video"
                    className="rounded-none border-b-2 border-transparent data-[state=active]:border-brand-500 data-[state=active]:bg-transparent data-[state=active]:text-brand-600 px-6 py-3 font-bold text-sm"
                  >
                    Video
                  </TabsTrigger>
                  <TabsTrigger
                    value="notes"
                    className="rounded-none border-b-2 border-transparent data-[state=active]:border-brand-500 data-[state=active]:bg-transparent data-[state=active]:text-brand-600 px-6 py-3 font-bold text-sm"
                  >
                    AI Notes
                  </TabsTrigger>
                  <TabsTrigger
                    value="quiz"
                    className="rounded-none border-b-2 border-transparent data-[state=active]:border-brand-500 data-[state=active]:bg-transparent data-[state=active]:text-brand-600 px-6 py-3 font-bold text-sm"
                  >
                    Quiz
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="lesson" className="mt-6">
                  {isModuleLoading ? (
                    <div className="h-40 bg-bg-secondary rounded-2xl animate-pulse" />
                  ) : (
                    <article
                      className="prose prose-slate max-w-none dark:prose-invert
                        prose-headings:font-display prose-headings:font-black prose-headings:tracking-tight
                        prose-p:text-text-secondary prose-p:leading-relaxed prose-p:text-lg
                        prose-pre:bg-slate-900 prose-pre:border prose-pre:border-slate-800 prose-pre:shadow-2xl prose-pre:rounded-2xl"
                    >
                      <ReactMarkdown rehypePlugins={[rehypeHighlight]}>{module?.content || ''}</ReactMarkdown>
                    </article>
                  )}

                  <div className="mt-10 pt-6 border-t border-border-subtle flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
                    <Button
                      size="lg"
                      onClick={handleMarkComplete}
                      disabled={isCompleting || module?.userProgress?.completed === true || !activeModuleId}
                      className={`h-12 px-10 font-black ${
                        module?.userProgress?.completed
                          ? 'bg-green-600 hover:bg-green-600 cursor-default'
                          : 'bg-brand-600 hover:bg-brand-700 shadow-xl shadow-brand-500/20'
                      }`}
                    >
                      {module?.userProgress?.completed ? 'Completed' : isCompleting ? 'Saving…' : 'Mark Complete'}
                    </Button>
                    <div className="text-xs text-text-tertiary font-medium">
                      Tip: Open the Video tab for a quick walkthrough, then return here to take the quiz.
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="video" className="mt-6">
                  {!import.meta.env.VITE_YOUTUBE_API_KEY ? (
                    <div className="p-6 rounded-2xl border border-border-subtle bg-bg-secondary">
                      <div className="text-sm font-bold text-text-primary mb-1">YouTube not configured</div>
                      <div className="text-sm text-text-secondary">
                        Set <span className="font-mono">VITE_YOUTUBE_API_KEY</span> in <span className="font-mono">frontend/.env</span>.
                      </div>
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 lg:grid-cols-[1.6fr_1fr] gap-6">
                      <div className="rounded-2xl border border-border-subtle bg-bg-elevated overflow-hidden">
                        {selectedVideoId ? (
                          <div className="aspect-video bg-black">
                            <iframe
                              title="YouTube player"
                              className="w-full h-full"
                              src={`https://www.youtube-nocookie.com/embed/${selectedVideoId}?rel=0&modestbranding=1`}
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                              allowFullScreen
                            />
                          </div>
                        ) : (
                          <div className="aspect-video bg-bg-secondary animate-pulse" />
                        )}
                      </div>

                      <div className="space-y-3">
                        <div className="text-xs font-bold text-text-tertiary uppercase tracking-widest">
                          Recommended videos
                        </div>
                        {isVideosLoading ? (
                          <div className="space-y-3">
                            {Array.from({ length: 4 }).map((_, i) => (
                              <div key={i} className="h-16 bg-bg-secondary rounded-xl animate-pulse" />
                            ))}
                          </div>
                        ) : (videos ?? []).length === 0 ? (
                          <div className="text-sm text-text-secondary">
                            No videos found. Try refining the module title or check API key restrictions.
                          </div>
                        ) : (
                          (videos ?? []).map((v: YouTubeVideo) => (
                            <button
                              key={v.id}
                              onClick={() => setSelectedVideoId(v.id)}
                              className={`w-full flex gap-3 p-3 rounded-2xl border text-left transition-all ${
                                v.id === selectedVideoId
                                  ? 'bg-bg-elevated border-brand-500/40 shadow-sm'
                                  : 'bg-bg-secondary border-border-subtle hover:border-border-strong'
                              }`}
                            >
                              <img
                                src={v.thumbnailUrl}
                                alt={v.title}
                                className="w-24 h-14 object-cover rounded-xl border border-border-subtle shrink-0"
                                loading="lazy"
                              />
                              <div className="min-w-0">
                                <div className="text-xs font-bold text-text-primary line-clamp-2">{v.title}</div>
                                <div className="text-[10px] text-text-tertiary mt-1 truncate">{v.channelTitle}</div>
                              </div>
                            </button>
                          ))
                        )}
                      </div>
                    </div>
                  )}
                </TabsContent>

                <TabsContent value="notes" className="mt-6">
                  {isNotesLoading ? (
                    <div className="h-40 bg-bg-secondary rounded-2xl animate-pulse" />
                  ) : !notes ? (
                    <div className="p-6 rounded-2xl border border-border-subtle bg-bg-secondary">
                      <div className="text-sm font-bold text-text-primary mb-1">AI Notes unavailable</div>
                      <div className="text-sm text-text-secondary">
                        Notes generation is handled by the backend AI gateway. If this persists, check the GenAI service health.
                      </div>
                    </div>
                  ) : (
                    <div className="rounded-2xl border border-border-subtle bg-bg-elevated p-6">
                      <div className="text-xs font-bold text-text-tertiary uppercase tracking-widest mb-3">
                        Generated notes
                      </div>
                      <div className="prose prose-slate max-w-none dark:prose-invert">
                        <ReactMarkdown>{notesToMarkdown(notes)}</ReactMarkdown>
                      </div>
                    </div>
                  )}
                </TabsContent>

                <TabsContent value="quiz" className="mt-6">
                  <div className="p-6 rounded-2xl border border-border-subtle bg-bg-secondary">
                    <div className="text-sm font-bold text-text-primary mb-1">Quiz experience</div>
                    <div className="text-sm text-text-secondary">
                      The quiz engine is available via the backend (<span className="font-mono">/quiz</span>). Next step is wiring a full attempt/retake UI here.
                    </div>
                    <div className="mt-4 flex flex-wrap gap-2">
                      <Button
                        variant="outline"
                        onClick={() => activeModuleId && navigate(`/learn/${activeModuleId}`)}
                        disabled={!activeModuleId}
                      >
                        Open Module Quiz View
                      </Button>
                      <Button variant="outline" onClick={() => toast.info('Coming next: adaptive quiz + XP rewards.')}>
                        Generate Practice Quiz
                      </Button>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </main>

        {/* Tutor Panel (Right on desktop, bottom on mobile) */}
        <aside className="lg:w-[380px] border-l border-border-subtle bg-bg-secondary/30">
          <div className="p-4 lg:sticky lg:top-20">
            <AITutor
              domainSlug={domainSlug}
              moduleId={activeModuleId || undefined}
              contextTitle={`${courseTitle} · ${moduleTitle}`}
            />
          </div>
        </aside>
      </div>
    </div>
  );
};

export default CoursePlayerPage;
