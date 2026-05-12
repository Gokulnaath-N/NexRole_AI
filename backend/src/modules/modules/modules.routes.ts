import express from "express";
import { authenticate, optionalAuth } from "../../middlewares/auth.middleware";
import * as modulesController from "./modules.controller";

const router = express.Router();

router.get("/:moduleId", optionalAuth, modulesController.getModuleById);
router.post("/:moduleId/complete", authenticate, modulesController.markModuleComplete);

export default router;
