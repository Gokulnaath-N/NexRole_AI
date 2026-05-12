import { Request, Response } from 'express';
import * as progressService from './progress.service';
import { sendSuccess } from '../../utils/response.utils';
import { asyncHandler } from '../../middlewares/errorHandler';

export const getDomainProgress = asyncHandler(async (req: Request, res: Response) => {
  const { slug } = req.params;
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const progress = await progressService.getDomainProgress(req.user!.id, slug);
  return sendSuccess(res, progress, 'Domain progress retrieved');
});

export const getAllProgress = asyncHandler(async (req: Request, res: Response) => {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const progress = await progressService.getAllProgress(req.user!.id);
  return sendSuccess(res, progress, 'All progress retrieved');
});

export const getProgressAnalytics = asyncHandler(async (req: Request, res: Response) => {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const analytics = await progressService.getProgressAnalytics(req.user!.id);
  return sendSuccess(res, analytics, 'Progress analytics retrieved');
});
