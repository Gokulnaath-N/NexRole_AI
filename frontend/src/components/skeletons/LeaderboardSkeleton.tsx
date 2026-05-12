import { Skeleton } from '@/components/ui/skeleton'

export function LeaderboardSkeleton() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-3 gap-4">
        {[...Array(3)].map((_, i) => {
          const heights = ['h-48', 'h-56', 'h-40']
          return (
            <div key={i} className="rounded-lg border border-slate-200 dark:border-slate-800 p-6 space-y-4">
              <Skeleton className={`${heights[i]} w-full rounded-lg`} />
              <div className="space-y-2">
                <Skeleton className="h-5 w-24" />
                <Skeleton className="h-4 w-32" />
              </div>
            </div>
          )
        })}
      </div>
      
      <div className="rounded-lg border border-slate-200 dark:border-slate-800 overflow-hidden">
        {[...Array(10)].map((_, i) => (
          <div key={i} className="h-12 flex items-center gap-4 px-4 border-b border-slate-200 dark:border-slate-800 last:border-b-0 py-3">
            <Skeleton className="h-6 w-8 rounded" />
            <Skeleton className="h-8 w-8 rounded-full" />
            <div className="flex-1 space-y-1">
              <Skeleton className="h-3 w-24" />
              <Skeleton className="h-2 w-16" />
            </div>
            <Skeleton className="h-5 w-12" />
          </div>
        ))}
      </div>
    </div>
  )
}