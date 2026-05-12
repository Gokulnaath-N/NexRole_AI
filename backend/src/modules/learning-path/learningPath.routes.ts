import { Router } from 'express'
import { authenticate } from '../../middlewares/auth.middleware'
import { aiLimiter } from '../../middlewares/rateLimiter'
import { validate } from '../../middlewares/validateBody'
import {
  generateRoadmap,
  generateRoadmapSchema,
  getRoadmap,
  getWeekTasks,
  getAllRoadmaps,
  regenRoadmap,
} from './learningPath.controller'

const router = Router()

// All routes require authentication
router.use(authenticate)

// POST /api/v1/learning-path/generate
router.post('/generate', aiLimiter, validate(generateRoadmapSchema), generateRoadmap)

// GET /api/v1/learning-path/all
router.get('/all', getAllRoadmaps)

// GET /api/v1/learning-path/domain/:slug
router.get('/domain/:slug', getRoadmap)

// GET /api/v1/learning-path/domain/:slug/week/:weekNumber
router.get('/domain/:slug/week/:weekNumber', getWeekTasks)

// POST /api/v1/learning-path/domain/:slug/regenerate
router.post('/domain/:slug/regenerate', aiLimiter, regenRoadmap)

export default router
