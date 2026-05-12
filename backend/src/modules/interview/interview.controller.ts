import { Request, Response } from 'express';
import * as interviewService from './interview.service';
import { sendSuccess } from '../../utils/response.utils';
import { asyncHandler } from '../../middlewares/errorHandler';
import { Category, Difficulty } from '@prisma/client';

export const getInterviewQuestions = asyncHandler(async (req: Request, res: Response) => {
  const { role, category, difficulty } = req.query;
  const questions = await interviewService.getInterviewQuestions(
    String(role),
    category as Category,
    difficulty as Difficulty
  );
  return sendSuccess(res, questions, 'Interview questions retrieved');
});

export const evaluateInterviewAnswer = asyncHandler(async (req: Request, res: Response) => {
  const { question, userAnswer, role } = req.body;
  const userId = (req as any).user.id;
  const result = await interviewService.evaluateInterviewAnswer(userId, question, userAnswer, role);
  return sendSuccess(res, result, 'Interview evaluation complete');
});
