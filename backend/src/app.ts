import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import compression from 'compression';
import { env } from './config/env';
import { httpLogger } from './config/logger';
import { apiLimiter } from './middlewares/rateLimiter';
import { errorHandler } from './middlewares/errorHandler';
import { isRedisAvailable } from './config/redis';

import authRoutes from "./modules/auth/auth.routes";
import userRoutes from "./modules/users/users.routes";
import domainRoutes from "./modules/domains/domains.routes";
import moduleRoutes from "./modules/modules/modules.routes";
import quizRoutes from "./modules/quiz/quiz.routes";
import progressRoutes from "./modules/progress/progress.routes";
import certificateRoutes from "./modules/certificates/certificates.routes";
import jobRoutes from "./modules/job-market/jobs.routes";
import interviewRoutes from "./modules/interview/interview.routes";
import leaderboardRoutes from "./modules/leaderboard/leaderboard.routes";
import notificationRoutes from "./modules/notifications/notifications.routes";
import adminRoutes from "./modules/admin/admin.routes";
import learningPathRoutes from './modules/learning-path/learningPath.routes';
import aiRoutes from './modules/ai/ai.routes';
import { mcpAgentBridge } from './integrations/mcp';

const app = express();

// 1. Security & Parsers
app.use(helmet());
app.use(
  cors({
    origin: (origin, callback) => {
      const allowed = [
        env.FRONTEND_URL,
        'http://localhost:3000',
        'http://localhost:3001',
        'http://localhost:3002',
        'http://localhost:3003',
        'http://localhost:5173',
        'http://127.0.0.1:5173',
      ];
      if (!origin || allowed.includes(origin)) return callback(null, true);
      callback(new Error(`CORS blocked: ${origin}`));
    },
    credentials: true,
  })
);
app.use(compression());
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));

// 2. Logging & Rate Limiting
app.use(httpLogger);
app.use(apiLimiter);

// 3. Mount Routers
// Auth — Firebase sync, onboarding, profile
app.use("/api/v1/auth", authRoutes);
// Users — User profiles, skills, activity
app.use("/api/v1/users", userRoutes);
// Domains — Domain catalog, enrollment
app.use("/api/v1/domains", domainRoutes);
// Modules — Module content, completion
app.use("/api/v1/modules", moduleRoutes);
// Quiz — Quiz engine, Gemini generation, submission
app.use("/api/v1/quiz", quizRoutes);
// Progress — Learning progress, analytics
app.use("/api/v1/progress", progressRoutes);
// Certificates — Generation, verification
app.use("/api/v1/certificates", certificateRoutes);
// Jobs — Job market, bookmarks, skill gap
app.use("/api/v1/jobs", jobRoutes);
// Interview — Questions, Gemini evaluation
app.use("/api/v1/interview", interviewRoutes);
// Leaderboard — Weekly, all-time, domain
app.use("/api/v1/leaderboard", leaderboardRoutes);
// Notifications — Bell notifications, mark read
app.use("/api/v1/notifications", notificationRoutes);
// Admin — Platform management (Admin only)
app.use("/api/v1/admin", adminRoutes);
// Learning Path — AI-generated 90-day roadmaps
app.use("/api/v1/learning-path", learningPathRoutes);
app.use("/api/v1/ai", aiRoutes);

// MCP Agent Bridge
app.use("/api/v1/mcp", mcpAgentBridge);

// 4. Health check endpoint
app.get('/health', (req, res) => {
  res.json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    environment: env.NODE_ENV,
    database: 'connected', // Assumed connected by pre-boot checks
    redis: isRedisAvailable(),
  });
});

// 5. 404 handler for unknown routes
app.use((req, res) => {
  res.status(404).json({ success: false, message: 'Route not found' });
});

// 6. Global error handler
app.use(errorHandler);

export default app;
