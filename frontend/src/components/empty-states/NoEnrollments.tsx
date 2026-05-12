import { BookOpen } from 'lucide-react'
import { EmptyState } from '../common/EmptyState'

export function NoEnrollments() {
  return (
    <EmptyState
      icon={BookOpen}
      title="Not enrolled in any domain"
      description="Choose a domain to begin your AI learning journey"
      action={{
        label: 'Browse Domains',
        href: '/domains'
      }}
    />
  )
}