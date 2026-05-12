import { Request, Response } from 'express';
import * as usersService from './users.service';
import { sendSuccess } from '../../utils/response.utils';
import { asyncHandler } from '../../middlewares/errorHandler';

export const getMyProfile = asyncHandler(async (req: Request, res: Response) => {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const user = await usersService.getUserById(req.user!.id, true);
  return sendSuccess(res, user, 'Profile retrieved');
});

export const updateMyProfile = asyncHandler(async (req: Request, res: Response) => {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const user = await usersService.updateUserProfile(req.user!.id, req.body);
  return sendSuccess(res, user, 'Profile updated');
});

export const updateUserSkills = asyncHandler(async (req: Request, res: Response) => {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const { skills } = req.body;
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const updatedSkills = await usersService.updateUserSkills(req.user!.id, skills);
  return sendSuccess(res, updatedSkills, 'Skills updated');
});

export const getUserActivity = asyncHandler(async (req: Request, res: Response) => {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const { days } = req.query;
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const activity = await usersService.getUserActivity(req.user!.id, days ? Number(days) : 90);
  return sendSuccess(res, activity, 'User activity retrieved');
});

export const getUserStats = asyncHandler(async (req: Request, res: Response) => {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const stats = await usersService.getUserStats(req.user!.id);
  return sendSuccess(res, stats, 'User stats retrieved');
});

export const deleteUserAccount = asyncHandler(async (req: Request, res: Response) => {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const result = await usersService.deleteUserAccount(req.user!.id);
  return sendSuccess(res, result, 'User account suspended');
});

export const getUserById = asyncHandler(async (req: Request, res: Response) => {
  const { id } = req.params;
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const isSelf = req.user && req.user.id === id;
  const user = await usersService.getUserById(id, isSelf);
  return sendSuccess(res, user, 'User profile retrieved');
});
