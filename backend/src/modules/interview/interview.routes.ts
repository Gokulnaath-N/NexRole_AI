import express from "express";
import { authenticate } from "../../middlewares/auth.middleware";
import { aiLimiter } from "../../middlewares/rateLimiter";
import * as interviewController from "./interview.controller";

const router = express.Router();

router.get("/questions", authenticate, interviewController.getInterviewQuestions);
router.post("/evaluate", authenticate, aiLimiter, interviewController.evaluateInterviewAnswer);

export default router;
