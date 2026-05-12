import React from 'react';
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from 'recharts';

interface SkillDataPoint {
  subject: string;
  userScore: number;
  jobScore: number;
  fullMark: number;
}

interface SkillRadarChartProps {
  data: SkillDataPoint[];
}

export const SkillRadarChart: React.FC<SkillRadarChartProps> = ({ data }) => {
  return (
    <div className="w-full h-[300px] animate-in fade-in zoom-in duration-500 ease-out">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="70%" data={data}>
          <PolarGrid stroke="var(--border-subtle, rgba(148, 163, 184, 0.3))" />
          <PolarAngleAxis
            dataKey="subject"
            tick={{ fill: 'var(--text-secondary, #64748b)', fontSize: 12, fontWeight: 500 }}
          />
          <PolarRadiusAxis
            angle={30}
            domain={[0, 100]}
            tick={false}
            axisLine={false}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: 'var(--surface-2, #161B27)',
              borderColor: 'var(--border-subtle, rgba(255,255,255,0.1))',
              borderRadius: '8px',
              color: 'var(--text-primary, #F1F5F9)',
              boxShadow: 'var(--shadow-md, 0 4px 16px rgba(0,0,0,0.4))',
            }}
            itemStyle={{ color: 'var(--text-primary, #F1F5F9)' }}
          />
          <Legend 
            wrapperStyle={{ 
              fontSize: '13px', 
              color: 'var(--text-secondary, #cbd5e1)',
              paddingTop: '20px'
            }} 
          />
          <Radar
            name="Job Requires"
            dataKey="jobScore"
            stroke="var(--neon-purple, #A855F7)"
            strokeWidth={2}
            fill="var(--neon-purple, #A855F7)"
            fillOpacity={0.15}
            isAnimationActive={true}
            animationDuration={1500}
            dot={{ r: 4, fill: 'var(--neon-purple, #A855F7)', fillOpacity: 1 }}
          />
          <Radar
            name="Your Skills"
            dataKey="userScore"
            stroke="var(--blue-500, #3B82F6)"
            strokeWidth={2}
            fill="var(--blue-500, #3B82F6)"
            fillOpacity={0.3}
            isAnimationActive={true}
            animationDuration={1500}
            animationBegin={400}
            dot={{ r: 4, fill: 'var(--blue-500, #3B82F6)', fillOpacity: 1 }}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};
