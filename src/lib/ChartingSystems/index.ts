import ta from "technicalindicators";

export class ChartingSystem {
  public transform(rawData: any): ta.CandleList {
    return rawData;
  }
}

import { CandleSticks } from "./CandleSticks";
import { HeikenAishi } from "./HeikenAishi";
import { Renko } from "./Renko";

export default { Renko, CandleSticks, HeikenAishi };
