import { useQuery } from '@tanstack/react-query';
import { quizService } from '../../services/quiz.service';
import { useQuizSlice } from './quizSlice';
import { useEffect } from 'react';

export const useQuiz = (moduleId: string) => {
  const { setQuestions, questions, currentIndex, answers, isSubmitted } = useQuizSlice();

  const { data, isLoading } = useQuery({
    queryKey: ['quiz', moduleId],
    queryFn: () => quizService.getQuestions(moduleId),
    select: (res) => res.data.data,
    enabled: !!moduleId,
  });

  useEffect(() => {
    if (data) setQuestions(data);
  }, [data, setQuestions]);

  return {
    questions,
    currentIndex,
    answers,
    isSubmitted,
    isLoading,
    currentQuestion: questions[currentIndex] ?? null,
  };
};
