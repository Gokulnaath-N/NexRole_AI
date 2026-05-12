import { useMutation } from '@tanstack/react-query';
import { aiService } from '../../services/ai.service';
import { useResumeSlice } from './resumeSlice';
import { toast } from 'sonner';

export const useResumeAnalyzer = () => {
  const { setResult, setAnalyzing, skills, gaps, score } = useResumeSlice();

  const { mutate, isPending } = useMutation({
    mutationFn: (file: File) => aiService.analyzeResume(file),
    onMutate: () => setAnalyzing(true),
    onSuccess: (res) => {
      setResult(res.data.data);
      setAnalyzing(false);
      toast.success('Resume analyzed successfully!');
    },
    onError: () => {
      setAnalyzing(false);
      toast.error('Failed to analyze resume. Please try again.');
    },
  });

  return { analyze: mutate, isAnalyzing: isPending, skills, gaps, score };
};
