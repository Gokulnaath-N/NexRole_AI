import { Request, Response, NextFunction } from 'express';
import { ZodError } from 'zod';
import { Prisma } from '@prisma/client';
import { env } from '../config/env';
import logger from '../config/logger';

export class AppError extends Error {
  public statusCode: number;
  public isOperational: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public errors: any;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  constructor(message: string, statusCode: number = 500, errors: any = null) {
    super(message);
    this.statusCode = statusCode;
    this.errors = errors;
    this.isOperational = true;
    Error.captureStackTrace(this, this.constructor);
  }
}

export class AuthError extends AppError {
  constructor(message: string = 'Unauthorized') {
    super(message, 401);
  }
}

export class ForbiddenError extends AppError {
  constructor(message: string = 'Forbidden') {
    super(message, 403);
  }
}

export class NotFoundError extends AppError {
  constructor(resource: string = 'Resource') {
    super(`${resource} not found`, 404);
  }
}

export class ValidationError extends AppError {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  constructor(message: string, errors: any) {
    super(message, 422, errors);
  }
}

export const errorHandler = (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  err: any,
  req: Request,
  res: Response,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  next: NextFunction
) => {
  let statusCode = err.statusCode || 500;
  let message = err.message || 'Internal Server Error';
  let errors = err.errors || null;

  // Prisma Unique Constraint Error
  if (err instanceof Prisma.PrismaClientKnownRequestError && err.code === 'P2002') {
    statusCode = 409;
    message = 'Already exists';
  }

  // Prisma Not Found Error
  if (err instanceof Prisma.PrismaClientKnownRequestError && err.code === 'P2025') {
    statusCode = 404;
    message = 'Record not found';
  }

  // Zod Validation Error
  if (err instanceof ZodError) {
    statusCode = 422;
    message = 'Validation error';
    errors = {};
    err.errors.forEach((e) => {
      errors[e.path.join('.')] = e.message;
    });
  }

  // JWT & Firebase Auth Errors
  if (
    err.name === 'JsonWebTokenError' ||
    err.name === 'TokenExpiredError' ||
    (err.code && typeof err.code === 'string' && err.code.startsWith('auth/'))
  ) {
    statusCode = 401;
    message = 'Invalid token';
  }

  // Multer file upload size limit error
  if (err.name === 'MulterError' && err.code === 'LIMIT_FILE_SIZE') {
    statusCode = 413;
    message = 'File too large';
  }

  // Production formatting
  if (env.NODE_ENV === 'production') {
    if (statusCode === 500 && !err.isOperational) {
      message = 'Internal server error';
      errors = null;
    }
  }

  // Always log 500s or unhandled exceptions
  if (statusCode >= 500) {
    logger.error(`[500 ERROR] ${err.message}`, { stack: err.stack, details: err });
  }

  const responsePayload: Record<string, unknown> = {
    success: false,
    message,
    timestamp: new Date().toISOString(),
  };

  if (errors) {
    responsePayload.errors = errors;
  }

  if (env.NODE_ENV === 'development') {
    responsePayload.stack = err.stack;
  }

  return res.status(statusCode).json(responsePayload);
};

// eslint-disable-next-line @typescript-eslint/ban-types
export const asyncHandler = (fn: Function) => (req: Request, res: Response, next: NextFunction) => {
  Promise.resolve(fn(req, res, next)).catch(next);
};
