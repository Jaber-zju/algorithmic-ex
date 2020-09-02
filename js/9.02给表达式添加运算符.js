// 给表达式添加运算符
// https://leetcode-cn.com/problems/expression-add-operators/


/**
 * @param {string} num
 * @param {number} target
 * @return {string[]}
 */
var addOperators = function (num, target) {
  let res = [], ans = [];
  const backTrack = (num0, val, pre, k) => {
    if (num0.length < 1) {
      if (val === target) {
        ans.push(res.slice(0, k).join(''))
      }
      return
    }
    for (let i = 0; i < num0.length; i++) {
      if (k === 0) {
        res[k] = (num0.slice(0, i + 1))
        backTrack(num0.slice(i + 1), Number(res[k]), Number(res[k]), k + 1)
      } else {
        res[k] = ('+')
        res[k + 1] = num0.slice(0, i + 1)
        backTrack(num0.slice(i + 1), val + Number(res[k + 1]), Number(res[k + 1]), k + 2)
        res[k] = ('-')
        res[k + 1] = num0.slice(0, i + 1)
        backTrack(num0.slice(i + 1), val - Number(res[k + 1]), -Number(res[k + 1]), k + 2)
        res[k] = ('*')
        res[k + 1] = num0.slice(0, i + 1)
        backTrack(num0.slice(i + 1), val - pre + pre * Number(res[k + 1]), pre * Number(res[k + 1]), k + 2)
      }
      if (num0[0] === '0') break
    }
  };
  backTrack(num, 0, 0, 0)
  return ans
}
