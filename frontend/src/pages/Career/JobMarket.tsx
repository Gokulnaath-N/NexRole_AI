import React, { useState, useEffect } from 'react'
import { api } from '@/services/api.client'
import { LoadingSpinner } from '@/components/common/LoadingSpinner'
import { NoJobs } from '@/components/empty-states/NoJobs'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Slider } from '@/components/ui/slider'
import { Button } from '@/components/ui/button'
import { DOMAINS } from '@/utils/constants'

interface Job {
  id: string
  title: string
  company: string
  domain: string
  salary: { min: number; max: number }
  location: string
  skills: string[]
}

const LOCATIONS = ['Bengaluru', 'Delhi', 'Mumbai', 'Hyderabad', 'Pune', 'Remote']

export function JobMarket() {
  const [jobs, setJobs] = useState<Job[]>([])
  const [loading, setLoading] = useState(false)
  const [filters, setFilters] = useState({
    domain: '',
    location: '',
    salaryRange: [10, 100]
  })
  const [page, setPage] = useState(1)
  const [hasMore, setHasMore] = useState(false)

  useEffect(() => {
    fetchJobs()
  }, [filters, page])

  const fetchJobs = async () => {
    setLoading(true)
    try {
      const { data } = await api.get('/jobs', {
        params: {
          domain: filters.domain || undefined,
          location: filters.location || undefined,
          minSalary: filters.salaryRange[0] * 100000,
          maxSalary: filters.salaryRange[1] * 100000,
          page
        }
      })
      if (page === 1) {
        setJobs(data.jobs)
      } else {
        setJobs(prev => [...prev, ...data.jobs])
      }
      setHasMore(data.hasMore)
    } catch (error) {
      console.error('Failed to fetch jobs:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleClearFilters = () => {
    setFilters({ domain: '', location: '', salaryRange: [10, 100] })
    setPage(1)
  }

  if (jobs.length === 0 && !loading) {
    return <NoJobs onClearFilters={handleClearFilters} />
  }

  return (
    <div className="space-y-6">
      {/* Filters */}
      <div className="flex flex-col md:flex-row gap-4">
        <Select value={filters.domain} onValueChange={(val) => { setFilters({ ...filters, domain: val }); setPage(1) }}>
          <SelectTrigger className="w-full md:w-48">
            <SelectValue placeholder="All Domains" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="">All Domains</SelectItem>
            {DOMAINS.map(d => (
              <SelectItem key={d.slug} value={d.slug}>{d.name}</SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select value={filters.location} onValueChange={(val) => { setFilters({ ...filters, location: val }); setPage(1) }}>
          <SelectTrigger className="w-full md:w-48">
            <SelectValue placeholder="All Locations" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="">All Locations</SelectItem>
            {LOCATIONS.map(l => (
              <SelectItem key={l} value={l}>{l}</SelectItem>
            ))}
          </SelectContent>
        </Select>

        <div className="flex-1 flex items-center gap-4">
          <span className="text-sm font-medium whitespace-nowrap">₹{filters.salaryRange[0]}L–₹{filters.salaryRange[1]}L</span>
          <Slider
            value={filters.salaryRange}
            onValueChange={(val) => { setFilters({ ...filters, salaryRange: val as [number, number] }); setPage(1) }}
            min={10}
            max={100}
            step={5}
            className="flex-1"
          />
        </div>

        <Button variant="outline" onClick={handleClearFilters}>Clear</Button>
      </div>

      {/* Job Count */}
      <div className="text-sm font-medium text-slate-600 dark:text-slate-400">
        Showing {jobs.length} jobs
      </div>

      {/* Jobs Grid */}
      <div className="grid gap-4">
        {jobs.map(job => (
          <div key={job.id} className="p-6 border rounded-lg hover:border-blue-600 transition-colors cursor-pointer">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">{job.title}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">{job.company} • {job.location}</p>
              </div>
              <span className="text-lg font-bold text-slate-900 dark:text-white">₹{job.salary.min}–{job.salary.max}L</span>
            </div>
            <div className="flex gap-2 flex-wrap">
              {job.skills.slice(0, 3).map(s => (
                <span key={s} className="px-2 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-xs font-medium">
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Load More */}
      {loading && <LoadingSpinner />}
      {hasMore && !loading && (
        <Button onClick={() => setPage(p => p + 1)} variant="outline" className="w-full">
          Load More
        </Button>
      )}
    </div>
  )
}
