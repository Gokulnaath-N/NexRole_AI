import { Bell } from 'lucide-react'
import { EmptyState } from '../common/EmptyState'

export function NoNotifications() {
  return (
    <EmptyState
      icon={Bell}
      title="You're all caught up!"
      description="No new notifications right now"
    />
  )
}