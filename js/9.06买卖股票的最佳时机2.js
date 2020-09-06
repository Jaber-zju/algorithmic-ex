// 买卖股票的最佳时机：允许多次买入卖出，求取最大利益

// 只要后一天比前一天价格高就行，贪心算法
var maxProfit = function (prices) {
  let sum = 0
  for (let i = 1; i < prices.length; i++) {
    sum += Math.max(prices[i] - prices[i - 1], 0)
  }
  return sum
}
