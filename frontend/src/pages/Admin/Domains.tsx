import React, { useEffect, useState } from 'react'
import { AdminLayout } from '@/components/layout/AdminLayout'
import { api } from '@/services/api.client'
import { LoadingSpinner } from '@/components/common/LoadingSpinner'
import { Button } from '@/components/ui/button'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { MoreVertical, Plus } from 'lucide-react'

interface Domain {
  id: string
  name: string
  slug: string
  modules: number
  enrollments: number
  published: boolean
}

export function AdminDomains() {
  const [domains, setDomains] = useState<Domain[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchDomains()
  }, [])

  const fetchDomains = async () => {
    setLoading(true)
    try {
      const { data } = await api.get('/domains')
      setDomains(data)
    } catch (error) {
      console.error('Failed to fetch domains:', error)
    } finally {
      setLoading(false)
    }
  }

  if (loading) return <LoadingSpinner fullScreen />

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Domains</h1>
          <Button className="gap-2">
            <Plus className="w-4 h-4" />
            New Domain
          </Button>
        </div>

        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Slug</TableHead>
                <TableHead>Modules</TableHead>
                <TableHead>Enrollments</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {domains.map(domain => (
                <TableRow key={domain.id}>
                  <TableCell className="font-medium">{domain.name}</TableCell>
                  <TableCell className="text-slate-600">{domain.slug}</TableCell>
                  <TableCell>{domain.modules}</TableCell>
                  <TableCell>{domain.enrollments}</TableCell>
                  <TableCell>
                    <span className={`px-2 py-1 rounded text-xs font-bold ${
                      domain.published 
                        ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
                        : 'bg-gray-100 text-gray-700 dark:bg-gray-900/30 dark:text-gray-400'
                    }`}>
                      {domain.published ? 'Published' : 'Draft'}
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

export default AdminDomains
