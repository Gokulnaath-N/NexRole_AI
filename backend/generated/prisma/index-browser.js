
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  detectRuntime,
} = require('./runtime/index-browser')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.7.0
 * Query Engine version: 79fb5193cf0a8fdbef536e4b4a159cad677ab1b9
 */
Prisma.prismaVersion = {
  client: "5.7.0",
  engine: "79fb5193cf0a8fdbef536e4b4a159cad677ab1b9"
}

Prisma.PrismaClientKnownRequestError = () => {
  throw new Error(`PrismaClientKnownRequestError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  throw new Error(`PrismaClientUnknownRequestError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientRustPanicError = () => {
  throw new Error(`PrismaClientRustPanicError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientInitializationError = () => {
  throw new Error(`PrismaClientInitializationError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientValidationError = () => {
  throw new Error(`PrismaClientValidationError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.NotFoundError = () => {
  throw new Error(`NotFoundError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  throw new Error(`sqltag is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.empty = () => {
  throw new Error(`empty is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.join = () => {
  throw new Error(`join is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.raw = () => {
  throw new Error(`raw is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  throw new Error(`Extensions.getExtensionContext is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.defineExtension = () => {
  throw new Error(`Extensions.defineExtension is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}

/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.UserScalarFieldEnum = {
  id: 'id',
  name: 'name',
  email: 'email',
  image: 'image',
  role: 'role',
  xp: 'xp',
  streak: 'streak',
  longestStreak: 'longestStreak',
  lastActiveDate: 'lastActiveDate',
  targetRole: 'targetRole',
  targetCompany: 'targetCompany',
  experienceLevel: 'experienceLevel',
  weeklyHours: 'weeklyHours',
  onboardingComplete: 'onboardingComplete',
  skills: 'skills',
  banned: 'banned',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.DomainScalarFieldEnum = {
  id: 'id',
  slug: 'slug',
  name: 'name',
  description: 'description',
  icon: 'icon',
  color: 'color',
  demandScore: 'demandScore',
  jobCount: 'jobCount',
  tags: 'tags',
  status: 'status',
  enrollmentCount: 'enrollmentCount',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.LearningPathScalarFieldEnum = {
  id: 'id',
  domainId: 'domainId',
  companyTarget: 'companyTarget',
  roleTarget: 'roleTarget',
  durationDays: 'durationDays',
  moduleOrder: 'moduleOrder',
  createdAt: 'createdAt'
};

exports.Prisma.ModuleScalarFieldEnum = {
  id: 'id',
  domainId: 'domainId',
  title: 'title',
  description: 'description',
  content: 'content',
  notionPageId: 'notionPageId',
  order: 'order',
  durationMinutes: 'durationMinutes',
  type: 'type',
  difficulty: 'difficulty',
  xpReward: 'xpReward',
  status: 'status',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.EnrollmentScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  domainId: 'domainId',
  currentModuleId: 'currentModuleId',
  completedAt: 'completedAt',
  enrolledAt: 'enrolledAt'
};

exports.Prisma.ProgressScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  moduleId: 'moduleId',
  completed: 'completed',
  completedAt: 'completedAt',
  timeSpentMinutes: 'timeSpentMinutes',
  score: 'score',
  createdAt: 'createdAt'
};

exports.Prisma.QuizScalarFieldEnum = {
  id: 'id',
  moduleId: 'moduleId',
  question: 'question',
  options: 'options',
  correctAnswer: 'correctAnswer',
  explanation: 'explanation',
  difficulty: 'difficulty',
  createdAt: 'createdAt'
};

exports.Prisma.QuizAttemptScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  quizId: 'quizId',
  selectedAnswer: 'selectedAnswer',
  isCorrect: 'isCorrect',
  attemptedAt: 'attemptedAt'
};

exports.Prisma.CertificateScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  domainId: 'domainId',
  verificationCode: 'verificationCode',
  pdfUrl: 'pdfUrl',
  issuedAt: 'issuedAt'
};

exports.Prisma.JobPostingScalarFieldEnum = {
  id: 'id',
  title: 'title',
  company: 'company',
  location: 'location',
  salaryMin: 'salaryMin',
  salaryMax: 'salaryMax',
  skills: 'skills',
  domain: 'domain',
  url: 'url',
  status: 'status',
  postedAt: 'postedAt',
  expiresAt: 'expiresAt'
};

exports.Prisma.BookmarkedJobScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  jobId: 'jobId',
  createdAt: 'createdAt'
};

exports.Prisma.NotificationScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  type: 'type',
  title: 'title',
  message: 'message',
  read: 'read',
  actionUrl: 'actionUrl',
  createdAt: 'createdAt'
};

exports.Prisma.InterviewQuestionScalarFieldEnum = {
  id: 'id',
  role: 'role',
  question: 'question',
  category: 'category',
  difficulty: 'difficulty',
  modelAnswer: 'modelAnswer',
  createdAt: 'createdAt'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.JsonNullValueInput = {
  JsonNull: Prisma.JsonNull
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};

exports.Prisma.JsonNullValueFilter = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull,
  AnyNull: Prisma.AnyNull
};
exports.UserRole = exports.$Enums.UserRole = {
  LEARNER: 'LEARNER',
  ADMIN: 'ADMIN',
  INSTRUCTOR: 'INSTRUCTOR'
};

exports.ExperienceLevel = exports.$Enums.ExperienceLevel = {
  BEGINNER: 'BEGINNER',
  INTERMEDIATE: 'INTERMEDIATE',
  ADVANCED: 'ADVANCED'
};

exports.PublishStatus = exports.$Enums.PublishStatus = {
  PUBLISHED: 'PUBLISHED',
  DRAFT: 'DRAFT'
};

exports.ContentType = exports.$Enums.ContentType = {
  VIDEO: 'VIDEO',
  READING: 'READING',
  QUIZ: 'QUIZ',
  PROJECT: 'PROJECT'
};

exports.Difficulty = exports.$Enums.Difficulty = {
  EASY: 'EASY',
  MEDIUM: 'MEDIUM',
  HARD: 'HARD'
};

exports.JobStatus = exports.$Enums.JobStatus = {
  ACTIVE: 'ACTIVE',
  EXPIRED: 'EXPIRED'
};

exports.NotificationType = exports.$Enums.NotificationType = {
  STREAK_RISK: 'STREAK_RISK',
  LEVEL_UP: 'LEVEL_UP',
  NEW_JOB: 'NEW_JOB',
  CERT_READY: 'CERT_READY',
  WELCOME: 'WELCOME',
  ACHIEVEMENT: 'ACHIEVEMENT',
  SYSTEM: 'SYSTEM'
};

exports.Category = exports.$Enums.Category = {
  TECHNICAL: 'TECHNICAL',
  BEHAVIORAL: 'BEHAVIORAL',
  SYSTEM_DESIGN: 'SYSTEM_DESIGN',
  DOMAIN_SPECIFIC: 'DOMAIN_SPECIFIC'
};

exports.Prisma.ModelName = {
  User: 'User',
  Domain: 'Domain',
  LearningPath: 'LearningPath',
  Module: 'Module',
  Enrollment: 'Enrollment',
  Progress: 'Progress',
  Quiz: 'Quiz',
  QuizAttempt: 'QuizAttempt',
  Certificate: 'Certificate',
  JobPosting: 'JobPosting',
  BookmarkedJob: 'BookmarkedJob',
  Notification: 'Notification',
  InterviewQuestion: 'InterviewQuestion'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        const runtime = detectRuntime()
        const edgeRuntimeName = {
          'workerd': 'Cloudflare Workers',
          'deno': 'Deno and Deno Deploy',
          'netlify': 'Netlify Edge Functions',
          'edge-light': 'Vercel Edge Functions',
        }[runtime]

        let message = 'PrismaClient is unable to run in '
        if (edgeRuntimeName !== undefined) {
          message += edgeRuntimeName + '. As an alternative, try Accelerate: https://pris.ly/d/accelerate.'
        } else {
          message += 'this browser environment, or has been bundled for the browser (running in `' + runtime + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://github.com/prisma/prisma/issues`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
