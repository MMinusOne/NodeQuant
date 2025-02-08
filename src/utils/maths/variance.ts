export default function variance(returns: number[]): number {
  const meanReturn = returns.reduce((sum, r) => sum + r, 0) / returns.length
  return (
    returns.reduce((varSum, r) => varSum + Math.pow(r - meanReturn, 2), 0) /
    returns.length
  )
}
