import { Request, Response } from 'express';
import * as notificationsService from './notifications.service';
import { sendSuccess } from '../../utils/response.utils';
import { asyncHandler } from '../../middlewares/errorHandler';

export const getUserNotifications = asyncHandler(async (req: Request, res: Response) => {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const userId = req.user!.id;
  const result = await notificationsService.getUserNotifications(userId);
  return sendSuccess(res, result, 'Notifications retrieved');
});

export const markAsRead = asyncHandler(async (req: Request, res: Response) => {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const userId = req.user!.id;
  await notificationsService.markAsRead(userId);
  return sendSuccess(res, null, 'All notifications marked as read');
});

export const markAsReadById = asyncHandler(async (req: Request, res: Response) => {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const userId = req.user!.id;
  const { id } = req.params;
  await notificationsService.markAsRead(userId, id);
  return sendSuccess(res, null, 'Notification marked as read');
});
