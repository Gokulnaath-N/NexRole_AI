import express from "express";
import { authenticate, optionalAuth, requireAdmin } from "../../middlewares/auth.middleware";
import { aiLimiter } from "../../middlewares/rateLimiter";
import * as quizController from "./quiz.controller";

const router = express.Router();

router.get("/module/:moduleId", optionalAuth, quizController.getQuizForModule);
router.post("/module/:moduleId/generate", authenticate, requireAdmin, aiLimiter, quizController.generateQuizWithGemini);
router.post("/:quizId/submit", authenticate, quizController.submitQuizAnswer);
router.get("/module/:moduleId/results", authenticate, quizController.getModuleQuizResults);

export default router;
