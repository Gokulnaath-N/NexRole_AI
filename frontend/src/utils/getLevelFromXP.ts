import { LEVELS } from './constants'

export interface LevelInfo {
  level: number
  name: string
  minXP: number
  nextLevelXP: number
  progress: number
}

export function getLevelFromXP(xp: number): LevelInfo {
  let currentLevel = LEVELS[0]
  for (const lvl of LEVELS) {
    if (xp >= lvl.minXP) currentLevel = lvl
    else break
  }
  const idx = LEVELS.indexOf(currentLevel)
  const nextLevel = LEVELS[idx + 1]
  const nextLevelXP = nextLevel?.minXP ?? currentLevel.minXP
  const progress = nextLevel
    ? Math.round(((xp - currentLevel.minXP) / (nextLevelXP - currentLevel.minXP)) * 100)
    : 100
  return { ...currentLevel, nextLevelXP, progress }
}
