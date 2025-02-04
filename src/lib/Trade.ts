import { TradeOptions } from "@/types";
import { generateMD5Id } from "@/utils/generateId";

export class Trade { 
    public id: string = generateMD5Id();
    private tradeOptions = {}

    constructor(tradeOptions: TradeOptions) {
      
    }
  
    protected open() {}
    protected add() {}
    protected close() {}
    protected getPnL() {}
    protected getRR() {}
    public getFootprint() {}
}