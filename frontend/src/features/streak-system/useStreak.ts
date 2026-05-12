import { useQuery } from '@tanstack/react-query';
import { progressService } from '../../services/progress.service';

export const useStreak = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['progress', 'stats'],
    queryFn: () => progressService.getStats(),
    select: (res) => res.data.data,
  });

  return {
    streak: data?.streak ?? 0,
    isLoading,
  };
};
