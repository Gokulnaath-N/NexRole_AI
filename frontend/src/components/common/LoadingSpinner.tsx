import { cn } from '@/lib/utils'

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg'
  fullScreen?: boolean
  className?: string
}

export function LoadingSpinner({
  size = 'md', fullScreen, className
}: LoadingSpinnerProps) {
  const sizes = { sm: 'h-4 w-4', md: 'h-8 w-8', lg: 'h-12 w-12' }

  const spinner = (
    <div className={cn(
      'animate-spin rounded-full border-2 border-blue-200 border-t-blue-600',
      sizes[size], className
    )} />
  )

  if (fullScreen) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-white dark:bg-slate-900 z-50">
        <div className="flex flex-col items-center gap-4">
          {spinner}
          <p className="text-sm text-slate-500">Loading NexRole AI...</p>
        </div>
      </div>
    )
  }
  return spinner
}
