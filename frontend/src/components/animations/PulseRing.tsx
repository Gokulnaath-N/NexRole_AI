import { cn } from '@/lib/utils'

export function PulseRing({ color = 'blue', className }: { 
  color?: string; className?: string 
}) {
  return (
    <span className={cn('relative flex h-3 w-3', className)}>
      <span className={cn(
        'animate-ping absolute inline-flex h-full w-full rounded-full opacity-75',
        color === 'blue' ? 'bg-blue-400' : 'bg-green-400'
      )} />
      <span className={cn(
        'relative inline-flex rounded-full h-3 w-3',
        color === 'blue' ? 'bg-blue-500' : 'bg-green-500'
      )} />
    </span>
  )
}