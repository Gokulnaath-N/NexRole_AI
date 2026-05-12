import { Request, Response, NextFunction } from 'express';
import { AuthError, ForbiddenError, AppError } from './errorHandler';
import { verifyFirebaseToken } from '../config/firebase-admin';
import prisma from '../config/db';
import { UserRole } from '@prisma/client';

// FUNCTION 1: authenticate
export const authenticate = async (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return next(new AuthError('No token provided'));
  }

  const token = authHeader.split(' ')[1];

  try {
    const decodedToken = await verifyFirebaseToken(token);
    const uid = decodedToken.uid;
    const email = decodedToken.email || '';
    const name = decodedToken.name || email.split('@')[0];
    const image = decodedToken.picture || null;

    const user = await prisma.user.upsert({
      where: { id: uid },
      create: { id: uid, name, email, image },
      update: { updatedAt: new Date() },
    });

    if (user.banned) {
      return next(new ForbiddenError('Account suspended'));
    }

    req.user = {
      id: user.id,
      email: user.email,
      name: user.name,
      role: user.role,
      xp: user.xp,
      streak: user.streak,
      onboardingComplete: user.onboardingComplete,
      banned: user.banned,
    };

    next();
  } catch (error) {
    next(error);
  }
};

// FUNCTION 2: requireAdmin
export const requireAdmin = (req: Request, res: Response, next: NextFunction) => {
  if (!req.user || req.user.role !== UserRole.ADMIN) {
    return next(new ForbiddenError('Admin access required'));
  }
  next();
};

// FUNCTION 3: requireInstructor
export const requireInstructor = (req: Request, res: Response, next: NextFunction) => {
  if (!req.user || (req.user.role !== UserRole.ADMIN && req.user.role !== UserRole.INSTRUCTOR)) {
    return next(new ForbiddenError('Instructor access required'));
  }
  next();
};

// FUNCTION 4: requireOnboarding
export const requireOnboarding = (req: Request, res: Response, next: NextFunction) => {
  if (!req.user || !req.user.onboardingComplete) {
    return next(new AppError('Please complete onboarding first', 403));
  }
  next();
};

// FUNCTION 5: optionalAuth
export const optionalAuth = async (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return next();
  }

  const token = authHeader.split(' ')[1];

  try {
    const decodedToken = await verifyFirebaseToken(token);
    const uid = decodedToken.uid;
    const email = decodedToken.email || '';
    const name = decodedToken.name || email.split('@')[0];
    const image = decodedToken.picture || null;

    const user = await prisma.user.upsert({
      where: { id: uid },
      create: { id: uid, name, email, image },
      update: { updatedAt: new Date() },
    });

    if (user.banned) {
      return next(); // Do not throw error for optional auth, just ignore token
    }

    req.user = {
      id: user.id,
      email: user.email,
      name: user.name,
      role: user.role,
      xp: user.xp,
      streak: user.streak,
      onboardingComplete: user.onboardingComplete,
      banned: user.banned,
    };

    next();
  } catch (error) {
    next(); // Silently fail for optional auth
  }
};
