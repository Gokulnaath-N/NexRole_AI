import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  Cell,
  Radar, 
  RadarChart, 
  PolarGrid, 
  PolarAngleAxis, 
  PolarRadiusAxis,
  AreaChart,
  Area
} from 'recharts';
import { 
  TrendingUp, 
  Target, 
  Users, 
  CheckCircle2, 
  AlertTriangle,
  Zap
} from 'lucide-react';
import api from '../../services/api.client';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export const AnalyticsPage = () => {
  // Funnel Data
  const { data: funnelData } = useQuery({
    queryKey: ['admin-analytics-funnel'],
    queryFn: () => api.get('/admin/analytics/funnel').then(r => r.data.data)
  });

  // Daily Active Users
  const { data: dauData } = useQuery({
    queryKey: ['admin-analytics-dau'],
    queryFn: () => api.get('/admin/analytics/dau').then(r => r.data.data)
  });

  // Quiz Performance
  const { data: quizStats } = useQuery({
    queryKey: ['admin-analytics-quiz'],
    queryFn: () => api.get('/admin/analytics/quiz').then(r => r.data.data)
  });

  // Domain Completion Radar
  const { data: radarData } = useQuery({
    queryKey: ['admin-analytics-completion'],
    queryFn: () => api.get('/admin/analytics/completion').then(r => r.data.data)
  });

  const funnelColors = ['#2563EB', '#3B82F6', '#60A5FA', '#93C5FD'];

  return (
    <div className="space-y-8 pb-12">
      <div>
        <h1 className="text-2xl font-display font-black text-text-primary tracking-tight">Platform Analytics</h1>
        <p className="text-sm text-text-tertiary">Deep dive into learner behavior and content performance</p>
      </div>

      {/* Funnel Chart */}
      <Card className="p-8 border-border-subtle bg-bg-primary">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h3 className="font-bold text-text-primary">Learning Completion Funnel</h3>
            <p className="text-xs text-text-tertiary uppercase tracking-widest">Enrollment to Certification</p>
          </div>
          <Badge variant="outline" className="text-brand-600 border-brand-200">
            {funnelData?.conversionRate || '33%'} Conversion
          </Badge>
        </div>
        
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart layout="vertical" data={funnelData?.steps || [
              { name: 'Enrolled', value: 4800 },
              { name: 'Started', value: 3200 },
              { name: '50% Done', value: 1600 },
              { name: 'Completed', value: 800 },
            ]}>
              <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="rgba(0,0,0,0.05)" />
              <XAxis type="number" hide />
              <YAxis 
                type="category" 
                dataKey="name" 
                axisLine={false} 
                tickLine={false} 
                tick={{ fontSize: 12, fontStyle: 'bold', fill: '#64748B' }} 
                width={100}
              />
              <Tooltip 
                cursor={{ fill: 'rgba(0,0,0,0.02)' }}
                contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }}
              />
              <Bar dataKey="value" radius={[0, 4, 4, 0]}>
                {(funnelData?.steps || []).map((entry: any, index: number) => (
                  <Cell key={`cell-${index}`} fill={funnelColors[index % funnelColors.length]} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="mt-4 grid grid-cols-4 gap-4 text-center">
          {['100%', '66%', '33%', '16%'].map((perc, i) => (
            <div key={i} className="text-[10px] font-black text-text-tertiary">{perc} Retention</div>
          ))}
        </div>
      </Card>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        {/* Daily Active Users */}
        <Card className="p-6 border-border-subtle bg-bg-primary">
          <div className="flex items-center justify-between mb-8">
            <h3 className="font-bold text-text-primary">Daily Active Users</h3>
            <Users className="w-5 h-5 text-blue-500" />
          </div>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={dauData || []}>
                <defs>
                  <linearGradient id="colorDau" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10B981" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#10B981" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <XAxis dataKey="date" hide />
                <YAxis hide />
                <Tooltip />
                <Area type="monotone" dataKey="count" stroke="#10B981" fillOpacity={1} fill="url(#colorDau)" strokeWidth={3} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </Card>

        {/* Domain Completion Radar */}
        <Card className="p-6 border-border-subtle bg-bg-primary">
          <div className="flex items-center justify-between mb-8">
            <h3 className="font-bold text-text-primary">Completion Rate by Domain</h3>
            <Target className="w-5 h-5 text-brand-500" />
          </div>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart cx="50%" cy="50%" outerRadius="80%" data={radarData || []}>
                <PolarGrid stroke="rgba(0,0,0,0.05)" />
                <PolarAngleAxis dataKey="domain" tick={{ fontSize: 10, fill: '#64748B' }} />
                <PolarRadiusAxis angle={30} domain={[0, 100]} hide />
                <Radar
                  name="Completion %"
                  dataKey="percentage"
                  stroke="#8B5CF6"
                  fill="#8B5CF6"
                  fillOpacity={0.3}
                />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </Card>
      </div>

      {/* Quiz Performance Heatmap */}
      <Card className="p-6 border-border-subtle bg-bg-primary">
        <div className="flex items-center justify-between mb-8">
          <h3 className="font-bold text-text-primary">Avg Quiz Score by Module</h3>
          <div className="flex gap-4">
            <div className="flex items-center gap-1.5"><div className="w-2 h-2 rounded-full bg-red-500" /><span className="text-[10px] font-bold text-text-tertiary">{'<60%'}</span></div>
            <div className="flex items-center gap-1.5"><div className="w-2 h-2 rounded-full bg-amber-500" /><span className="text-[10px] font-bold text-text-tertiary">{'60-75%'}</span></div>
            <div className="flex items-center gap-1.5"><div className="w-2 h-2 rounded-full bg-green-500" /><span className="text-[10px] font-bold text-text-tertiary">{'>75%'}</span></div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {(quizStats || Array.from({ length: 12 })).map((stat: any, i: number) => (
            <div 
              key={i} 
              className={`p-3 rounded-xl border flex flex-col gap-1 transition-all hover:scale-105 cursor-default ${
                !stat ? 'bg-bg-secondary animate-pulse' :
                stat.score < 60 ? 'bg-red-50 border-red-100 text-red-700' :
                stat.score < 75 ? 'bg-amber-50 border-amber-100 text-amber-700' :
                'bg-green-50 border-green-100 text-green-700'
              }`}
            >
              <span className="text-[10px] font-black uppercase opacity-60 truncate">{stat?.moduleName || 'Loading...'}</span>
              <span className="text-lg font-black">{stat?.score ? `${stat.score}%` : '--'}</span>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default AnalyticsPage;
