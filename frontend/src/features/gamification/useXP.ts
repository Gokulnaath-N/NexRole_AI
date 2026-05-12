import { useQuery } from '@tanstack/react-query';
import { progressService } from '../../services/progress.service';
import { useXPSlice } from './xpSlice';
import { useEffect } from 'react';

export const useXP = () => {
  const { xp, level, streak, addXP } = useXPSlice();

  const { data } = useQuery({
    queryKey: ['progress', 'stats'],
    queryFn: () => progressService.getStats(),
    select: (res) => res.data.data,
  });

  return {
    xp: data?.totalXP ?? xp,
    level: data?.level ?? level,
    streak: data?.streak ?? streak,
    addXP,
  };
};
