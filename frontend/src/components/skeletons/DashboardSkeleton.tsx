import { Skeleton } from '@/components/ui/skeleton'

export function DashboardSkeleton() {
  return (
    <div className="space-y-8">
      <div className="space-y-3">
        <Skeleton className="h-8 w-48" />
        <Skeleton className="h-5 w-72" />
      </div>
      
      <div className="grid grid-cols-4 gap-4">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="rounded-lg border border-slate-200 dark:border-slate-800 p-6 space-y-3">
            <Skeleton className="h-4 w-20" />
            <Skeleton className="h-7 w-32" />
            <Skeleton className="h-3 w-24" />
          </div>
        ))}
      </div>
      
      <div className="rounded-lg border border-slate-200 dark:border-slate-800 p-6 space-y-4">
        <Skeleton className="h-6 w-40" />
        <div className="space-y-3">
          <Skeleton className="h-12 w-full" />
          <Skeleton className="h-12 w-full" />
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        {[...Array(2)].map((_, i) => (
          <div key={i} className="rounded-lg border border-slate-200 dark:border-slate-800 p-6 space-y-4">
            <Skeleton className="h-6 w-32" />
            <Skeleton className="h-32 w-full" />
          </div>
        ))}
      </div>
    </div>
  )
}