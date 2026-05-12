import { Router } from 'express';
import * as authController from './auth.controller';
import { authenticate } from '../../middlewares/auth.middleware';
import { validate } from '../../middlewares/validateBody';
import { authLimiter } from '../../middlewares/rateLimiter';

const router = Router();

router.post(
  '/sync',
  authLimiter,
  validate(authController.syncUserSchema),
  authController.syncUser
);

router.post(
  '/onboarding',
  authenticate,
  validate(authController.onboardingSchema),
  authController.completeOnboarding
);

router.get('/me', authenticate, authController.getMe);

router.put(
  '/profile',
  authenticate,
  validate(authController.updateProfileSchema),
  authController.updateProfile
);

router.delete('/account', authenticate, authController.deleteAccount);

export default router;
