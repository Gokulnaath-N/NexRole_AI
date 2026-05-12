import prisma from '../../config/db';
import { AppError } from '../../middlewares/errorHandler';
import { UpdateProfileRequest, UserProfileResponse } from './users.types';
import { getLevelFromXP } from '../../utils/xp.utils';
import { subDays } from 'date-fns';

export const getUserById = async (userId: string, isSelf: boolean = true): Promise<Partial<UserProfileResponse>> => {
  const user = await prisma.user.findUnique({
    where: { id: userId },
    include: {
      enrollments: {
        include: {
          domain: {
            include: { modules: { where: { status: 'PUBLISHED' } } }
          }
        }
      },
      progressRecords: { where: { completed: true } },
      certificates: true,
      quizAttempts: true,
    }
  });

  if (!user || user.banned) throw new AppError('User not found', 404);

  const levelInfo = getLevelFromXP(user.xp);

  let avgQuizScore = 0;
  if (user.quizAttempts.length > 0) {
    const correctAnswers = user.quizAttempts.filter(a => a.isCorrect).length;
    avgQuizScore = Math.round((correctAnswers / user.quizAttempts.length) * 100);
  }

  const enrollments = user.enrollments.map(e => {
    const totalModules = e.domain.modules.length;
    const completedModules = user.progressRecords.filter(p => 
      e.domain.modules.some(m => m.id === p.moduleId)
    ).length;
    
    return {
      domain: {
        name: e.domain.name,
        icon: e.domain.icon,
        color: e.domain.color,
        slug: e.domain.slug
      },
      completedModules,
      totalModules,
      progressPercent: totalModules > 0 ? Math.round((completedModules / totalModules) * 100) : 0
    };
  });

  const fullProfile: UserProfileResponse = {
    id: user.id,
    name: user.name,
    email: user.email,
    image: user.image || undefined,
    role: user.role,
    xp: user.xp,
    streak: user.streak,
    longestStreak: user.longestStreak,
    level: levelInfo,
    targetRole: user.targetRole || undefined,
    targetCompany: user.targetCompany || undefined,
    experienceLevel: user.experienceLevel,
    weeklyHours: user.weeklyHours,
    onboardingComplete: user.onboardingComplete,
    skills: user.skills,
    stats: {
      enrolledDomains: user.enrollments.length,
      completedModules: user.progressRecords.length,
      certificates: user.certificates.length,
      quizzesTaken: user.quizAttempts.length,
      avgQuizScore,
    },
    enrollments,
    createdAt: user.createdAt.toISOString()
  };

  if (!isSelf) {
    // Return limited fields for public profile
    return {
      id: fullProfile.id,
      name: fullProfile.name,
      image: fullProfile.image,
      xp: fullProfile.xp,
      level: fullProfile.level,
      skills: fullProfile.skills,
      stats: fullProfile.stats,
      enrollments: fullProfile.enrollments,
      createdAt: fullProfile.createdAt
    };
  }

  return fullProfile;
};

export const updateUserProfile = async (userId: string, data: UpdateProfileRequest) => {
  if (data.name && data.name.length < 2) {
    throw new AppError('Name must be at least 2 characters long', 400);
  }
  if (data.weeklyHours && (data.weeklyHours < 1 || data.weeklyHours > 40)) {
    throw new AppError('Weekly hours must be between 1 and 40', 400);
  }

  return await prisma.user.update({
    where: { id: userId },
    data,
  });
};

export const updateUserSkills = async (userId: string, skills: string[]) => {
  if (skills.length > 30) {
    throw new AppError('Maximum 30 skills allowed', 400);
  }

  const user = await prisma.user.update({
    where: { id: userId },
    data: { skills },
    select: { skills: true }
  });

  return user.skills;
};

export const getUserActivity = async (userId: string, days: number = 90) => {
  const startDate = subDays(new Date(), days);
  
  const progress = await prisma.progress.findMany({
    where: { 
      userId,
      completedAt: { gte: startDate }
    },
    select: { completedAt: true }
  });

  const activityMap = new Map<string, number>();
  
  progress.forEach(p => {
    if (!p.completedAt) return;
    const dateStr = p.completedAt.toISOString().split('T')[0];
    activityMap.set(dateStr, (activityMap.get(dateStr) || 0) + 1);
  });

  return Array.from(activityMap.entries()).map(([date, count]) => ({ date, count })).sort((a, b) => a.date.localeCompare(b.date));
};

export const getUserStats = async (userId: string) => {
  const user = await prisma.user.findUnique({
    where: { id: userId },
    include: {
      progressRecords: { where: { completed: true } },
      certificates: true,
      enrollments: true,
      quizAttempts: true,
    }
  });

  if (!user) throw new AppError('User not found', 404);

  const correctAnswers = user.quizAttempts.filter(a => a.isCorrect).length;

  return {
    xp: user.xp,
    streak: user.streak,
    longestStreak: user.longestStreak,
    completedModules: user.progressRecords.length,
    certificates: user.certificates.length,
    enrolledDomains: user.enrollments.length,
    quizAttempts: user.quizAttempts.length,
    correctAnswers,
  };
};

export const deleteUserAccount = async (userId: string) => {
  // Soft delete to maintain referential integrity
  await prisma.user.update({
    where: { id: userId },
    data: { banned: true }
  });

  return { success: true };
};
