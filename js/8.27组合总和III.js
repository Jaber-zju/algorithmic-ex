// 组合总和III
// https://leetcode-cn.com/problems/combination-sum-iii/


/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
// 递归方法
var combinationSum3 = function (k, n) {
  let result = []
  helper(1, n, [])
  return result

  function helper(start, total, array) {
    if (total === 0 && array.length === k) {
      result.push(array)
      return
    }
    for (let i = start; i < 10; i++) {
      array.push(i)
      const a = [].concat(array)
      helper(i + 1, total - i, a)
      array.pop()
    }
  }
}


const k = 3, n = 9
console.log(combinationSum3(k, n))
