// 买卖股票的最佳时机：最多可以买入卖出两次，即完成两次交易
// https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-iii/
var maxProfit = function (prices) {
  //第一次 买入， 卖出的利润
  let profit_1_in = -prices[0], profit_1_out = 0;
  //继第一次之后，第二次买入卖出的利润
  let profit_2_in = -prices[0], profit_2_out = 0;
  let n = prices.length;
  for (let i = 1; i < n; i++) {
    profit_2_out = Math.max(profit_2_out, profit_2_in + prices[i]);
    //第二次买入后的利润， 第一次卖出的利润 - prices[i]
    profit_2_in = Math.max(profit_2_in, profit_1_out - prices[i]);
    profit_1_out = Math.max(profit_1_out, profit_1_in + prices[i]);
    //第一次买入后，利润为 -prices[i]
    profit_1_in = Math.max(profit_1_in, -prices[i]);
  }
  return profit_2_out;
};


// 最佳买卖股票时机含有冷冻期
// https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/
var maxProfit = function (prices) {
  let n = prices.length;
  let profit_in = 0 - prices[0];
  let profit_out = 0;
  //冻结时的利润
  let profit_freeze = 0;
  for (let i = 1; i < n; i++) {
    let temp = profit_out;
    profit_out = Math.max(profit_out, profit_in + prices[i]);
    //买入时的利润= 上次冻结时的利润 - 当天价格
    profit_in = Math.max(profit_in, profit_freeze - prices[i]);
    //冻结时的利润 = 上次卖出时的利润
    profit_freeze = temp;
  }
  return profit_out;
};


// 买卖股票的最佳时机含手续费
// https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-with-transaction-fee/
var maxProfit = function (prices, fee) {
  //初始利润
  var profit_in = 0 - prices[0];
  var profit_out = 0;
  for (let i = 1; i < prices.length; i++) {
    ////卖出： 当前买入状态时的利润 + 卖出的股票 - 手续费
    profit_out = Math.max(profit_out, profit_in + prices[i] - fee);
    //买入： 当前卖出时的利润 - 买进的股票
    profit_in = Math.max(profit_in, profit_out - prices[i]);
  }
  return profit_out;
};


// 买卖股票的最佳时机 IV：限定交易次数
var maxProfit = function (k, prices) {
  let n = prices.length;
  if (k > n / 2) {
    k = Math.floor(n / 2);  //这样也可以，但其实增加了时间复杂度和内存消耗
    // return maxProfit_k_infinity(prices); //也可以
  }
  let profit = new Array(k);
  //初始化买入卖出时的利润
  for (let j = 0; j <= k; j++) {
    profit[j] = {
      profit_in: -prices[0],
      profit_out: 0
    };
  }
  for (let i = 0; i < n; i++) {
    for (let j = 1; j <= k; j++) {
      profit[j] = {
        profit_out: Math.max(profit[j].profit_out, profit[j].profit_in + prices[i]),
        profit_in: Math.max(profit[j].profit_in, profit[j - 1].profit_out - prices[i])
      }
    }
  }
  return profit[k].profit_out;
};
