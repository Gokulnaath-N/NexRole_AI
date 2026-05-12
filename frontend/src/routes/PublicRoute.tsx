import { Navigate } from 'react-router-dom'
import { useAuthStore } from '../store'
import { LoadingSpinner } from '../components/common/LoadingSpinner'

export function PublicRoute({ children }: { children: React.ReactNode }) {
  const { user, loading } = useAuthStore()
  if (loading) return <LoadingSpinner fullScreen />
  if (user) return <Navigate to="/dashboard" replace />
  return <>{children}</>
}