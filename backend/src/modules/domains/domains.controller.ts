import { Request, Response } from 'express';
import * as domainsService from './domains.service';
import { sendSuccess } from '../../utils/response.utils';
import { asyncHandler } from '../../middlewares/errorHandler';

export const getAllDomains = asyncHandler(async (req: Request, res: Response) => {
  const userId = req.user?.id;
  const domains = await domainsService.getAllDomains(userId);
  return sendSuccess(res, domains, 'Domains retrieved successfully');
});

export const getDomainBySlug = asyncHandler(async (req: Request, res: Response) => {
  const userId = req.user?.id;
  const { slug } = req.params;
  const domain = await domainsService.getDomainBySlug(slug, userId);
  return sendSuccess(res, domain, 'Domain details retrieved');
});

export const enrollInDomain = asyncHandler(async (req: Request, res: Response) => {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const userId = req.user!.id;
  const { slug } = req.params;
  const enrollment = await domainsService.enrollInDomain(userId, slug);
  return sendSuccess(res, enrollment, 'Enrolled successfully', 201);
});

export const getUserEnrollments = asyncHandler(async (req: Request, res: Response) => {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const userId = req.user!.id;
  const enrollments = await domainsService.getUserEnrollments(userId);
  return sendSuccess(res, enrollments, 'Enrollments retrieved');
});
