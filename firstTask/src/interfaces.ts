export interface Coins {
  ETH: number,
  TRON: number,
  MATIC: number
}

export interface CoinsStatistic {
  requestedCoin: string
  index: number
  adjacent: boolean 
}