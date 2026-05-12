import * as admin from 'firebase-admin';
import { env } from './env';

export class AuthError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'AuthError';
  }
}

// Handle literal newline characters in environment variables and trim accidental quotes
const privateKey = env.FIREBASE_PRIVATE_KEY
  .replace(/\\n/g, '\n')
  .replace(/^"|"$/g, '')
  .trim();

if (!privateKey.startsWith('-----BEGIN PRIVATE KEY-----')) {
  throw new Error('Invalid Firebase private key format. Make sure FIREBASE_PRIVATE_KEY is a valid service account key with escaped newlines.');
}

// 1. Initialize app only once
export const adminApp = !admin.apps.length
  ? admin.initializeApp({
      credential: admin.credential.cert({
        projectId: env.FIREBASE_PROJECT_ID,
        clientEmail: env.FIREBASE_CLIENT_EMAIL,
        privateKey,
      }),
    })
  : admin.app();

// 3. Export adminAuth
export const adminAuth = adminApp.auth();

// 4. verifyFirebaseToken
export const verifyFirebaseToken = async (token: string) => {
  try {
    const decodedToken = await adminAuth.verifyIdToken(token);
    return decodedToken;
  } catch (error) {
    throw new AuthError('Invalid or expired token');
  }
};

// 5. getUserByUid
export const getUserByUid = async (uid: string) => {
  try {
    const userRecord = await adminAuth.getUser(uid);
    return userRecord;
  } catch (error) {
    // Return null instead of throwing if the user doesn't exist
    return null;
  }
};
