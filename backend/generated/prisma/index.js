
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  NotFoundError,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  warnOnce,
  defineDmmfProperty,
  Public,
  detectRuntime,
} = require('./runtime/library')


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

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.NotFoundError = NotFoundError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = Extensions.getExtensionContext
Prisma.defineExtension = Extensions.defineExtension

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


  const path = require('path')

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
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "D:\\Practice Projects\\Nexrole_AI\\backend\\generated\\prisma",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [
      {
        "fromEnvVar": null,
        "value": "windows",
        "native": true
      }
    ],
    "previewFeatures": [],
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": "../../.env",
    "schemaEnvPath": "../../.env"
  },
  "relativePath": "../../prisma",
  "clientVersion": "5.7.0",
  "engineVersion": "79fb5193cf0a8fdbef536e4b4a159cad677ab1b9",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "postgresql",
  "postinstall": false,
  "inlineDatasources": {
    "db": {
      "url": {
        "fromEnvVar": "DATABASE_URL",
        "value": null
      }
    }
  },
  "inlineSchema": "Z2VuZXJhdG9yIGNsaWVudCB7CiAgcHJvdmlkZXIgPSAicHJpc21hLWNsaWVudC1qcyIKICBvdXRwdXQgICA9ICIuLi9nZW5lcmF0ZWQvcHJpc21hIgp9CgpkYXRhc291cmNlIGRiIHsKICBwcm92aWRlciAgPSAicG9zdGdyZXNxbCIKICB1cmwgICAgICAgPSBlbnYoIkRBVEFCQVNFX1VSTCIpCiAgZGlyZWN0VXJsID0gZW52KCJESVJFQ1RfVVJMIikKfQoKbW9kZWwgVXNlciB7CiAgaWQgICAgICAgICAgICAgICAgIFN0cmluZyAgICAgICAgICBAaWQKICBuYW1lICAgICAgICAgICAgICAgU3RyaW5nCiAgZW1haWwgICAgICAgICAgICAgIFN0cmluZyAgICAgICAgICBAdW5pcXVlCiAgaW1hZ2UgICAgICAgICAgICAgIFN0cmluZz8KICByb2xlICAgICAgICAgICAgICAgVXNlclJvbGUgICAgICAgIEBkZWZhdWx0KExFQVJORVIpCiAgeHAgICAgICAgICAgICAgICAgIEludCAgICAgICAgICAgICBAZGVmYXVsdCgwKQogIHN0cmVhayAgICAgICAgICAgICBJbnQgICAgICAgICAgICAgQGRlZmF1bHQoMCkKICBsb25nZXN0U3RyZWFrICAgICAgSW50ICAgICAgICAgICAgIEBkZWZhdWx0KDApCiAgbGFzdEFjdGl2ZURhdGUgICAgIERhdGVUaW1lPwogIHRhcmdldFJvbGUgICAgICAgICBTdHJpbmc/CiAgdGFyZ2V0Q29tcGFueSAgICAgIFN0cmluZz8KICBleHBlcmllbmNlTGV2ZWwgICAgRXhwZXJpZW5jZUxldmVsIEBkZWZhdWx0KEJFR0lOTkVSKQogIHdlZWtseUhvdXJzICAgICAgICBJbnQgICAgICAgICAgICAgQGRlZmF1bHQoNSkKICBvbmJvYXJkaW5nQ29tcGxldGUgQm9vbGVhbiAgICAgICAgIEBkZWZhdWx0KGZhbHNlKQogIHNraWxscyAgICAgICAgICAgICBTdHJpbmdbXQogIGJhbm5lZCAgICAgICAgICAgICBCb29sZWFuICAgICAgICAgQGRlZmF1bHQoZmFsc2UpCiAgY3JlYXRlZEF0ICAgICAgICAgIERhdGVUaW1lICAgICAgICBAZGVmYXVsdChub3coKSkKICB1cGRhdGVkQXQgICAgICAgICAgRGF0ZVRpbWUgICAgICAgIEB1cGRhdGVkQXQKICBib29rbWFya2VkSm9icyAgICAgQm9va21hcmtlZEpvYltdCiAgY2VydGlmaWNhdGVzICAgICAgIENlcnRpZmljYXRlW10KICBlbnJvbGxtZW50cyAgICAgICAgRW5yb2xsbWVudFtdCiAgbm90aWZpY2F0aW9ucyAgICAgIE5vdGlmaWNhdGlvbltdCiAgcHJvZ3Jlc3NSZWNvcmRzICAgIFByb2dyZXNzW10KICBxdWl6QXR0ZW1wdHMgICAgICAgUXVpekF0dGVtcHRbXQp9Cgptb2RlbCBEb21haW4gewogIGlkICAgICAgICAgICAgICBTdHJpbmcgICAgICAgICBAaWQgQGRlZmF1bHQoY3VpZCgpKQogIHNsdWcgICAgICAgICAgICBTdHJpbmcgICAgICAgICBAdW5pcXVlCiAgbmFtZSAgICAgICAgICAgIFN0cmluZwogIGRlc2NyaXB0aW9uICAgICBTdHJpbmcKICBpY29uICAgICAgICAgICAgU3RyaW5nCiAgY29sb3IgICAgICAgICAgIFN0cmluZwogIGRlbWFuZFNjb3JlICAgICBJbnQgICAgICAgICAgICBAZGVmYXVsdCgwKQogIGpvYkNvdW50ICAgICAgICBJbnQgICAgICAgICAgICBAZGVmYXVsdCgwKQogIHRhZ3MgICAgICAgICAgICBTdHJpbmdbXQogIHN0YXR1cyAgICAgICAgICBQdWJsaXNoU3RhdHVzICBAZGVmYXVsdChEUkFGVCkKICBlbnJvbGxtZW50Q291bnQgSW50ICAgICAgICAgICAgQGRlZmF1bHQoMCkKICBjcmVhdGVkQXQgICAgICAgRGF0ZVRpbWUgICAgICAgQGRlZmF1bHQobm93KCkpCiAgdXBkYXRlZEF0ICAgICAgIERhdGVUaW1lICAgICAgIEB1cGRhdGVkQXQKICBjZXJ0aWZpY2F0ZXMgICAgQ2VydGlmaWNhdGVbXQogIGVucm9sbG1lbnRzICAgICBFbnJvbGxtZW50W10KICBsZWFybmluZ1BhdGhzICAgTGVhcm5pbmdQYXRoW10KICBtb2R1bGVzICAgICAgICAgTW9kdWxlW10KfQoKbW9kZWwgTGVhcm5pbmdQYXRoIHsKICBpZCAgICAgICAgICAgIFN0cmluZyAgIEBpZCBAZGVmYXVsdChjdWlkKCkpCiAgZG9tYWluSWQgICAgICBTdHJpbmcKICBjb21wYW55VGFyZ2V0IFN0cmluZwogIHJvbGVUYXJnZXQgICAgU3RyaW5nCiAgZHVyYXRpb25EYXlzICBJbnQKICBtb2R1bGVPcmRlciAgIEpzb24KICBjcmVhdGVkQXQgICAgIERhdGVUaW1lIEBkZWZhdWx0KG5vdygpKQogIGRvbWFpbiAgICAgICAgRG9tYWluICAgQHJlbGF0aW9uKGZpZWxkczogW2RvbWFpbklkXSwgcmVmZXJlbmNlczogW2lkXSkKfQoKbW9kZWwgTW9kdWxlIHsKICBpZCAgICAgICAgICAgICAgU3RyaW5nICAgICAgICBAaWQgQGRlZmF1bHQoY3VpZCgpKQogIGRvbWFpbklkICAgICAgICBTdHJpbmcKICB0aXRsZSAgICAgICAgICAgU3RyaW5nCiAgZGVzY3JpcHRpb24gICAgIFN0cmluZwogIGNvbnRlbnQgICAgICAgICBTdHJpbmcKICBub3Rpb25QYWdlSWQgICAgU3RyaW5nPwogIG9yZGVyICAgICAgICAgICBJbnQKICBkdXJhdGlvbk1pbnV0ZXMgSW50ICAgICAgICAgICBAZGVmYXVsdCgxNSkKICB0eXBlICAgICAgICAgICAgQ29udGVudFR5cGUgICBAZGVmYXVsdChSRUFESU5HKQogIGRpZmZpY3VsdHkgICAgICBEaWZmaWN1bHR5ICAgIEBkZWZhdWx0KEVBU1kpCiAgeHBSZXdhcmQgICAgICAgIEludCAgICAgICAgICAgQGRlZmF1bHQoNTApCiAgc3RhdHVzICAgICAgICAgIFB1Ymxpc2hTdGF0dXMgQGRlZmF1bHQoRFJBRlQpCiAgY3JlYXRlZEF0ICAgICAgIERhdGVUaW1lICAgICAgQGRlZmF1bHQobm93KCkpCiAgdXBkYXRlZEF0ICAgICAgIERhdGVUaW1lICAgICAgQHVwZGF0ZWRBdAogIGRvbWFpbiAgICAgICAgICBEb21haW4gICAgICAgIEByZWxhdGlvbihmaWVsZHM6IFtkb21haW5JZF0sIHJlZmVyZW5jZXM6IFtpZF0pCiAgcHJvZ3Jlc3NSZWNvcmRzIFByb2dyZXNzW10KICBxdWl6emVzICAgICAgICAgUXVpeltdCgogIEBAaW5kZXgoW2RvbWFpbklkLCBvcmRlcl0pCn0KCm1vZGVsIEVucm9sbG1lbnQgewogIGlkICAgICAgICAgICAgICBTdHJpbmcgICAgQGlkIEBkZWZhdWx0KGN1aWQoKSkKICB1c2VySWQgICAgICAgICAgU3RyaW5nCiAgZG9tYWluSWQgICAgICAgIFN0cmluZwogIGN1cnJlbnRNb2R1bGVJZCBTdHJpbmc/CiAgY29tcGxldGVkQXQgICAgIERhdGVUaW1lPwogIGVucm9sbGVkQXQgICAgICBEYXRlVGltZSAgQGRlZmF1bHQobm93KCkpCiAgZG9tYWluICAgICAgICAgIERvbWFpbiAgICBAcmVsYXRpb24oZmllbGRzOiBbZG9tYWluSWRdLCByZWZlcmVuY2VzOiBbaWRdKQogIHVzZXIgICAgICAgICAgICBVc2VyICAgICAgQHJlbGF0aW9uKGZpZWxkczogW3VzZXJJZF0sIHJlZmVyZW5jZXM6IFtpZF0pCgogIEBAdW5pcXVlKFt1c2VySWQsIGRvbWFpbklkXSkKfQoKbW9kZWwgUHJvZ3Jlc3MgewogIGlkICAgICAgICAgICAgICAgU3RyaW5nICAgIEBpZCBAZGVmYXVsdChjdWlkKCkpCiAgdXNlcklkICAgICAgICAgICBTdHJpbmcKICBtb2R1bGVJZCAgICAgICAgIFN0cmluZwogIGNvbXBsZXRlZCAgICAgICAgQm9vbGVhbiAgIEBkZWZhdWx0KGZhbHNlKQogIGNvbXBsZXRlZEF0ICAgICAgRGF0ZVRpbWU/CiAgdGltZVNwZW50TWludXRlcyBJbnQgICAgICAgQGRlZmF1bHQoMCkKICBzY29yZSAgICAgICAgICAgIEludD8KICBjcmVhdGVkQXQgICAgICAgIERhdGVUaW1lICBAZGVmYXVsdChub3coKSkKICBtb2R1bGUgICAgICAgICAgIE1vZHVsZSAgICBAcmVsYXRpb24oZmllbGRzOiBbbW9kdWxlSWRdLCByZWZlcmVuY2VzOiBbaWRdKQogIHVzZXIgICAgICAgICAgICAgVXNlciAgICAgIEByZWxhdGlvbihmaWVsZHM6IFt1c2VySWRdLCByZWZlcmVuY2VzOiBbaWRdKQoKICBAQHVuaXF1ZShbdXNlcklkLCBtb2R1bGVJZF0pCiAgQEBpbmRleChbdXNlcklkXSkKfQoKbW9kZWwgUXVpeiB7CiAgaWQgICAgICAgICAgICBTdHJpbmcgICAgICAgIEBpZCBAZGVmYXVsdChjdWlkKCkpCiAgbW9kdWxlSWQgICAgICBTdHJpbmcKICBxdWVzdGlvbiAgICAgIFN0cmluZwogIG9wdGlvbnMgICAgICAgSnNvbgogIGNvcnJlY3RBbnN3ZXIgSW50CiAgZXhwbGFuYXRpb24gICBTdHJpbmcKICBkaWZmaWN1bHR5ICAgIERpZmZpY3VsdHkgICAgQGRlZmF1bHQoTUVESVVNKQogIGNyZWF0ZWRBdCAgICAgRGF0ZVRpbWUgICAgICBAZGVmYXVsdChub3coKSkKICBtb2R1bGUgICAgICAgIE1vZHVsZSAgICAgICAgQHJlbGF0aW9uKGZpZWxkczogW21vZHVsZUlkXSwgcmVmZXJlbmNlczogW2lkXSkKICBhdHRlbXB0cyAgICAgIFF1aXpBdHRlbXB0W10KfQoKbW9kZWwgUXVpekF0dGVtcHQgewogIGlkICAgICAgICAgICAgIFN0cmluZyAgIEBpZCBAZGVmYXVsdChjdWlkKCkpCiAgdXNlcklkICAgICAgICAgU3RyaW5nCiAgcXVpeklkICAgICAgICAgU3RyaW5nCiAgc2VsZWN0ZWRBbnN3ZXIgSW50CiAgaXNDb3JyZWN0ICAgICAgQm9vbGVhbgogIGF0dGVtcHRlZEF0ICAgIERhdGVUaW1lIEBkZWZhdWx0KG5vdygpKQogIHF1aXogICAgICAgICAgIFF1aXogICAgIEByZWxhdGlvbihmaWVsZHM6IFtxdWl6SWRdLCByZWZlcmVuY2VzOiBbaWRdKQogIHVzZXIgICAgICAgICAgIFVzZXIgICAgIEByZWxhdGlvbihmaWVsZHM6IFt1c2VySWRdLCByZWZlcmVuY2VzOiBbaWRdKQoKICBAQGluZGV4KFt1c2VySWRdKQp9Cgptb2RlbCBDZXJ0aWZpY2F0ZSB7CiAgaWQgICAgICAgICAgICAgICBTdHJpbmcgICBAaWQgQGRlZmF1bHQoY3VpZCgpKQogIHVzZXJJZCAgICAgICAgICAgU3RyaW5nCiAgZG9tYWluSWQgICAgICAgICBTdHJpbmcKICB2ZXJpZmljYXRpb25Db2RlIFN0cmluZyAgIEB1bmlxdWUKICBwZGZVcmwgICAgICAgICAgIFN0cmluZz8KICBpc3N1ZWRBdCAgICAgICAgIERhdGVUaW1lIEBkZWZhdWx0KG5vdygpKQogIGRvbWFpbiAgICAgICAgICAgRG9tYWluICAgQHJlbGF0aW9uKGZpZWxkczogW2RvbWFpbklkXSwgcmVmZXJlbmNlczogW2lkXSkKICB1c2VyICAgICAgICAgICAgIFVzZXIgICAgIEByZWxhdGlvbihmaWVsZHM6IFt1c2VySWRdLCByZWZlcmVuY2VzOiBbaWRdKQp9Cgptb2RlbCBKb2JQb3N0aW5nIHsKICBpZCAgICAgICAgICAgICBTdHJpbmcgICAgICAgICAgQGlkIEBkZWZhdWx0KGN1aWQoKSkKICB0aXRsZSAgICAgICAgICBTdHJpbmcKICBjb21wYW55ICAgICAgICBTdHJpbmcKICBsb2NhdGlvbiAgICAgICBTdHJpbmcKICBzYWxhcnlNaW4gICAgICBJbnQKICBzYWxhcnlNYXggICAgICBJbnQKICBza2lsbHMgICAgICAgICBTdHJpbmdbXQogIGRvbWFpbiAgICAgICAgIFN0cmluZwogIHVybCAgICAgICAgICAgIFN0cmluZwogIHN0YXR1cyAgICAgICAgIEpvYlN0YXR1cyAgICAgICBAZGVmYXVsdChBQ1RJVkUpCiAgcG9zdGVkQXQgICAgICAgRGF0ZVRpbWUgICAgICAgIEBkZWZhdWx0KG5vdygpKQogIGV4cGlyZXNBdCAgICAgIERhdGVUaW1lPwogIGJvb2ttYXJrZWRKb2JzIEJvb2ttYXJrZWRKb2JbXQoKICBAQGluZGV4KFtkb21haW5dKQogIEBAaW5kZXgoW3N0YXR1c10pCn0KCm1vZGVsIEJvb2ttYXJrZWRKb2IgewogIGlkICAgICAgICBTdHJpbmcgICAgIEBpZCBAZGVmYXVsdChjdWlkKCkpCiAgdXNlcklkICAgIFN0cmluZwogIGpvYklkICAgICBTdHJpbmcKICBjcmVhdGVkQXQgRGF0ZVRpbWUgICBAZGVmYXVsdChub3coKSkKICBqb2IgICAgICAgSm9iUG9zdGluZyBAcmVsYXRpb24oZmllbGRzOiBbam9iSWRdLCByZWZlcmVuY2VzOiBbaWRdKQogIHVzZXIgICAgICBVc2VyICAgICAgIEByZWxhdGlvbihmaWVsZHM6IFt1c2VySWRdLCByZWZlcmVuY2VzOiBbaWRdKQoKICBAQHVuaXF1ZShbdXNlcklkLCBqb2JJZF0pCn0KCm1vZGVsIE5vdGlmaWNhdGlvbiB7CiAgaWQgICAgICAgIFN0cmluZyAgICAgICAgICAgQGlkIEBkZWZhdWx0KGN1aWQoKSkKICB1c2VySWQgICAgU3RyaW5nCiAgdHlwZSAgICAgIE5vdGlmaWNhdGlvblR5cGUKICB0aXRsZSAgICAgU3RyaW5nCiAgbWVzc2FnZSAgIFN0cmluZwogIHJlYWQgICAgICBCb29sZWFuICAgICAgICAgIEBkZWZhdWx0KGZhbHNlKQogIGFjdGlvblVybCBTdHJpbmc/CiAgY3JlYXRlZEF0IERhdGVUaW1lICAgICAgICAgQGRlZmF1bHQobm93KCkpCiAgdXNlciAgICAgIFVzZXIgICAgICAgICAgICAgQHJlbGF0aW9uKGZpZWxkczogW3VzZXJJZF0sIHJlZmVyZW5jZXM6IFtpZF0pCgogIEBAaW5kZXgoW3VzZXJJZCwgcmVhZF0pCn0KCm1vZGVsIEludGVydmlld1F1ZXN0aW9uIHsKICBpZCAgICAgICAgICBTdHJpbmcgICAgIEBpZCBAZGVmYXVsdChjdWlkKCkpCiAgcm9sZSAgICAgICAgU3RyaW5nCiAgcXVlc3Rpb24gICAgU3RyaW5nCiAgY2F0ZWdvcnkgICAgQ2F0ZWdvcnkKICBkaWZmaWN1bHR5ICBEaWZmaWN1bHR5IEBkZWZhdWx0KE1FRElVTSkKICBtb2RlbEFuc3dlciBTdHJpbmc/CiAgY3JlYXRlZEF0ICAgRGF0ZVRpbWUgICBAZGVmYXVsdChub3coKSkKCiAgQEBpbmRleChbcm9sZSwgY2F0ZWdvcnldKQp9CgplbnVtIFVzZXJSb2xlIHsKICBMRUFSTkVSCiAgQURNSU4KICBJTlNUUlVDVE9SCn0KCmVudW0gRXhwZXJpZW5jZUxldmVsIHsKICBCRUdJTk5FUgogIElOVEVSTUVESUFURQogIEFEVkFOQ0VECn0KCmVudW0gQ29udGVudFR5cGUgewogIFZJREVPCiAgUkVBRElORwogIFFVSVoKICBQUk9KRUNUCn0KCmVudW0gRGlmZmljdWx0eSB7CiAgRUFTWQogIE1FRElVTQogIEhBUkQKfQoKZW51bSBQdWJsaXNoU3RhdHVzIHsKICBQVUJMSVNIRUQKICBEUkFGVAp9CgplbnVtIENhdGVnb3J5IHsKICBURUNITklDQUwKICBCRUhBVklPUkFMCiAgU1lTVEVNX0RFU0lHTgogIERPTUFJTl9TUEVDSUZJQwp9CgplbnVtIEpvYlN0YXR1cyB7CiAgQUNUSVZFCiAgRVhQSVJFRAp9CgplbnVtIE5vdGlmaWNhdGlvblR5cGUgewogIFNUUkVBS19SSVNLCiAgTEVWRUxfVVAKICBORVdfSk9CCiAgQ0VSVF9SRUFEWQogIFdFTENPTUUKICBBQ0hJRVZFTUVOVAogIFNZU1RFTQp9Cg==",
  "inlineSchemaHash": "21e43dfcf597d592083567c79ac8ded442ac81041b5568c0d7750c1099064da1",
  "noEngine": false
}

