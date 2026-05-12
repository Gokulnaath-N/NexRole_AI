import { Navigate, useLocation } from 'react-router-dom'
import { useAuthStore } from '../store'
import { LoadingSpinner } from '../components/common/LoadingSpinner'

export function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { user, loading } = useAuthStore()
  const location = useLocation()
  
  if (loading) return <LoadingSpinner fullScreen />
  if (!user) return <Navigate to="/auth/login" state={{ from: location }} replace />
  if (!user.onboarded && location.pathname !== '/onboarding') {
    return <Navigate to="/onboarding" replace />
  }
  return <>{children}</>
}