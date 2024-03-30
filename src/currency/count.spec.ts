import { count } from "./count"
import Big from "big.js"

const mockCountFunc = (fromPrice: number, toPrice: number, amount: number = 1) => {
  let x1 = new Big(fromPrice)
  const expectedResult = x1.div(toPrice).times(amount).valueOf()
  return expectedResult
}

describe('Should return correct convertion result with', () => {

  test('not specified amount of coins', () => {
    const fromPrice = 69946.30946381869
    const toPrice = 3499.854240011455
    const expectedResult = mockCountFunc(fromPrice, toPrice)
    expect(count(fromPrice, toPrice)).toEqual(expectedResult)
  }) 
  
  test('specified amount of coins', () => {
    const fromPrice = 69946.30946381869
    const toPrice = 69814.3117920648
    const amount = 3
    const expectedResult = mockCountFunc(fromPrice, toPrice, amount)
    expect(count(fromPrice, toPrice, amount)).toEqual(expectedResult)
  }) 

  test('decimal amount of coins', () => {
    const fromPrice = 69946.30946381869
    const toPrice = 69814.3117920648
    const amount = 2.6
    const expectedResult = mockCountFunc(fromPrice, toPrice, amount)
    expect(count(fromPrice, toPrice, amount)).toEqual(expectedResult)
  }) 

  test('very small currency price', () => {
    const fromPrice = 69946.30946381869
    const toPrice = 0.000001116948
    const expectedResult = mockCountFunc(fromPrice, toPrice)
    expect(count(fromPrice, toPrice)).toEqual(expectedResult)
  }) 
})
