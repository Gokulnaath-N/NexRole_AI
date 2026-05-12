import prisma from '../../config/db';
import { getLevelFromXP } from '../../utils/xp.utils';

export const getWeeklyLeaderboard = async (currentUserId: string) => {
  const today = new Date();
  const firstDayOfWeek = new Date(today.setDate(today.getDate() - today.getDay() + 1));
  firstDayOfWeek.setHours(0, 0, 0, 0);

  const leaders = await prisma.user.findMany({
    where: { updatedAt: { gte: firstDayOfWeek }, banned: false },
    orderBy: { xp: 'desc' },
    take: 50,
    select: { id: true, name: true, image: true, xp: true, streak: true },
  });

  const formattedLeaders = leaders.map((u, index) => ({
    ...u,
    rank: index + 1,
    level: getLevelFromXP(u.xp).level,
  }));

  let currentUserRank = formattedLeaders.find((l) => l.id === currentUserId);

  if (!currentUserRank) {
    const user = await prisma.user.findUnique({ where: { id: currentUserId } });
    if (user && !user.banned) {
      const higherCount = await prisma.user.count({
        where: { xp: { gt: user.xp }, updatedAt: { gte: firstDayOfWeek }, banned: false },
      });
      currentUserRank = {
        id: user.id,
        name: user.name,
        image: user.image,
        xp: user.xp,
        streak: user.streak,
        rank: higherCount + 1,
        level: getLevelFromXP(user.xp).level,
      };
    }
  }

  return { leaders: formattedLeaders, currentUserRank };
};

export const getAllTimeLeaderboard = async (currentUserId: string) => {
  const leaders = await prisma.user.findMany({
    where: { banned: false },
    orderBy: { xp: 'desc' },
    take: 50,
    select: { id: true, name: true, image: true, xp: true, streak: true },
  });

  const formattedLeaders = leaders.map((u, index) => ({
    ...u,
    rank: index + 1,
    level: getLevelFromXP(u.xp).level,
  }));

  let currentUserRank = formattedLeaders.find((l) => l.id === currentUserId);

  if (!currentUserRank) {
    const user = await prisma.user.findUnique({ where: { id: currentUserId } });
    if (user && !user.banned) {
      const higherCount = await prisma.user.count({
        where: { xp: { gt: user.xp }, banned: false },
      });
      currentUserRank = {
        id: user.id,
        name: user.name,
        image: user.image,
        xp: user.xp,
        streak: user.streak,
        rank: higherCount + 1,
        level: getLevelFromXP(user.xp).level,
      };
    }
  }

  return { leaders: formattedLeaders, currentUserRank };
};

export const getDomainLeaderboard = async (domainSlug: string, currentUserId: string) => {
  const domain = await prisma.domain.findUnique({ where: { slug: domainSlug } });
  if (!domain) return { leaders: [], currentUserRank: null };

  const enrollments = await prisma.enrollment.findMany({
    where: { domainId: domain.id, user: { banned: false } },
    include: {
      user: {
        select: { id: true, name: true, image: true, xp: true, streak: true },
      },
    },
  });

  const userIds = enrollments.map((e) => e.user.id);
  const progressRecords = await prisma.progress.findMany({
    where: { userId: { in: userIds }, completed: true, module: { domainId: domain.id } },
  });

  const userProgressCount: Record<string, number> = {};
  progressRecords.forEach((pr) => {
    userProgressCount[pr.userId] = (userProgressCount[pr.userId] || 0) + 1;
  });

  const leaders = enrollments.map((e) => ({
    id: e.user.id,
    name: e.user.name,
    image: e.user.image,
    xp: e.user.xp,
    streak: e.user.streak,
    completedModules: userProgressCount[e.user.id] || 0,
    level: getLevelFromXP(e.user.xp).level,
  }));

  leaders.sort((a, b) => b.completedModules - a.completedModules || b.xp - a.xp);
  const top50 = leaders.slice(0, 50).map((l, index) => ({ ...l, rank: index + 1 }));

  let currentUserRank = top50.find((l) => l.id === currentUserId);
  if (!currentUserRank) {
    const userLeaderInfo = leaders.find((l) => l.id === currentUserId);
    if (userLeaderInfo) {
      const rank = leaders.findIndex((l) => l.id === currentUserId) + 1;
      currentUserRank = { ...userLeaderInfo, rank };
    }
  }

  return { leaders: top50, currentUserRank };
};
