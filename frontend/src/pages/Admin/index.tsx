import React, { useEffect, useState } from 'react'
import { AdminLayout } from '@/components/layout/AdminLayout'
import { api } from '@/services/api.client'
import { LoadingSpinner } from '@/components/common/LoadingSpinner'
import { Activity, Database, Radio } from 'lucide-react'

interface AdminStats {
  totalUsers: number
  activeToday: number
  totalDomains: number
  enrollments: number
  completions: number
  avgSkillScore: number
}

interface SystemHealth {
  database: 'healthy' | 'warning' | 'error'
  redis: 'healthy' | 'warning' | 'error'
  aiServices: 'healthy' | 'warning' | 'error'
}

export function AdminDashboard() {
  const [stats, setStats] = useState<AdminStats | null>(null)
  const [health, setHealth] = useState<SystemHealth | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    try {
      const [statsRes, healthRes] = await Promise.all([
        api.get('/admin/stats'),
        api.get('/admin/health')
      ])
      setStats(statsRes.data)
      setHealth(healthRes.data)
    } catch (error) {
      console.error('Failed to fetch admin data:', error)
    } finally {
      setLoading(false)
    }
  }

  if (loading) return <LoadingSpinner fullScreen />

  return (
    <AdminLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Admin Dashboard</h1>
        </div>

        {/* Stats Grid */}
        {stats && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { label: 'Total Users', value: stats.totalUsers },
              { label: 'Active Today', value: stats.activeToday },
              { label: 'Domains', value: stats.totalDomains },
              { label: 'Enrollments', value: stats.enrollments },
              { label: 'Completions', value: stats.completions },
              { label: 'Avg Skill Score', value: `${stats.avgSkillScore}%` }
            ].map((stat, i) => (
              <div key={i} className="p-6 border rounded-lg bg-white dark:bg-slate-900">
                <p className="text-sm text-slate-600 dark:text-slate-400 font-medium mb-2">{stat.label}</p>
                <p className="text-3xl font-bold text-slate-900 dark:text-white">{stat.value}</p>
              </div>
            ))}
          </div>
        )}

        {/* System Health */}
        {health && (
          <div className="p-6 border rounded-lg bg-white dark:bg-slate-900">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-6">System Health</h2>
            <div className="space-y-4">
              {[
                { name: 'Database', status: health.database, icon: Database },
                { name: 'Redis Cache', status: health.redis, icon: Radio },
                { name: 'AI Services', status: health.aiServices, icon: Activity }
              ].map((service, i) => (
                <div key={i} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <service.icon className="w-5 h-5" />
                    <span className="font-medium text-slate-900 dark:text-white">{service.name}</span>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase ${
                    service.status === 'healthy' ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' :
                    service.status === 'warning' ? 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400' :
                    'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400'
                  }`}>
                    {service.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </AdminLayout>
  )
}

export default AdminDashboard
