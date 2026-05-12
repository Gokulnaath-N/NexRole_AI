import { NotificationType, PrismaClient } from '@prisma/client';
import { awardXP, XP_REWARDS } from './xp.utils';

export const checkAndUpdateStreak = (
  lastActiveDate: Date | null,
  currentStreak: number
) => {
  if (!lastActiveDate) {
    return { streak: 1, isNewDay: true, streakBroken: false };
  }

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const lastActive = new Date(lastActiveDate);
  lastActive.setHours(0, 0, 0, 0);

  const diffTime = Math.abs(today.getTime() - lastActive.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  if (diffDays === 0) {
    return { streak: currentStreak, isNewDay: false, streakBroken: false };
  } else if (diffDays === 1) {
    return { streak: currentStreak + 1, isNewDay: true, streakBroken: false };
  } else {
    return { streak: 1, isNewDay: true, streakBroken: true };
  }
};

export const updateUserStreak = async (prisma: PrismaClient, userId: string) => {
  const user = await prisma.user.findUnique({ where: { id: userId } });
  if (!user) return null;

  const result = checkAndUpdateStreak(user.lastActiveDate, user.streak);

  if (result.isNewDay) {
    const newStreak = result.streak;
    let longestStreak = user.longestStreak;
    if (newStreak > longestStreak) {
      longestStreak = newStreak;
    }

    await prisma.user.update({
      where: { id: userId },
      data: {
        streak: newStreak,
        longestStreak,
        lastActiveDate: new Date(),
      },
    });

    // Award Daily Login XP
    await awardXP(prisma, userId, XP_REWARDS.DAILY_LOGIN);

    // Hit Milestone Streaks
    if (newStreak === 7) {
      await awardXP(prisma, userId, XP_REWARDS.STREAK_7_DAYS);
      await prisma.notification.create({
        data: {
          userId,
          type: NotificationType.ACHIEVEMENT,
          title: '7 Day Streak! 🔥',
          message: 'You earned 200 bonus XP for a 7-day learning streak.',
        },
      });
    } else if (newStreak === 30) {
      await awardXP(prisma, userId, XP_REWARDS.STREAK_30_DAYS);
      await prisma.notification.create({
        data: {
          userId,
          type: NotificationType.ACHIEVEMENT,
          title: '30 Day Streak! 🔥🔥',
          message: 'Incredible! You earned 1000 bonus XP for a massive 30-day streak.',
        },
      });
    }
  }

  return result;
};
