import React, { useEffect, useState } from 'react'
import { AdminLayout } from '@/components/layout/AdminLayout'
import { useNavigate } from 'react-router-dom'
import { api } from '@/services/api.client'
import { LoadingSpinner } from '@/components/common/LoadingSpinner'
import { Button } from '@/components/ui/button'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { MoreVertical, Plus } from 'lucide-react'
import { DOMAINS } from '@/utils/constants'

interface Module {
  id: string
  title: string
  domainId: string
  order: number
  duration: number
  difficulty: string
}

export function AdminModules() {
  const navigate = useNavigate()
  const [modules, setModules] = useState<Module[]>([])
  const [loading, setLoading] = useState(true)
  const [domainId, setDomainId] = useState('')

  useEffect(() => {
    fetchModules()
  }, [domainId])

  const fetchModules = async () => {
    setLoading(true)
    try {
      const { data } = await api.get('/admin/modules', {
        params: domainId ? { domainId } : {}
      })
      setModules(data)
    } catch (error) {
      console.error('Failed to fetch modules:', error)
    } finally {
      setLoading(false)
    }
  }

  if (loading) return <LoadingSpinner fullScreen />

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Modules</h1>
          <Button onClick={() => navigate('/admin/modules/new')} className="gap-2">
            <Plus className="w-4 h-4" />
            New Module
          </Button>
        </div>

        <Select value={domainId} onValueChange={setDomainId}>
          <SelectTrigger className="w-64">
            <SelectValue placeholder="Filter by domain..." />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="">All Domains</SelectItem>
            {DOMAINS.map(d => (
              <SelectItem key={d.slug} value={d.slug}>{d.name}</SelectItem>
            ))}
          </SelectContent>
        </Select>

        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Title</TableHead>
                <TableHead>Domain</TableHead>
                <TableHead>Order</TableHead>
                <TableHead>Duration</TableHead>
                <TableHead>Difficulty</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {modules.map(module => (
                <TableRow key={module.id}>
                  <TableCell className="font-medium">{module.title}</TableCell>
                  <TableCell>{module.domainId}</TableCell>
                  <TableCell>{module.order}</TableCell>
                  <TableCell>{module.duration} mins</TableCell>
                  <TableCell>{module.difficulty}</TableCell>
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

export default AdminModules
