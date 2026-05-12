import { useQuery, useMutation } from '@tanstack/react-query';
import { aiService } from '../../services/ai.service';

export const useLearningPath = (domainId?: string) => {
  const generate = useMutation({
    // Payload matches backend schema for POST /api/v1/learning-path/generate
    mutationFn: (data: any) => aiService.generateLearningPath(data),
  });

  return {
    generate: generate.mutate,
    learningPath: generate.data?.data?.data,
    isGenerating: generate.isPending,
  };
};
