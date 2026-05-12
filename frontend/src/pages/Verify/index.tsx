import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Check, X } from 'lucide-react'
import { LoadingSpinner } from '@/components/common/LoadingSpinner'
import { api } from '@/services/api.client'
import { motion } from 'framer-motion'

interface Certificate {
  id: string
  learnerName: string
  domainName: string
  issuedDate: string
  verificationCode: string
}

export function VerifyPage() {
  const { code } = useParams<{ code: string }>()
  const [certificate, setCertificate] = useState<Certificate | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const verifyCertificate = async () => {
      try {
        const { data } = await api.get(`/certificates/verify/${code}`)
        setCertificate(data)
      } catch (err: any) {
        setError(err.response?.data?.message || 'Certificate not found')
      } finally {
        setLoading(false)
      }
    }

    if (code) verifyCertificate()
  }, [code])

  if (loading) return <LoadingSpinner fullScreen />

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-blue-950 px-6">
      <div className="mb-12">
        <div className="w-12 h-12 rounded-lg bg-blue-600 flex items-center justify-center mx-auto">
          <span className="text-white font-bold text-xl">NR</span>
        </div>
      </div>

      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl w-full"
      >
        {error ? (
          <div className="bg-white dark:bg-slate-900 rounded-2xl border-2 border-red-200 dark:border-red-900 p-12 text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="w-20 h-20 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center mx-auto mb-6"
            >
              <X className="w-10 h-10 text-red-600" />
            </motion.div>
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">Certificate Not Found</h1>
            <p className="text-slate-600 dark:text-slate-400">{error}</p>
          </div>
        ) : certificate ? (
          <div className="bg-white dark:bg-slate-900 rounded-2xl border-2 border-green-200 dark:border-green-900/50 p-12 text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="w-20 h-20 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mx-auto mb-6"
            >
              <Check className="w-10 h-10 text-green-600" />
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="text-2xl font-bold text-green-600 dark:text-green-400 mb-8"
            >
              ✓ CERTIFICATE VERIFIED
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="space-y-8"
            >
              <div>
                <p className="text-5xl font-bold text-slate-900 dark:text-white mb-2">
                  {certificate.learnerName}
                </p>
              </div>

              <div className="space-y-4 border-t border-b border-slate-200 dark:border-slate-800 py-6">
                <div>
                  <p className="text-sm text-slate-600 dark:text-slate-400 font-medium mb-1">Domain</p>
                  <p className="text-xl font-semibold text-slate-900 dark:text-white">{certificate.domainName}</p>
                </div>
                <div>
                  <p className="text-sm text-slate-600 dark:text-slate-400 font-medium mb-1">Issued Date</p>
                  <p className="text-lg text-slate-900 dark:text-white">
                    {new Date(certificate.issuedDate).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </p>
                </div>
              </div>

              <div className="bg-slate-50 dark:bg-slate-800 rounded-lg p-4">
                <p className="text-xs text-slate-600 dark:text-slate-400 font-medium mb-2">Verification Code</p>
                <p className="text-sm font-mono text-slate-900 dark:text-white break-all">{certificate.verificationCode}</p>
              </div>
            </motion.div>
          </div>
        ) : null}
      </motion.div>
    </div>
  )
}

export default VerifyPage
