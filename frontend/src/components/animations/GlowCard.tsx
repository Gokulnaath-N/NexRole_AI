import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface GlowCardProps {
  children: ReactNode
  color?: string
  className?: string
}

export function GlowCard({ children, color = '#2563eb', className }: GlowCardProps) {
  return (
    <div
      className={cn(
        'relative rounded-xl border bg-white dark:bg-slate-900',
        'transition-all duration-300 hover:-translate-y-1',
        'dark:shadow-[0_0_20px_rgba(37,99,235,0.15)]',
        'hover:dark:shadow-[0_0_30px_rgba(37,99,235,0.3)]',
        className
      )}
      style={{ '--glow-color': color } as React.CSSProperties}
    >
      {children}
    </div>
  )
}