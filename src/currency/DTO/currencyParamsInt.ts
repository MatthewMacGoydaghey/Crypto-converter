export interface CurrencyParams {
  from: string,
  to: string,
  amount: number
}


export interface CryptoCurrencyPrices {
  data: [
    {
      key: string
      price: number
    }
  ]
}