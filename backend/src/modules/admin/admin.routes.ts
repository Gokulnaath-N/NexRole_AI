import express from 'express';
import { authenticate, requireAdmin } from '../../middlewares/auth.middleware';
import * as adminController from './admin.controller';

const router = express.Router();

// Apply middleware to ALL admin routes
router.use(authenticate);
router.use(requireAdmin);

// Dashboard
router.get('/stats', adminController.getDashboardStats);
router.get('/growth', adminController.getUserGrowthData);
router.get('/domain-popularity', adminController.getDomainPopularity);
router.get('/activity', adminController.getRecentActivity);
router.get('/health', adminController.getSystemHealth);

// Users
router.get('/users', adminController.getAllUsers);
router.post('/users/:id/ban', adminController.banUser);
router.post('/users/:id/unban', adminController.unbanUser);
router.post('/users/:id/make-admin', adminController.makeAdmin);
router.post('/users/:id/remove-admin', adminController.removeAdmin);
router.post('/users/:id/reset-streak', adminController.resetUserStreak);

// Domains
router.post('/domains', adminController.createDomain);
router.put('/domains/:id', adminController.updateDomain);
router.delete('/domains/:id', adminController.deleteDomain);
router.post('/domains/:id/publish', adminController.publishDomain);

// Modules
router.post('/modules', adminController.createModule);
router.put('/modules/:id', adminController.updateModule);
router.delete('/modules/:id', adminController.deleteModule);

// Jobs
router.post('/jobs', adminController.createJobPosting);
router.put('/jobs/:id', adminController.updateJobPosting);
router.post('/jobs/:id/expire', adminController.expireJobPosting);

export default router;
