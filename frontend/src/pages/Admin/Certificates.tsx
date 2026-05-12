import React, { useEffect, useState } from 'react'
import { AdminLayout } from '@/components/layout/AdminLayout'
import { api } from '@/services/api.client'
import { LoadingSpinner } from '@/components/common/LoadingSpinner'
import { Button } from '@/components/ui/button'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { ExternalLink, MoreVertical } from 'lucide-react'

interface Certificate {
  id: string
  learnerName: string
  domain: string
  issuedDate: string
  verificationCode: string
}

export function AdminCertificates() {
  const [certificates, setCertificates] = useState<Certificate[]>([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)

  useEffect(() => {
    fetchCertificates()
  }, [page])

  const fetchCertificates = async () => {
    setLoading(true)
    try {
      const { data } = await api.get('/admin/certificates', {
        params: { page, limit: 20 }
      })
      setCertificates(data.certificates)
    } catch (error) {
      console.error('Failed to fetch certificates:', error)
    } finally {
      setLoading(false)
    }
  }

  if (loading) return <LoadingSpinner fullScreen />

  return (
    <AdminLayout>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Certificates</h1>

        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Learner</TableHead>
                <TableHead>Domain</TableHead>
                <TableHead>Issued Date</TableHead>
                <TableHead>Verification Code</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {certificates.map(cert => (
                <TableRow key={cert.id}>
                  <TableCell className="font-medium">{cert.learnerName}</TableCell>
                  <TableCell>{cert.domain}</TableCell>
                  <TableCell>{new Date(cert.issuedDate).toLocaleDateString()}</TableCell>
                  <TableCell className="font-mono text-sm">{cert.verificationCode.slice(0, 8)}...</TableCell>
                  <TableCell>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => window.open(`/verify/${cert.verificationCode}`, '_blank')}
                      className="gap-2"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Verify
                    </Button>
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

export default AdminCertificates
