import { useState, useEffect } from 'react'

export function TypingEffect({ 
  texts, speed = 80, pause = 2000 
}: { 
  texts: string[]; speed?: number; pause?: number 
}) {
  const [displayed, setDisplayed] = useState('')
  const [textIdx, setTextIdx] = useState(0)
  const [charIdx, setCharIdx] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = texts[textIdx]
    const timeout = setTimeout(() => {
      if (!deleting) {
        setDisplayed(current.slice(0, charIdx + 1))
        if (charIdx === current.length - 1) {
          setTimeout(() => setDeleting(true), pause)
        } else {
          setCharIdx(c => c + 1)
        }
      } else {
        setDisplayed(current.slice(0, charIdx - 1))
        if (charIdx === 0) {
          setDeleting(false)
          setTextIdx(i => (i + 1) % texts.length)
        } else {
          setCharIdx(c => c - 1)
        }
      }
    }, deleting ? speed / 2 : speed)
    return () => clearTimeout(timeout)
  }, [charIdx, deleting, textIdx, texts, speed, pause])

  return (
    <span>
      {displayed}
      <span className="animate-pulse">|</span>
    </span>
  )
}