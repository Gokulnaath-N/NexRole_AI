import { PrismaClient } from '@prisma/client';

export const XP_REWARDS = {
  MODULE_COMPLETE: 50,
  QUIZ_PERFECT: 100,
  QUIZ_PASS: 75,
  DAILY_LOGIN: 10,
  STREAK_7_DAYS: 200,
  STREAK_30_DAYS: 1000,
  PROJECT_SUBMIT: 150,
  FIRST_ENROLLMENT: 25,
  ONBOARDING_COMPLETE: 25,
  DOMAIN_COMPLETE: 500,
};

export const LEVELS = [
  { level: 1, name: 'AI Newcomer', minXP: 0 },
  { level: 2, name: 'Prompt Learner', minXP: 200 },
  { level: 3, name: 'ML Practitioner', minXP: 500 },
  { level: 4, name: 'AI Builder', minXP: 1000 },
  { level: 5, name: 'LLM Engineer', minXP: 2000 },
  { level: 6, name: 'AI Architect', minXP: 4000 },
  { level: 7, name: 'GenAI Expert', minXP: 7000 },
  { level: 8, name: 'AI Pioneer', minXP: 12000 },
];

export const getLevelFromXP = (xp: number) => {
  let currentLevel = LEVELS[0];
  let nextLevel = LEVELS[1];

  for (let i = 0; i < LEVELS.length; i++) {
    if (xp >= LEVELS[i].minXP) {
      currentLevel = LEVELS[i];
      nextLevel = LEVELS[i + 1] || LEVELS[i];
    }
  }

  const progress =
    currentLevel.level === nextLevel.level
      ? 100
      : Math.floor(
          ((xp - currentLevel.minXP) / (nextLevel.minXP - currentLevel.minXP)) * 100
        );

  return {
    level: currentLevel.level,
    name: currentLevel.name,
    minXP: currentLevel.minXP,
    nextLevelXP: nextLevel.minXP,
    progress,
  };
};

export const awardXP = async (prisma: PrismaClient, userId: string, amount: number) => {
  const user = await prisma.user.update({
    where: { id: userId },
    data: { xp: { increment: amount } },
  });
  return user.xp;
};

export const checkLevelUp = (oldXP: number, newXP: number) => {
  const oldLevel = getLevelFromXP(oldXP).level;
  const newLevel = getLevelFromXP(newXP).level;

  if (newLevel > oldLevel) {
    return {
      leveledUp: true,
      newLevel,
      oldLevel,
      newLevelName: getLevelFromXP(newXP).name,
    };
  }
  return { leveledUp: false };
};