const fs = require('fs')

config.dirname = __dirname
if (!fs.existsSync(path.join(__dirname, 'schema.prisma'))) {
  const alternativePaths = [
    "generated/prisma",
    "prisma",
  ]
  
  const alternativePath = alternativePaths.find((altPath) => {
    return fs.existsSync(path.join(process.cwd(), altPath, 'schema.prisma'))
  }) ?? alternativePaths[0]

  config.dirname = path.join(process.cwd(), alternativePath)
  config.isBundled = true
}

config.runtimeDataModel = JSON.parse("{\"models\":{\"User\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"image\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"role\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"UserRole\",\"default\":\"LEARNER\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"xp\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"streak\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"longestStreak\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"lastActiveDate\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"targetRole\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"targetCompany\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"experienceLevel\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"ExperienceLevel\",\"default\":\"BEGINNER\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"weeklyHours\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":5,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"onboardingComplete\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"skills\",\"kind\":\"scalar\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"banned\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"bookmarkedJobs\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BookmarkedJob\",\"relationName\":\"BookmarkedJobToUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"certificates\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Certificate\",\"relationName\":\"CertificateToUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"enrollments\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Enrollment\",\"relationName\":\"EnrollmentToUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"notifications\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Notification\",\"relationName\":\"NotificationToUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"progressRecords\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Progress\",\"relationName\":\"ProgressToUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"quizAttempts\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"QuizAttempt\",\"relationName\":\"QuizAttemptToUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Domain\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"cuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"slug\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"description\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"icon\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"color\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"demandScore\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"jobCount\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tags\",\"kind\":\"scalar\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"PublishStatus\",\"default\":\"DRAFT\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"enrollmentCount\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"certificates\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Certificate\",\"relationName\":\"CertificateToDomain\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"enrollments\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Enrollment\",\"relationName\":\"DomainToEnrollment\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"learningPaths\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"LearningPath\",\"relationName\":\"DomainToLearningPath\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"modules\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Module\",\"relationName\":\"DomainToModule\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"LearningPath\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"cuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"domainId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"companyTarget\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"roleTarget\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"durationDays\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"moduleOrder\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"domain\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Domain\",\"relationName\":\"DomainToLearningPath\",\"relationFromFields\":[\"domainId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Module\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"cuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"domainId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"title\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"description\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"content\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"notionPageId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"order\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"durationMinutes\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":15,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"type\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"ContentType\",\"default\":\"READING\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"difficulty\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Difficulty\",\"default\":\"EASY\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"xpReward\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":50,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"PublishStatus\",\"default\":\"DRAFT\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"domain\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Domain\",\"relationName\":\"DomainToModule\",\"relationFromFields\":[\"domainId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"progressRecords\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Progress\",\"relationName\":\"ModuleToProgress\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"quizzes\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Quiz\",\"relationName\":\"ModuleToQuiz\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Enrollment\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"cuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"domainId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"currentModuleId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"completedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"enrolledAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"domain\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Domain\",\"relationName\":\"DomainToEnrollment\",\"relationFromFields\":[\"domainId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"EnrollmentToUser\",\"relationFromFields\":[\"userId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[[\"userId\",\"domainId\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"userId\",\"domainId\"]}],\"isGenerated\":false},\"Progress\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"cuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"moduleId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"completed\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"completedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"timeSpentMinutes\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"score\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"module\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Module\",\"relationName\":\"ModuleToProgress\",\"relationFromFields\":[\"moduleId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"ProgressToUser\",\"relationFromFields\":[\"userId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[[\"userId\",\"moduleId\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"userId\",\"moduleId\"]}],\"isGenerated\":false},\"Quiz\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"cuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"moduleId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"question\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"options\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"correctAnswer\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"explanation\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"difficulty\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Difficulty\",\"default\":\"MEDIUM\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"module\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Module\",\"relationName\":\"ModuleToQuiz\",\"relationFromFields\":[\"moduleId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"attempts\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"QuizAttempt\",\"relationName\":\"QuizToQuizAttempt\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"QuizAttempt\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"cuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"quizId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"selectedAnswer\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"isCorrect\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"attemptedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"quiz\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Quiz\",\"relationName\":\"QuizToQuizAttempt\",\"relationFromFields\":[\"quizId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"QuizAttemptToUser\",\"relationFromFields\":[\"userId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Certificate\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"cuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"domainId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"verificationCode\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pdfUrl\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"issuedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"domain\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Domain\",\"relationName\":\"CertificateToDomain\",\"relationFromFields\":[\"domainId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"CertificateToUser\",\"relationFromFields\":[\"userId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"JobPosting\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"cuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"title\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"company\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"location\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"salaryMin\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"salaryMax\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"skills\",\"kind\":\"scalar\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"domain\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"url\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"JobStatus\",\"default\":\"ACTIVE\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"postedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"expiresAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"bookmarkedJobs\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BookmarkedJob\",\"relationName\":\"BookmarkedJobToJobPosting\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"BookmarkedJob\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"cuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"jobId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"job\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"JobPosting\",\"relationName\":\"BookmarkedJobToJobPosting\",\"relationFromFields\":[\"jobId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"BookmarkedJobToUser\",\"relationFromFields\":[\"userId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[[\"userId\",\"jobId\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"userId\",\"jobId\"]}],\"isGenerated\":false},\"Notification\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"cuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"type\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"NotificationType\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"title\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"message\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"read\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"actionUrl\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"NotificationToUser\",\"relationFromFields\":[\"userId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"InterviewQuestion\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"cuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"role\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"question\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"category\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Category\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"difficulty\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Difficulty\",\"default\":\"MEDIUM\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"modelAnswer\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}},\"enums\":{\"UserRole\":{\"values\":[{\"name\":\"LEARNER\",\"dbName\":null},{\"name\":\"ADMIN\",\"dbName\":null},{\"name\":\"INSTRUCTOR\",\"dbName\":null}],\"dbName\":null},\"ExperienceLevel\":{\"values\":[{\"name\":\"BEGINNER\",\"dbName\":null},{\"name\":\"INTERMEDIATE\",\"dbName\":null},{\"name\":\"ADVANCED\",\"dbName\":null}],\"dbName\":null},\"ContentType\":{\"values\":[{\"name\":\"VIDEO\",\"dbName\":null},{\"name\":\"READING\",\"dbName\":null},{\"name\":\"QUIZ\",\"dbName\":null},{\"name\":\"PROJECT\",\"dbName\":null}],\"dbName\":null},\"Difficulty\":{\"values\":[{\"name\":\"EASY\",\"dbName\":null},{\"name\":\"MEDIUM\",\"dbName\":null},{\"name\":\"HARD\",\"dbName\":null}],\"dbName\":null},\"PublishStatus\":{\"values\":[{\"name\":\"PUBLISHED\",\"dbName\":null},{\"name\":\"DRAFT\",\"dbName\":null}],\"dbName\":null},\"Category\":{\"values\":[{\"name\":\"TECHNICAL\",\"dbName\":null},{\"name\":\"BEHAVIORAL\",\"dbName\":null},{\"name\":\"SYSTEM_DESIGN\",\"dbName\":null},{\"name\":\"DOMAIN_SPECIFIC\",\"dbName\":null}],\"dbName\":null},\"JobStatus\":{\"values\":[{\"name\":\"ACTIVE\",\"dbName\":null},{\"name\":\"EXPIRED\",\"dbName\":null}],\"dbName\":null},\"NotificationType\":{\"values\":[{\"name\":\"STREAK_RISK\",\"dbName\":null},{\"name\":\"LEVEL_UP\",\"dbName\":null},{\"name\":\"NEW_JOB\",\"dbName\":null},{\"name\":\"CERT_READY\",\"dbName\":null},{\"name\":\"WELCOME\",\"dbName\":null},{\"name\":\"ACHIEVEMENT\",\"dbName\":null},{\"name\":\"SYSTEM\",\"dbName\":null}],\"dbName\":null}},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)
config.getQueryEngineWasmModule = undefined


const { warnEnvConflicts } = require('./runtime/library')

warnEnvConflicts({
    rootEnvPath: config.relativeEnvPaths.rootEnvPath && path.resolve(config.dirname, config.relativeEnvPaths.rootEnvPath),
    schemaEnvPath: config.relativeEnvPaths.schemaEnvPath && path.resolve(config.dirname, config.relativeEnvPaths.schemaEnvPath)
})

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

// file annotations for bundling tools to include these files
path.join(__dirname, "query_engine-windows.dll.node");
path.join(process.cwd(), "generated/prisma/query_engine-windows.dll.node")
// file annotations for bundling tools to include these files
path.join(__dirname, "schema.prisma");
path.join(process.cwd(), "generated/prisma/schema.prisma")
