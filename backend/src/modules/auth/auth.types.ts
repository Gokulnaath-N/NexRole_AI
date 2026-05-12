import { UserRole, ExperienceLevel } from '@prisma/client';

export interface SyncUserRequest {
  uid: string;
  name: string;
  email: string;
  image?: string;
}

export interface UpdateOnboardingRequest {
  targetRole: string;
  targetCompany: string;
  experienceLevel: ExperienceLevel;
  weeklyHours: number;
  selectedDomainSlug: string;
  skills?: string[];
}

export interface AuthenticatedUser {
  id: string;
  email: string;
  name: string;
  image?: string;
  role: UserRole;
  xp: number;
  streak: number;
  onboardingComplete: boolean;
  banned: boolean;
}

declare global {
  namespace Express {
    interface Request {
      user?: AuthenticatedUser;
    }
  }
}
