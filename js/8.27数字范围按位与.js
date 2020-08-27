// 数字范围按位与
// https://leetcode-cn.com/problems/bitwise-and-of-numbers-range/


/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var rangeBitwiseAnd = function(m, n) {
  let res = m;
  if(n >> 1 > m) return 0;
  for(let i = m; i <= n; i++) {
    if(!res) return 0;
    res &= i;
  }
  return res
};
