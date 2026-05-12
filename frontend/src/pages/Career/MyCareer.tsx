import React, { useState } from 'react'
import { useAuthStore } from '@/store'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Download } from 'lucide-react'

const COMPANY_TYPES = ['Startup', 'Scale-up', 'Enterprise', 'FAANG', 'Pre-seed']
const LEVELS = ['Junior', 'Mid', 'Senior', 'Staff', 'Principal']

export function MyCareer() {
  const { user } = useAuthStore()
  const [targetRole, setTargetRole] = useState(user?.targetRole || '')
  const [companyType, setCompanyType] = useState(user?.targetCompany || '')
  const [level, setLevel] = useState(user?.currentLevel || '')

  return (
    <div className="space-y-8">
      {/* Career Snapshot */}
      <div className="p-6 border rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-900/10">
        <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-6">Career Target</h3>
        
        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <div>
            <label className="text-sm font-medium text-slate-600 dark:text-slate-400 mb-2 block">
              Target Role
            </label>
            <Input
              value={targetRole}
              onChange={(e) => setTargetRole(e.target.value)}
              placeholder="e.g., GenAI Engineer"
            />
          </div>
          <div>
            <label className="text-sm font-medium text-slate-600 dark:text-slate-400 mb-2 block">
              Company Type
            </label>
            <Select value={companyType} onValueChange={setCompanyType}>
              <SelectTrigger>
                <SelectValue placeholder="Select company type" />
              </SelectTrigger>
              <SelectContent>
                {COMPANY_TYPES.map(ct => (
                  <SelectItem key={ct} value={ct}>{ct}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="text-sm font-medium text-slate-600 dark:text-slate-400 mb-2 block">
              Current Level
            </label>
            <Select value={level} onValueChange={setLevel}>
              <SelectTrigger>
                <SelectValue placeholder="Select level" />
              </SelectTrigger>
              <SelectContent>
                {LEVELS.map(l => (
                  <SelectItem key={l} value={l}>{l}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="flex items-end">
            <div className="w-full p-4 bg-blue-600 text-white rounded-lg font-bold text-center">
              Job-ready in 12 weeks ⏱️
            </div>
          </div>
        </div>
      </div>

      {/* Skills */}
      <div>
        <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">Your Skills</h3>
        <div className="flex flex-wrap gap-2">
          {user?.skills?.map(skill => (
            <span key={skill} className="px-3 py-1 rounded-full bg-slate-200 dark:bg-slate-700 text-slate-900 dark:text-white text-sm font-medium">
              {skill}
            </span>
          )) || (
            <p className="text-slate-600 dark:text-slate-400">No skills added yet</p>
          )}
        </div>
      </div>

      {/* Learning Progress */}
      <div>
        <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">Learning Progress</h3>
        <div className="space-y-4">
          {user?.enrolledDomains?.map((domain: any) => (
            <div key={domain.id}>
              <div className="flex justify-between mb-2">
                <span className="font-medium text-slate-900 dark:text-white">{domain.name}</span>
                <span className="text-sm text-slate-600 dark:text-slate-400">{domain.progress}%</span>
              </div>
              <div className="h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                <div
                  className="h-full bg-blue-600 rounded-full"
                  style={{ width: `${domain.progress}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Resume Export */}
      <div className="p-6 border rounded-xl">
        <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">Export Resume</h3>
        <Button className="gap-2">
          <Download className="w-4 h-4" />
          Download Resume
        </Button>
      </div>
    </div>
  )
}
