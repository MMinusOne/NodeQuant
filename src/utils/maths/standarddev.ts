import { calcVariance } from './variance'

export function calcStddev(returns: number[]): number {
  return Math.sqrt(calcVariance(returns))
}
