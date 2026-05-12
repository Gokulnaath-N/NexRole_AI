import api from './api.client';
import type { ApiResponse } from '../types/api.types';

export interface Certificate {
  id: string;
  userId: string;
  domainId: string;
  domainTitle: string;
  verifyCode: string;
  issuedAt: string;
  pdfUrl?: string;
}

export const certificateService = {
  getMyCertificates: () =>
    api.get<ApiResponse<Certificate[]>>('/certificates/my'),

  verify: (code: string) =>
    api.get<ApiResponse<Certificate>>(`/certificates/verify/${code}`),

  download: (id: string) =>
    api.get<Blob>(`/certificates/${id}/download`, { responseType: 'blob' }),
};
