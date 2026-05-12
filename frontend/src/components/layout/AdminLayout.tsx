import { ReactNode } from 'react'
import { Link, useLocation, Navigate } from 'react-router-dom'
import { useAuthStore } from '@/store'
import { cn } from '@/lib/utils'
import {
  LayoutDashboard, Users, Globe, BookOpen,
  Briefcase, BarChart3, HelpCircle, Award, ArrowLeft, Zap
} from 'lucide-react'

const ADMIN_NAV = [
  { icon: LayoutDashboard, label: 'Dashboard', href: '/admin' },
  { icon: BarChart3, label: 'Analytics', href: '/admin/analytics' },
  { icon: Globe, label: 'Domains', href: '/admin/domains' },
  { icon: BookOpen, label: 'Modules', href: '/admin/modules' },
  { icon: HelpCircle, label: 'Quiz Bank', href: '/admin/quiz' },
  { icon: Briefcase, label: 'Jobs', href: '/admin/jobs' },
  { icon: Users, label: 'Users', href: '/admin/users' },
  { icon: Award, label: 'Certificates', href: '/admin/certificates' },
]

export function AdminLayout({ children }: { children: ReactNode }) {
  const { user } = useAuthStore()
  const location = useLocation()

  if (user?.role !== 'ADMIN') return <Navigate to="/dashboard" replace />

  return (
    <div className="flex min-h-screen">
      <aside className="w-60 bg-slate-900 text-white flex-shrink-0 fixed h-full overflow-y-auto">
        <div className="p-4 border-b border-slate-800">
          <div className="flex items-center gap-2 mb-1">
            <Zap className="h-5 w-5 text-blue-400" />
            <span className="font-bold text-white">NexRole AI</span>
          </div>
          <span className="text-xs px-2 py-0.5 bg-red-500/20 text-red-400 rounded-full border border-red-500/30">
            Admin Panel
          </span>
        </div>
        <nav className="p-3 space-y-1">
          {ADMIN_NAV.map(({ icon: Icon, label, href }) => (
            <Link key={href} to={href}
              className={cn(
                'flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-all',
                location.pathname === href
                  ? 'bg-blue-600 text-white'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800'
              )}>
              <Icon className="h-4 w-4" />
              {label}
            </Link>
          ))}
        </nav>
        <div className="p-3 border-t border-slate-800 mt-auto">
          <Link to="/dashboard"
            className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors px-3 py-2">
            <ArrowLeft className="h-4 w-4" />
            Back to App
          </Link>
        </div>
      </aside>
      <main className="ml-60 flex-1 p-6 bg-slate-50 dark:bg-slate-950 min-h-screen">
        {children}
      </main>
    </div>
  )
}