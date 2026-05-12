import { HelpCircle } from 'lucide-react'
import { EmptyState } from '../common/EmptyState'

export function NoQuizAttempts() {
  return (
    <EmptyState
      icon={HelpCircle}
      title="No quiz attempts yet"
      description="Complete a module to unlock its quiz"
    />
  )
}