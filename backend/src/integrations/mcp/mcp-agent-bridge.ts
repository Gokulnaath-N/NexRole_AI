import { Router, Request, Response } from 'express';
import { authenticate, requireAdmin } from '../../middlewares/auth.middleware';
import { sendSuccess } from '../../utils/response.utils';
import { asyncHandler } from '../../middlewares/errorHandler';
import { mcpClient } from './mcp-client';
import * as mcpTools from './mcp-tools';

const router = Router();

// IMPORTANT: Never expose MCP publicly. Admin (Python agents) only.
router.use(authenticate);
router.use(requireAdmin);

router.post('/search', asyncHandler(async (req: Request, res: Response) => {
  const { query, location } = req.body;
  const result = await mcpTools.searchJobMarket(query, location);
  return sendSuccess(res, result, 'Job market search complete');
}));

router.post('/read-file', asyncHandler(async (req: Request, res: Response) => {
  const { filePath } = req.body;
  const result = await mcpTools.readResumeFile(filePath);
  return sendSuccess(res, result, 'File read complete');
}));

router.post('/query-progress', asyncHandler(async (req: Request, res: Response) => {
  const { userId } = req.body;
  const result = await mcpTools.queryUserProgress(userId);
  return sendSuccess(res, result, 'Progress query complete');
}));

router.post('/analyze-repo', asyncHandler(async (req: Request, res: Response) => {
  const { repoUrl } = req.body;
  const result = await mcpTools.analyzeGitHubRepo(repoUrl);
  return sendSuccess(res, result, 'GitHub repo analyzed');
}));

router.get('/health', asyncHandler(async (req: Request, res: Response) => {
  const health = mcpClient.healthCheck();
  return sendSuccess(res, health, 'MCP Servers health check');
}));

router.get('/tools', asyncHandler(async (req: Request, res: Response) => {
  const health = mcpClient.healthCheck();
  const servers = Object.keys(health).filter(k => health[k] === 'connected');
  
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const allTools: Record<string, any> = {};
  for (const server of servers) {
    const tools = await mcpClient.listTools(server);
    allTools[server] = tools;
  }
  
  return sendSuccess(res, allTools, 'Available MCP tools listed');
}));

export default router;
