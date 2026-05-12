import { Skeleton } from '@/components/ui/skeleton'

export function ProfileSkeleton() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col items-center space-y-3">
        <Skeleton className="h-20 w-20 rounded-full" />
        <div className="text-center space-y-2">
          <Skeleton className="h-6 w-48 mx-auto" />
          <Skeleton className="h-5 w-24 mx-auto" />
        </div>
        <Skeleton className="h-6 w-32 rounded-full" />
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="rounded-lg border border-slate-200 dark:border-slate-800 p-4 space-y-2">
            <Skeleton className="h-4 w-16" />
            <Skeleton className="h-6 w-20" />
          </div>
        ))}
      </div>
    </div>
  )
}