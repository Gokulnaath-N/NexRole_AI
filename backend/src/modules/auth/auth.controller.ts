import { Request, Response } from 'express';
import { z } from 'zod';
import * as authService from './auth.service';
import { sendSuccess } from '../../utils/response.utils';
import { asyncHandler } from '../../middlewares/errorHandler';
import prisma from '../../config/db';

export const syncUserSchema = z.object({
  uid: z.string().min(1),
  // displayName may be empty on the FIRST onAuthStateChanged fire (before
  // updateProfile completes during email registration), so allow empty string.
  name: z.string(),
  email: z.string().email(),
  // photoURL may be absent or an empty string for email-only accounts.
  image: z.union([z.string().url(), z.literal(''), z.null()]).optional(),
});

export const onboardingSchema = z.object({
  targetRole: z.string().min(1),
  targetCompany: z.string().min(1),
  experienceLevel: z.enum(['BEGINNER', 'INTERMEDIATE', 'ADVANCED']),
  weeklyHours: z.number().min(1).max(168),
  selectedDomainSlug: z.string().min(1),
  skills: z.array(z.string()).optional(),
});

export const updateProfileSchema = z.object({
  name: z.string().min(1).optional(),
  targetRole: z.string().min(1).optional(),
  targetCompany: z.string().min(1).optional(),
  experienceLevel: z.enum(['BEGINNER', 'INTERMEDIATE', 'ADVANCED']).optional(),
  weeklyHours: z.number().min(1).max(168).optional(),
});

export const syncUser = asyncHandler(async (req: Request, res: Response) => {
  const data = req.body;
  const user = await authService.syncUser(data);
  return sendSuccess(res, user, 'User synced successfully');
});

export const completeOnboarding = asyncHandler(async (req: Request, res: Response) => {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const userId = req.user!.id;
  const result = await authService.completeOnboarding(userId, req.body);
  return sendSuccess(res, result, 'Onboarding completed successfully');
});

export const getMe = asyncHandler(async (req: Request, res: Response) => {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const userId = req.user!.id;
  const profile = await authService.getUserProfile(userId);
  return sendSuccess(res, profile, 'Profile retrieved');
});

export const updateProfile = asyncHandler(async (req: Request, res: Response) => {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const userId = req.user!.id;
  const updatedUser = await authService.updateProfile(userId, req.body);
  return sendSuccess(res, updatedUser, 'Profile updated successfully');
});

export const deleteAccount = asyncHandler(async (req: Request, res: Response) => {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const userId = req.user!.id;
  await prisma.user.update({
    where: { id: userId },
    data: { banned: true },
  });
  return sendSuccess(res, null, 'Account deleted successfully');
});
