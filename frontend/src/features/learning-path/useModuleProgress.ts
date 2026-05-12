import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { moduleService } from '../../services/module.service';
import { useLearningSlice } from './learningSlice';

export const useModuleProgress = (moduleId: string) => {
  const qc = useQueryClient();
  const { markModuleComplete } = useLearningSlice();

  const { data, isLoading } = useQuery({
    queryKey: ['module-progress', moduleId],
    queryFn: () => moduleService.getProgress(moduleId),
    select: (res) => res.data.data,
    enabled: !!moduleId,
  });

  const complete = useMutation({
    mutationFn: () => moduleService.markComplete(moduleId),
    onSuccess: () => {
      markModuleComplete(moduleId);
      qc.invalidateQueries({ queryKey: ['module-progress', moduleId] });
      qc.invalidateQueries({ queryKey: ['progress', 'stats'] });
    },
  });

  return {
    progress: data,
    isLoading,
    markComplete: () => complete.mutate(),
    isCompleting: complete.isPending,
  };
};
