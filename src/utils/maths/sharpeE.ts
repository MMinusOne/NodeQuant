/**
 * Sharpe Ratio = E [Rp-Rf] / σp

E = Expected value of

Rp = return on a portfolio

Rf = risk-free rate

σp = standard deviation of the portfolio’s excess return
 */

export default function sharpeE(E: number, rp: number, rf: number = 0, sp: number) {
  return (E * (rp - rf)) / sp;
}
