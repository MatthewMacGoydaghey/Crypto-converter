import { Coins, CoinsStatistic } from "./interfaces"

function distributeCoins(coins: Coins, requests: string[]) {
  const result = requests.concat()
  const requestedCoinsStatistic: CoinsStatistic[] = []

  // Определяет смежность реквеста и собирает индекс каждого элемента
  requests.forEach((request, index) => {
  let adjacent: boolean
  if (request.split('/').length < 2) {
    adjacent = false
  } else {adjacent = true}
    requestedCoinsStatistic.push({
      requestedCoin: request,
      index,
      adjacent
    })
  })

  // Расходует свободные монеты для не-смежных индексов в первую очередь
requestedCoinsStatistic.forEach((obj) => {
  if (obj.adjacent === false) {
    let currentCoin = obj.requestedCoin as keyof Coins
    result.splice(obj.index, 1, obj.requestedCoin)
    coins[currentCoin] += - 1
  }
})

// Расходует монеты для смежных индексов, выбирая из доступных оставшихся
requestedCoinsStatistic.forEach((obj) => {
  if (obj.adjacent === true) {
    let limiter = 0
    let adjacentCoins = obj.requestedCoin.split('/')
    adjacentCoins.forEach((coin) => {
      let currentCoin = coin as keyof Coins
      if (coins[currentCoin] > 0 && limiter === 0) {
        result.splice(obj.index, 1, coin)
        coins[currentCoin] += -1
        limiter++
      }
    })
  }
}) 

// Проверяет хватило ли монет
for (let coin of result) {
  let currentRequest = coin as keyof Coins
  if (coin.split('/').length > 1 || coins[currentRequest] < 0) {
    return null
  }
}

console.log(coins)
return result
}


console.log(distributeCoins({ ETH: 2, TRON: 4, MATIC: 3 }, ['ETH', 'ETH/MATIC', 'ETH', 'TRON', 'ETH/TRON', 'TRON/ETH', 'MATIC', 'MATIC/TRON', 'ETH/MATIC/TRON']))