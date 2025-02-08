export default function covariance(returns: number[], marketReturn: number) { 
    const meanReturn = returns.reduce((sum, r) => sum + r, 0) / returns.length;
    return returns.reduce((cov, r) => cov + (r - meanReturn) * (marketReturn - meanReturn), 0) / returns.length;
}