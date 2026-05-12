import { Zap, Menu } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'

interface MobileHeaderProps {
  onMenuOpen: () => void
}

export function MobileHeader({ onMenuOpen }: MobileHeaderProps) {
  return (
    <header className="md:hidden fixed top-0 left-0 right-0 z-50 h-14 bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl border-b border-slate-200 dark:border-slate-800 flex items-center justify-between px-4">
      <Link to="/dashboard" className="flex items-center gap-2">
        <div className="w-7 h-7 rounded-lg bg-blue-600 flex items-center justify-center">
          <Zap className="h-4 w-4 text-white" />
        </div>
        <span className="font-bold text-sm text-slate-900 dark:text-white">
          NexRole AI
        </span>
      </Link>
      <Button variant="ghost" size="sm" className="h-8 w-8 p-0" onClick={onMenuOpen}>
        <Menu className="h-5 w-5" />
      </Button>
    </header>
  )
}