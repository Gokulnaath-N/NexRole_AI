import React, { useEffect, useState } from 'react'
import { AdminLayout } from '@/components/layout/AdminLayout'
import { api } from '@/services/api.client'
import { LoadingSpinner } from '@/components/common/LoadingSpinner'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { MoreVertical } from 'lucide-react'

interface User {
  id: string
  email: string
  name: string
  level: number
  xp: number
  streak: number
  enrolledDomains: number
  joinedAt: string
  status: 'active' | 'inactive' | 'banned'
}

export function AdminUsers() {
  const [users, setUsers] = useState<User[]>([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')
  const [page, setPage] = useState(1)

  useEffect(() => {
    fetchUsers()
  }, [page, search])

  const fetchUsers = async () => {
    setLoading(true)
    try {
      const { data } = await api.get('/admin/users', {
        params: { page, search, limit: 20 }
      })
      setUsers(data.users)
    } catch (error) {
      console.error('Failed to fetch users:', error)
    } finally {
      setLoading(false)
    }
  }

  if (loading) return <LoadingSpinner fullScreen />

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Users</h1>
        </div>

        <Input
          placeholder="Search by name or email..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="max-w-sm"
        />

        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Level</TableHead>
                <TableHead>XP</TableHead>
                <TableHead>Streak</TableHead>
                <TableHead>Enrolled</TableHead>
                <TableHead>Joined</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {users.map(user => (
                <TableRow key={user.id}>
                  <TableCell>
                    <div>
                      <p className="font-medium">{user.name}</p>
                      <p className="text-xs text-slate-500">{user.email}</p>
                    </div>
                  </TableCell>
                  <TableCell>{user.level}</TableCell>
                  <TableCell>{user.xp.toLocaleString()}</TableCell>
                  <TableCell>{user.streak} days</TableCell>
                  <TableCell>{user.enrolledDomains}</TableCell>
                  <TableCell>{new Date(user.joinedAt).toLocaleDateString()}</TableCell>
                  <TableCell>
                    <span className={`px-2 py-1 rounded text-xs font-bold ${
                      user.status === 'active' ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' :
                      user.status === 'inactive' ? 'bg-gray-100 text-gray-700 dark:bg-gray-900/30 dark:text-gray-400' :
                      'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400'
                    }`}>
                      {user.status}
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

export default AdminUsers
