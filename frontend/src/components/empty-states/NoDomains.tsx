import { Globe } from 'lucide-react'
import { EmptyState } from '../common/EmptyState'

export function NoDomains() {
  return (
    <EmptyState
      icon={Globe}
      title="No domains yet"
      description="Pick an AI domain and start your personalized journey"
      action={{
        label: 'Browse Domains',
        href: '/domains'
      }}
    />
  )
}