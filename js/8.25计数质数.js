// 计数质数

// 题目链接：https://leetcode-cn.com/problems/count-primes/

/**
 * @param {number} n
 * @return {number}
 */
// 厄拉多塞筛法
// 每计算一个数，都要把它的倍数去掉。到了n，数一下留下了几个数
var countPrimes = function (n) {
  let count = 0
  let signs = new Array(n + 1)
  for (let i = 2; i < n; i++) {
    if (!signs[i]) {
      count++
      for (let j = 2 * i; j < n; j += i) {
        signs[j] = true
      }
    }
  }
  return count
}

console.log(countPrimes(10))
