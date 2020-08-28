// 丑数
// https://leetcode-cn.com/problems/ugly-number/


/**
 * @param {number} num
 * @return {boolean}
 */
var isUgly = function(num) {
  // 排除负数
  if (num < 1) return false
  // 为除数减少乘法运算
  const divisorMap = [1,2,3,6,5,10,15,30]
  while(num > 1) {
    let pos = 0
    if (num % 2 === 0) {
      pos++
    }
    if (num % 5 === 0) {
      pos = pos + 4
    }
    if (num % 3 === 0) {
      pos = pos + 2
    }
    if (pos > 0) {
      num = num / divisorMap[pos]
    } else {
      return false
    }
  }
  return true

}

console.log(isUgly(21))
