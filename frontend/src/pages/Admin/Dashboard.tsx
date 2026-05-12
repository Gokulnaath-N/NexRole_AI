import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { 
  Users, 
  Zap, 
  BookOpen, 
  Trophy, 
  Star, 
  Globe,
  TrendingUp,
  Activity,
  ArrowUpRight,
  ArrowDownRight
} from 'lucide-react';
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  AreaChart, 
  Area,
  BarChart,
  Bar,
  Cell
} from 'recharts';
import api from '../../services/api.client';
import { Card } from '@/components/ui/card';
import { Skeleton } from '../../components/skeletons';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

export const AdminDashboard = () => {
  // Stats Query
  const { data: stats, isLoading: isLoadingStats } = useQuery({
    queryKey: ['admin-stats'],
    queryFn: () => api.get('/admin/stats').then(r => r.data.data)
  });

  // User Growth Query
  const { data: growthData, isLoading: isLoadingGrowth } = useQuery({
    queryKey: ['admin-growth'],
    queryFn: () => api.get('/admin/growth').then(r => r.data.data)
  });

  // Domain Popularity Query
  const { data: popularityData, isLoading: isLoadingPopularity } = useQuery({
    queryKey: ['admin-popularity'],
    queryFn: () => api.get('/admin/domain-popularity').then(r => r.data.data)
  });

  // Recent Activity Query
  const { data: recentActivity, isLoading: isLoadingActivity } = useQuery({
    queryKey: ['admin-activity'],
    queryFn: () => api.get('/admin/activity').then(r => r.data.data)
  });

  // Health Check Query
  const { data: health, isLoading: isLoadingHealth } = useQuery({
    queryKey: ['admin-health'],
    queryFn: () => api.get('/admin/health').then(r => r.data.data),
    refetchInterval: 30000 // every 30s
  });

  const StatCard = ({ title, value, trend, label, icon: Icon, color }: any) => (
    <Card className="p-6 border-border-subtle bg-bg-primary shadow-sm">
      <div className="flex justify-between items-start mb-4">
        <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${color}`}>
          <Icon className="w-6 h-6 text-white" />
        </div>
        {trend && (
          <div className={`flex items-center text-xs font-bold ${trend > 0 ? 'text-green-500' : 'text-red-500'}`}>
            {trend > 0 ? <ArrowUpRight className="w-4 h-4 mr-1" /> : <ArrowDownRight className="w-4 h-4 mr-1" />}
            {Math.abs(trend)}%
          </div>
        )}
      </div>
      <div className="space-y-1">
        <h3 className="text-3xl font-display font-black text-text-primary tracking-tight">
          {isLoadingStats ? <Skeleton className="h-8 w-24" /> : value}
        </h3>
        <p className="text-[10px] font-black text-text-tertiary uppercase tracking-widest">{title}</p>
        <p className="text-xs text-text-secondary">{label}</p>
      </div>
    </Card>
  );

  return (
    <div className="space-y-8 pb-12">
      {/* Stats Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
        <StatCard 
          title="Total Users" 
          value={stats?.totalUsers?.toLocaleString()} 
          trend={stats?.userTrend}
          label="+12 this week"
          icon={Users} 
          color="bg-blue-600" 
        />
        <StatCard 
          title="Active (7d)" 
          value={stats?.activeUsers?.toLocaleString()} 
          label={`${stats?.activePercent}% of total`}
          icon={Zap} 
          color="bg-amber-500" 
        />
        <StatCard 
          title="Modules Done" 
          value={stats?.modulesCompleted?.toLocaleString()} 
          trend={stats?.moduleTrend}
          label="+240 today"
          icon={BookOpen} 
          color="bg-purple-600" 
        />
        <StatCard 
          title="Certificates" 
          value={stats?.totalCertificates?.toLocaleString()} 
          label="+8 this week"
          icon={Trophy} 
          color="bg-green-600" 
        />
        <StatCard 
          title="Total XP" 
          value={stats?.totalXpAwarded > 1000000 ? `${(stats.totalXpAwarded / 1000000).toFixed(1)}M` : stats?.totalXpAwarded?.toLocaleString()} 
          label="Awarded to learners"
          icon={Star} 
          color="bg-indigo-600" 
        />
        <StatCard 
          title="Enrollments" 
          value={stats?.totalEnrollments?.toLocaleString()} 
          label="Across 8 domains"
          icon={Globe} 
          color="bg-teal-600" 
        />
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        {/* User Growth */}
        <Card className="p-6 border-border-subtle bg-bg-primary">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="font-bold text-text-primary">New Registrations</h3>
              <p className="text-xs text-text-tertiary uppercase tracking-widest">Last 30 Days</p>
            </div>
            <TrendingUp className="w-5 h-5 text-brand-500" />
          </div>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={growthData}>
                <defs>
                  <linearGradient id="colorUser" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#3B82F6" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(0,0,0,0.05)" />
                <XAxis 
                  dataKey="date" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fontSize: 10, fill: '#94A3B8' }} 
                />
                <YAxis 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fontSize: 10, fill: '#94A3B8' }} 
                />
                <Tooltip 
                  contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }}
                />
                <Area type="monotone" dataKey="count" stroke="#3B82F6" strokeWidth={3} fillOpacity={1} fill="url(#colorUser)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </Card>

        {/* Domain Popularity */}
        <Card className="p-6 border-border-subtle bg-bg-primary">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="font-bold text-text-primary">Enrollments by Domain</h3>
              <p className="text-xs text-text-tertiary uppercase tracking-widest">Popularity Ranking</p>
            </div>
            <Globe className="w-5 h-5 text-teal-500" />
          </div>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={popularityData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(0,0,0,0.05)" />
                <XAxis 
                  dataKey="shortName" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fontSize: 10, fill: '#94A3B8' }} 
                />
                <YAxis 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fontSize: 10, fill: '#94A3B8' }} 
                />
                <Tooltip 
                  cursor={{ fill: 'rgba(0,0,0,0.02)' }}
                  contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }}
                />
                <Bar dataKey="count" radius={[4, 4, 0, 0]}>
                  {popularityData?.map((entry: any, index: number) => (
                    <Cell key={`cell-${index}`} fill={entry.color || '#3B82F6'} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>
      </div>

      {/* Recent Activity & Health Row */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        {/* Activity Table */}
        <Card className="xl:col-span-2 border-border-subtle bg-bg-primary">
          <div className="p-6 flex items-center justify-between border-b border-border-subtle">
            <h3 className="font-bold text-text-primary">Recent Activity</h3>
            <Button variant="ghost" size="sm" className="text-brand-600">View All →</Button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-border-subtle bg-bg-secondary/30">
                  <th className="px-6 py-3 text-[10px] font-black text-text-tertiary uppercase tracking-widest">User</th>
                  <th className="px-6 py-3 text-[10px] font-black text-text-tertiary uppercase tracking-widest">Action</th>
                  <th className="px-6 py-3 text-[10px] font-black text-text-tertiary uppercase tracking-widest">Domain/Module</th>
                  <th className="px-6 py-3 text-[10px] font-black text-text-tertiary uppercase tracking-widest">Time</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border-subtle">
                {isLoadingActivity ? (
                  Array.from({ length: 5 }).map((_, i) => (
                    <tr key={i}><td colSpan={4} className="px-6 py-4"><Skeleton className="h-8 w-full" /></td></tr>
                  ))
                ) : recentActivity?.map((act: any, i: number) => (
                  <tr key={i} className="hover:bg-bg-secondary/20 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center font-bold text-xs">
                          {act.userName.charAt(0)}
                        </div>
                        <span className="text-sm font-medium text-text-primary">{act.userName}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <Badge className={
                        act.action === 'COMPLETED' ? 'bg-green-500/10 text-green-500 border-green-500/20' :
                        act.action === 'ENROLLED' ? 'bg-blue-500/10 text-blue-500 border-blue-500/20' :
                        'bg-purple-500/10 text-purple-500 border-purple-500/20'
                      }>
                        {act.action}
                      </Badge>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex flex-col">
                        <span className="text-sm font-medium text-text-primary">{act.moduleName || act.domainName}</span>
                        <span className="text-[10px] text-text-tertiary">{act.moduleName ? act.domainName : 'New Enrollment'}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-xs text-text-tertiary">{act.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>

        {/* System Health */}
        <div className="space-y-6">
          <Card className="p-6 border-border-subtle bg-bg-primary">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-bold text-text-primary">System Health</h3>
              <Activity className={`w-5 h-5 ${health?.isAllHealthy ? 'text-green-500' : 'text-amber-500'}`} />
            </div>
            
            <div className="space-y-4">
              {[
                { label: 'Database', status: health?.db, online: health?.db === 'CONNECTED' },
                { label: 'Redis Cache', status: health?.redis, online: health?.redis === 'CONNECTED' },
                { label: 'AI Services', status: health?.ai, online: health?.ai === 'ONLINE' },
              ].map((s, i) => (
                <div key={i} className="flex items-center justify-between p-3 rounded-xl bg-bg-secondary/50">
                  <span className="text-sm font-bold text-text-secondary">{s.label}</span>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-black text-text-tertiary">{s.status}</span>
                    <div className={`w-2 h-2 rounded-full ${s.online ? 'bg-green-500' : 'bg-red-500 animate-pulse'}`} />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-6 border-t border-border-subtle">
              <div className="flex justify-between text-xs">
                <span className="text-text-tertiary">System Uptime</span>
                <span className="text-text-primary font-bold">{health?.uptime || '99.9%'}</span>
              </div>
            </div>
          </Card>

          <Card className="p-6 border-brand-100 bg-brand-50/10 dark:bg-brand-900/5">
            <h4 className="font-bold text-brand-600 mb-2">Admin Notes</h4>
            <p className="text-xs text-text-tertiary leading-relaxed">
              Domain demand scores are updated weekly based on market trends. AI Tutor usage is currently at 45% of peak capacity.
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
