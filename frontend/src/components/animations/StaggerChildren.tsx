import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface StaggerChildrenProps {
  children: ReactNode
  staggerDelay?: number
  className?: string
}

const containerVariants = (staggerDelay: number) => ({
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: staggerDelay }
  }
})

export const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } }
}

export function StaggerChildren({
  children, staggerDelay = 0.07, className
}: StaggerChildrenProps) {
  return (
    <motion.div
      variants={containerVariants(staggerDelay)}
      initial="hidden"
      animate="show"
      className={className}
    >
      {children}
    </motion.div>
  )
}