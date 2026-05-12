import { useMutation, useQueryClient } from '@tanstack/react-query';
import { quizService } from '../../services/quiz.service';
import { toast } from 'sonner';

export const useQuizSubmit = (moduleId: string) => {
  const qc = useQueryClient();

  const { mutate, isPending, data } = useMutation({
    mutationFn: (answers: number[]) => quizService.submit(moduleId, answers),
    onSuccess: (res) => {
      const result = res.data.data;
      if (result.passed) {
        toast.success(`Quiz passed! +${result.xpEarned} XP earned 🎉`);
      } else {
        toast.error(`Score: ${result.score}%. Keep practicing!`);
      }
      qc.invalidateQueries({ queryKey: ['progress', 'stats'] });
    },
    onError: () => toast.error('Failed to submit quiz. Please try again.'),
  });

  return {
    submit: mutate,
    isSubmitting: isPending,
    result: data?.data.data ?? null,
  };
};
