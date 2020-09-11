// 计算各个位数不同的数字个数
// https://leetcode-cn.com/problems/count-numbers-with-unique-digits/


/**
 * @param {number} n
 * @return {number}
 */
var countNumbersWithUniqueDigits = function (n) {
  if (!n) return 1
  let num = Math.pow(10, n)
  let count = 0
  for (let i = 0; i < num; i++) {
    let el = i + ''
    if (el.length < 2) continue
    else {
      let arr = el.split('').filter((item, index, arr) => arr.indexOf(item) === index)
      count = arr.length === 1 ? ++count : count
    }
  }
  return num - count
}

const num = 3
console.log(countNumbersWithUniqueDigits(num))


/**
 * @param {number} n
 * @return {number}
 */
var countNumbersWithUniqueDigits = function (n) {
  if (n === 0) {
    return 1;
  }
  if (n === 1) {
    return 10;
  }
  let pre = 9, next, s = 10;
  for (let i = 1; i < n; i++) {
    next = pre * (10 - i);
    s += next;
    pre = next;
  }
  return s;
};


/**
 * @param {number} n
 * @return {number}
 */
var countNumbersWithUniqueDigits = function (n) {
  let sum = 0, lastNum = 1;
  let sameNum = function (m) {
    for (let i = n; i > 0; i--) {
      let theSum = 9;
      for (let j = 0; j < i - 1; j++) {
        theSum *= (9 - j);
      }
      lastNum += theSum;
    }
    return lastNum;
  }
  if (n >= 10) {
    sum = sameNum(10);
  } else {
    sum = sameNum(n);
  }
  return sum;
};
