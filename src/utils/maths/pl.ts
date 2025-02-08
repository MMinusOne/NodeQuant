import { PositionType } from 'dist'

export default function calcPL(
  currentClose: number,
  openPrice: number,
  positionType: PositionType,
): number {
  return positionType === PositionType.LONG
    ? 100 * ((currentClose - openPrice) / openPrice)
    : 100 * ((openPrice - currentClose) / openPrice)
}
