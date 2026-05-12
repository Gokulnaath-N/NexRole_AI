import { Request, Response } from 'express';
import * as adminService from './admin.service';
import { sendSuccess, sendPaginated } from '../../utils/response.utils';
import { asyncHandler } from '../../middlewares/errorHandler';

export const getDashboardStats = asyncHandler(async (req: Request, res: Response) => {
  const stats = await adminService.getDashboardStats();
  return sendSuccess(res, stats, 'Dashboard stats retrieved');
});

export const getUserGrowthData = asyncHandler(async (req: Request, res: Response) => {
  const { days } = req.query;
  const growth = await adminService.getUserGrowthData(days ? Number(days) : 30);
  return sendSuccess(res, growth, 'User growth data retrieved');
});

export const getDomainPopularity = asyncHandler(async (req: Request, res: Response) => {
  const popularity = await adminService.getDomainPopularity();
  return sendSuccess(res, popularity, 'Domain popularity retrieved');
});

export const getRecentActivity = asyncHandler(async (req: Request, res: Response) => {
  const activity = await adminService.getRecentActivity();
  return sendSuccess(res, activity, 'Recent activity retrieved');
});

export const getSystemHealth = asyncHandler(async (req: Request, res: Response) => {
  const health = await adminService.getSystemHealth();
  return sendSuccess(res, health, 'System health retrieved');
});

export const getAllUsers = asyncHandler(async (req: Request, res: Response) => {
  const filters = {
    search: req.query.search as string,
    role: req.query.role as string,
    page: Number(req.query.page) || 1,
    limit: Number(req.query.limit) || 20,
    sort: req.query.sort as string
  };
  const { users, total, page, limit } = await adminService.getAllUsers(filters);
  return sendPaginated(res, users, total, page, limit, 'Users retrieved');
});

export const banUser = asyncHandler(async (req: Request, res: Response) => {
  const { id } = req.params;
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const result = await adminService.banUser(id, req.user!.id);
  return sendSuccess(res, result, 'User banned');
});

export const unbanUser = asyncHandler(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await adminService.unbanUser(id);
  return sendSuccess(res, result, 'User unbanned');
});

export const makeAdmin = asyncHandler(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await adminService.makeAdmin(id);
  return sendSuccess(res, result, 'Admin privileges granted');
});

export const removeAdmin = asyncHandler(async (req: Request, res: Response) => {
  const { id } = req.params;
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const result = await adminService.removeAdmin(id, req.user!.id);
  return sendSuccess(res, result, 'Admin privileges revoked');
});

export const resetUserStreak = asyncHandler(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await adminService.resetUserStreak(id);
  return sendSuccess(res, result, 'User streak reset');
});

export const createDomain = asyncHandler(async (req: Request, res: Response) => {
  const domain = await adminService.createDomain(req.body);
  return sendSuccess(res, domain, 'Domain created');
});

export const updateDomain = asyncHandler(async (req: Request, res: Response) => {
  const { id } = req.params;
  const domain = await adminService.updateDomain(id, req.body);
  return sendSuccess(res, domain, 'Domain updated');
});

export const deleteDomain = asyncHandler(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await adminService.deleteDomain(id);
  return sendSuccess(res, result, 'Domain deleted');
});

export const publishDomain = asyncHandler(async (req: Request, res: Response) => {
  const { id } = req.params;
  const domain = await adminService.publishDomain(id);
  return sendSuccess(res, domain, 'Domain published');
});

export const createModule = asyncHandler(async (req: Request, res: Response) => {
  const moduleData = await adminService.createModule(req.body);
  return sendSuccess(res, moduleData, 'Module created');
});

export const updateModule = asyncHandler(async (req: Request, res: Response) => {
  const { id } = req.params;
  const moduleData = await adminService.updateModule(id, req.body);
  return sendSuccess(res, moduleData, 'Module updated');
});

export const deleteModule = asyncHandler(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await adminService.deleteModule(id);
  return sendSuccess(res, result, 'Module deleted');
});

export const createJobPosting = asyncHandler(async (req: Request, res: Response) => {
  const job = await adminService.createJobPosting(req.body);
  return sendSuccess(res, job, 'Job posting created');
});

export const updateJobPosting = asyncHandler(async (req: Request, res: Response) => {
  const { id } = req.params;
  const job = await adminService.updateJobPosting(id, req.body);
  return sendSuccess(res, job, 'Job posting updated');
});

export const expireJobPosting = asyncHandler(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await adminService.expireJobPosting(id);
  return sendSuccess(res, result, 'Job posting expired');
});
