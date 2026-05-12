import prisma from '../../config/db';
import { SyncUserRequest, UpdateOnboardingRequest } from './auth.types';
import { NotificationType } from '@prisma/client';
import { AppError } from '../../middlewares/errorHandler';

export const syncUser = async ({ uid, name, email, image }: SyncUserRequest) => {
  const existingUser = await prisma.user.findUnique({ where: { id: uid } });

  // Firebase may fire onAuthStateChanged before updateProfile completes during
  // email registration, so displayName (name) can be empty. Use email prefix
  // as a fallback; the next sync will carry the real displayName.
  const safeName = name?.trim() || email.split('@')[0];
  // Normalise image: empty string → null (Prisma expects null, not '')
  const safeImage = image?.trim() || null;

  const user = await prisma.user.upsert({
    where: { id: uid },
    create: { id: uid, name: safeName, email, image: safeImage },
    update: {
      // Only overwrite name if the incoming value is non-empty (don't
      // downgrade a real name to the email-prefix fallback on re-sync)
      ...(name?.trim() ? { name: name.trim() } : {}),
      image: safeImage,
      updatedAt: new Date(),
    },
  });

  if (!existingUser) {
    await prisma.notification.create({
      data: {
        userId: user.id,
        type: NotificationType.WELCOME,
        title: 'Welcome to NexRole AI!',
        message: 'Your journey to becoming an AI expert starts here.',
      },
    });
  }

  return user;
};

export const completeOnboarding = async (userId: string, data: UpdateOnboardingRequest) => {
  const domain = await prisma.domain.findUnique({
    where: { slug: data.selectedDomainSlug },
  });

  if (!domain) {
    throw new AppError('Selected domain not found', 404);
  }

  const updatedUser = await prisma.user.update({
    where: { id: userId },
    data: {
      targetRole: data.targetRole,
      targetCompany: data.targetCompany,
      experienceLevel: data.experienceLevel,
      weeklyHours: data.weeklyHours,
      onboardingComplete: true,
      skills: data.skills || [],
      xp: { increment: 25 },
    },
  });

  // Create first Enrollment
  const existingEnrollment = await prisma.enrollment.findUnique({
    where: {
      userId_domainId: { userId, domainId: domain.id },
    },
  });

  let enrollment = existingEnrollment;
  if (!existingEnrollment) {
    enrollment = await prisma.enrollment.create({
      data: {
        userId,
        domainId: domain.id,
      },
    });
  }

  await prisma.notification.create({
    data: {
      userId,
      type: NotificationType.SYSTEM,
      title: 'Welcome! Your learning path is ready 🚀',
      message: `You've successfully enrolled in ${domain.name}.`,
    },
  });

  return { user: updatedUser, enrollment };
};

const getLevelFromXP = (xp: number) => {
  // Simple formula: Level = floor(sqrt(xp / 100)) + 1
  return Math.floor(Math.sqrt(xp / 100)) + 1;
};

export const getUserProfile = async (userId: string) => {
  const user = await prisma.user.findUnique({
    where: { id: userId },
    include: {
      _count: {
        select: {
          enrollments: true,
          certificates: true,
        },
      },
      progressRecords: {
        where: { completed: true },
      },
    },
  });

  if (!user) {
    throw new AppError('User not found', 404);
  }

  const completedModulesCount = user.progressRecords.length;
  const currentLevel = getLevelFromXP(user.xp);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { progressRecords, ...userData } = user;

  return {
    ...userData,
    completedModulesCount,
    currentLevel,
  };
};

export const updateProfile = async (
  userId: string,
  data: Partial<UpdateOnboardingRequest> & { name?: string }
) => {
  const updatedUser = await prisma.user.update({
    where: { id: userId },
    data: {
      name: data.name,
      targetRole: data.targetRole,
      targetCompany: data.targetCompany,
      experienceLevel: data.experienceLevel,
      weeklyHours: data.weeklyHours,
    },
  });

  return updatedUser;
};
