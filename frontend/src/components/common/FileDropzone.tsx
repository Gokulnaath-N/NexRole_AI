import { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import { Upload, FileText, X } from 'lucide-react'
import { cn } from '@/lib/utils'

interface FileDropzoneProps {
  onFileAccepted: (file: File) => void
  accept?: Record<string, string[]>
  maxSize?: number
  label?: string
  file?: File | null
  onClear?: () => void
  status?: 'idle' | 'loading' | 'success' | 'error'
}

export function FileDropzone({
  onFileAccepted, accept = { 'application/pdf': ['.pdf'] },
  maxSize = 5 * 1024 * 1024, label = 'Drop PDF here or click to browse',
  file, onClear, status = 'idle'
}: FileDropzoneProps) {
  const onDrop = useCallback((files: File[]) => {
    if (files[0]) onFileAccepted(files[0])
  }, [onFileAccepted])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop, accept, maxSize, multiple: false
  })

  return (
    <div
      {...getRootProps()}
      className={cn(
        'border-2 border-dashed rounded-xl p-8 text-center cursor-pointer transition-all',
        isDragActive ? 'border-blue-500 bg-blue-50 dark:bg-blue-950/20' : 'border-slate-200 dark:border-slate-700',
        status === 'success' && 'border-green-500 bg-green-50 dark:bg-green-950/20',
        status === 'error' && 'border-red-500 bg-red-50 dark:bg-red-950/20'
      )}
    >
      <input {...getInputProps()} />
      {file ? (
        <div className="flex items-center justify-center gap-3">
          <FileText className="h-8 w-8 text-blue-600" />
          <div className="text-left">
            <p className="font-medium text-sm">{file.name}</p>
            <p className="text-xs text-slate-500">
              {(file.size / 1024).toFixed(0)}KB
            </p>
          </div>
          {onClear && (
            <button
              onClick={e => { e.stopPropagation(); onClear() }}
              className="ml-2 p-1 hover:text-red-500 transition-colors"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>
      ) : (
        <div className="space-y-2">
          <Upload className="h-10 w-10 text-slate-400 mx-auto" />
          <p className="text-sm text-slate-600 dark:text-slate-400">{label}</p>
          <p className="text-xs text-slate-400">Max {maxSize / 1024 / 1024}MB</p>
        </div>
      )}
    </div>
  )
}
