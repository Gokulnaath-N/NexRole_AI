import prisma from '../../config/db';
import { AppError } from '../../middlewares/errorHandler';
import { subDays, format, getDay } from 'date-fns';

export const getDomainProgress = async (userId: string, domainSlug: string) => {
  const domain = await prisma.domain.findUnique({
    where: { slug: domainSlug },
    include: {
      modules: {
        where: { status: 'PUBLISHED' },
        orderBy: { order: 'asc' }
      }
    }
  });

  if (!domain) throw new AppError('Domain not found', 404);

  const moduleIds = domain.modules.map(m => m.id);

  const progressRecords = await prisma.progress.findMany({
    where: {
      userId,
      moduleId: { in: moduleIds },
      completed: true
    }
  });

  const completedModuleIds = progressRecords.map(p => p.moduleId);
  const completedModules = completedModuleIds.length;
  const totalModules = domain.modules.length;
  const percentComplete = totalModules > 0 ? Math.round((completedModules / totalModules) * 100) : 0;

  let totalXPEarned = 0;
  let estimatedTimeRemaining = 0;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let nextModule: any = null;

  for (const mod of domain.modules) {
    if (completedModuleIds.includes(mod.id)) {
      totalXPEarned += mod.xpReward;
    } else {
      estimatedTimeRemaining += mod.durationMinutes;
      if (!nextModule) {
        nextModule = mod;
      }
    }
  }

  return {
    domain: {
      id: domain.id,
      name: domain.name,
      slug: domain.slug,
      icon: domain.icon,
      color: domain.color
    },
    completedModules,
    totalModules,
    percentComplete,
    totalXPEarned,
    estimatedTimeRemaining,
    nextModule,
    completedModuleIds
  };
};

export const getAllProgress = async (userId: string) => {
  const enrollments = await prisma.enrollment.findMany({
    where: { userId },
    include: {
      domain: {
        include: {
          modules: {
            where: { status: 'PUBLISHED' },
            orderBy: { order: 'asc' }
          }
        }
      }
    }
  });

  const progressRecords = await prisma.progress.findMany({
    where: {
      userId,
      completed: true
    }
  });

  const completedIds = new Set(progressRecords.map(p => p.moduleId));

  return enrollments.map(enrollment => {
    const domainModules = enrollment.domain.modules;
    const totalModules = domainModules.length;
    let completedModules = 0;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let nextModule: any = null;

    for (const mod of domainModules) {
      if (completedIds.has(mod.id)) {
        completedModules++;
      } else if (!nextModule) {
        nextModule = mod;
      }
    }

    const progressPercent = totalModules > 0 ? Math.round((completedModules / totalModules) * 100) : 0;

    return {
      domain: {
        id: enrollment.domain.id,
        name: enrollment.domain.name,
        slug: enrollment.domain.slug,
        icon: enrollment.domain.icon,
        color: enrollment.domain.color
      },
      enrollment: {
        enrolledAt: enrollment.enrolledAt,
        completedAt: enrollment.completedAt
      },
      progressPercent,
      completedModules,
      totalModules,
      nextModule
    };
  });
};

export const getProgressAnalytics = async (userId: string) => {
  const user = await prisma.user.findUnique({
    where: { id: userId },
    select: { streak: true, longestStreak: true }
  });

  if (!user) throw new AppError('User not found', 404);

  const thirtyDaysAgo = subDays(new Date(), 30);
  const sevenDaysAgo = subDays(new Date(), 7);

  const recentProgress = await prisma.progress.findMany({
    where: {
      userId,
      completed: true,
      completedAt: { gte: thirtyDaysAgo }
    },
    include: { module: { select: { xpReward: true } } }
  });

  const weeklyProgressMap = new Map<string, number>();
  const xpTimelineMap = new Map<string, number>();
  const dayOfWeekCount = new Array(7).fill(0); // 0 = Sunday, 6 = Saturday
  let totalCompletions30Days = 0;

  // Initialize maps with 0
  for (let i = 0; i <= 30; i++) {
    const d = subDays(new Date(), i);
    const dateStr = format(d, 'yyyy-MM-dd');
    xpTimelineMap.set(dateStr, 0);
    if (i <= 7) {
      weeklyProgressMap.set(dateStr, 0);
    }
  }

  recentProgress.forEach(p => {
    if (!p.completedAt) return;
    const dateStr = format(p.completedAt, 'yyyy-MM-dd');
    const dayOfWeek = getDay(p.completedAt);
    const xp = p.module.xpReward || 0;

    // XP timeline (30 days)
    if (xpTimelineMap.has(dateStr)) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      xpTimelineMap.set(dateStr, xpTimelineMap.get(dateStr)! + xp);
    }

    // Weekly progress (7 days)
    if (p.completedAt >= sevenDaysAgo) {
      if (weeklyProgressMap.has(dateStr)) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        weeklyProgressMap.set(dateStr, weeklyProgressMap.get(dateStr)! + 1);
      }
    }

    dayOfWeekCount[dayOfWeek]++;
    totalCompletions30Days++;
  });

  const daysOfWeekNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const bestDayIndex = dayOfWeekCount.indexOf(Math.max(...dayOfWeekCount));
  const bestLearningDay = totalCompletions30Days > 0 ? daysOfWeekNames[bestDayIndex] : 'None';

  const averageModulesPerDay = Number((totalCompletions30Days / 30).toFixed(2));

  return {
    streakData: {
      currentStreak: user.streak,
      longestStreak: user.longestStreak
    },
    weeklyProgress: Array.from(weeklyProgressMap.entries())
      .map(([date, count]) => ({ date, count }))
      .sort((a, b) => a.date.localeCompare(b.date)),
    xpTimeline: Array.from(xpTimelineMap.entries())
      .map(([date, xp]) => ({ date, xp }))
      .sort((a, b) => a.date.localeCompare(b.date)),
    bestLearningDay,
    averageModulesPerDay
  };
};
