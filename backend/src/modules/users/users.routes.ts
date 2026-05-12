import express from 'express';
import { authenticate } from '../../middlewares/auth.middleware';
import * as usersController from './users.controller';

const router = express.Router();

router.get('/me', authenticate, usersController.getMyProfile);
router.put('/me', authenticate, usersController.updateMyProfile);
router.put('/me/skills', authenticate, usersController.updateUserSkills);
router.get('/me/activity', authenticate, usersController.getUserActivity);
router.get('/me/stats', authenticate, usersController.getUserStats);
router.delete('/me', authenticate, usersController.deleteUserAccount);
router.get('/:id', authenticate, usersController.getUserById);

export default router;
