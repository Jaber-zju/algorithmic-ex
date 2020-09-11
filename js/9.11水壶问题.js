// 水壶问题
// https://leetcode-cn.com/problems/water-and-jug-problem/


var canMeasureWater = function (x, y, z) {
  if (x + y < z) return false;
  if (x === 0 || y === 0) return z === 0 || x + y === z
  let gcd = 0, i = 0
  while (i < x || i < y) {
    i++
    if (x % i === 0 && y % i === 0) gcd = i
  }
  return z % gcd === 0
};
