import { Award } from 'lucide-react'
import { EmptyState } from '../common/EmptyState'

export function NoCertificates() {
  return (
    <EmptyState
      icon={Award}
      title="No certificates earned yet"
      description="Complete all modules in a domain to earn your certificate"
      action={{
        label: 'Start Learning',
        href: '/domains'
      }}
    />
  )
}