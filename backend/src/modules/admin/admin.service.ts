import prisma from '../../config/db';
import redis from '../../config/redis';
import { AppError } from '../../middlewares/errorHandler';
import { subDays } from 'date-fns';
import { UserRole } from '@prisma/client';

export const getDashboardStats = async () => {
  const activeDateLimit = subDays(new Date(), 7);

  const [
    totalUsers,
    activeUsers,
    totalModulesCompleted,
    certificatesIssued,
    xpData,
    totalEnrollments,
    publishedDomains,
    totalJobPostings
  ] = await Promise.all([
    prisma.user.count(),
    prisma.user.count({ where: { lastActiveDate: { gte: activeDateLimit } } }),
    prisma.progress.count({ where: { completed: true } }),
    prisma.certificate.count(),
    prisma.user.aggregate({ _sum: { xp: true } }),
    prisma.enrollment.count(),
    prisma.domain.count({ where: { status: 'PUBLISHED' } }),
    prisma.jobPosting.count()
  ]);

  return {
    totalUsers,
    activeUsers,
    totalModulesCompleted,
    certificatesIssued,
    totalXPAwarded: xpData._sum.xp || 0,
    totalEnrollments,
    publishedDomains,
    totalJobPostings
  };
};

export const getUserGrowthData = async (days: number = 30) => {
  const startDate = subDays(new Date(), days);
  const users = await prisma.user.findMany({
    where: { createdAt: { gte: startDate } },
    select: { createdAt: true }
  });

  const activityMap = new Map<string, number>();
  users.forEach(u => {
    const dateStr = u.createdAt.toISOString().split('T')[0];
    activityMap.set(dateStr, (activityMap.get(dateStr) || 0) + 1);
  });

  return Array.from(activityMap.entries())
    .map(([date, count]) => ({ date, count }))
    .sort((a, b) => a.date.localeCompare(b.date));
};

export const getDomainPopularity = async () => {
  return await prisma.domain.findMany({
    select: { id: true, name: true, enrollmentCount: true, status: true },
    orderBy: { enrollmentCount: 'desc' }
  });
};

export const getRecentActivity = async (limit: number = 20) => {
  return await prisma.progress.findMany({
    where: { completed: true },
    take: limit,
    orderBy: { completedAt: 'desc' },
    include: {
      user: { select: { name: true, email: true, image: true } },
      module: {
        select: { title: true, domain: { select: { name: true } } }
      }
    }
  });
};

export const getAllUsers = async (filters: { search?: string, role?: string, page?: number, limit?: number, sort?: string }) => {
  const page = Number(filters.page) || 1;
  const limit = Number(filters.limit) || 20;
  const skip = (page - 1) * limit;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const where: any = {};

  if (filters.search) {
    where.OR = [
      { name: { contains: filters.search, mode: 'insensitive' } },
      { email: { contains: filters.search, mode: 'insensitive' } }
    ];
  }

  if (filters.role) {
    where.role = filters.role;
  }

  const [users, total] = await Promise.all([
    prisma.user.findMany({
      where,
      skip,
      take: limit,
      orderBy: { createdAt: filters.sort === 'asc' ? 'asc' : 'desc' },
      select: {
        id: true, name: true, email: true, role: true, banned: true, xp: true, streak: true, createdAt: true, lastActiveDate: true
      }
    }),
    prisma.user.count({ where })
  ]);

  return { users, total, page, limit };
};

export const banUser = async (targetUserId: string, requestingUserId: string) => {
  const targetUser = await prisma.user.findUnique({ where: { id: targetUserId } });
  if (!targetUser) throw new AppError('User not found', 404);

  if (targetUser.id === requestingUserId) throw new AppError('Cannot ban yourself', 400);
  if (targetUser.role === UserRole.ADMIN) throw new AppError('Cannot ban another admin', 400);

  await prisma.user.update({
    where: { id: targetUserId },
    data: { banned: true }
  });

  return { success: true };
};

export const unbanUser = async (targetUserId: string) => {
  const targetUser = await prisma.user.findUnique({ where: { id: targetUserId } });
  if (!targetUser) throw new AppError('User not found', 404);

  await prisma.user.update({
    where: { id: targetUserId },
    data: { banned: false }
  });

  return { success: true };
};

