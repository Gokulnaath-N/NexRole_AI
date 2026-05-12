import { useState, useEffect, useRef } from 'react'

interface CountUpProps {
  target: number
  duration?: number
  prefix?: string
  suffix?: string
  start?: boolean
}

export function CountUp({ 
  target, duration = 1500, prefix = '', suffix = '', start = true 
}: CountUpProps) {
  const [count, setCount] = useState(0)
  const rafRef = useRef<number>()

  useEffect(() => {
    if (!start) return
    let startTime: number
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * target))
      if (progress < 1) rafRef.current = requestAnimationFrame(step)
    }
    rafRef.current = requestAnimationFrame(step)
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current) }
  }, [target, duration, start])

  return <span>{prefix}{count.toLocaleString()}{suffix}</span>
}