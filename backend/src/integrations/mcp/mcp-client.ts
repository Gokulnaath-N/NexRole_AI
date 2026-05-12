import { Client } from '@modelcontextprotocol/sdk/client/index.js';
import { StdioClientTransport } from '@modelcontextprotocol/sdk/client/stdio.js';
import { SSEClientTransport } from '@modelcontextprotocol/sdk/client/sse.js';
import logger from '../../config/logger';

interface ServerConfig {
  name: string;
  type: 'stdio' | 'sse';
  url?: string;
  command?: string;
  args?: string[];
  headers?: Record<string, string>;
}

export class MCPClientManager {
  private clients: Map<string, Client> = new Map();
  private configs: Map<string, ServerConfig> = new Map();
  private status: Map<string, 'connected' | 'disconnected' | 'error'> = new Map();

  async connectServer(name: string, config: ServerConfig) {
    this.configs.set(name, config);
    try {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      let transport: any;
      if (config.type === 'stdio') {
        transport = new StdioClientTransport({
          command: config.command!,
          args: config.args,
        });
      } else if (config.type === 'sse') {
        transport = new SSEClientTransport(
          new URL(config.url!),
          // @ts-ignore SDK version mismatch
          { headers: config.headers }
        );
      } else {
        throw new Error('Invalid transport type');
      }

      const client = new Client(
        { name: `nexrole-${name}`, version: '1.0.0' },
        // @ts-ignore SDK version mismatch
        { capabilities: { tools: {} } }
      );

      await client.connect(transport);
      this.clients.set(name, client);
      this.status.set(name, 'connected');
      logger.info(`[MCP] Successfully connected to server: ${name}`);
    } catch (error) {
      this.status.set(name, 'error');
      logger.error(`[MCP] Failed to connect server ${name}:`, error);
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async callTool(serverName: string, toolName: string, params: any) {
    const client = this.clients.get(serverName);
    if (!client || this.status.get(serverName) !== 'connected') {
      logger.warn(`[MCP] Server ${serverName} is not connected. Returning null.`);
      return null;
    }
    try {
      logger.info(`[MCP] Calling tool ${toolName} on ${serverName}`);
      return await client.callTool({ name: toolName, arguments: params });
    } catch (error) {
      logger.error(`[MCP] Tool call failed ${toolName} on ${serverName}:`, error);
      return null;
    }
  }

  async listTools(serverName: string) {
    const client = this.clients.get(serverName);
    if (!client || this.status.get(serverName) !== 'connected') return [];
    try {
      const response = await client.listTools();
      return response.tools;
    } catch (error) {
      logger.error(`[MCP] Failed to list tools for ${serverName}:`, error);
      return [];
    }
  }

  healthCheck() {
    const health: Record<string, string> = {};
    for (const [name, status] of this.status.entries()) {
      health[name] = status;
    }
    return health;
  }
}

export const mcpClient = new MCPClientManager();

const initMCP = async () => {
  if (process.env.MCP_BRAVE_SEARCH_URL) {
    await mcpClient.connectServer('brave-search', {
      name: 'brave-search',
      type: 'sse',
      url: process.env.MCP_BRAVE_SEARCH_URL,
    });
  }

  await mcpClient.connectServer('filesystem', {
    name: 'filesystem',
    type: 'stdio',
    command: 'npx',
    args: ['-y', '@modelcontextprotocol/server-filesystem', process.env.MCP_FILESYSTEM_PATH || './uploads'],
  });

  if (process.env.DATABASE_URL) {
    await mcpClient.connectServer('postgresql', {
      name: 'postgresql',
      type: 'stdio',
      command: 'npx',
      args: ['-y', '@modelcontextprotocol/server-postgres', process.env.DATABASE_URL],
    });
  }

  if (process.env.MCP_GITHUB_URL && process.env.GITHUB_TOKEN) {
    await mcpClient.connectServer('github', {
      name: 'github',
      type: 'sse',
      url: process.env.MCP_GITHUB_URL,
      headers: { Authorization: `Bearer ${process.env.GITHUB_TOKEN}` },
    });
  }
};

// Initialize silently in the background
initMCP().catch(e => logger.error('[MCP] Init sequence failed:', e));
