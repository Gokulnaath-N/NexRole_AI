 import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import {
  BookOpen, Play, CheckCircle2, Clock, Trophy, Flame,
  Star, TrendingUp, ChevronRight, Sparkles, Target, Zap,
  BarChart2, Calendar, Award, ArrowRight, Search
} from 'lucide-react';
import { useQuery } from '@tanstack/react-query';
import { toast } from 'sonner';
import { get, post } from '../../services/api.client';
import { useAuthStore } from '../../store';
import { getLevelFromXP } from '../../utils/getLevelFromXP';
import { formatDistanceToNow } from 'date-fns';

// ─── Data Hooks ──────────────────────────────────────────────────────────────

const useMyLearning = () =>
  useQuery({
    queryKey: ['my-learning'],
    queryFn: async () => {
      const [progressRes, meRes, analyticsRes] = await Promise.all([
        get<any>('/progress/all'),
        get<any>('/auth/me'),
        get<any>('/progress/analytics'),
      ]);
      return {
        enrollments: progressRes.data?.data ?? [],
        user: meRes.data?.data,
        analytics: analyticsRes.data?.data,
      };
    },
    staleTime: 30_000,
  });

const useRecommendedDomains = () =>
  useQuery({
    queryKey: ['domains-all'],
    queryFn: async () => {
      const res = await get<any>('/domains');
      return res.data?.data ?? [];
    },
    staleTime: 60_000,
  });

// ─── Sub-components ──────────────────────────────────────────────────────────

const StatPill = ({ icon: Icon, label, value, color }: any) => (
  <div className="flex items-center gap-3 bg-bg-elevated border border-border-subtle rounded-2xl px-5 py-4 shadow-sm">
    <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${color}`}>
      <Icon className="w-5 h-5" />
    </div>
    <div>
      <div className="text-xl font-black text-text-primary leading-none">{value}</div>
      <div className="text-xs text-text-tertiary font-medium mt-0.5">{label}</div>
    </div>
  </div>
);

const CourseCard = ({ enrollment, onContinue }: { enrollment: any; onContinue: (slug: string) => void }) => {
  const { domain, progressPercent, completedModules, totalModules, nextModule, enrollment: enData } = enrollment;
  const isComplete = progressPercent === 100;

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -2 }}
      className="group bg-bg-elevated border border-border-subtle rounded-2xl overflow-hidden shadow-sm hover:shadow-md hover:border-border-strong transition-all duration-200"
    >
      {/* Color Header */}
      <div className="h-2 w-full" style={{ backgroundColor: domain.color || '#7c3aed' }} />

      <div className="p-6">
        {/* Domain Icon + Name */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl shadow-sm"
              style={{ backgroundColor: `${domain.color}18`, border: `1px solid ${domain.color}30` }}
            >
              {domain.icon}
            </div>
            <div>
              <h3 className="font-bold text-text-primary text-sm leading-tight">{domain.name}</h3>
              <span className="text-[10px] text-text-tertiary font-medium">
                {completedModules} / {totalModules} modules
              </span>
            </div>
          </div>
          {isComplete && (
            <div className="flex items-center gap-1 px-2 py-1 bg-green-50 dark:bg-green-900/20 rounded-full border border-green-200 dark:border-green-800">
              <CheckCircle2 className="w-3 h-3 text-green-500" />
              <span className="text-[10px] font-bold text-green-600 dark:text-green-400">Done</span>
            </div>
          )}
        </div>

        {/* Progress Bar */}
        <div className="mb-4">
          <div className="flex justify-between text-xs mb-1.5">
            <span className="font-semibold" style={{ color: domain.color }}>{progressPercent}% complete</span>
            {!isComplete && nextModule && (
              <span className="text-text-tertiary">Next: {nextModule.title?.slice(0, 20)}...</span>
            )}
          </div>
          <div className="h-2 w-full bg-bg-tertiary rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${progressPercent}%` }}
              transition={{ duration: 1, ease: 'easeOut' }}
              className="h-full rounded-full"
              style={{ backgroundColor: domain.color || '#7c3aed' }}
            />
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3 text-xs text-text-tertiary">
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              {nextModule ? `${nextModule.durationMinutes ?? 15} min` : 'Complete'}
            </span>
            <span className="flex items-center gap-1">
              <Trophy className="w-3 h-3 text-amber-500" />
              +{nextModule?.xpReward ?? 50} XP
            </span>
          </div>
          <button
            onClick={() => onContinue(domain?.slug)}
            disabled={!domain?.slug}
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-white transition-all disabled:opacity-50 disabled:cursor-default group-hover:shadow-md"
            style={{ backgroundColor: isComplete ? '#22c55e' : (domain.color || '#7c3aed') }}
          >
            {isComplete ? (
              <><CheckCircle2 className="w-3.5 h-3.5" /> Completed</>
            ) : (
              <><Play className="w-3.5 h-3.5 fill-current" /> Continue</>
            )}
          </button>
        </div>
      </div>
    </motion.div>
  );
};

