import { Request, Response } from 'express';
import * as leaderboardService from './leaderboard.service';
import { sendSuccess } from '../../utils/response.utils';
import { asyncHandler } from '../../middlewares/errorHandler';

export const getWeeklyLeaderboard = asyncHandler(async (req: Request, res: Response) => {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const userId = req.user!.id;
  const result = await leaderboardService.getWeeklyLeaderboard(userId);
  return sendSuccess(res, result, 'Weekly leaderboard retrieved');
});

export const getAllTimeLeaderboard = asyncHandler(async (req: Request, res: Response) => {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const userId = req.user!.id;
  const result = await leaderboardService.getAllTimeLeaderboard(userId);
  return sendSuccess(res, result, 'All time leaderboard retrieved');
});

export const getDomainLeaderboard = asyncHandler(async (req: Request, res: Response) => {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const userId = req.user!.id;
  const { slug } = req.params;
  const result = await leaderboardService.getDomainLeaderboard(slug, userId);
  return sendSuccess(res, result, 'Domain leaderboard retrieved');
});
