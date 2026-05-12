import { PrismaClient } from '@prisma/client';
import { env } from './env';
import logger from './logger';

const prismaClientSingleton = () => {
  const isDev = env.NODE_ENV === 'development';
  const client = new PrismaClient({
    log: isDev
      ? [
          { emit: 'event', level: 'query' },
          { emit: 'stdout', level: 'error' },
          { emit: 'stdout', level: 'info' },
          { emit: 'stdout', level: 'warn' },
        ]
      : ['error'],
  });

  if (isDev) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (client as any).$on('query', (e: any) => {
      logger.debug(`Query: ${e.query}`);
      logger.debug(`Params: ${e.params}`);
      logger.debug(`Duration: ${e.duration}ms`);
    });
  }

  return client;
};

declare global {
  // eslint-disable-next-line no-var
  var prisma: undefined | ReturnType<typeof prismaClientSingleton>;
}

const prisma = globalThis.prisma ?? prismaClientSingleton();

if (env.NODE_ENV !== 'production') {
  globalThis.prisma = prisma;
}

export const testDatabaseConnection = async () => {
  try {
    await prisma.$queryRaw`SELECT 1`;
    logger.info('✅ Database connected — PostgreSQL via Supabase');
  } catch (error) {
    logger.error('❌ Failed to connect to the database:', error);
    process.exit(1);
  }
};

process.on('SIGINT', async () => {
  logger.info('Gracefully shutting down Prisma on SIGINT...');
  await prisma.$disconnect();
  process.exit(0);
});

process.on('SIGTERM', async () => {
  logger.info('Gracefully shutting down Prisma on SIGTERM...');
  await prisma.$disconnect();
  process.exit(0);
});

export default prisma;
