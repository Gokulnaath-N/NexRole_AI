import React, { useEffect, useState } from 'react'
import { AdminLayout } from '@/components/layout/AdminLayout'
import { api } from '@/services/api.client'
import { LoadingSpinner } from '@/components/common/LoadingSpinner'

export function AdminAnalytics() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchAnalytics = async () => {
      try {
        await api.get('/admin/analytics')
      } catch (error) {
        console.error('Failed to fetch analytics:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchAnalytics()
  }, [])

  if (loading) return <LoadingSpinner fullScreen />

  return (
    <AdminLayout>
      <div className="space-y-8">
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Analytics</h1>

        {/* Charts would go here */}
        <div className="p-6 border rounded-lg bg-white dark:bg-slate-900 text-center text-slate-600 dark:text-slate-400">
          <p>Analytics charts coming soon...</p>
        </div>
      </div>
    </AdminLayout>
  )
}

export default AdminAnalytics
