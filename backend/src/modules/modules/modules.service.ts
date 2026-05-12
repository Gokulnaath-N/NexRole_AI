import prisma from '../../config/db';
import { AppError } from '../../middlewares/errorHandler';
import { PublishStatus, NotificationType } from '@prisma/client';
import { awardXP, checkLevelUp, XP_REWARDS } from '../../utils/xp.utils';
import { updateUserStreak } from '../../utils/streak.utils';
import crypto from 'crypto';

export const getModuleById = async (moduleId: string, userId?: string) => {
  const module = await prisma.module.findUnique({
    where: { id: moduleId, status: PublishStatus.PUBLISHED },
    include: {
      domain: true,
      quizzes: true,
    },
  });

  if (!module) throw new AppError('Module not found', 404);

  // Fetch all modules in same domain to calculate prev/next
  const allModules = await prisma.module.findMany({
    where: { domainId: module.domainId, status: PublishStatus.PUBLISHED },
    orderBy: { order: 'asc' },
    select: { id: true, order: true, title: true }
  });

  const currentIndex = allModules.findIndex(m => m.id === moduleId);
  const prevModule = currentIndex > 0 ? allModules[currentIndex - 1] : null;
  const nextModule = currentIndex < allModules.length - 1 ? allModules[currentIndex + 1] : null;

  let userProgress = null;
  if (userId) {
    userProgress = await prisma.progress.findUnique({
      where: { userId_moduleId: { userId, moduleId } },
    });
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const sanitizedQuizzes = module.quizzes.map(({ correctAnswer, ...q }) => q);

  return {
    ...module,
    quizzes: sanitizedQuizzes,
    userProgress,
    prevModuleId: prevModule?.id ?? null,
    prevModuleTitle: prevModule?.title ?? null,
    nextModuleId: nextModule?.id ?? null,
    nextModuleTitle: nextModule?.title ?? null,
    moduleIndex: currentIndex + 1,
    totalModules: allModules.length,
  };
};

export const getNextModule = async (currentModuleId: string, domainId: string) => {
  const currentModule = await prisma.module.findUnique({ where: { id: currentModuleId } });
  if (!currentModule) return null;

  const nextModule = await prisma.module.findFirst({
    where: {
      domainId,
      order: { gt: currentModule.order },
      status: PublishStatus.PUBLISHED,
    },
    orderBy: { order: 'asc' },
  });

  return nextModule;
};

export const markModuleComplete = async (userId: string, moduleId: string) => {
  const module = await prisma.module.findUnique({
    where: { id: moduleId },
    include: { domain: true },
  });

  if (!module) throw new AppError('Module not found', 404);

  const user = await prisma.user.findUnique({ where: { id: userId } });
  if (!user) throw new AppError('User not found', 404);

  const oldXP = user.xp;

  await prisma.progress.upsert({
    where: { userId_moduleId: { userId, moduleId } },
    create: { userId, moduleId, completed: true, completedAt: new Date() },
    update: { completed: true, completedAt: new Date() },
  });

  // Award Base Module XP + Process Streaks
  const xpEarned = module.xpReward || XP_REWARDS.MODULE_COMPLETE;
  await awardXP(prisma, userId, xpEarned);
  const streakData = await updateUserStreak(prisma, userId);

  // Check Domain Completion
  const allModules = await prisma.module.findMany({
    where: { domainId: module.domainId, status: PublishStatus.PUBLISHED },
  });
  
  const allProgress = await prisma.progress.findMany({
    where: { userId, moduleId: { in: allModules.map(m => m.id) }, completed: true }
  });

  let certificateIssued = false;
  let domainCompleteXPEarned = 0;

  if (allProgress.length === allModules.length) {
    const existingCert = await prisma.certificate.findFirst({
      where: { userId, domainId: module.domainId }
    });

    if (!existingCert) {
      const code = crypto.randomBytes(6).toString('hex').toUpperCase();
      await prisma.certificate.create({
        data: {
          userId,
          domainId: module.domainId,
          verificationCode: `NEX-${code}`,
        }
      });
      certificateIssued = true;
      domainCompleteXPEarned = XP_REWARDS.DOMAIN_COMPLETE;
      await awardXP(prisma, userId, domainCompleteXPEarned);

      await prisma.notification.create({
        data: {
          userId,
          type: NotificationType.CERT_READY,
          title: 'Domain Complete! 🎓',
          message: `You have completed ${module.domain.name} and earned a certificate.`,
        }
      });
    }
  }

  // Level Up Check
  const finalUser = await prisma.user.findUnique({ where: { id: userId } });
  const levelUpData = checkLevelUp(oldXP, finalUser!.xp);

  if (levelUpData.leveledUp) {
    await prisma.notification.create({
      data: {
        userId,
        type: NotificationType.LEVEL_UP,
        title: 'Level Up! 🌟',
        message: `Congratulations! You reached Level ${levelUpData.newLevel}: ${levelUpData.newLevelName}`,
      }
    });
  }

  // Auto-forward Enrollment pointer
  const nextModule = await getNextModule(moduleId, module.domainId);
  await prisma.enrollment.updateMany({
    where: { userId, domainId: module.domainId },
    data: { currentModuleId: nextModule ? nextModule.id : null, completedAt: certificateIssued ? new Date() : null },
  });

  return {
    xpEarned: xpEarned + domainCompleteXPEarned,
    newTotal: finalUser!.xp,
    streakUpdated: streakData?.isNewDay || false,
    levelUp: levelUpData.leveledUp,
    certificateIssued,
  };
};
