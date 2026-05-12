import Redis from 'ioredis';
import { env } from './env';
import logger from './logger';

const redis = new Redis(env.REDIS_URL, {
  lazyConnect: true,

  maxRetriesPerRequest: 1,

  retryStrategy(times) {
    // Stop retrying after 5 attempts in development
    if (env.NODE_ENV === 'development' && times > 5) {
      logger.warn('⚠️ Redis unavailable. Continuing without Redis.');
      return null; // STOP RETRYING
    }

    // Retry with small delay
    return Math.min(times * 200, 2000);
  },
});

let _isRedisAvailable = false;

// Connect manually
redis.connect().catch(() => {
  logger.warn('⚠️ Redis connection failed during startup');
});

redis.on('connect', () => {
  _isRedisAvailable = true;
  logger.info('✅ Redis connected');
});

redis.on('error', (error) => {
  _isRedisAvailable = false;

  // Avoid console spam
  if (env.NODE_ENV !== 'development') {
    logger.error('❌ Redis error:', error.message);
  }
});

export const isRedisAvailable = (): boolean => {
  return _isRedisAvailable;
};

export const safeGet = async (
  key: string
): Promise<string | null> => {
  if (!_isRedisAvailable) return null;

  try {
    return await redis.get(key);
  } catch (error) {
    logger.error(`Redis safeGet error for key "${key}":`, error);
    return null;
  }
};

export const safeSet = async (
  key: string,
  value: string,
  ttlSeconds?: number
): Promise<string | null> => {
  if (!_isRedisAvailable) return null;

  try {
    if (ttlSeconds) {
      return await redis.set(key, value, 'EX', ttlSeconds);
    }

    return await redis.set(key, value);
  } catch (error) {
    logger.error(`Redis safeSet error for key "${key}":`, error);
    return null;
  }
};

export default redis;