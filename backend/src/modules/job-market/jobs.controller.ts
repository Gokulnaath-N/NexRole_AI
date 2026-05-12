import { Request, Response } from 'express';
import * as jobsService from './jobs.service';
import { sendSuccess, sendPaginated } from '../../utils/response.utils';
import { asyncHandler } from '../../middlewares/errorHandler';
import prisma from '../../config/db';

export const getJobs = asyncHandler(async (req: Request, res: Response) => {
  const userId = req.user?.id;
  const result = await jobsService.getJobs(req.query, userId);
  return sendPaginated(
    res,
    result.data,
    result.total,
    result.page,
    result.limit,
    'Jobs retrieved successfully'
  );
});

export const getJobById = asyncHandler(async (req: Request, res: Response) => {
  const userId = req.user?.id;
  const { id } = req.params;
  const job = await jobsService.getJobById(id, userId);
  return sendSuccess(res, job, 'Job details retrieved');
});

export const bookmarkJob = asyncHandler(async (req: Request, res: Response) => {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const userId = req.user!.id;
  const { id } = req.params;
  const result = await jobsService.bookmarkJob(userId, id);
  return sendSuccess(res, result, 'Job bookmark toggled');
});

export const getUserBookmarks = asyncHandler(async (req: Request, res: Response) => {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const userId = req.user!.id;
  const bookmarks = await jobsService.getUserBookmarks(userId);
  return sendSuccess(res, bookmarks, 'User bookmarks retrieved');
});

export const analyzeSkillGap = asyncHandler(async (req: Request, res: Response) => {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const userId = req.user!.id;
  const { jobDescriptionText } = req.body;
  
  const user = await prisma.user.findUnique({ where: { id: userId } });
  const result = await jobsService.analyzeSkillGap(user?.skills || [], jobDescriptionText);
  
  return sendSuccess(res, result, 'Skill gap analysis complete');
});
