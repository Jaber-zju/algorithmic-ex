// 有效的完全平方数
// https://leetcode-cn.com/problems/valid-perfect-square/


/**
 * @param {number} num
 * @return {boolean}
 */
// 暴力破解法
let isPerfectSquare = function (num) {
  if (!num || num === 1) return true
  else if (num === 2 || num === 3) return false
  for (let i = 1; i <= Math.floor(num / 2); i++) {
    if (i * i === num) return true
  }
  return false
};


/**
 * @param {number} num
 * @return {boolean}
 */
// 二分法，设置两个指针
let isPerfectSquare = function (num) {
  let low = 0;
  let high = num;
  let tmpSquare = 0;
  while (low <= high) {
    let mid = (low + high) >> 1;
    tmpSquare = mid * mid;
    if (tmpSquare > num) {
      high = mid - 1;
    } else if (tmpSquare < num) {
      low = mid + 1;
    } else {
      return true;
    }
  }
  return false;
};
