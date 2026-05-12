import React, { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Briefcase, TrendingUp, MapPin, Search, Bookmark, 
  Upload, FileText, CheckCircle, AlertTriangle, XCircle,
  PlayCircle, Download, Share2, ChevronDown, ChevronUp,
  BrainCircuit, ShieldAlert, Database, Cloud
} from 'lucide-react';
import { SkillRadarChart } from '../../components/charts/SkillRadarChart';
import { jobService } from '../../services/job.service';
import type { PaginatedResponse } from '../../types/api.types';
import type { Job } from '../../types/career.types';

// Simple inline CountUp replacement
const CountUp = ({ start = 0, end, duration = 2, separator = '', prefix = '', suffix = '' }: { start?: number; end: number; duration?: number; separator?: string; prefix?: string; suffix?: string }) => {
  const [val, setVal] = useState(start);
  useEffect(() => {
    let startTime: number;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      setVal(Math.floor(progress * (end - start) + start));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [end]);
  const formatted = separator ? val.toLocaleString() : val.toString();
  return <>{prefix}{formatted}{suffix}</>;
};

// Mock Data
const USER_SKILLS = ['Python', 'LLMs', 'LangChain', 'Docker', 'React'];

export const CareerHub: React.FC = () => {
  const [activeTab, setActiveTab] = useState('market');
  
  // Job Market State
  const [filters, setFilters] = useState({
    search: '',
    domain: '',
    location: '',
    salaryMin: '',
    salaryMax: ''
  });
  const [page, setPage] = useState(1);

  const { data: jobsData, isLoading: jobsLoading, refetch: refetchJobs } = useQuery({
    queryKey: ['careers', filters, page],
    queryFn: async () => {
      const response = await jobService.getAll({
        search: filters.search,
        domain: filters.domain,
        location: filters.location,
        salaryMin: filters.salaryMin ? Number(filters.salaryMin) : undefined,
        salaryMax: filters.salaryMax ? Number(filters.salaryMax) : undefined,
        page,
        limit: 10
      });
      return response.data;
    },
    placeholderData: (previousData) => previousData,
    staleTime: 1000 * 60
  });

  const jobs = jobsData?.data ?? [];
  const totalJobs = jobsData?.pagination?.total ?? 0;

  // Skill Gap State
  const [jdText, setJdText] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisResult, setAnalysisResult] = useState<any>(null);

  // Interview Prep State
  const [selectedRole, setSelectedRole] = useState<string | null>(null);
  const [interviewTab, setInterviewTab] = useState('technical');
  const [expandedQuestion, setExpandedQuestion] = useState<string | null>(null);
  const [answerText, setAnswerText] = useState('');
  const [evalResult, setEvalResult] = useState<any>(null);

  const handleBookmark = async (jobId: string) => {
    try {
      await jobService.bookmark(jobId);
      refetchJobs();
    } catch (error) {
      console.error('Bookmark update failed', error);
    }
  };

  const calculateMatchScore = (jobSkills: string[]) => {
    const matches = USER_SKILLS.filter(s => jobSkills.includes(s));
    return Math.round((matches.length / jobSkills.length) * 100);
  };

  const handleAnalyzeGap = () => {
    if (!jdText.trim()) return;
    setIsAnalyzing(true);
    // Simulate AI analysis delay
    setTimeout(() => {
      setAnalysisResult({
        score: 72,
        radarData: [
          { subject: 'ML Fundamentals', userScore: 60, jobScore: 80, fullMark: 100 },
          { subject: 'GenAI/LLMs', userScore: 85, jobScore: 90, fullMark: 100 },
          { subject: 'MLOps', userScore: 40, jobScore: 70, fullMark: 100 },
          { subject: 'Cloud', userScore: 50, jobScore: 60, fullMark: 100 },
          { subject: 'Coding', userScore: 90, jobScore: 85, fullMark: 100 },
          { subject: 'Domain', userScore: 70, jobScore: 80, fullMark: 100 },
        ],
        have: ['Python', 'LLMs', 'LangChain'],
        need: ['PyTorch', 'Vector DBs'],
        partial: ['Docker']
      });
      setIsAnalyzing(false);
    }, 2000);
  };

  const handleEvaluateAnswer = () => {
    if (!answerText.trim()) return;
    // Simulate AI evaluation
    setEvalResult({
      verdict: 'GOOD',
      scores: {
        technical: 8,
        clarity: 7,
        completeness: 6,
        star: 5
      },
      strengths: ['Identified core issue', 'Clear terminology', 'Good practical example'],
      improvements: ['Could elaborate on edge cases', 'Use STAR format more strictly', 'Missed mentioning security implications']
    });
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-[40px] font-bold text-slate-900 dark:text-slate-50 leading-tight tracking-tight font-display">
          Career Hub
        </h1>
        <p className="text-[18px] text-slate-600 dark:text-slate-400 mt-2">
          From learning to landing your AI role.
        </p>
      </div>

      {/* Intelligence Strip */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {[
          { label: 'Active AI Jobs in India', value: 12400, prefix: '', suffix: '+', icon: Briefcase, color: 'text-blue-500' },
          { label: 'Avg. GenAI Engineer Salary', value: 24, prefix: '₹', suffix: 'L', icon: TrendingUp, color: 'text-green-500' },
          { label: 'Fastest Growing Role (+340%)', value: 'AI Agentic Engineer', isString: true, icon: BrainCircuit, color: 'text-purple-500' },
          { label: 'Top Hiring City', value: 'Bengaluru', isString: true, icon: MapPin, color: 'text-amber-500' }
        ].map((stat, i) => (
          <div key={i} className="bg-white dark:bg-slate-900 rounded-xl p-5 shadow-sm border border-slate-200 dark:border-slate-800 flex flex-col justify-center items-start">
            <stat.icon className={`w-5 h-5 mb-3 ${stat.color}`} />
            <div className="text-2xl font-bold text-slate-900 dark:text-slate-50">
              {stat.isString ? stat.value : (
                <CountUp start={0} end={stat.value as number} duration={2} separator="," prefix={stat.prefix} suffix={stat.suffix} />
              )}
            </div>
            <div className="text-sm font-medium text-slate-500 mt-1">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Tabs */}
      <div className="flex border-b border-slate-200 dark:border-slate-800 mb-8 overflow-x-auto hide-scrollbar">
        {[
          { id: 'market', label: 'Job Market' },
          { id: 'gap', label: 'Skill Gap Analyzer' },
          { id: 'prep', label: 'Interview Prep' },
          { id: 'career', label: 'My Career' }
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-6 py-3 font-medium text-sm border-b-2 whitespace-nowrap transition-colors ${
              activeTab === tab.id
                ? 'border-blue-500 text-blue-600 dark:text-blue-400'
                : 'border-transparent text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* TAB CONTENT */}
      <div className="w-full">
        {/* TAB 1: JOB MARKET */}
        {activeTab === 'market' && (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
            {/* Filter Bar */}
            <div className="flex flex-wrap gap-3 items-center bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
              <select
                className="h-10 px-3 rounded-md border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
                value={filters.domain}
                onChange={(e) => setFilters({ ...filters, domain: e.target.value })}
              >
                <option value="">All Domains</option>
                <option value="Generative AI">Generative AI</option>
                <option value="MLOps">MLOps</option>
              </select>
              <select
                className="h-10 px-3 rounded-md border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
                value={filters.location}
                onChange={(e) => setFilters({ ...filters, location: e.target.value })}
              >
                <option value="">Any Location</option>
                <option value="Remote">Remote</option>
                <option value="Bengaluru">Bengaluru</option>
              </select>
              <input
                type="number"
                min={0}
                placeholder="Min salary"
                value={filters.salaryMin}
                onChange={(e) => setFilters({ ...filters, salaryMin: e.target.value })}
                className="h-10 px-3 rounded-md border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
              />
              <input
                type="number"
                min={0}
                placeholder="Max salary"
                value={filters.salaryMax}
                onChange={(e) => setFilters({ ...filters, salaryMax: e.target.value })}
                className="h-10 px-3 rounded-md border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
              />
              <button
                className="text-sm text-blue-500 hover:text-blue-600 font-medium px-3"
                onClick={() => {
                  setFilters({ search: '', domain: '', location: '', salaryMin: '', salaryMax: '' });
                  setPage(1);
                }}
              >
                Clear Filters
              </button>
            </div>

            <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">
              Showing {jobs.length} of {totalJobs} jobs matched to your profile
            </p>

            {/* Job Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              {jobs.map((job: Job) => {
                const matchScore = calculateMatchScore(job.skills);
                const scoreColor = matchScore >= 70 ? '#22C55E' : matchScore >= 40 ? '#F59E0B' : '#EF4444';
                const postedDays = job.postedAt ? Math.max(1, Math.floor((Date.now() - new Date(job.postedAt).getTime()) / (1000 * 60 * 60 * 24))) : 1;
                const postedAgo = `${postedDays} day${postedDays > 1 ? 's' : ''} ago`;

                return (
                  <div
                    key={job.id}
                    onClick={() => {
                      if (job.url) window.open(job.url, '_blank', 'noreferrer');
                    }}
                    className="bg-white dark:bg-slate-900 rounded-xl p-5 border border-slate-200 dark:border-slate-800 shadow-sm hover:-translate-y-1 hover:shadow-md transition-all duration-200 cursor-pointer group"
                  >
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold bg-gradient-to-br from-blue-500 to-purple-500 shrink-0">
                          {job.company?.charAt(0) ?? 'J'}
                        </div>
                        <div>
                          <h3 className="text-base font-bold text-slate-900 dark:text-slate-50 group-hover:text-blue-500 transition-colors">{job.title}</h3>
                          <p className="text-sm text-slate-500 dark:text-slate-400">{job.company}</p>
                        </div>
                      </div>
                      <div className="relative w-10 h-10 shrink-0">
                        <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                          <circle className="text-slate-100 dark:text-slate-800" strokeWidth="8" stroke="currentColor" fill="transparent" r="40" cx="50" cy="50" />
                          <circle className="transition-all duration-1000 ease-out" strokeWidth="8" strokeDasharray="251.2" strokeDashoffset={251.2 - (251.2 * matchScore) / 100} strokeLinecap="round" stroke={scoreColor} fill="transparent" r="40" cx="50" cy="50" />
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center text-[11px] font-bold text-slate-700 dark:text-slate-300">
                          {matchScore}%
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-x-4 gap-y-2 mb-3 text-sm text-slate-600 dark:text-slate-400">
                      <div className="flex items-center gap-1"><MapPin className="w-4 h-4" /> {job.location ?? 'Anywhere'}</div>
                      <div className="flex items-center gap-1"><Briefcase className="w-4 h-4" /> {job.type.toLowerCase().replace('_', ' ')}</div>
                      <div className="text-slate-400">•</div>
                      <div>{postedAgo}</div>
                    </div>

                    <div className="text-sm font-semibold text-green-600 dark:text-green-400 mb-4">
                      {job.salaryMin && job.salaryMax
                        ? `₹${job.salaryMin.toLocaleString()} - ₹${job.salaryMax.toLocaleString()} / yr`
                        : 'Salary details available'}
                    </div>

                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {job.skills.slice(0, 5).map((skill: string) => (
                        <span key={skill} className="px-2 py-0.5 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-xs rounded-full">
                          {skill}
                        </span>
                      ))}
                      {job.skills.length > 5 && (
                        <span className="px-2 py-0.5 bg-slate-100 dark:bg-slate-800 text-slate-500 text-xs rounded-full">
                          +{job.skills.length - 5} more
                        </span>
                      )}
                    </div>

                    <div className="flex justify-between items-center pt-4 border-t border-slate-100 dark:border-slate-800">
                      <span className="px-2.5 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs font-medium rounded-full">
                        {job.type.replace('_', ' ')}
                      </span>
                      <div className="flex items-center gap-3">
                        <button
                          onClick={(e) => { e.stopPropagation(); handleBookmark(job.id); }}
                          className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                        >
                          <Bookmark className="w-5 h-5 text-slate-400" />
                        </button>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            if (job.url) window.open(job.url, '_blank', 'noreferrer');
                          }}
                          className="px-4 py-1.5 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 text-sm font-medium rounded-md hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
                        >
                          View Job →
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        )}

        {/* TAB 2: SKILL GAP ANALYZER */}
        {activeTab === 'gap' && (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex flex-col lg:flex-row gap-6 w-full">
            
            {/* LEFT PANEL */}
            <div className="w-full lg:w-[45%] flex flex-col gap-6">
              <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
                <h3 className="text-lg font-bold text-slate-900 dark:text-slate-50 mb-4">Your Skills</h3>
                <div className="border-2 border-dashed border-slate-200 dark:border-slate-700 rounded-lg p-6 flex flex-col items-center justify-center text-center hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors cursor-pointer mb-4">
                  <Upload className="w-8 h-8 text-blue-500 mb-2" />
                  <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Drop your resume PDF here</span>
                  <span className="text-xs text-slate-500 mt-1">or click to browse</span>
                </div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex-1 h-px bg-slate-200 dark:bg-slate-800"></div>
                  <span className="text-xs font-medium text-slate-400 uppercase">OR</span>
                  <div className="flex-1 h-px bg-slate-200 dark:bg-slate-800"></div>
                </div>
                <button className="w-full py-2.5 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 text-sm font-medium rounded-md transition-colors">
                  Use my profile skills
                </button>
              </div>

              <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm flex-1 flex flex-col">
                <h3 className="text-lg font-bold text-slate-900 dark:text-slate-50 mb-2">Target Job Description</h3>
                <p className="text-sm text-slate-500 mb-4">Paste the JD you want to analyze against.</p>
                <textarea 
                  className="w-full flex-1 min-h-[200px] p-4 bg-slate-50 dark:bg-[#0D1117] border border-slate-200 dark:border-slate-800 rounded-lg text-sm font-mono text-slate-700 dark:text-slate-300 focus:ring-2 focus:ring-blue-500 outline-none resize-none mb-4"
                  placeholder="e.g. We are looking for an ML Engineer with strong Python skills, experience with PyTorch, and a background in building RAG pipelines..."
                  value={jdText}
                  onChange={(e) => setJdText(e.target.value)}
                />
                <button 
                  onClick={handleAnalyzeGap}
                  disabled={!jdText.trim() || isAnalyzing}
                  className="w-full h-12 bg-blue-600 hover:bg-blue-700 disabled:opacity-70 disabled:cursor-not-allowed text-white font-medium rounded-md transition-colors flex items-center justify-center gap-2"
                >
                  {isAnalyzing ? (
                    <><div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" /> Analyzing with AI...</>
                  ) : (
                    <>Analyze My Gap →</>
                  )}
                </button>
              </div>
            </div>

            {/* RIGHT PANEL */}
            <div className="w-full lg:w-[55%] bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm p-6 lg:p-8 relative min-h-[600px]">
              {!analysisResult ? (
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
                  <Search className="w-16 h-16 text-slate-200 dark:text-slate-800 mb-4" />
                  <h3 className="text-xl font-bold text-slate-400 dark:text-slate-600 mb-2">Awaiting Analysis</h3>
                  <p className="text-slate-400 dark:text-slate-600 max-w-sm">Provide your skills and a target job description on the left to see your personalized gap analysis.</p>
                </div>
              ) : (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-8">
                  
                  {/* Top Stats */}
                  <div className="flex items-center gap-6 pb-6 border-b border-slate-200 dark:border-slate-800">
                    <div className="relative w-28 h-28 shrink-0">
                      <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                        <circle className="text-slate-100 dark:text-slate-800" strokeWidth="8" stroke="currentColor" fill="transparent" r="40" cx="50" cy="50" />
                        <motion.circle 
                          initial={{ strokeDashoffset: 251.2 }}
                          animate={{ strokeDashoffset: 251.2 - (251.2 * analysisResult.score) / 100 }}
                          transition={{ duration: 1.5, ease: "easeOut" }}
                          className="text-green-500" strokeWidth="8" strokeDasharray="251.2" strokeLinecap="round" stroke="currentColor" fill="transparent" r="40" cx="50" cy="50" 
                        />
                      </svg>
                      <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <span className="text-2xl font-bold text-slate-900 dark:text-slate-50">{analysisResult.score}%</span>
                        <span className="text-[10px] uppercase font-bold text-slate-500">Match</span>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 dark:text-slate-50 mb-1">Strong Candidate</h3>
                      <p className="text-sm text-slate-600 dark:text-slate-400">You have most of the core requirements. Focus on the missing specific technologies to stand out.</p>
                    </div>
                  </div>

                  {/* Radar Chart */}
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-slate-50 mb-4">Competency Map</h4>
                    <SkillRadarChart data={analysisResult.radarData} />
                  </div>

                  {/* Skills Breakdown */}
                  <div className="space-y-4 pt-4">
                    <div>
                      <h5 className="flex items-center gap-2 text-sm font-semibold text-slate-900 dark:text-slate-50 mb-2">
                        <CheckCircle className="w-4 h-4 text-green-500" /> You Have ({analysisResult.have.length} skills)
                      </h5>
                      <div className="flex flex-wrap gap-2">
                        {analysisResult.have.map((s: string) => (
                          <span key={s} className="px-2.5 py-1 bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 border border-green-200 dark:border-green-800 rounded-full text-xs font-medium">{s}</span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h5 className="flex items-center gap-2 text-sm font-semibold text-slate-900 dark:text-slate-50 mb-2">
                        <XCircle className="w-4 h-4 text-red-500" /> You Need ({analysisResult.need.length} skills)
                      </h5>
                      <div className="flex flex-wrap gap-2">
                        {analysisResult.need.map((s: string) => (
                          <span key={s} className="px-2.5 py-1 bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-400 border border-red-200 dark:border-red-800 rounded-full text-xs font-medium">{s}</span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Action Plan */}
                  <div className="pt-6 border-t border-slate-200 dark:border-slate-800">
                    <h4 className="font-semibold text-slate-900 dark:text-slate-50 mb-4">Recommended Action Plan</h4>
                    <div className="space-y-3">
                      {analysisResult.need.map((skill: string, idx: number) => (
                        <div key={idx} className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-lg border border-slate-200 dark:border-slate-700 flex items-center justify-between">
                          <div>
                            <div className="font-medium text-slate-900 dark:text-slate-50 text-sm mb-1">Learn {skill}</div>
                            <div className="flex items-center gap-2 text-xs text-slate-500">
                              <span className="px-1.5 bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 rounded">Generative AI Domain</span>
                              • ~2 weeks
                            </div>
                          </div>
                          <button className="text-sm font-medium text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                            Start Module →
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>

                </motion.div>
              )}
            </div>

          </motion.div>
        )}

        {/* TAB 3: INTERVIEW PREP */}
        {activeTab === 'prep' && (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-8">
            {!selectedRole ? (
              <div className="max-w-4xl mx-auto py-8">
                <h2 className="text-2xl font-bold text-center mb-2">Select the role you're preparing for:</h2>
                <p className="text-slate-500 text-center mb-8">AI curates specific questions based on recent real-world interviews.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {['GenAI Engineer', 'MLOps Engineer', 'Data Engineer', 'AI Product Manager', 'AI Cloud Architect', 'AI Security Analyst'].map(role => (
                    <button 
                      key={role}
                      onClick={() => setSelectedRole(role)}
                      className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm hover:border-blue-500 dark:hover:border-blue-500 hover:shadow-md transition-all text-left group"
                    >
                      <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/30 text-blue-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <Briefcase className="w-6 h-6" />
                      </div>
                      <h3 className="font-bold text-slate-900 dark:text-slate-50 text-lg mb-1">{role}</h3>
                      <p className="text-xs text-slate-500">140+ Questions</p>
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <div className="flex flex-col lg:flex-row gap-8">
                {/* Left Col - Questions */}
                <div className="w-full lg:w-2/3">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-bold text-slate-900 dark:text-slate-50">{selectedRole} Prep</h2>
                    <button onClick={() => setSelectedRole(null)} className="text-sm text-slate-500 hover:text-slate-700">Change Role</button>
                  </div>

                  <div className="flex gap-2 mb-6 border-b border-slate-200 dark:border-slate-800 pb-2 overflow-x-auto hide-scrollbar">
                    {['Technical', 'Behavioral', 'System Design', 'Domain Specific'].map(cat => (
                      <button 
                        key={cat} 
                        onClick={() => setInterviewTab(cat.toLowerCase())}
                        className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                          interviewTab === cat.toLowerCase() 
                            ? 'bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900' 
                            : 'bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-400 dark:hover:bg-slate-700'
                        }`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>

                  <div className="space-y-4">
                    {[
                      { id: 'q1', diff: 'Hard', text: 'Explain the architecture of a Retrieval-Augmented Generation (RAG) system and how you would handle stale data in the vector database.' },
                      { id: 'q2', diff: 'Medium', text: 'What is the difference between LoRA and full fine-tuning? When would you choose one over the other?' }
                    ].map((q, i) => (
                      <div key={q.id} className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden shadow-sm">
                        <button 
                          className="w-full p-5 text-left flex gap-4 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors"
                          onClick={() => setExpandedQuestion(expandedQuestion === q.id ? null : q.id)}
                        >
                          <div className="shrink-0 flex flex-col items-center">
                            <span className="text-xs font-bold text-slate-400">Q{i+1}</span>
                            <span className={`mt-2 px-2 py-0.5 rounded text-[10px] font-bold uppercase ${
                              q.diff === 'Hard' ? 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400' : 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400'
                            }`}>{q.diff}</span>
                          </div>
                          <div className="flex-1 font-medium text-slate-800 dark:text-slate-200 leading-relaxed pr-4">
                            {q.text}
                          </div>
                          <div className="shrink-0 mt-1">
                            {expandedQuestion === q.id ? <ChevronUp className="w-5 h-5 text-slate-400" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
                          </div>
                        </button>

                        <AnimatePresence>
                          {expandedQuestion === q.id && (
                            <motion.div 
                              initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }}
                              className="border-t border-slate-100 dark:border-slate-800 p-5 bg-slate-50 dark:bg-[#0D1117]"
                            >
                              {!evalResult ? (
                                <>
                                  <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Your Answer</label>
                                  <textarea 
                                    value={answerText}
                                    onChange={(e) => setAnswerText(e.target.value)}
                                    placeholder="Type your answer here or record voice (coming soon)..."
                                    className="w-full h-32 p-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg text-sm text-slate-700 dark:text-slate-300 focus:ring-2 focus:ring-purple-500 outline-none resize-none mb-4"
                                  />
                                  <div className="flex justify-end">
                                    <button 
                                      onClick={handleEvaluateAnswer}
                                      className="px-6 py-2.5 bg-purple-600 hover:bg-purple-700 text-white text-sm font-medium rounded-md shadow-sm transition-colors flex items-center gap-2"
                                    >
                                      <BrainCircuit className="w-4 h-4" /> Evaluate with AI →
                                    </button>
                                  </div>
                                </>
                              ) : (
                                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg p-5">
                                  <div className="flex items-center justify-between mb-6">
                                    <h4 className="font-bold text-slate-900 dark:text-slate-50">AI Evaluation</h4>
                                    <span className="px-3 py-1 bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 text-xs font-bold rounded-full">
                                      VERDICT: {evalResult.verdict}
                                    </span>
                                  </div>

                                  <div className="grid grid-cols-2 gap-x-6 gap-y-4 mb-6">
                                    {Object.entries(evalResult.scores).map(([key, val]: any) => (
                                      <div key={key}>
                                        <div className="flex justify-between text-xs mb-1 font-medium">
                                          <span className="capitalize text-slate-600 dark:text-slate-400">{key}</span>
                                          <span className="text-slate-900 dark:text-slate-100">{val}/10</span>
                                        </div>
                                        <div className="h-1.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                                          <motion.div 
                                            initial={{ width: 0 }} animate={{ width: `${val * 10}%` }} transition={{ duration: 1 }}
                                            className="h-full bg-purple-500 rounded-full"
                                          />
                                        </div>
                                      </div>
                                    ))}
                                  </div>

                                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="bg-green-50 dark:bg-green-900/10 p-4 rounded-lg border border-green-100 dark:border-green-900/30">
                                      <h5 className="text-sm font-bold text-green-800 dark:text-green-400 mb-2 flex items-center gap-2"><CheckCircle className="w-4 h-4" /> Strengths</h5>
                                      <ul className="text-xs text-green-700 dark:text-green-300/80 space-y-1.5 pl-5 list-disc">
                                        {evalResult.strengths.map((s: string, i: number) => <li key={i}>{s}</li>)}
                                      </ul>
                                    </div>
                                    <div className="bg-amber-50 dark:bg-amber-900/10 p-4 rounded-lg border border-amber-100 dark:border-amber-900/30">
                                      <h5 className="text-sm font-bold text-amber-800 dark:text-amber-400 mb-2 flex items-center gap-2"><AlertTriangle className="w-4 h-4" /> Areas to Improve</h5>
                                      <ul className="text-xs text-amber-700 dark:text-amber-300/80 space-y-1.5 pl-5 list-disc">
                                        {evalResult.improvements.map((s: string, i: number) => <li key={i}>{s}</li>)}
                                      </ul>
                                    </div>
                                  </div>
                                  
                                  <div className="mt-6 flex justify-end">
                                    <button onClick={() => { setEvalResult(null); setAnswerText(''); }} className="text-sm text-slate-500 hover:text-slate-700 underline">Try Again</button>
                                  </div>
                                </motion.div>
                              )}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right Col - Stats (Placeholder) */}
                <div className="w-full lg:w-1/3">
                  <div className="bg-slate-50 dark:bg-slate-900 rounded-xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm sticky top-24">
                    <h3 className="font-bold text-slate-900 dark:text-slate-50 mb-4">Your Prep Stats</h3>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center pb-3 border-b border-slate-200 dark:border-slate-700/50">
                        <span className="text-sm text-slate-600 dark:text-slate-400">Questions Answered</span>
                        <span className="font-bold text-slate-900 dark:text-slate-100">12</span>
                      </div>
                      <div className="flex justify-between items-center pb-3 border-b border-slate-200 dark:border-slate-700/50">
                        <span className="text-sm text-slate-600 dark:text-slate-400">Avg. Accuracy</span>
                        <span className="font-bold text-green-500">7.8 / 10</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-slate-600 dark:text-slate-400">Readiness Score</span>
                        <span className="font-bold text-blue-500">65%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        )}

        {/* TAB 4: MY CAREER */}
        {activeTab === 'career' && (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl">
            <div className="bg-gradient-to-br from-blue-900 to-slate-900 rounded-2xl p-8 shadow-lg text-white mb-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500 rounded-full mix-blend-screen filter blur-[80px] opacity-20"></div>
              
              <div className="relative z-10">
                <span className="px-3 py-1 bg-white/10 rounded-full text-xs font-semibold tracking-wider text-blue-200 mb-4 inline-block">CAREER SNAPSHOT</span>
                <h2 className="text-3xl font-bold mb-1">AI GenAI Engineer</h2>
                <p className="text-blue-200 mb-6">Targeting Product Companies • Mid Level</p>
                
                <div className="flex items-center gap-4 bg-black/20 p-4 rounded-xl inline-flex backdrop-blur-sm border border-white/10">
                  <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-green-400" />
                  </div>
                  <div>
                    <div className="text-sm text-slate-300">Estimated Readiness</div>
                    <div className="text-xl font-bold text-white">Job-ready in ~4 weeks</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white dark:bg-slate-900 rounded-xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-center items-center text-center">
                <FileText className="w-12 h-12 text-slate-300 dark:text-slate-600 mb-4" />
                <h3 className="text-lg font-bold text-slate-900 dark:text-slate-50 mb-2">AI-Optimized Resume</h3>
                <p className="text-sm text-slate-500 mb-6">Generate a resume tailored for AI roles based on your NexRole activity and verified skills.</p>
                <button className="flex items-center gap-2 px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition-colors w-full justify-center">
                  <Download className="w-4 h-4" /> Download PDF
                </button>
              </div>

              <div className="bg-white dark:bg-slate-900 rounded-xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-center items-center text-center">
                <Share2 className="w-12 h-12 text-slate-300 dark:text-slate-600 mb-4" />
                <h3 className="text-lg font-bold text-slate-900 dark:text-slate-50 mb-2">Verified Profile</h3>
                <p className="text-sm text-slate-500 mb-6">Share your verified skill matrix and certificates directly to your LinkedIn profile.</p>
                <button className="flex items-center gap-2 px-6 py-2.5 border-2 border-blue-600 text-blue-600 dark:border-blue-500 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 font-medium rounded-md transition-colors w-full justify-center">
                  Share on LinkedIn
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default CareerHub;
