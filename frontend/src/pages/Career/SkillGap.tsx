import React, { useState } from 'react'
import { api } from '@/services/api.client'
import { Button } from '@/components/ui/button'
import { FileDropzone } from '@/components/common/FileDropzone'
import { LoadingSpinner } from '@/components/common/LoadingSpinner'
import { useAuthStore } from '@/store'

interface SkillGapResult {
  matchedSkills: string[]
  missingSkills: string[]
  matchPercentage: number
}

export function SkillGap() {
  const { user } = useAuthStore()
  const [resume, setResume] = useState<File | null>(null)
  const [jobDescription, setJobDescription] = useState('')
  const [useProfileSkills, setUseProfileSkills] = useState(false)
  const [result, setResult] = useState<SkillGapResult | null>(null)
  const [loading, setLoading] = useState(false)

  const handleAnalyze = async () => {
    if (!jobDescription) return

    setLoading(true)
    try {
      const formData = new FormData()
      if (resume) formData.append('resume', resume)
      if (useProfileSkills) formData.append('useProfileSkills', 'true')
      formData.append('jobDescription', jobDescription)

      const { data } = await api.post('/ai/skill-gap', formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      })
      setResult(data)
    } catch (error) {
      console.error('Failed to analyze skill gap:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="grid lg:grid-cols-2 gap-8">
      {/* Left: Input */}
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">Your Resume</h3>
          <div className="space-y-3">
            <FileDropzone
              onFileAccepted={setResume}
              file={resume}
              onClear={() => setResume(null)}
              accept={{ 'application/pdf': ['.pdf'], 'application/msword': ['.doc', '.docx'] }}
            />
            <Button
              variant="outline"
              className="w-full"
              onClick={() => setUseProfileSkills(!useProfileSkills)}
            >
              {useProfileSkills ? '✓ ' : ''}Use Profile Skills
            </Button>
          </div>
        </div>

        <div>
          <label className="block text-sm font-bold text-slate-900 dark:text-white mb-3">
            Paste Job Description
          </label>
          <textarea
            value={jobDescription}
            onChange={(e) => setJobDescription(e.target.value)}
            placeholder="Paste the job description here..."
            className="w-full h-48 p-4 border rounded-lg focus:outline-none focus:border-blue-600"
          />
        </div>

        <Button onClick={handleAnalyze} disabled={!jobDescription || loading} className="w-full">
          {loading ? 'Analyzing...' : 'Analyze My Gap →'}
        </Button>
      </div>

      {/* Right: Results */}
      <div>
        {loading && <LoadingSpinner />}
        {result && (
          <div className="space-y-6">
            <div className="text-center">
              <div className="text-5xl font-bold text-blue-600 mb-2">{result.matchPercentage}%</div>
              <p className="text-slate-600 dark:text-slate-400">Match Score</p>
            </div>

            <div>
              <h4 className="font-bold text-slate-900 dark:text-white mb-3">Matched Skills</h4>
              <div className="flex flex-wrap gap-2">
                {result.matchedSkills.map(skill => (
                  <span key={skill} className="px-3 py-1 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-bold text-slate-900 dark:text-white mb-3">Missing Skills</h4>
              <div className="flex flex-wrap gap-2">
                {result.missingSkills.map(skill => (
                  <span key={skill} className="px-3 py-1 rounded-full bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
