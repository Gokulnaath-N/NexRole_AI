import { XP_REWARDS } from './constants'

export const calculateQuizXP = (score: number, total: number): number => {
  const pct = score / total
  if (pct === 1) return XP_REWARDS.QUIZ_PERFECT
  if (pct >= 0.75) return XP_REWARDS.QUIZ_PASS
  return 0
}

export const calculateStreakBonus = (streak: number): number => {
  if (streak === 30) return XP_REWARDS.STREAK_30_DAYS
  if (streak === 7) return XP_REWARDS.STREAK_7_DAYS
  return 0
}