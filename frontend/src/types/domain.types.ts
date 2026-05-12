export interface Domain {
  id: string;
  slug: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  moduleCount: number;
  studentCount: number;
  salaryAvg: string;
  demandLevel: string;
  isEnrolled?: boolean;
  progress?: number;
}

export interface Enrollment {
  id: string;
  userId: string;
  domainId: string;
  progress: number;
  enrolledAt: string;
  domain: Domain;
}