const RecommendedCard = ({ domain, onEnroll }: { domain: any; onEnroll: (slug: string) => void }) => (
  <motion.div
    initial={{ opacity: 0, x: 20 }}
    animate={{ opacity: 1, x: 0 }}
    className="flex items-center gap-4 p-4 bg-bg-elevated border border-border-subtle rounded-xl hover:border-border-strong hover:shadow-sm transition-all cursor-pointer group"
    onClick={() => onEnroll(domain.slug)}
  >
    <div
      className="w-10 h-10 rounded-xl flex items-center justify-center text-xl shrink-0"
      style={{ backgroundColor: `${domain.color}18` }}
    >
      {domain.icon}
    </div>
    <div className="flex-1 min-w-0">
      <div className="font-semibold text-sm text-text-primary truncate">{domain.name}</div>
      <div className="text-xs text-text-tertiary">{domain.jobCount ?? 0} jobs · {domain.enrollmentCount ?? 0} enrolled</div>
    </div>
    <ArrowRight className="w-4 h-4 text-text-tertiary group-hover:text-text-primary group-hover:translate-x-0.5 transition-all shrink-0" />
  </motion.div>
);

const WeeklyHeatmap = ({ weeklyProgress }: { weeklyProgress: any[] }) => {
  const today = new Date();
  const days = Array.from({ length: 7 }, (_, i) => {
    const d = new Date(today);
    d.setDate(today.getDate() - (6 - i));
    const dateStr = d.toISOString().split('T')[0];
    const entry = weeklyProgress?.find((w: any) => w.date === dateStr);
    return { date: d, count: entry?.count ?? 0, label: ['S', 'M', 'T', 'W', 'T', 'F', 'S'][d.getDay()] };
  });

  return (
    <div className="flex items-end gap-2">
      {days.map((day, i) => (
        <div key={i} className="flex flex-col items-center gap-1.5">
          <div
            className={`w-8 h-8 rounded-lg transition-colors ${
              day.count > 0
                ? 'bg-brand-500 shadow-sm'
                : 'bg-bg-tertiary'
            }`}
            title={`${day.date.toLocaleDateString()}: ${day.count} modules`}
          />
          <span className="text-[10px] text-text-tertiary font-medium">{day.label}</span>
        </div>
      ))}
    </div>
  );
};

// ─── Main Page ────────────────────────────────────────────────────────────────

const TABS = ['In Progress', 'Completed', 'Saved', 'Recommended'];

