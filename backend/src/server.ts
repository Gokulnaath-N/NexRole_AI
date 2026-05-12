import http from 'http';
import app from './app';
import { env, validateEnv } from './config/env';
import { testDatabaseConnection } from './config/db';
import { isRedisAvailable } from './config/redis';
import logger from './config/logger';
import { initializeSocket } from './sockets/socket.config';

let server: http.Server;

const shutdown = (signal: string) => {
  logger.info(`Received ${signal}. Shutting down server...`);
  if (server) {
    server.close((err) => {
      if (err) {
        logger.error('Error while shutting down server:', err);
      }
      process.exit(0);
    });
  } else {
    process.exit(0);
  }
};

const startServer = async () => {
  try {
    // 1. Validate environment
    validateEnv();

    // 2. Test database connection
    // await testDatabaseConnection();

    // 3. Create HTTP server and initialize Socket.io
    server = http.createServer(app);
    initializeSocket(server);

    // 5. Start listening with fallback in case the configured port is already in use
    const PORT = env.PORT || 5000;

    const startListening = (port: number, retries = 5): Promise<number> => {
      return new Promise((resolve, reject) => {
        server.once('error', (err: NodeJS.ErrnoException) => {
          if (err.code === 'EADDRINUSE' && retries > 0) {
            const nextPort = port + 1;
            logger.warn(`Port ${port} is already in use. Retrying on port ${nextPort}...`);
            server.removeAllListeners('error');
            setTimeout(() => {
              startListening(nextPort, retries - 1).then(resolve).catch(reject);
            }, 200);
          } else {
            reject(err);
          }
        });

        server.listen(port, () => {
          server.removeAllListeners('error');
          resolve(port);
        });
      });
    };

    const listenPort = await startListening(PORT);
    // 6. Log startup banner
    console.log(`
   ╔══════════════════════════════════════╗
   ║         NexRole AI Backend           ║
   ╠══════════════════════════════════════╣
   ║  Port:        ${String(listenPort).padEnd(23)}║
   ║  Environment: ${String(env.NODE_ENV).padEnd(23)}║
   ║  Database:    PostgreSQL (Supabase)  ║
   ║  Redis:       ${isRedisAvailable() ? 'Connected'.padEnd(23) : 'Disconnected'.padEnd(23)}║
   ║  AI Gateway:  Ready                  ║
   ╚══════════════════════════════════════╝
      `);
    logger.info(`Server successfully started on port ${listenPort}`);

  } catch (error) {
    logger.error('Failed to start server:', error);
    process.exit(1);
  }
};

startServer();

// 7. Handle graceful shutdown
process.once('SIGINT', () => shutdown('SIGINT'));
process.once('SIGTERM', () => shutdown('SIGTERM'));
process.once('SIGUSR2', () => shutdown('SIGUSR2'));

process.on('unhandledRejection', (reason: unknown) => {
  logger.error('Unhandled Promise Rejection:', reason);
});

process.on('uncaughtException', (error: Error) => {
  logger.error('Uncaught Exception:', error);
  process.exit(1);
});
