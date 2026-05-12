import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Crown, Medal, TrendingUp, TrendingDown, Minus, Flame } from 'lucide-react';
import { useQuery } from '@tanstack/react-query';
import { get } from '../../services/api.client';
import { useAuthStore } from '../../store';

const useLeaderboard = (tab: string) => {
  const endpoint = tab === 'weekly' ? '/leaderboard/weekly' : '/leaderboard/alltime';
  return useQuery({
    queryKey: ['leaderboard', tab],
    queryFn: async () => {
      const res = await get<any>(endpoint);
      return res.data?.data as { leaders: any[]; currentUserRank: any };
    },
    staleTime: 60_000,
  });
};

const SkeletonRow = () => (
  <tr className="border-b border-slate-100 dark:border-slate-800/50">
    {[1,2,3,4,5,6].map(i => (
      <td key={i} className="py-4 px-6"><div className="h-4 bg-slate-100 dark:bg-slate-800 rounded animate-pulse" /></td>
    ))}
  </tr>
);

export const Leaderboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState('weekly');
  const { user } = useAuthStore();
  const { data, isLoading } = useLeaderboard(activeTab);

  const leaders = data?.leaders ?? [];
  const currentUserRank = data?.currentUserRank;
  const top3 = leaders.length >= 3 ? [leaders[1], leaders[0], leaders[2]] : [];

  const renderChange = (change: number) => {
    if (change === 0) return <Minus className="w-4 h-4 text-slate-400" />;
    if (change > 0) return <div className="flex items-center text-green-500 font-bold text-xs"><TrendingUp className="w-3 h-3 mr-1" /> {change}</div>;
    return <div className="flex items-center text-red-500 font-bold text-xs"><TrendingDown className="w-3 h-3 mr-1" /> {Math.abs(change)}</div>;
  };

  const getAvatar = (u: any) => u.image || `https://ui-avatars.com/api/?name=${encodeURIComponent(u.name)}&background=random`;

  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-8 relative">
      <div className="mb-8 text-center">
        <h1 className="text-[40px] font-bold text-slate-900 dark:text-slate-50 leading-tight tracking-tight font-display">Leaderboard</h1>
        <p className="text-[18px] text-slate-600 dark:text-slate-400 mt-2">Who's leading the AI career race this week?</p>
      </div>

      <div className="flex justify-center mb-12">
        <div className="bg-slate-100 dark:bg-slate-800/50 p-1 rounded-lg flex gap-1">
          {['Weekly', 'All Time'].map(tab => (
            <button key={tab} onClick={() => setActiveTab(tab.toLowerCase().replace(' ', ''))}
              className={`px-6 py-2 rounded-md text-sm font-medium transition-colors ${
                activeTab === tab.toLowerCase().replace(' ', '')
                  ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-50 shadow-sm'
                  : 'text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200'
              }`}>
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Podium */}
      {!isLoading && top3.length === 3 && (
        <div className="flex justify-center items-end gap-2 md:gap-6 mb-16 h-[220px]">
          {/* Rank 2 */}
          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.5 }}
            className="w-28 md:w-40 h-[130px] rounded-t-xl bg-gradient-to-t from-slate-200 to-slate-100 dark:from-slate-800 dark:to-slate-700 border-x border-t border-slate-300 dark:border-slate-600 relative flex flex-col items-center justify-end pb-4 shadow-lg">
            <div className="absolute -top-12 flex flex-col items-center">
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-full border-4 border-slate-300 dark:border-slate-500 overflow-hidden mb-2 bg-white">
                <img src={getAvatar(top3[0])} alt="" className="w-full h-full object-cover" />
              </div>
              <div className="text-xs md:text-sm font-bold text-slate-700 dark:text-slate-300 truncate w-24 text-center">{top3[0].name}</div>
            </div>
            <div className="text-lg md:text-xl font-bold text-slate-800 dark:text-slate-200">{top3[0].xp}</div>
            <div className="text-[10px] text-slate-500 uppercase font-bold">XP</div>
            <div className="absolute bottom-2 right-2 text-2xl opacity-50">🥈</div>
          </motion.div>

          {/* Rank 1 */}
          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.6, type: 'spring' }}
            className="w-32 md:w-48 h-[170px] rounded-t-xl bg-gradient-to-t from-yellow-300 to-yellow-100 dark:from-yellow-900/50 dark:to-yellow-700/50 border-x border-t border-yellow-400 dark:border-yellow-600/50 relative flex flex-col items-center justify-end pb-6 shadow-xl z-10">
            <div className="absolute -top-16 flex flex-col items-center">
              <Crown className="w-8 h-8 text-yellow-500 dark:text-yellow-400 mb-1 drop-shadow-md" />
              <div className="w-14 h-14 md:w-20 md:h-20 rounded-full border-4 border-yellow-400 dark:border-yellow-500 overflow-hidden mb-2 bg-white shadow-lg">
                <img src={getAvatar(top3[1])} alt="" className="w-full h-full object-cover" />
              </div>
              <div className="text-sm md:text-base font-bold text-slate-900 dark:text-yellow-50 truncate w-28 text-center">{top3[1].name}</div>
            </div>
            <div className="text-2xl md:text-3xl font-bold text-yellow-900 dark:text-yellow-400 drop-shadow-sm">{top3[1].xp}</div>
            <div className="text-[11px] text-yellow-800/70 dark:text-yellow-500/70 uppercase font-bold">XP</div>
            <div className="absolute bottom-2 right-2 text-3xl opacity-80">🥇</div>
          </motion.div>

          {/* Rank 3 */}
          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.5 }}
            className="w-28 md:w-40 h-[110px] rounded-t-xl bg-gradient-to-t from-orange-200 to-orange-100 dark:from-orange-900/40 dark:to-orange-800/40 border-x border-t border-orange-300 dark:border-orange-700/50 relative flex flex-col items-center justify-end pb-3 shadow-lg">
            <div className="absolute -top-12 flex flex-col items-center">
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-full border-4 border-orange-300 dark:border-orange-600 overflow-hidden mb-2 bg-white">
                <img src={getAvatar(top3[2])} alt="" className="w-full h-full object-cover" />
              </div>
              <div className="text-xs md:text-sm font-bold text-slate-700 dark:text-slate-300 truncate w-24 text-center">{top3[2].name}</div>
            </div>
            <div className="text-lg md:text-xl font-bold text-orange-900 dark:text-orange-300">{top3[2].xp}</div>
            <div className="text-[10px] text-orange-800/60 dark:text-orange-400/60 uppercase font-bold">XP</div>
            <div className="absolute bottom-2 right-2 text-2xl opacity-50">🥉</div>
          </motion.div>
        </div>
      )}

      {/* Table */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl shadow-sm overflow-hidden mb-24">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 dark:bg-slate-800/50 border-b border-slate-200 dark:border-slate-800">
                <th className="py-4 px-6 text-xs font-bold text-slate-500 uppercase tracking-wider w-20 text-center">Rank</th>
                <th className="py-4 px-6 text-xs font-bold text-slate-500 uppercase tracking-wider">Learner</th>
                <th className="py-4 px-6 text-xs font-bold text-slate-500 uppercase tracking-wider hidden md:table-cell">Level</th>
                <th className="py-4 px-6 text-xs font-bold text-slate-500 uppercase tracking-wider">XP</th>
                <th className="py-4 px-6 text-xs font-bold text-slate-500 uppercase tracking-wider hidden sm:table-cell">Streak</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800/50">
              {isLoading ? (
                [1,2,3,4,5].map(i => <SkeletonRow key={i} />)
              ) : leaders.length === 0 ? (
                <tr><td colSpan={5} className="py-12 text-center text-slate-400">No data yet. Be the first on the leaderboard!</td></tr>
              ) : (
                leaders.map((u) => (
                  <tr key={u.id} className={`hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors ${u.id === user?.id ? 'bg-blue-50/50 dark:bg-blue-900/10' : ''}`}>
                    <td className="py-4 px-6 text-center">
                      {u.rank === 1 ? '🥇' : u.rank === 2 ? '🥈' : u.rank === 3 ? '🥉' :
                        <span className="text-slate-500 font-medium">{u.rank}</span>}
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-3">
                        <img src={getAvatar(u)} className="w-8 h-8 rounded-full bg-slate-200" alt="" />
                        <span className="font-bold text-slate-900 dark:text-slate-50">
                          {u.name}{u.id === user?.id ? ' (You)' : ''}
                        </span>
                      </div>
                    </td>
                    <td className="py-4 px-6 hidden md:table-cell">
                      <span className="px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-[10px] font-bold rounded-full uppercase">
                        {u.level}
                      </span>
                    </td>
                    <td className="py-4 px-6 font-bold text-blue-600 dark:text-blue-400">{u.xp}</td>
                    <td className="py-4 px-6 hidden sm:table-cell">
                      <div className="flex items-center gap-1 font-medium text-slate-700 dark:text-slate-300">
                        <Flame className="w-4 h-4 text-amber-500" /> {u.streak}
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Sticky Current User Bar */}
      {currentUserRank && (
        <div className="fixed bottom-0 left-0 w-full bg-blue-50 dark:bg-[#101b33] border-t border-blue-200 dark:border-blue-900/50 shadow-[0_-4px_20px_rgba(0,0,0,0.05)] z-50 p-4">
          <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full border-2 border-blue-400 flex items-center justify-center font-bold text-blue-700 dark:text-blue-400 bg-white dark:bg-slate-900">
                #{currentUserRank.rank}
              </div>
              <div>
                <div className="font-bold text-blue-900 dark:text-blue-100">{currentUserRank.name} (You)</div>
                <div className="text-xs text-blue-700 dark:text-blue-400 font-medium">
                  {currentUserRank.rank > 1 ? `Keep earning XP to climb the ranks!` : '🏆 You are #1!'}
                </div>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div className="text-center hidden sm:block">
                <div className="text-xs text-blue-600 dark:text-blue-500 uppercase font-bold">XP</div>
                <div className="font-bold text-blue-900 dark:text-blue-100">{currentUserRank.xp}</div>
              </div>
              <div className="text-center hidden sm:block">
                <div className="text-xs text-blue-600 dark:text-blue-500 uppercase font-bold">Streak</div>
                <div className="font-bold text-blue-900 dark:text-blue-100 flex items-center gap-1 justify-center">
                  <Flame className="w-3 h-3 text-amber-500" /> {currentUserRank.streak}
                </div>
              </div>
              <a href="/domains" className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-md shadow-sm transition-colors">
                Earn XP →
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Leaderboard;
