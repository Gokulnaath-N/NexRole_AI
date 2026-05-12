import { formatDistanceToNow, format } from 'date-fns'

export const formatDate = (date: string | Date) =>
  format(new Date(date), 'MMM dd, yyyy')

export const formatTimeAgo = (date: string | Date) =>
  formatDistanceToNow(new Date(date), { addSuffix: true })

export const formatDateTime = (date: string | Date) =>
  format(new Date(date), 'MMM dd, yyyy HH:mm')

export const isToday = (date: string | Date) => {
  const d = new Date(date)
  const now = new Date()
  return d.toDateString() === now.toDateString()
}

export const isYesterday = (date: string | Date) => {
  const d = new Date(date)
  const yesterday = new Date()
  yesterday.setDate(yesterday.getDate() - 1)
  return d.toDateString() === yesterday.toDateString()
}
