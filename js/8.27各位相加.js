// 各位相加
// https://leetcode-cn.com/problems/add-digits/


/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
  // debugger
  num = num + ''
  if (num.leng === 0) return num
  else {
    while (num) {
      let sum = 0
      for (let i = 0; i < num.length; i++) {
        sum += Number(num[i])
      }
      if (sum < 10) return sum
      else num = sum + ''
    }
    return null
  }
}

const num = 38
console.log(addDigits(num))
