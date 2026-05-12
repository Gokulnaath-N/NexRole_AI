import { Briefcase } from 'lucide-react'
import { EmptyState } from '../common/EmptyState'

interface NoJobsProps {
  onClearFilters?: () => void
}

export function NoJobs({ onClearFilters }: NoJobsProps) {
  return (
    <EmptyState
      icon={Briefcase}
      title="No jobs match your filters"
      description="Try adjusting filters or clearing your search"
      action={{
        label: 'Clear Filters',
        onClick: onClearFilters
      }}
    />
  )
}