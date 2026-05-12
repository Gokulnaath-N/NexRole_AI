import express from "express";
import { authenticate } from "../../middlewares/auth.middleware";
import * as leaderboardController from "./leaderboard.controller";

const router = express.Router();

router.get("/weekly", authenticate, leaderboardController.getWeeklyLeaderboard);
router.get("/alltime", authenticate, leaderboardController.getAllTimeLeaderboard);
router.get("/domain/:slug", authenticate, leaderboardController.getDomainLeaderboard);

export default router;
