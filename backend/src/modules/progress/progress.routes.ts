import express from 'express';
import { authenticate } from '../../middlewares/auth.middleware';
import * as progressController from './progress.controller';

const router = express.Router();

// Apply authenticate middleware to all progress routes
router.use(authenticate);

router.get('/domain/:slug', progressController.getDomainProgress);
router.get('/all', progressController.getAllProgress);
router.get('/analytics', progressController.getProgressAnalytics);

export default router;
