import { Skeleton } from '@/components/ui/skeleton'

export function DomainCardSkeleton() {
  return (
    <div className="rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden bg-white dark:bg-slate-900">
      <Skeleton className="h-2 w-full" />
      <div className="p-6 space-y-4">
        <div className="flex items-start gap-4">
          <Skeleton className="h-12 w-12 rounded-lg flex-shrink-0" />
          <div className="flex-1 space-y-2">
            <Skeleton className="h-5 w-40" />
            <Skeleton className="h-4 w-full max-w-xs" />
          </div>
        </div>
        <div className="flex gap-4">
          <Skeleton className="h-8 w-16 rounded-full" />
          <Skeleton className="h-8 w-16 rounded-full" />
          <Skeleton className="h-8 w-16 rounded-full" />
        </div>
        <Skeleton className="h-10 w-full rounded-lg" />
      </div>
    </div>
  )
}