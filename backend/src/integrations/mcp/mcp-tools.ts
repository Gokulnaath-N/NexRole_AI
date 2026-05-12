import { mcpClient } from './mcp-client';
import logger from '../../config/logger';

export const searchJobMarket = async (query: string, location?: string) => {
  const finalQuery = location ? `${query} jobs India AI ${location}` : `${query} jobs India AI`;
  const result = await mcpClient.callTool('brave-search', 'brave_web_search', { query: finalQuery });
  
  if (!result || !result.content) {
    logger.warn('[MCP Tool] brave_web_search fallback triggered or failed');
    return [];
  }

  try {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const textContent = (result.content as any[]).find((c: any) => c.type === 'text')?.text || '[]';
    return JSON.parse(textContent); 
  } catch (e) {
    return result.content;
  }
};

export const readResumeFile = async (filePath: string) => {
  const result = await mcpClient.callTool('filesystem', 'read_file', { path: filePath });
  if (!result || !result.content) return '';
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return (result.content as any[]).find((c: any) => c.type === 'text')?.text || '';
};

export const queryUserProgress = async (userId: string) => {
  const sql = `
    SELECT p.*, m.title as module_title, d.name as domain_name
    FROM "Progress" p
    JOIN "Module" m ON p."moduleId" = m.id
    JOIN "Domain" d ON m."domainId" = d.id
    WHERE p."userId" = '${userId}'
  `; 
  
  const result = await mcpClient.callTool('postgresql', 'query', { sql });
  if (!result || !result.content) return [];
  
  try {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const textContent = (result.content as any[]).find((c: any) => c.type === 'text')?.text || '[]';
    return JSON.parse(textContent);
  } catch (e) {
    return result.content;
  }
};

export const analyzeGitHubRepo = async (repoUrl: string) => {
  const urlParts = repoUrl.replace('https://github.com/', '').replace('http://github.com/', '').split('/');
  const owner = urlParts[0];
  const repo = urlParts[1]?.replace('.git', '');
  
  if (!owner || !repo) return null;

  const result = await mcpClient.callTool('github', 'get_repository', { owner, repo });
  if (!result || !result.content) return null;
  
  try {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const textContent = (result.content as any[]).find((c: any) => c.type === 'text')?.text || '{}';
    return JSON.parse(textContent);
  } catch (e) {
    return result.content;
  }
};
