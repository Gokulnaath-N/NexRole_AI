import express from 'express';
import { authenticate } from '../../middlewares/auth.middleware';
import * as certificatesController from './certificates.controller';

const router = express.Router();

router.post('/generate', authenticate, certificatesController.generateCertificate);
router.get('/verify/:code', certificatesController.verifyCertificate);
router.get('/me', authenticate, certificatesController.getUserCertificates);
router.get('/:id', authenticate, certificatesController.getCertificateById);

export default router;
