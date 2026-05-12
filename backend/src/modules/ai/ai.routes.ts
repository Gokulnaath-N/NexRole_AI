import express from 'express';
import multer from 'multer';
import { authenticate, optionalAuth } from '../../middlewares/auth.middleware';
import { aiLimiter } from '../../middlewares/rateLimiter';
import * as aiController from './ai.controller';

const router = express.Router();

const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 10 * 1024 * 1024 },
});

router.post('/tutor/chat', authenticate, aiLimiter, aiController.tutorChat);
router.delete('/tutor/session/:sessionId', authenticate, aiController.clearTutorSession);

router.post('/resume/parse', authenticate, upload.single('file'), aiController.parseResume);
router.post('/skill-gap', authenticate, aiController.skillGap);
router.post('/search', optionalAuth, aiController.semanticSearch);

router.post('/notes/:moduleId', authenticate, aiLimiter, aiController.generateNotesForModule);

router.post('/audio/transcribe', authenticate, upload.single('file'), aiController.transcribeAudio);
router.post('/image/analyze', authenticate, upload.single('file'), aiController.analyzeImage);

router.get('/health', authenticate, aiController.health);

export default router;
