import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Camera, Star, Flame, BookOpen, Award, CheckCircle,
  Download, Share2, Settings, User, Mail, Shield
} from 'lucide-react';
import { useQuery } from '@tanstack/react-query';
import { get } from '../../services/api.client';
import { useAuthStore } from '../../store';
import { getLevelFromXP } from '../../utils/getLevelFromXP';
import { toast } from 'sonner';

const useProfile = () =>
  useQuery({
    queryKey: ['profile'],
    queryFn: async () => {
      const [meRes, progressRes, certRes] = await Promise.all([
        get<any>('/auth/me'),
        get<any>('/progress/all'),
        get<any>('/certificates/me'),
      ]);
      return {
        user: meRes.data?.data,
        progress: progressRes.data?.data ?? [],
        certificates: certRes.data?.data ?? [],
      };
    },
    staleTime: 30_000,
  });

export const Profile: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const { data, isLoading } = useProfile();
  const { user: authUser } = useAuthStore();

  const user = data?.user;
  const progress: any[] = data?.progress ?? [];
  const certificates: any[] = data?.certificates ?? [];

  const xp = user?.xp ?? 0;
  const levelInfo = getLevelFromXP(xp);
  const levelName = levelInfo.name;
  const xpForCurrentLevel = levelInfo.minXP;
  const xpForNextLevel = levelInfo.nextLevelXP;
  const xpProgress = levelInfo.progress;

  const totalModules = progress.reduce((s: number, p: any) => s + (p.completedModules ?? 0), 0);
  const getAvatar = () => user?.image || `https://ui-avatars.com/api/?name=${encodeURIComponent(user?.name ?? 'User')}&background=random&size=200`;

  if (isLoading) {
    return (
      <div className="w-full max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="w-full lg:w-[30%] h-96 bg-bg-elevated border border-border-subtle rounded-xl animate-pulse" />
          <div className="w-full lg:w-[70%] h-96 bg-bg-elevated border border-border-subtle rounded-xl animate-pulse" />
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row gap-8">

        {/* LEFT COLUMN */}
        <div className="w-full lg:w-[30%]">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6 shadow-sm sticky top-24">
            <div className="flex flex-col items-center text-center mb-6">
              <div className="relative mb-4 group cursor-pointer">
                <div className="w-20 h-20 rounded-full p-1 bg-gradient-to-tr from-purple-500 to-blue-500">
                  <img src={getAvatar()} alt="Avatar" className="w-full h-full rounded-full border-2 border-white dark:border-slate-900 object-cover" />
                </div>
                <div className="absolute inset-0 rounded-full bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                  <Camera className="w-6 h-6 text-white" />
                </div>
              </div>
              <h2 className="text-[20px] font-bold text-slate-900 dark:text-slate-50 font-display mb-1">{user?.name ?? authUser?.name}</h2>
              <p className="text-[13px] text-slate-500 dark:text-slate-400 mb-3">{user?.email ?? authUser?.email}</p>
              <div className="px-3 py-1 bg-purple-50 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400 text-xs font-bold rounded-full flex items-center gap-1.5 border border-purple-100 dark:border-purple-800/50">
                <span>⚡</span> {levelName}
              </div>
            </div>

            <div className="mb-8">
              <div className="flex justify-between text-xs font-bold mb-2">
                <span className="text-slate-700 dark:text-slate-300">{xp} XP</span>
                <span className="text-slate-400">/ {xpForNextLevel} XP</span>
              </div>
              <div className="h-2 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden mb-2">
                <motion.div initial={{ width: 0 }} animate={{ width: `${xpProgress}%` }} transition={{ duration: 1, ease: 'easeOut' }}
                  className="h-full bg-blue-500 rounded-full" />
              </div>
              <p className="text-[12px] text-blue-600 dark:text-blue-400 text-center font-medium">
                {xpForNextLevel - xp} XP to level up!
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 mb-6">
              {[
                { icon: Star, label: 'Total XP', value: xp, color: 'text-blue-500' },
                { icon: Flame, label: 'Day Streak', value: user?.streak ?? 0, color: 'text-amber-500' },
                { icon: BookOpen, label: 'Modules', value: totalModules, color: 'text-green-500' },
                { icon: Award, label: 'Certificates', value: certificates.length, color: 'text-purple-500' },
              ].map((stat, i) => (
                <div key={i} className="bg-slate-50 dark:bg-slate-800/50 rounded-lg p-3 border border-slate-100 dark:border-slate-800 flex flex-col items-center text-center">
                  <stat.icon className={`w-4 h-4 mb-1.5 ${stat.color}`} />
                  <div className="font-bold text-slate-900 dark:text-slate-50">{stat.value}</div>
                  <div className="text-[10px] uppercase tracking-wider text-slate-500 font-semibold">{stat.label}</div>
                </div>
              ))}
            </div>

            <button onClick={() => setActiveTab('settings')}
              className="w-full py-2 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 font-medium rounded-md text-sm transition-colors mb-8">
              Edit Profile
            </button>

            {progress.length > 0 && (
              <div>
                <h4 className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-3">Enrolled Paths</h4>
                <div className="space-y-3">
                  {progress.map((p: any) => (
                    <div key={p.domain.id} className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded text-lg flex items-center justify-center shrink-0"
                        style={{ backgroundColor: `${p.domain.color}20` }}>
                        {p.domain.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-xs font-bold text-slate-900 dark:text-slate-100 truncate">{p.domain.name}</div>
                        <div className="h-1 w-full bg-slate-100 dark:bg-slate-800 rounded-full mt-1.5">
                          <div className="h-full bg-blue-500 rounded-full" style={{ width: `${p.progressPercent}%` }} />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="w-full lg:w-[70%]">
          <div className="flex border-b border-slate-200 dark:border-slate-800 mb-6 overflow-x-auto hide-scrollbar">
            {[
              { id: 'overview', label: 'Overview' },
              { id: 'certificates', label: `Certificates (${certificates.length})` },
              { id: 'settings', label: 'Settings' },
            ].map(tab => (
              <button key={tab.id} onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 font-medium text-sm border-b-2 whitespace-nowrap transition-colors ${
                  activeTab === tab.id
                    ? 'border-blue-500 text-blue-600 dark:text-blue-400'
                    : 'border-transparent text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'
                }`}>
                {tab.label}
              </button>
            ))}
          </div>

          <motion.div key={activeTab} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.2 }}>

            {activeTab === 'overview' && (
              <div className="space-y-6">
                <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6 shadow-sm">
                  <h3 className="font-bold text-slate-900 dark:text-slate-50 mb-4">Career Goal</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <div className="text-xs font-semibold text-slate-500 mb-1 uppercase">Target Role</div>
                      <div className="font-medium text-slate-900 dark:text-slate-50">{user?.targetRole || '—'}</div>
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-slate-500 mb-1 uppercase">Target Company</div>
                      <div className="font-medium text-slate-900 dark:text-slate-50">{user?.targetCompany || '—'}</div>
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-slate-500 mb-1 uppercase">Experience Level</div>
                      <span className="px-2.5 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs font-bold rounded-full">
                        {user?.experienceLevel ?? 'Beginner'}
                      </span>
                    </div>
                  </div>
                </div>

                {progress.length > 0 ? (
                  <>
                    <h3 className="font-bold text-slate-900 dark:text-slate-50 pt-2">Active Learning Paths</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {progress.map((p: any) => (
                        <div key={p.domain.id} className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-5 shadow-sm hover:border-blue-500/50 transition-colors cursor-pointer">
                          <div className="flex items-center justify-between mb-4">
                            <div className="w-10 h-10 rounded-lg flex items-center justify-center text-xl"
                              style={{ backgroundColor: `${p.domain.color}20` }}>
                              {p.domain.icon}
                            </div>
                            <span className="text-xs font-bold text-slate-500 bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded">
                              {p.completedModules} of {p.totalModules} modules
                            </span>
                          </div>
                          <h4 className="font-bold text-slate-900 dark:text-slate-50 mb-4">{p.domain.name}</h4>
                          <div className="flex items-center gap-3">
                            <div className="h-2 flex-1 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                              <div className="h-full bg-blue-500 rounded-full" style={{ width: `${p.progressPercent}%` }} />
                            </div>
                            <span className="text-xs font-bold text-slate-600 dark:text-slate-400">{p.progressPercent}%</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </>
                ) : (
                  <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-8 text-center">
                    <BookOpen className="w-10 h-10 text-slate-300 mx-auto mb-3" />
                    <p className="text-slate-500">No domains enrolled yet. <a href="/domains" className="text-blue-500 hover:underline">Browse domains →</a></p>
                  </div>
                )}
              </div>
            )}

            {activeTab === 'certificates' && (
              <div>
                {certificates.length === 0 ? (
                  <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-12 text-center">
                    <Award className="w-12 h-12 text-slate-300 mx-auto mb-4" />
                    <p className="font-medium text-slate-500 mb-2">No certificates yet</p>
                    <p className="text-sm text-slate-400">Complete all modules in a domain to earn your certificate.</p>
                    <a href="/domains" className="inline-block mt-4 px-4 py-2 bg-blue-600 text-white rounded-md text-sm font-medium hover:bg-blue-700 transition-colors">
                      Start Learning →
                    </a>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {certificates.map((cert: any) => (
                      <div key={cert.id} className="flex flex-col">
                        <div className="relative w-full aspect-[1.4/1] rounded-xl p-6 bg-gradient-to-br from-purple-600 to-blue-600 shadow-md overflow-hidden mb-4 group cursor-pointer hover:shadow-lg transition-shadow">
                          <div className="absolute top-0 right-0 p-4 opacity-10 text-white transform rotate-12 scale-150">
                            <CheckCircle className="w-32 h-32" />
                          </div>
                          <div className="relative z-10 h-full flex flex-col">
                            <div className="text-[9px] uppercase tracking-[0.2em] text-white/80 font-bold mb-auto">Certificate of Completion</div>
                            <div>
                              <div className="text-white/60 text-xs mb-1">Awarded to</div>
                              <h3 className="text-2xl font-light text-white mb-4">{user?.name}</h3>
                              <div className="text-white/80 text-sm font-medium leading-tight">
                                For successfully completing the<br />
                                <span className="font-bold">{cert.domain?.name ?? 'AI Domain'}</span> path.
                              </div>
                            </div>
                            <div className="mt-auto flex justify-between items-end">
                              <div>
                                <div className="text-[10px] text-white/50 uppercase tracking-wider mb-0.5">Date Issued</div>
                                <div className="text-xs text-white font-medium">{new Date(cert.issuedAt).toLocaleDateString()}</div>
                              </div>
                              <div className="text-right">
                                <div className="text-[10px] text-white/50 uppercase tracking-wider mb-0.5">Credential ID</div>
                                <div className="text-[10px] text-white font-mono">{cert.verificationCode}</div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex gap-3">
                          <button onClick={() => toast.info('PDF download coming soon')}
                            className="flex-1 flex items-center justify-center gap-2 py-2 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 text-sm font-medium rounded-md transition-colors">
                            <Download className="w-4 h-4" /> PDF
                          </button>
                          <button onClick={() => { navigator.clipboard.writeText(`${window.location.origin}/verify/${cert.verificationCode}`); toast.success('Verification link copied!'); }}
                            className="flex-[2] flex items-center justify-center gap-2 py-2 bg-[#0A66C2] hover:bg-[#004182] text-white text-sm font-medium rounded-md transition-colors">
                            <Share2 className="w-4 h-4" /> Share
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {activeTab === 'settings' && (
              <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6 shadow-sm">
                <h3 className="font-bold text-slate-900 dark:text-slate-50 mb-6">Account Settings</h3>
                <div className="space-y-4">
                  {[
                    { icon: User, label: 'Personal Information', desc: 'Update your name, avatar, and bio', href: '/settings' },
                    { icon: Mail, label: 'Email Preferences', desc: 'Manage your notifications and digests', href: '/settings' },
                    { icon: Shield, label: 'Security', desc: 'Change password and 2FA settings', href: '/settings' },
                  ].map((item, i) => (
                    <a key={i} href={item.href}
                      className="flex items-center gap-4 p-4 border border-slate-100 dark:border-slate-800 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800/50 cursor-pointer transition-colors">
                      <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center shrink-0">
                        <item.icon className="w-5 h-5 text-slate-600 dark:text-slate-400" />
                      </div>
                      <div>
                        <div className="font-semibold text-slate-900 dark:text-slate-100 text-sm">{item.label}</div>
                        <div className="text-xs text-slate-500">{item.desc}</div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            )}

          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
