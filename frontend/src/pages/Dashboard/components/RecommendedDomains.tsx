import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { useQuery } from '@tanstack/react-query';
import { get } from '../../../services/api.client';
import { post } from '../../../services/api.client';
import { toast } from 'sonner';

export const RecommendedDomains = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const { data: domains, isLoading } = useQuery({
    queryKey: ['domains-recommended'],
    queryFn: async () => {
      const res = await get<any>('/domains');
      return res.data?.data ?? [];
    },
    staleTime: 60_000,
  });

  const handleEnroll = async (domainSlug: string) => {
    try {
      await post('/domains/' + domainSlug + '/enroll');
      toast.success('Enrolled successfully!');
      navigate(`/domains/${domainSlug}`);
    } catch (err: any) {
      const msg = err?.response?.data?.message ?? 'Enrollment failed';
      if (msg.toLowerCase().includes('already')) {
        navigate(`/domains/${domainSlug}`);
      } else {
        toast.error(msg);
      }
    }
  };

  if (isLoading) {
    return (
      <div className="w-full">
        <div className="flex items-center justify-between mb-5">
          <div className="h-6 w-40 bg-bg-tertiary rounded animate-pulse" />
        </div>
        <div className="flex gap-4 overflow-hidden">
          {[1,2,3,4].map(i => (
            <div key={i} className="shrink-0 w-[220px] h-[200px] bg-bg-elevated border border-border-subtle rounded-2xl animate-pulse" />
          ))}
        </div>
      </div>
    );
  }

  if (!domains?.length) return null;

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="w-full">
      <div className="flex items-center justify-between mb-5">
        <h3 className="text-lg font-bold text-text-primary">Recommended for You</h3>
        <Link to="/domains" className="flex items-center gap-1 text-sm font-semibold text-brand-600 dark:text-brand-400 hover:underline">
          View All <ChevronRight className="w-4 h-4" />
        </Link>
      </div>

      <div className="relative">
        <div ref={scrollRef} className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scroll-smooth"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          {domains.map((domain: any, idx: number) => (
            <motion.div key={domain.id} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.07 }}
              className="snap-start shrink-0 w-[220px] bg-bg-elevated border border-border-subtle rounded-2xl overflow-hidden hover:shadow-md hover:border-border-strong transition-all duration-200 flex flex-col">
              <div className="h-1.5 w-full" style={{ backgroundColor: domain.color || '#7c3aed' }} />
              <div className="p-5 flex flex-col flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xl shadow-sm shrink-0"
                    style={{ backgroundColor: `${domain.color || '#7c3aed'}15`, border: `1px solid ${domain.color || '#7c3aed'}25` }}>
                    {domain.icon || '🤖'}
                  </div>
                  <h4 className="font-bold text-sm text-text-primary leading-tight">{domain.name}</h4>
                </div>
                <div className="mb-4">
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wide"
                    style={{ backgroundColor: `${domain.color || '#7c3aed'}15`, color: domain.color || '#7c3aed', border: `1px solid ${domain.color || '#7c3aed'}30` }}>
                    {domain.demandScore > 70 ? 'High Demand' : domain.demandScore > 40 ? 'Growing' : 'Stable'}
                  </span>
                </div>
                <p className="text-xs font-medium text-text-secondary mb-4">
                  {domain.jobCount ?? 0} jobs · {domain.enrollmentCount ?? 0} enrolled
                </p>
                <button onClick={() => handleEnroll(domain.slug)}
                  className="mt-auto w-full py-2 rounded-lg border-2 text-sm font-bold transition-all hover:text-white"
                  style={{ borderColor: domain.color || '#7c3aed', color: domain.color || '#7c3aed' }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.backgroundColor = domain.color || '#7c3aed'; (e.currentTarget as HTMLButtonElement).style.color = 'white'; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.backgroundColor = 'transparent'; (e.currentTarget as HTMLButtonElement).style.color = domain.color || '#7c3aed'; }}>
                  Enroll →
                </button>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="absolute right-0 top-0 bottom-4 w-16 bg-gradient-to-l from-bg-primary to-transparent pointer-events-none" />
      </div>
    </motion.div>
  );
};
