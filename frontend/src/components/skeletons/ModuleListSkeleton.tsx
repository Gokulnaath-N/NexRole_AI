import { Skeleton } from '@/components/ui/skeleton'

export function ModuleListSkeleton() {
  return (
    <div className="space-y-0 border border-slate-200 dark:border-slate-800 rounded-lg overflow-hidden">
      {[...Array(5)].map((_, i) => (
        <div key={i} className="h-16 flex items-center gap-4 px-4 border-b border-slate-200 dark:border-slate-800 last:border-b-0 py-3">
          <Skeleton className="h-7 w-7 rounded" />
          <div className="flex-1 space-y-2">
            <Skeleton className="h-4 w-48" />
            <Skeleton className="h-3 w-32" />
          </div>
          <Skeleton className="h-6 w-20 rounded-full" />
          <Skeleton className="h-6 w-12 rounded-full" />
        </div>
      ))}
    </div>
  )
}