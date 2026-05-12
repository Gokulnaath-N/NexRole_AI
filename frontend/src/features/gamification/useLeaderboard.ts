import { useQuery } from '@tanstack/react-query';
import { leaderboardService } from '../../services/leaderboard.service';

export const useLeaderboard = (period: 'weekly' | 'alltime' = 'weekly') => {
  const { data, isLoading } = useQuery({
    queryKey: ['leaderboard', period],
    queryFn: () => leaderboardService.getGlobal(period),
    select: (res) => res.data.data,
  });

  const { data: myRank } = useQuery({
    queryKey: ['leaderboard', 'my-rank'],
    queryFn: () => leaderboardService.getMyRank(),
    select: (res) => res.data.data,
  });

  return { entries: data ?? [], myRank, isLoading };
};
