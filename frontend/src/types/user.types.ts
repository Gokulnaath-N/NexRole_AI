export interface User {
  id: string;
  uid: string;
  name: string;
  email: string;
  image?: string;
  photoURL?: string;
  role: 'USER' | 'ADMIN';
  onboarded: boolean;
  onboardingComplete?: boolean;
  xp: number;
  level: string;
  streak: number;
  targetRole?: string;
  targetCompany?: string;
  currentLevel?: string;
  experienceLevel?: string;
  weeklyHours?: number;
  skills?: string[];
  enrolledDomains?: any[];
  createdAt?: string;
}

export interface UserProfile extends User {
  bio?: string;
  linkedinUrl?: string;
  githubUrl?: string;
}
