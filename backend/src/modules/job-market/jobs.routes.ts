import express from "express";
import { authenticate, optionalAuth } from "../../middlewares/auth.middleware";
import * as jobsController from "./jobs.controller";

const router = express.Router();

router.get("/", optionalAuth, jobsController.getJobs);
router.get("/me/bookmarks", authenticate, jobsController.getUserBookmarks);
router.post("/analyze-gap", authenticate, jobsController.analyzeSkillGap);
router.get("/:id", optionalAuth, jobsController.getJobById);
router.post("/:id/bookmark", authenticate, jobsController.bookmarkJob);

export default router;
