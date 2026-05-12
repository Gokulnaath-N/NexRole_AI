import { Response } from 'express';

export const sendSuccess = (
  res: Response,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any,
  message: string = 'Success',
  statusCode: number = 200
) => {
  return res.status(statusCode).json({
    success: true,
    message,
    data,
    timestamp: new Date().toISOString(),
  });
};

export const sendError = (
  res: Response,
  message: string,
  statusCode: number = 500,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  errors: any = null
) => {
  return res.status(statusCode).json({
    success: false,
    message,
    errors,
    timestamp: new Date().toISOString(),
  });
};

export const sendPaginated = (
  res: Response,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any[],
  total: number,
  page: number,
  limit: number,
  message: string = 'Success'
) => {
  const totalPages = Math.ceil(total / limit);
  const hasNext = page < totalPages;
  const hasPrev = page > 1;

  return res.status(200).json({
    success: true,
    message,
    data,
    pagination: {
      total,
      page,
      limit,
      totalPages,
      hasNext,
      hasPrev,
    },
    timestamp: new Date().toISOString(),
  });
};

export const sendCreated = (
  res: Response,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any,
  message: string = 'Created successfully'
) => {
  return sendSuccess(res, data, message, 201);
};

export const sendNoContent = (res: Response) => {
  return res.status(204).send();
};
