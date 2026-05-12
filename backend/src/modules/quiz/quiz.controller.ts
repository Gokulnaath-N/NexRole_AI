import { Request, Response } from 'express';
import * as quizService from './quiz.service';
import { sendSuccess } from '../../utils/response.utils';
import { asyncHandler } from '../../middlewares/errorHandler';
import { z } from 'zod';

export const getQuizForModule = asyncHandler(async (req: Request, res: Response) => {
  const { moduleId } = req.params;
  const quizzes = await quizService.getQuizForModule(moduleId);
  return sendSuccess(res, quizzes, 'Quizzes retrieved successfully');
});

export const generateQuizWithGemini = asyncHandler(async (req: Request, res: Response) => {
  const { moduleId } = req.params;
  
  const schema = z.object({
    moduleTitle: z.string().min(1),
    moduleContent: z.string().min(1),
    count: z.number().min(1).max(10).optional(),
  });
  
  const { moduleTitle, moduleContent, count } = schema.parse(req.body);
  const generatedQuizzes = await quizService.generateQuizWithGemini(moduleId, moduleTitle, moduleContent, count);
  return sendSuccess(res, generatedQuizzes, 'Quizzes generated successfully with Gemini AI', 201);
});

export const submitQuizAnswer = asyncHandler(async (req: Request, res: Response) => {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const userId = req.user!.id;
  const { quizId } = req.params;
  
  const schema = z.object({
    selectedAnswer: z.number().int().min(0).max(3),
  });
  
  const { selectedAnswer } = schema.parse(req.body);
  const result = await quizService.submitQuizAnswer(userId, quizId, selectedAnswer);
  
  return sendSuccess(res, result, 'Quiz answer submitted');
});

export const getModuleQuizResults = asyncHandler(async (req: Request, res: Response) => {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const userId = req.user!.id;
  const { moduleId } = req.params;
  const results = await quizService.getModuleQuizResults(userId, moduleId);
  
  return sendSuccess(res, results, 'Quiz results retrieved');
});
