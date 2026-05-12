import { Request, Response } from 'express';
import prisma from '../../config/db';
import { safeGet, safeSet } from '../../config/redis';
import { asyncHandler } from '../../middlewares/errorHandler';
import { AppError } from '../../middlewares/errorHandler';
import { sendSuccess } from '../../utils/response.utils';
import { aiGateway } from '../../gateway/ai-gateway';
import * as modulesService from '../modules/modules.service';

export const tutorChat = asyncHandler(async (req: Request, res: Response) => {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const userId = req.user!.id;
  const { domainSlug, question, sessionId, moduleId } = req.body;

  if (!domainSlug || !question) throw new AppError('domainSlug and question are required', 400);

  const sid = sessionId || userId;
  const result = await aiGateway.chat(domainSlug, question, sid, moduleId);
  return sendSuccess(res, result, 'Tutor response generated');
});

export const clearTutorSession = asyncHandler(async (req: Request, res: Response) => {
  const { sessionId } = req.params;
  if (!sessionId) throw new AppError('sessionId is required', 400);
  const result = await aiGateway.clearTutorSession(sessionId);
  return sendSuccess(res, result, 'Tutor session cleared');
});

export const parseResume = asyncHandler(async (req: Request, res: Response) => {
  // multer puts the file on req.file
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const file = (req as any).file as Express.Multer.File | undefined;
  if (!file) throw new AppError('PDF file is required', 400);

  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const FormData = require('form-data');
  const form = new FormData();
  form.append('file', file.buffer, { filename: file.originalname || 'resume.pdf' });

  const result = await aiGateway.parseResume(form);
  return sendSuccess(res, result, 'Resume parsed');
});

export const skillGap = asyncHandler(async (req: Request, res: Response) => {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const userId = req.user!.id;
  const { jdText, userSkills } = req.body as { jdText?: string; userSkills?: string[] };

  if (!jdText) throw new AppError('jdText is required', 400);

  let skills = userSkills;
  if (!skills || skills.length === 0) {
    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: { skills: true },
    });
    skills = user?.skills ?? [];
  }

  const result = await aiGateway.analyzeSkillGap(skills, jdText);
  return sendSuccess(res, result, 'Skill gap analyzed');
});

export const semanticSearch = asyncHandler(async (req: Request, res: Response) => {
  const { query, documents } = req.body as { query?: string; documents?: any[] };
  if (!query) throw new AppError('query is required', 400);
  if (!documents) throw new AppError('documents is required', 400);

  const result = await aiGateway.semanticSearch(query, documents);
  return sendSuccess(res, result, 'Semantic search complete');
});

export const generateNotesForModule = asyncHandler(async (req: Request, res: Response) => {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const userId = req.user!.id;
  const { moduleId } = req.params;
  if (!moduleId) throw new AppError('moduleId is required', 400);

  const user = await prisma.user.findUnique({
    where: { id: userId },
    select: { experienceLevel: true },
  });
  const level = user?.experienceLevel ?? 'INTERMEDIATE';

  const cacheKey = `ai:notes:${moduleId}:${level}`;
  const cached = await safeGet(cacheKey);
  if (cached) {
    return sendSuccess(res, JSON.parse(cached), 'Notes retrieved (cached)');
  }

  const module = await modulesService.getModuleById(moduleId, userId);
  const notes = await aiGateway.generateNotes(module.title, module.content, String(level));

  await safeSet(cacheKey, JSON.stringify(notes), 60 * 60);
  return sendSuccess(res, notes, 'Notes generated');
});

export const transcribeAudio = asyncHandler(async (req: Request, res: Response) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const file = (req as any).file as Express.Multer.File | undefined;
  if (!file) throw new AppError('audio file is required', 400);

  const result = await aiGateway.transcribeAudio(file.buffer, file.originalname || 'audio.webm');
  return sendSuccess(res, result, 'Audio transcribed');
});

export const analyzeImage = asyncHandler(async (req: Request, res: Response) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const file = (req as any).file as Express.Multer.File | undefined;
  if (!file) throw new AppError('image file is required', 400);

  const context = (req.body?.context as string) || '';
  const question = (req.body?.question as string) || '';

  const result = await aiGateway.analyzeImage(file.buffer, file.originalname || 'image.jpg', context, question);
  return sendSuccess(res, result, 'Image analyzed');
});

export const health = asyncHandler(async (_req: Request, res: Response) => {
  const status = await aiGateway.healthCheck();
  return sendSuccess(res, status, 'AI services health');
});

