import { Injectable, NotFoundException } from '@nestjs/common';
import { CryptoCurrencyPrices, CurrencyParams } from './DTO/currencyParamsInt';
import { count } from './count';


@Injectable()
export class CurrencyService {

  async convertCurrency(currencyParams: CurrencyParams) {
    const {from, to, amount} = currencyParams
    const {fromPrice, toPrice} = await this.getPrices(from, to)
    const result = count(fromPrice, toPrice, amount)
    return result
  }


  private async getPrices(from: string, to: string = 'tether') {
    let fetchResult = await fetch('https://tstapi.cryptorank.io/v0/coins/prices/', {
      method: 'GET'
    })
    let { data } = await fetchResult.json() as CryptoCurrencyPrices
    let currentFromCurrency = data.filter((obj) => obj.key == from)[0]
    if (!currentFromCurrency) {
      throw new NotFoundException({message: `Currency ${from} not found` })
    }
    let currentToCurrency = data.filter((obj) => obj.key == to)[0]
      if (!currentToCurrency) {
        throw new NotFoundException({message: `Currency ${to} not found` })
      }
      let prices = {
      fromPrice: currentFromCurrency.price,
      toPrice: currentToCurrency.price
    }
    return prices
  }
} 
