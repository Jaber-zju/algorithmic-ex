// 丑数 II
// https://leetcode-cn.com/problems/ugly-number-ii/


/**
 * @param {number} n
 * @return {number}
 */
var cacheArray = (function () {
  const maxNth = 1690
  const cacheArray = new Set()
  const sortList = [1]
  while (cacheArray.size < maxNth) {
    const item = sortList.shift()
    if (cacheArray.has(item)) continue
    cacheArray.add(item)
    sortList.push(item * 2)
    sortList.push(item * 3)
    sortList.push(item * 5)
    sortList.sort((a, b) => {
      return a - b
    })
  }
  return Array.from(cacheArray)
})()


var nthUglyNumber = function (n) {
  return cacheArray[n - 1]
}
