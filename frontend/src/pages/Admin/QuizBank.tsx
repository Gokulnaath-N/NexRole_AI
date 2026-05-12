import React, { useEffect, useState } from 'react'
import { AdminLayout } from '@/components/layout/AdminLayout'
import { api } from '@/services/api.client'
import { LoadingSpinner } from '@/components/common/LoadingSpinner'
import { Button } from '@/components/ui/button'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { MoreVertical, Plus } from 'lucide-react'
import { DOMAINS } from '@/utils/constants'

interface QuizQuestion {
  id: string
  question: string
  moduleId: string
  difficulty: string
  type: string
}

export function AdminQuizBank() {
  const [questions, setQuestions] = useState<QuizQuestion[]>([])
  const [loading, setLoading] = useState(true)
  const [domain, setDomain] = useState('')
  const [module, setModule] = useState('')

  useEffect(() => {
    fetchQuestions()
  }, [domain, module])

  const fetchQuestions = async () => {
    setLoading(true)
    try {
      const { data } = await api.get('/admin/quiz', {
        params: {
          domainId: domain || undefined,
          moduleId: module || undefined
        }
      })
      setQuestions(data)
    } catch (error) {
      console.error('Failed to fetch questions:', error)
    } finally {
      setLoading(false)
    }
  }

  if (loading) return <LoadingSpinner fullScreen />

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Quiz Bank</h1>
          <Button className="gap-2">
            <Plus className="w-4 h-4" />
            Add Question
          </Button>
        </div>

        <div className="flex gap-4">
          <Select value={domain} onValueChange={setDomain}>
            <SelectTrigger className="w-64">
              <SelectValue placeholder="Select domain..." />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="">All Domains</SelectItem>
              {DOMAINS.map(d => (
                <SelectItem key={d.slug} value={d.slug}>{d.name}</SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select value={module} onValueChange={setModule}>
            <SelectTrigger className="w-64">
              <SelectValue placeholder="Select module..." />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="">All Modules</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Question</TableHead>
                <TableHead>Module</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Difficulty</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {questions.map(q => (
                <TableRow key={q.id}>
                  <TableCell className="font-medium">{q.question}</TableCell>
                  <TableCell>{q.moduleId}</TableCell>
                  <TableCell>{q.type}</TableCell>
                  <TableCell>{q.difficulty}</TableCell>
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

export default AdminQuizBank
