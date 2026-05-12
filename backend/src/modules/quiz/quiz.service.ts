import axios from 'axios';
import prisma from '../../config/db';
import { env } from '../../config/env';
import { AppError } from '../../middlewares/errorHandler';
import { awardXP, XP_REWARDS } from '../../utils/xp.utils';

export const getQuizForModule = async (moduleId: string) => {
  const quizzes = await prisma.quiz.findMany({
    where: { moduleId },
  });
  // Never send correctAnswer to the client
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  return quizzes.map(({ correctAnswer, ...q }) => q);
};

export const generateQuizWithGemini = async (
  moduleId: string,
  moduleTitle: string,
  moduleContent: string,
  count: number = 5
) => {
  const prompt = `You are a technical quiz generator for an AI learning platform.
   Generate ${count} multiple choice questions about: ${moduleTitle}
   
   Content context: ${moduleContent.substring(0, 1000)}
   
   Return ONLY a JSON array, no markdown, no explanation:
   [
     {
       "question": "...",
       "options": ["A", "B", "C", "D"],
       "correctAnswer": 0,
       "explanation": "...",
       "difficulty": "EASY"
     }
   ]`;

  const response = await axios.post(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${env.GEMINI_API_KEY}`,
    {
      contents: [{ parts: [{ text: prompt }] }],
      generationConfig: {
        temperature: 0.3,
        maxOutputTokens: 2048,
        responseMimeType: 'application/json',
      },
    }
  );

  const text = response.data.candidates[0].content.parts[0].text;
  let questions;
  try {
    questions = JSON.parse(text);
  } catch (error) {
    throw new AppError('Failed to parse Gemini response into valid JSON', 500);
  }

  const savedQuestions = [];
  for (const q of questions) {
    if (!Array.isArray(q.options) || q.options.length !== 4) {
      continue; // Skip invalid formats
    }
    const saved = await prisma.quiz.create({
      data: {
        moduleId,
        question: q.question,
        options: q.options,
        correctAnswer: q.correctAnswer,
        explanation: q.explanation,
        difficulty: ['EASY', 'MEDIUM', 'HARD'].includes(q.difficulty) ? q.difficulty : 'MEDIUM',
      },
    });
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { correctAnswer, ...safeSaved } = saved;
    savedQuestions.push(safeSaved);
  }

  return savedQuestions;
};

export const submitQuizAnswer = async (userId: string, quizId: string, selectedAnswer: number) => {
  const quiz = await prisma.quiz.findUnique({ where: { id: quizId } });
  if (!quiz) throw new AppError('Quiz not found', 404);

  const isCorrect = quiz.correctAnswer === selectedAnswer;

  await prisma.quizAttempt.create({
    data: {
      userId,
      quizId,
      selectedAnswer,
      isCorrect,
    },
  });

  let xpEarned = 0;
  if (isCorrect) {
    const previousCorrect = await prisma.quizAttempt.findFirst({
      where: { userId, quizId, isCorrect: true },
    });

    if (!previousCorrect) {
      xpEarned = XP_REWARDS.QUIZ_PASS;
      await awardXP(prisma, userId, xpEarned);
    }
  }

  return {
    isCorrect,
    correctAnswer: quiz.correctAnswer,
    explanation: quiz.explanation,
    xpEarned,
  };
};

export const getModuleQuizResults = async (userId: string, moduleId: string) => {
  const moduleQuizzes = await prisma.quiz.findMany({ where: { moduleId } });
  const quizIds = moduleQuizzes.map((q) => q.id);

  const attempts = await prisma.quizAttempt.findMany({
    where: { userId, quizId: { in: quizIds } },
    orderBy: { attemptedAt: 'desc' },
  });

  // Keep only the latest attempt for each question
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const latestAttempts = new Map<string, any>();
  attempts.forEach((a) => {
    if (!latestAttempts.has(a.quizId)) {
      latestAttempts.set(a.quizId, a);
    }
  });

  let correctAnswers = 0;
  latestAttempts.forEach((a) => {
    if (a.isCorrect) correctAnswers++;
  });

  const totalQuestions = moduleQuizzes.length;
  const scorePercentage = totalQuestions > 0 ? Math.round((correctAnswers / totalQuestions) * 100) : 0;

  return {
    totalQuestions,
    correctAnswers,
    scorePercentage,
  };
};
