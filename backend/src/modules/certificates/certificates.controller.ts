import { Request, Response } from 'express';
import * as certificatesService from './certificates.service';
import { sendSuccess, sendCreated } from '../../utils/response.utils';
import { asyncHandler } from '../../middlewares/errorHandler';

export const generateCertificate = asyncHandler(async (req: Request, res: Response) => {
  const { domainId } = req.body;
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const cert = await certificatesService.generateCertificate(req.user!.id, domainId);
  return sendCreated(res, cert, 'Certificate generated successfully');
});

export const getCertificateById = asyncHandler(async (req: Request, res: Response) => {
  const { id } = req.params;
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const cert = await certificatesService.getCertificateById(id, req.user!.id);
  return sendSuccess(res, cert, 'Certificate retrieved');
});

export const verifyCertificate = asyncHandler(async (req: Request, res: Response) => {
  const { code } = req.params;
  const result = await certificatesService.verifyCertificate(code);
  return sendSuccess(res, result, 'Certificate verification complete');
});

export const getUserCertificates = asyncHandler(async (req: Request, res: Response) => {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const certs = await certificatesService.getUserCertificates(req.user!.id);
  return sendSuccess(res, certs, 'User certificates retrieved');
});