export const makeAdmin = async (targetUserId: string) => {
  const targetUser = await prisma.user.findUnique({ where: { id: targetUserId } });
  if (!targetUser) throw new AppError('User not found', 404);

  await prisma.user.update({
    where: { id: targetUserId },
    data: { role: UserRole.ADMIN }
  });

  return { success: true };
};

export const removeAdmin = async (targetUserId: string, requestingUserId: string) => {
  const targetUser = await prisma.user.findUnique({ where: { id: targetUserId } });
  if (!targetUser) throw new AppError('User not found', 404);

  if (targetUser.id === requestingUserId) throw new AppError('Cannot remove your own admin role', 400);

  await prisma.user.update({
    where: { id: targetUserId },
    data: { role: UserRole.LEARNER }
  });

  return { success: true };
};

export const resetUserStreak = async (targetUserId: string) => {
  const targetUser = await prisma.user.findUnique({ where: { id: targetUserId } });
  if (!targetUser) throw new AppError('User not found', 404);

  await prisma.user.update({
    where: { id: targetUserId },
    data: { streak: 0 }
  });

  return { success: true };
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const createDomain = async (data: any) => {
  if (data.demandScore && (data.demandScore < 0 || data.demandScore > 100)) {
    throw new AppError('demandScore must be between 0 and 100', 400);
  }
  
  const existing = await prisma.domain.findUnique({ where: { slug: data.slug } });
  if (existing) throw new AppError('Slug must be unique', 400);

  return await prisma.domain.create({
    data: {
      ...data,
      status: 'DRAFT'
    }
  });
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const updateDomain = async (domainId: string, data: any) => {
  return await prisma.domain.update({
    where: { id: domainId },
    data
  });
};

export const deleteDomain = async (domainId: string) => {
  const enrollmentsCount = await prisma.enrollment.count({ where: { domainId } });
  if (enrollmentsCount > 0) {
    throw new AppError('Cannot delete domain with active learners', 400);
  }

  // Delete all modules first
  await prisma.module.deleteMany({ where: { domainId } });
  
  await prisma.domain.delete({ where: { id: domainId } });

  return { success: true };
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const createModule = async (data: any) => {
  const existing = await prisma.module.findFirst({
    where: { domainId: data.domainId, order: data.order }
  });
  if (existing) throw new AppError('Order must be unique within domain', 400);

  return await prisma.module.create({
    data: {
      ...data,
      status: 'DRAFT'
    }
  });
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const updateModule = async (moduleId: string, data: any) => {
  return await prisma.module.update({
    where: { id: moduleId },
    data
  });
};

export const deleteModule = async (moduleId: string) => {
  // Cascades progress via Prisma (or manually delete related)
  await prisma.progress.deleteMany({ where: { moduleId } });
  await prisma.quiz.deleteMany({ where: { moduleId } });
  
  await prisma.module.delete({ where: { id: moduleId } });
  return { success: true };
};

export const publishDomain = async (domainId: string) => {
  const publishedModulesCount = await prisma.module.count({
    where: { domainId, status: 'PUBLISHED' }
  });

  if (publishedModulesCount < 3) {
    throw new AppError('Domain must have at least 3 PUBLISHED modules to be published', 400);
  }

  return await prisma.domain.update({
    where: { id: domainId },
    data: { status: 'PUBLISHED' }
  });
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const createJobPosting = async (data: any) => {
  return await prisma.jobPosting.create({
    data: {
      ...data,
      status: 'ACTIVE'
    }
  });
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const updateJobPosting = async (jobId: string, data: any) => {
  return await prisma.jobPosting.update({
    where: { id: jobId },
    data
  });
};

export const expireJobPosting = async (jobId: string) => {
  await prisma.jobPosting.update({
    where: { id: jobId },
    data: { status: 'EXPIRED' }
  });
  return { success: true };
};

export const getSystemHealth = async () => {
  let dbOk = false;
  try {
    await prisma.$queryRaw`SELECT 1`;
    dbOk = true;
  } catch (e) {
    dbOk = false;
  }

  let redisOk = false;
  try {
    const pong = await redis.ping();
    redisOk = pong === 'PONG';
  } catch (e) {
    redisOk = false;
  }

  return {
    database: dbOk ? 'Connected' : 'Disconnected',
    redis: redisOk ? 'Connected' : 'Disconnected',
    uptime: process.uptime(),
    memory: process.memoryUsage()
  };
};
