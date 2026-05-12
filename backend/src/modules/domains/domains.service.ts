import prisma from '../../config/db';
import { AppError } from '../../middlewares/errorHandler';
import { NotificationType, PublishStatus } from '@prisma/client';
import { awardXP, XP_REWARDS } from '../../utils/xp.utils';

export const getAllDomains = async (userId?: string) => {
  const domains = await prisma.domain.findMany({
    where: { status: PublishStatus.PUBLISHED },
    orderBy: { demandScore: 'desc' },
  });

  if (!userId) return domains;

  const enrollments = await prisma.enrollment.findMany({
    where: { userId },
  });
  const enrolledDomainIds = new Set(enrollments.map((e) => e.domainId));

  return domains.map((d) => ({
    ...d,
    isEnrolled: enrolledDomainIds.has(d.id),
  }));
};

export const getDomainBySlug = async (slug: string, userId?: string) => {
  const domain = await prisma.domain.findUnique({
    where: { slug, status: PublishStatus.PUBLISHED },
    include: {
      modules: {
        where: { status: PublishStatus.PUBLISHED },
        orderBy: { order: 'asc' },
        include: {
          quizzes: true,
        },
      },
    },
  });

  if (!domain) throw new AppError('Domain not found', 404);

  const userProgress: Record<string, boolean> = {};
  let completedModules = 0;

  if (userId) {
    const progressRecords = await prisma.progress.findMany({
      where: {
        userId,
        moduleId: { in: domain.modules.map((m) => m.id) },
      },
    });

    progressRecords.forEach((pr) => {
      if (pr.completed) {
        userProgress[pr.moduleId] = true;
        completedModules++;
      }
    });
  }

  const totalModules = domain.modules.length;
  const totalDurationMinutes = domain.modules.reduce((sum, m) => sum + m.durationMinutes, 0);

  return {
    ...domain,
    totalModules,
    completedModules,
    totalDurationMinutes,
    modules: domain.modules.map((m) => ({
      ...m,
      isCompleted: !!userProgress[m.id],
      // Filter out correctAnswer
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      quizzes: m.quizzes.map(({ correctAnswer, ...q }) => q),
    })),
  };
};

export const enrollInDomain = async (userId: string, domainSlug: string) => {
  const domain = await prisma.domain.findUnique({
    where: { slug: domainSlug, status: PublishStatus.PUBLISHED },
  });

  if (!domain) throw new AppError('Domain not found', 404);

  const existing = await prisma.enrollment.findUnique({
    where: { userId_domainId: { userId, domainId: domain.id } },
  });

  if (existing) return existing;

  const enrollment = await prisma.enrollment.create({
    data: { userId, domainId: domain.id },
  });

  await prisma.domain.update({
    where: { id: domain.id },
    data: { enrollmentCount: { increment: 1 } },
  });

  await awardXP(prisma, userId, XP_REWARDS.FIRST_ENROLLMENT);

  await prisma.notification.create({
    data: {
      userId,
      type: NotificationType.SYSTEM,
      title: `You enrolled in ${domain.name}! 🎉`,
      message: 'Start learning your new modules to become job-ready.',
    },
  });

  return enrollment;
};

export const getUserEnrollments = async (userId: string) => {
  const enrollments = await prisma.enrollment.findMany({
    where: { userId },
    include: {
      domain: {
        include: {
          modules: {
            where: { status: PublishStatus.PUBLISHED },
          },
        },
      },
    },
  });

  const progressRecords = await prisma.progress.findMany({
    where: { userId, completed: true },
  });

  const completedModuleIds = new Set(progressRecords.map((pr) => pr.moduleId));

  return enrollments.map((en) => {
    const totalModules = en.domain.modules.length;
    const completedModules = en.domain.modules.filter((m) => completedModuleIds.has(m.id)).length;
    const progressPercentage = totalModules === 0 ? 0 : Math.round((completedModules / totalModules) * 100);

    return {
      ...en,
      progressPercentage,
      totalModules,
      completedModules,
    };
  });
};
