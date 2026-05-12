import express from "express";
import { authenticate } from "../../middlewares/auth.middleware";
import * as notificationsController from "./notifications.controller";

const router = express.Router();

router.get("/", authenticate, notificationsController.getUserNotifications);
router.patch("/read", authenticate, notificationsController.markAsRead);
router.patch("/:id/read", authenticate, notificationsController.markAsReadById);

export default router;
