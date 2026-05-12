import { useQuery } from '@tanstack/react-query';
import { jobService } from '../../services/job.service';
import { useJobSlice } from './jobSlice';

export const useJobs = () => {
  const { filters } = useJobSlice();

  const { data, isLoading } = useQuery({
    queryKey: ['jobs', filters],
    queryFn: () => jobService.getAll(filters),
    select: (res) => res.data,
  });

  return {
    jobs: data?.data ?? [],
    pagination: data?.pagination,
    isLoading,
  };
};
