// 计数质数

// 题目链接：https://leetcode-cn.com/problems/count-primes/

/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function (n) {
  let count = 0
  let signs = []
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
