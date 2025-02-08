import variance from './variance'

export default function standarddev(returns: number[]): number {
  return Math.sqrt(variance(returns))
}
