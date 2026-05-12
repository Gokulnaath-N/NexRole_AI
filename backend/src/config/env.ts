import { z } from 'zod';
import dotenv from 'dotenv';

// Load variables from .env if present
dotenv.config();

const envSchema = z.object({
  // Server
  NODE_ENV: z.enum(['development', 'production', 'test']).default('development'),
  PORT: z.coerce.number().default(5000),

  // Database
  DATABASE_URL: z
    .string()
    .min(1, { message: 'DATABASE_URL is required' })
    .startsWith('postgresql://', { message: 'DATABASE_URL must start with "postgresql://"' }),
  DIRECT_URL: z.string().min(1, { message: 'DIRECT_URL is required' }),

  // Firebase Admin
  FIREBASE_PROJECT_ID: z.string().min(1, { message: 'FIREBASE_PROJECT_ID is required' }),
  FIREBASE_CLIENT_EMAIL: z
    .string()
    .min(1, { message: 'FIREBASE_CLIENT_EMAIL is required' })
    .includes('@', { message: 'FIREBASE_CLIENT_EMAIL must contain "@"' }),
  FIREBASE_PRIVATE_KEY: z.string().min(1, { message: 'FIREBASE_PRIVATE_KEY is required' }),

  // Redis
  REDIS_URL: z.string().default('redis://localhost:6379'),

  // AI Services
  RAG_SERVICE_URL: z.string().default('http://localhost:8001'),
  NLP_SERVICE_URL: z.string().default('http://localhost:8002'),
  GENAI_SERVICE_URL: z.string().default('http://localhost:8003'),
  MULTIMODAL_SERVICE_URL: z.string().default('http://localhost:8004'),
  RECOMMENDATION_SERVICE_URL: z.string().default('http://localhost:8005'),
  AGENTS_SERVICE_URL: z.string().default('http://localhost:8007'),

  // LLM Providers
  GEMINI_API_KEY: z.string().min(1, { message: 'GEMINI_API_KEY is required' }),
  GROQ_API_KEY: z.string().optional(),
  HUGGING_FACE_TOKEN: z.string().optional(),

  // App
  FRONTEND_URL: z.string().default('http://localhost:3000'),
  APP_URL: z.string().default('http://localhost:5000'),

  // Supabase API
  SUPABASE_URL: z.string().optional(),
  SUPABASE_ANON_KEY: z.string().optional(),
});

export type AppEnv = z.infer<typeof envSchema>;

const parsedEnv = envSchema.safeParse(process.env);

if (!parsedEnv.success) {
  console.error('❌ Environment validation failed. Missing or invalid variables:');
  parsedEnv.error.errors.forEach((err) => {
    console.error(`  - ${err.path.join('.')}: ${err.message}`);
  });
  process.exit(1);
}

export const env: AppEnv = parsedEnv.data;

export const validateEnv = (): void => {
  console.log('✅ Environment variables validated');
};
