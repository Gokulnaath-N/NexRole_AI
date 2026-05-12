import React, { useEffect, useState } from 'react'
import { AdminLayout } from '@/components/layout/AdminLayout'
import { api } from '@/services/api.client'
import { LoadingSpinner } from '@/components/common/LoadingSpinner'
import { Button } from '@/components/ui/button'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { MoreVertical, Plus, Zap } from 'lucide-react'

interface Job {
  id: string
  title: string
  company: string
  domain: string
  salary: { min: number; max: number }
  status: 'active' | 'closed' | 'draft'
}

export function AdminJobs() {
  const [jobs, setJobs] = useState<Job[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchJobs()
  }, [])

  const fetchJobs = async () => {
    setLoading(true)
    try {
      const { data } = await api.get('/admin/jobs')
      setJobs(data)
    } catch (error) {
      console.error('Failed to fetch jobs:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleSeedJobs = async () => {
    try {
      await api.post('/admin/jobs/seed')
      fetchJobs()
    } catch (error) {
      console.error('Failed to seed jobs:', error)
    }
  }

  if (loading) return <LoadingSpinner fullScreen />

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Jobs</h1>
          <div className="flex gap-2">
            <Button variant="outline" onClick={handleSeedJobs} className="gap-2">
              <Zap className="w-4 h-4" />
              Seed 20 Jobs
            </Button>
            <Button className="gap-2">
              <Plus className="w-4 h-4" />
              New Job
            </Button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Title</TableHead>
                <TableHead>Company</TableHead>
                <TableHead>Domain</TableHead>
                <TableHead>Salary</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {jobs.map(job => (
                <TableRow key={job.id}>
                  <TableCell className="font-medium">{job.title}</TableCell>
                  <TableCell>{job.company}</TableCell>
                  <TableCell>{job.domain}</TableCell>
                  <TableCell>₹{job.salary.min}–{job.salary.max}L</TableCell>
                  <TableCell>
                    <span className={`px-2 py-1 rounded text-xs font-bold ${
                      job.status === 'active' ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' :
                      job.status === 'closed' ? 'bg-gray-100 text-gray-700 dark:bg-gray-900/30 dark:text-gray-400' :
                      'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400'
                    }`}>
                      {job.status}
                    </span>
                  </TableCell>
                  <TableCell>
                    <button className="p-1 hover:bg-slate-100 dark:hover:bg-slate-800 rounded">
                      <MoreVertical className="w-4 h-4" />
                    </button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </AdminLayout>
  )
}

export default AdminJobs
