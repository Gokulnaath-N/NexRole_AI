import { Request, Response } from 'express';
import * as modulesService from './modules.service';
import { sendSuccess } from '../../utils/response.utils';
import { asyncHandler } from '../../middlewares/errorHandler';

export const getModuleById = asyncHandler(async (req: Request, res: Response) => {
  const userId = req.user?.id;
  const { moduleId } = req.params;
  const module = await modulesService.getModuleById(moduleId, userId);
  return sendSuccess(res, module, 'Module details retrieved');
});

export const markModuleComplete = asyncHandler(async (req: Request, res: Response) => {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const userId = req.user!.id;
  const { moduleId } = req.params;
  const result = await modulesService.markModuleComplete(userId, moduleId);
  return sendSuccess(res, result, 'Module marked as complete');
});
