import { Link } from 'react-router-dom'
import { Zap } from 'lucide-react'

export function Footer() {
  return (
    <footer className="border-t bg-white dark:bg-slate-950 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-7 h-7 rounded-lg bg-blue-600 flex items-center justify-center">
                <Zap className="h-4 w-4 text-white" />
              </div>
              <span className="font-bold text-slate-900 dark:text-white">
                NexRole AI
              </span>
            </div>
            <p className="text-sm text-slate-500">
              Learn AI. Get Hired. Build the Future.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-slate-900 dark:text-white text-sm mb-3">Product</h4>
            {[
              { label: 'Domains', href: '/domains' },
              { label: 'Career Hub', href: '/career' },
              { label: 'Interview Prep', href: '/interview-prep' },
              { label: 'Leaderboard', href: '/leaderboard' }
            ].map(({ label, href }) => (
              <Link key={label} to={href}
                className="block text-sm text-slate-500 hover:text-blue-600 mb-1.5 transition-colors">
                {label}
              </Link>
            ))}
          </div>
          <div>
            <h4 className="font-semibold text-slate-900 dark:text-white text-sm mb-3">Company</h4>
            {['About', 'Blog', 'Careers', 'Press'].map(l => (
              <p key={l} className="text-sm text-slate-500 mb-1.5">{l}</p>
            ))}
          </div>
          <div>
            <h4 className="font-semibold text-slate-900 dark:text-white text-sm mb-3">Legal</h4>
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map(l => (
              <p key={l} className="text-sm text-slate-500 mb-1.5">{l}</p>
            ))}
          </div>
        </div>
        <div className="border-t pt-6 flex flex-col md:flex-row justify-between items-center gap-2">
          <p className="text-xs text-slate-400">
            © 2025 NexRole AI · Made for the AI-first generation 🇮🇳
          </p>
          <p className="text-xs text-slate-400">Built by Gokulnaath N</p>
        </div>
      </div>
    </footer>
  )
}