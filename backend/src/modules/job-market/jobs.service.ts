import prisma from '../../config/db';
import { JobStatus, Prisma } from '@prisma/client';
import { AppError } from '../../middlewares/errorHandler';

export const getJobs = async (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  filters: any,
  userId?: string
) => {
  const { domain, location, salaryMin, salaryMax, page = 1, limit = 10 } = filters;
  const skip = (Number(page) - 1) * Number(limit);

  const where: Prisma.JobPostingWhereInput = { status: JobStatus.ACTIVE };
  if (domain) where.domain = domain;
  if (location) where.location = location;
  if (salaryMin) where.salaryMin = { gte: Number(salaryMin) };
  if (salaryMax) where.salaryMax = { lte: Number(salaryMax) };

  const jobs = await prisma.jobPosting.findMany({
    where,
    skip,
    take: Number(limit),
  });

  const total = await prisma.jobPosting.count({ where });

  let userSkills: string[] = [];
  if (userId) {
    const user = await prisma.user.findUnique({ where: { id: userId } });
    if (user && user.skills) {
      userSkills = user.skills.map((s) => s.toLowerCase());
    }
  }

  const jobsWithScore = jobs.map((job) => {
    let matchScore = 0;
    if (userId && userSkills.length > 0 && job.skills.length > 0) {
      const jobSkillsLower = job.skills.map((s) => s.toLowerCase());
      const matched = jobSkillsLower.filter((js) => userSkills.includes(js));
      matchScore = Math.round((matched.length / job.skills.length) * 100);
    }
    return { ...job, matchScore };
  });

  if (userId) {
    jobsWithScore.sort((a, b) => b.matchScore - a.matchScore);
  } else {
    jobsWithScore.sort((a, b) => b.postedAt.getTime() - a.postedAt.getTime());
  }

  return { data: jobsWithScore, total, page: Number(page), limit: Number(limit) };
};

export const getJobById = async (jobId: string, userId?: string) => {
  const job = await prisma.jobPosting.findUnique({ where: { id: jobId } });
  if (!job) throw new AppError('Job not found', 404);

  let isBookmarked = false;
  if (userId) {
    const bookmark = await prisma.bookmarkedJob.findUnique({
      where: { userId_jobId: { userId, jobId } },
    });
    isBookmarked = !!bookmark;
  }

  return { ...job, isBookmarked };
};

export const bookmarkJob = async (userId: string, jobId: string) => {
  const job = await prisma.jobPosting.findUnique({ where: { id: jobId } });
  if (!job) throw new AppError('Job not found', 404);

  const existing = await prisma.bookmarkedJob.findUnique({
    where: { userId_jobId: { userId, jobId } },
  });

  if (existing) {
    await prisma.bookmarkedJob.delete({ where: { id: existing.id } });
    return { bookmarked: false };
  } else {
    await prisma.bookmarkedJob.create({ data: { userId, jobId } });
    return { bookmarked: true };
  }
};

export const getUserBookmarks = async (userId: string) => {
  const bookmarks = await prisma.bookmarkedJob.findMany({
    where: { userId },
    include: { job: true },
    orderBy: { createdAt: 'desc' },
  });
  return bookmarks;
};

export const analyzeSkillGap = async (userSkills: string[], jobDescriptionText: string) => {
  const taxonomy = [
    'python', 'java', 'c++', 'react', 'node.js', 'aws', 'docker', 'kubernetes',
    'tensorflow', 'pytorch', 'sql', 'nosql', 'machine learning', 'deep learning',
    'nlp', 'computer vision', 'langchain', 'mlops', 'fastapi', 'git'
  ];
  
  const jdLower = jobDescriptionText.toLowerCase();
  const requiredSkills = taxonomy.filter((skill) => jdLower.includes(skill));
  const userLower = userSkills.map((s) => s.toLowerCase());

  const matchedSkills = requiredSkills.filter((s) => userLower.includes(s));
  const missingSkills = requiredSkills.filter((s) => !userLower.includes(s));

  const matchPercentage = requiredSkills.length > 0
    ? Math.round((matchedSkills.length / requiredSkills.length) * 100)
    : 100;

  const radarData = [
    { axis: 'Technical', userScore: matchPercentage, requiredScore: 100 },
    { axis: 'Domain', userScore: matchPercentage > 50 ? 80 : 40, requiredScore: 90 },
  ];

  return {
    matchedSkills,
    missingSkills,
    partialSkills: [], 
    matchPercentage,
    radarData,
  };
};