export const MyLearningPage = () => {
  const navigate = useNavigate();
  const { user } = useAuthStore();
  const [activeTab, setActiveTab] = useState('In Progress');
  const [search, setSearch] = useState('');
  const [savedSlugs, setSavedSlugs] = useState<string[]>(() => {
    try {
      const raw = window.localStorage.getItem('nexrole:savedCourses');
      const arr = raw ? JSON.parse(raw) : [];
      return Array.isArray(arr) ? arr.filter((x) => typeof x === 'string') : [];
    } catch {
      return [];
    }
  });

  const { data, isLoading } = useMyLearning();
  const { data: allDomains } = useRecommendedDomains();

  const enrollments: any[] = data?.enrollments ?? [];
  const userData = data?.user;
  const analytics = data?.analytics;

  const xp = userData?.xp ?? 0;
  const levelInfo = getLevelFromXP(xp);
  const streak = userData?.streak ?? 0;
  const totalCompleted = enrollments.reduce((s, e) => s + (e.completedModules ?? 0), 0);
  const savedSet = new Set(savedSlugs);
  const savedDomains = (allDomains ?? []).filter((d: any) => savedSet.has(d.slug));

  // Filter enrollments by tab (robust to progressPercent being string/null)
  const filteredEnrollments = enrollments.filter((e: any) => {
    const matchSearch = !search || e.domain.name.toLowerCase().includes(search.toLowerCase());
    const progress = Number(e.progressPercent ?? 0);

    if (activeTab === 'In Progress') return matchSearch && progress < 100;
    if (activeTab === 'Completed') return matchSearch && progress === 100;
    return false;
  });

  // Domains the user is already enrolled in
  const enrolledSlugs = new Set(enrollments.map((e: any) => e.domain.slug));

  const filteredSaved = savedDomains.filter((d: any) =>
    !search || d.name.toLowerCase().includes(search.toLowerCase())
  );

  const filteredRecommended = (allDomains ?? [])
    .filter((d: any) => !enrolledSlugs.has(d.slug))
    .filter((d: any) => !search || d.name.toLowerCase().includes(search.toLowerCase()))
    .slice(0, 12);

  const recommended = (allDomains ?? []).filter((d: any) => !enrolledSlugs.has(d.slug)).slice(0, 5);
  const toggleSaved = (slug: string) => {
    setSavedSlugs((prev) => {
      const next = new Set(prev);
      if (next.has(slug)) next.delete(slug);
      else next.add(slug);
      const arr = Array.from(next);
      window.localStorage.setItem('nexrole:savedCourses', JSON.stringify(arr));
      return arr;
    });
  };

  const handleContinue = (slug: string) => {
    if (!slug) { toast.info('Course not available yet.'); return; }
    navigate(`/learning/course/${slug}`);
  };

  const handleEnroll = async (slug: string) => {
    try {
      await post(`/domains/${slug}/enroll`);
      toast.success('Enrolled! Start learning now.');
      navigate(`/domains/${slug}`);
    } catch (err: any) {
      const msg = err?.response?.data?.message ?? 'Enrollment failed';
      if (msg.toLowerCase().includes('already')) navigate(`/domains/${slug}`);
      else toast.error(msg);
    }
  };

  const firstName = user?.name?.split(' ')[0] || 'Learner';

  return (
    <div className="w-full max-w-[1400px] mx-auto px-4 py-8 space-y-8">

      {/* ── Header ── */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-3xl font-display font-bold text-text-primary mb-1">
            My Learning
          </h1>
          <p className="text-text-secondary">
            {enrollments.length > 0
              ? `You're enrolled in ${enrollments.length} domain${enrollments.length > 1 ? 's' : ''}. Keep going!`
              : 'Start your AI learning journey today.'}
          </p>
        </div>
        <button
          onClick={() => navigate('/domains')}
          className="flex items-center gap-2 px-5 py-2.5 bg-brand-600 hover:bg-brand-700 text-white rounded-xl font-semibold text-sm transition-colors shadow-sm"
        >
          <Sparkles className="w-4 h-4" /> Explore Domains
        </button>
      </div>

      {/* ── Stats Row ── */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <StatPill icon={Flame} label="Day Streak" value={streak} color="bg-amber-100 dark:bg-amber-900/30 text-amber-500" />
        <StatPill icon={Star} label="Total XP" value={xp} color="bg-brand-100 dark:bg-brand-900/30 text-brand-500" />
        <StatPill icon={BookOpen} label="Modules Done" value={totalCompleted} color="bg-green-100 dark:bg-green-900/30 text-green-500" />
        <StatPill icon={Award} label={levelInfo.name} value={`Lv.${levelInfo.level}`} color="bg-purple-100 dark:bg-purple-900/30 text-purple-500" />
      </div>

      {/* ── Main Grid ── */}
      <div className="flex flex-col lg:flex-row gap-8">

        {/* Left: Course List */}
        <div className="flex-1 min-w-0">

          {/* Tabs + Search */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div className="flex gap-1 bg-bg-secondary border border-border-subtle rounded-xl p-1">
              {TABS.map(tab => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    activeTab === tab
                      ? 'bg-bg-elevated text-text-primary shadow-sm font-semibold'
                      : 'text-text-tertiary hover:text-text-secondary'
                  }`}
                >
                  {tab}
                  {tab === 'In Progress' && enrollments.filter(e => e.progressPercent < 100 && e.progressPercent > 0).length > 0 && (
                    <span className="ml-1.5 px-1.5 py-0.5 bg-brand-500 text-white text-[10px] font-bold rounded-full">
                      {enrollments.filter(e => e.progressPercent < 100 && e.progressPercent > 0).length}
                    </span>
                  )}
                </button>
              ))}
            </div>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-tertiary" />
              <input
                value={search}
                onChange={e => setSearch(e.target.value)}
                placeholder="Search domains..."
                className="pl-9 pr-4 py-2 text-sm bg-bg-elevated border border-border-subtle rounded-xl focus:outline-none focus:border-brand-500 text-text-primary placeholder:text-text-tertiary w-48"
              />
            </div>
          </div>

          {/* Course Cards */}
          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="h-48 bg-bg-elevated border border-border-subtle rounded-2xl animate-pulse" />
              ))}
            </div>
          ) : activeTab === 'Saved' ? (
            filteredSaved.length === 0 ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex flex-col items-center justify-center py-20 text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-bg-secondary flex items-center justify-center mb-4">
                  <Star className="w-8 h-8 text-text-tertiary" />
                </div>
                <h3 className="font-bold text-text-primary mb-2">No saved courses</h3>
                <p className="text-sm text-text-tertiary mb-6 max-w-xs">
                  Save domains you want to learn next. Saved courses are synced locally for now.
                </p>
                <button
                  onClick={() => navigate('/domains')}
                  className="px-6 py-2.5 bg-brand-600 text-white rounded-xl font-semibold text-sm hover:bg-brand-700 transition-colors"
                >
                  Browse Domains â†’
                </button>
              </motion.div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {filteredSaved.map((d: any) => (
                  <motion.button
                    key={d.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    whileHover={{ y: -2 }}
                    onClick={() => navigate(`/domains/${d.slug}`)}
                    className="text-left bg-bg-elevated border border-border-subtle rounded-2xl p-5 shadow-sm hover:shadow-md hover:border-border-strong transition-all"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-center gap-3 min-w-0">
                        <div
                          className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
                          style={{ backgroundColor: `${d.color}18`, border: `1px solid ${d.color}30` }}
                        >
                          {d.icon}
                        </div>
                        <div className="min-w-0">
                          <div className="font-bold text-text-primary truncate">{d.name}</div>
                          <div className="text-xs text-text-tertiary truncate">{d.tags?.slice?.(0, 3)?.join?.(' â€¢ ')}</div>
                        </div>
                      </div>
                      <button
                        onClick={(e) => { e.preventDefault(); e.stopPropagation(); toggleSaved(d.slug); }}
                        className="text-[10px] font-black px-2.5 py-1 rounded-full border border-border-subtle bg-bg-secondary hover:bg-bg-tertiary text-text-secondary"
                        title="Remove from Saved"
                      >
                        Saved
                      </button>
                    </div>
                    <div className="mt-4 text-xs text-text-secondary line-clamp-2">{d.description}</div>
                  </motion.button>
                ))}
              </div>
            )
          ) : activeTab === 'Recommended' ? (
            filteredRecommended.length === 0 ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex flex-col items-center justify-center py-20 text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-bg-secondary flex items-center justify-center mb-4">
                  <TrendingUp className="w-8 h-8 text-text-tertiary" />
                </div>
                <h3 className="font-bold text-text-primary mb-2">No recommendations yet</h3>
                <p className="text-sm text-text-tertiary mb-6 max-w-xs">
                  Enroll in a domain to unlock personalized recommendations.
                </p>
                <button
                  onClick={() => navigate('/domains')}
                  className="px-6 py-2.5 bg-brand-600 text-white rounded-xl font-semibold text-sm hover:bg-brand-700 transition-colors"
                >
                  Browse Domains â†’
                </button>
              </motion.div>
            ) : (
              <div className="space-y-3">
                {filteredRecommended.map((domain: any) => (
                  <div key={domain.id} className="relative">
                    <RecommendedCard domain={domain} onEnroll={handleEnroll} />
                    <button
                      onClick={(e) => { e.preventDefault(); e.stopPropagation(); toggleSaved(domain.slug); }}
                      className="absolute right-3 top-3 text-[10px] font-black px-2.5 py-1 rounded-full border border-border-subtle bg-bg-secondary hover:bg-bg-tertiary text-text-secondary"
                      title={savedSet.has(domain.slug) ? 'Remove from Saved' : 'Save for later'}
                    >
                      {savedSet.has(domain.slug) ? 'Saved' : 'Save'}
                    </button>
                  </div>
                ))}
              </div>
            )
          ) : filteredEnrollments.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex flex-col items-center justify-center py-20 text-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-bg-secondary flex items-center justify-center mb-4">
                <BookOpen className="w-8 h-8 text-text-tertiary" />
              </div>
              <h3 className="font-bold text-text-primary mb-2">
                {activeTab === 'In Progress' ? 'No courses in progress' :
                 activeTab === 'Completed' ? 'No completed courses yet' :
                 'No courses to show'}
              </h3>
              <p className="text-sm text-text-tertiary mb-6 max-w-xs">
                {enrollments.length === 0
                  ? 'Enroll in a domain to start your AI learning journey.'
                  : activeTab === 'In Progress'
                  ? 'All your enrolled courses are complete! Explore more domains.'
                  : 'Complete modules to see them here.'}
              </p>
              <button
                onClick={() => navigate('/domains')}
                className="px-6 py-2.5 bg-brand-600 text-white rounded-xl font-semibold text-sm hover:bg-brand-700 transition-colors"
              >
                Browse Domains →
              </button>
            </motion.div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <AnimatePresence>
                {filteredEnrollments.map((enrollment: any) => (
                  <CourseCard
                    key={enrollment.domain.id}
                    enrollment={enrollment}
                    onContinue={handleContinue}
                  />
                ))}
              </AnimatePresence>
            </div>
          )}
        </div>

        {/* Right Sidebar */}
        <div className="w-full lg:w-[320px] shrink-0 space-y-6">

          {/* Weekly Activity */}
          <div className="bg-bg-elevated border border-border-subtle rounded-2xl p-5 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-text-primary text-sm">This Week</h3>
              <div className="flex items-center gap-1.5 px-2.5 py-1 bg-amber-50 dark:bg-amber-900/20 rounded-full border border-amber-200 dark:border-amber-800">
                <Flame className="w-3 h-3 text-amber-500 fill-amber-500" />
                <span className="text-xs font-bold text-amber-600 dark:text-amber-400">{streak} day streak</span>
              </div>
            </div>
            <WeeklyHeatmap weeklyProgress={analytics?.weeklyProgress ?? []} />
            <div className="mt-4 pt-4 border-t border-border-subtle">
              <div className="flex justify-between text-xs">
                <span className="text-text-tertiary">Best streak</span>
                <span className="font-bold text-text-primary">{analytics?.streakData?.longestStreak ?? 0} days</span>
              </div>
            </div>
          </div>

          {/* XP Progress */}
          <div className="bg-bg-elevated border border-border-subtle rounded-2xl p-5 shadow-sm">
            <h3 className="font-bold text-text-primary text-sm mb-4">Level Progress</h3>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl bg-brand-100 dark:bg-brand-900/30 flex items-center justify-center">
                <Zap className="w-5 h-5 text-brand-500" />
              </div>
              <div>
                <div className="font-bold text-text-primary">{levelInfo.name}</div>
                <div className="text-xs text-text-tertiary">Level {levelInfo.level}</div>
              </div>
            </div>
            <div className="h-2 w-full bg-bg-tertiary rounded-full overflow-hidden mb-2">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${levelInfo.progress}%` }}
                transition={{ duration: 1 }}
                className="h-full bg-gradient-to-r from-brand-400 to-purple-500 rounded-full"
              />
            </div>
            <div className="flex justify-between text-xs text-text-tertiary">
              <span>{xp} XP</span>
              <span>{levelInfo.nextLevelXP - xp} XP to next level</span>
            </div>
          </div>

          {/* Recommended */}
          {recommended.length > 0 && (
            <div className="bg-bg-elevated border border-border-subtle rounded-2xl p-5 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-text-primary text-sm">Explore More</h3>
                <button onClick={() => navigate('/domains')} className="text-xs text-brand-500 hover:underline font-medium">
                  View all
                </button>
              </div>
              <div className="space-y-2">
                {recommended.map((domain: any) => (
                  <RecommendedCard key={domain.id} domain={domain} onEnroll={handleEnroll} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyLearningPage;
