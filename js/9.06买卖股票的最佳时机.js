// 买卖股票的最佳时机

/**
 * @param {number[]} prices
 * @return {number}
 */
/**
 * @param {number[]} prices
 * @return {number}
 */
// 双指针，当前面的数比后面那个数大时，两个指针都向后移动一位；当前面的数小于后面的数时，
  // 判断这两个数的差是不是最大，若最大则赋给max，后面指针再往后移动一位，直到移出去为止
var maxProfit = function (prices) {
  let i = 0, j = 1, max = 0;
  let len = prices.length;
  while (j < len) {
    if (prices[i] > prices[j]) {
      i = j;
      j = i + 1;
    } else {
      (max <= (prices[j] - prices[i])) && (max = prices[j] - prices[i]);
      j++;
    }
  }

  return max;
};


const prices = [7, 1, 5, 3, 6, 4]
console.log(maxProfit(prices))
