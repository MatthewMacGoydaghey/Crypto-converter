import Big from "big.js"

export function count(fromPrice: number, toPrice: number, amount: number = 1) {
  let x1 = new Big(fromPrice)
  const result = x1.div(toPrice).times(amount).valueOf()
  return result
}