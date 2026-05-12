import { Navigate } from 'react-router-dom';
import { useAuthStore } from '../../store';

interface AuthGuardProps {
  children: React.ReactNode;
  requireAdmin?: boolean;
}

export const AuthGuard = ({ children, requireAdmin = false }: AuthGuardProps) => {
  const { user, loading } = useAuthStore();

  if (loading) {
    return <div className="flex h-screen items-center justify-center">Loading...</div>;
  }

  if (!user) return <Navigate to="/auth/login" replace />;
  if (requireAdmin && user.role !== 'ADMIN') return <Navigate to="/dashboard" replace />;

  return <>{children}</>;
};
