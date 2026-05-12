import { Request, Response, NextFunction } from 'express';
import { ZodSchema, ZodError } from 'zod';
import { ValidationError } from './errorHandler';

export const validate = (schema: ZodSchema) => {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      const parsedData = schema.parse(req.body);
      req.body = parsedData; // Replace req.body with the parsed (and typed/coerced) data
      next();
    } catch (error) {
      if (error instanceof ZodError) {
        const formattedErrors: Record<string, string> = {};
        error.errors.forEach((e) => {
          formattedErrors[e.path.join('.')] = e.message;
        });
        next(new ValidationError('Validation error', formattedErrors));
      } else {
        next(error);
      }
    }
  };
};
