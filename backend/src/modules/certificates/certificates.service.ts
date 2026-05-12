import { nanoid } from 'nanoid';
import prisma from '../../config/db';
import { AppError } from '../../middlewares/errorHandler';
import { createNotification } from '../notifications/notifications.service';
import { awardXP } from '../../utils/xp.utils';

export const generateCertificate = async (userId: string, domainId: string) => {
  const existingCert = await prisma.certificate.findFirst({
    where: { userId, domainId },
    include: { domain: { select: { name: true } } },
  });

  if (existingCert) return existingCert;

  const domain = await prisma.domain.findUnique({
    where: { id: domainId },
    include: { modules: { where: { status: 'PUBLISHED' } } },
  });

  if (!domain) throw new AppError('Domain not found', 404);

  const moduleIds = domain.modules.map((m) => m.id);

  if (moduleIds.length === 0) {
    throw new AppError('Domain has no published modules', 400);
  }

  const completedCount = await prisma.progress.count({
    where: {
      userId,
      moduleId: { in: moduleIds },
      completed: true,
    },
  });

  if (completedCount !== moduleIds.length) {
    throw new AppError('Domain not fully completed', 400);
  }

  // Generate NXRL-XXXX-XXXX
  const rawId = nanoid(8).toUpperCase();
  const verificationCode = `NXRL-${rawId.slice(0, 4)}-${rawId.slice(4, 8)}`;

  const cert = await prisma.certificate.create({
    data: {
      userId,
      domainId,
      verificationCode,
      pdfUrl: `https://nexrole.ai/verify/${verificationCode}`, // Placeholder for real PDF generator
    },
    include: {
      domain: { select: { name: true } },
    },
  });

  // Award 500 XP
  await awardXP(prisma, userId, 500);

  // Create notification
  await createNotification(
    userId,
    'CERT_READY',
    'Certificate Earned! 🏆',
    `You completed ${domain.name}. Download your certificate now.`,
    '/profile/certificates'
  );

  return cert;
};

export const getCertificateById = async (certificateId: string, userId?: string) => {
  const cert = await prisma.certificate.findUnique({
    where: { id: certificateId },
    include: {
      user: { select: { name: true } },
      domain: { select: { name: true } },
    },
  });

  if (!cert) throw new AppError('Certificate not found', 404);
  if (userId && cert.userId !== userId) throw new AppError('Access denied', 403);

  return cert;
};

export const verifyCertificate = async (verificationCode: string) => {
  const cert = await prisma.certificate.findUnique({
    where: { verificationCode },
    include: {
      user: { select: { name: true } },
      domain: { select: { name: true } },
    },
  });

  if (!cert) {
    return { valid: false };
  }

  return {
    valid: true,
    holderName: cert.user.name,
    domainName: cert.domain.name,
    issuedAt: cert.issuedAt.toISOString(),
    verificationCode: cert.verificationCode,
  };
};

export const getUserCertificates = async (userId: string) => {
  return await prisma.certificate.findMany({
    where: { userId },
    include: {
      domain: { select: { name: true, icon: true, color: true } },
    },
    orderBy: { issuedAt: 'desc' },
  });
};
