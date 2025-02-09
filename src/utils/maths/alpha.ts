/**
 * Alpha = R – Rf – beta (Rm-Rf)
  R represents the portfolio return.
  Rf represents the risk-free rate of return. Beta represents the systematic risk of a portfolio.
  Rm represents the market return, per a benchmark.
 */

export function calcAlpha(r: number, rf: number = 0, beta: number, rm: number) {
  return r - rf - beta * (rm - rf)
}
