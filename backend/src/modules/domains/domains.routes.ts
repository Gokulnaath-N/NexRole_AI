import express from "express";
import { authenticate, optionalAuth } from "../../middlewares/auth.middleware";
import * as domainsController from "./domains.controller";

const router = express.Router();

router.get("/", optionalAuth, domainsController.getAllDomains);
router.get("/me/enrollments", authenticate, domainsController.getUserEnrollments);
router.get("/:slug", optionalAuth, domainsController.getDomainBySlug);
router.post("/:slug/enroll", authenticate, domainsController.enrollInDomain);

export default router;
