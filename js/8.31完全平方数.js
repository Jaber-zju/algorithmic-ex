// 完全平方数
// https://leetcode-cn.com/problems/perfect-squares/


/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function (n) {
  let sqr = ~~Math.sqrt(n)
  let neighbor = []
  let queue = [0]
  let visited = new Set(queue)
  for (let i = 1; i <= sqr; i++) {
    neighbor.push(i * i)
  }
  let count = 0
  while (queue.length) {
    for (let i = queue.length - 1; i >= 0; i--) {
      let cur = queue.shift()
      if (cur > n) {
        continue
      }
      if (cur === n) {
        return count
      }
      for (let v of neighbor) {
        let ret = cur + v
        if (!visited.has(ret)) {
          queue.push(cur + v)
          visited.add(cur + v)
        }
      }
    }
    count++
  }
  return count
}
