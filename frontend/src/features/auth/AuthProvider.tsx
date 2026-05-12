import React, { useEffect } from 'react';
import { onAuthStateChanged, User as FirebaseUser } from 'firebase/auth';
import { auth } from '../../config/firebase';
import { useAuthStore } from '../../store';
import { post } from '../../services/api.client';

/**
 * AuthProvider — mounts ONCE at the app root and keeps the Firebase auth
 * listener alive for the entire session lifetime. It syncs the Firebase user
 * to the backend and populates the Zustand auth store.
 *
 * Previously this listener lived inside useAuth(), so it was torn down every
 * time the Login/Register components unmounted — before the async /auth/sync
 * call could finish. Moving it here fixes the race condition.
 */
export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const { setUser, clearUser } = useAuthStore();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser: FirebaseUser | null) => {
      if (firebaseUser) {
        try {
          const response = await post('/auth/sync', {
            uid: firebaseUser.uid,
            name: firebaseUser.displayName || '',
            email: firebaseUser.email || '',
            image: firebaseUser.photoURL || '',
          });

          const body = response.data as any;

          // Backend sendSuccess returns: { success, message, data, timestamp }
          // So synced user is usually in body.data
          const userFromDb = body?.data;

          if (!userFromDb) {
            throw new Error(`Auth sync succeeded but user payload missing. Response keys: ${Object.keys(body || {})}`);
          }

          setUser({
            ...userFromDb,
            // Normalise the onboarded flag — backend may return either field name
            onboarded:
              userFromDb?.onboardingComplete ?? userFromDb?.onboarded ?? false,
          });
        } catch (error: any) {
          // axios error shape may contain response/body; log for quick diagnosis
          console.error(
            '[AuthProvider] Backend sync failed:',
            {
              message: error?.message ?? error,
              status: error?.response?.status,
              responseData: error?.response?.data,
            }
          );
          // Clear user so ProtectedRoute redirects to login instead of hanging
          clearUser();
        }
      } else {
        clearUser();
      }
    });

    return () => unsubscribe();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <>{children}</>;
};
