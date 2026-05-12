import {
  signInWithPopup,
  signInWithEmailAndPassword,
  signOut as firebaseSignOut,
} from 'firebase/auth';
import { auth, googleProvider, githubProvider } from '../../config/firebase';
import { useAuthStore } from '../../store';

/**
 * useAuth — exposes auth methods and the current auth state from the store.
 *
 * The Firebase onAuthStateChanged listener has been moved to AuthProvider
 * (mounted once at the root) so that it survives navigation. This hook is
 * now only responsible for triggering sign-in / sign-out actions.
 */
export const useAuth = () => {
  const { user, loading, clearUser } = useAuthStore();

  const signInWithGoogle = () => signInWithPopup(auth, googleProvider);

  const signInWithGithub = () => signInWithPopup(auth, githubProvider);

  const signInWithEmail = (email: string, password: string) =>
    signInWithEmailAndPassword(auth, email, password);

  const signOut = async () => {
    await firebaseSignOut(auth);
    clearUser();
  };

  return {
    user,
    loading,
    isAuthenticated: !!user,
    signInWithGoogle,
    signInWithGithub,
    signInWithEmail,
    signOut,
  };
};
