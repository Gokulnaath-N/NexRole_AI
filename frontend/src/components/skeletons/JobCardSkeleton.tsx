import { Skeleton } from '@/components/ui/skeleton'

export function JobCardSkeleton() {
  return (
    <div className="rounded-lg border border-slate-200 dark:border-slate-800 p-6 space-y-4 bg-white dark:bg-slate-900">
      <div className="flex items-start gap-3">
        <Skeleton className="h-10 w-10 rounded-full flex-shrink-0" />
        <div className="flex-1 space-y-2">
          <Skeleton className="h-5 w-48" />
          <Skeleton className="h-4 w-32" />
        </div>
      </div>
      
      <div className="flex gap-2 flex-wrap">
        {[...Array(3)].map((_, i) => (
          <Skeleton key={i} className="h-6 w-16 rounded-full" />
        ))}
      </div>
      
      <Skeleton className="h-10 w-full rounded-lg" />
    </div>
  )
}