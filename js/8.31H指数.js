// H 指数
// https://leetcode-cn.com/problems/h-index/


/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function (citations) {
  citations = citations.sort((a, b) => a - b)
  let maxH = 0
  for (let i = 0; i < citations.length; i++) {
    let temp = 0
    if (citations[i] <= citations.length - i) {
      temp = citations[i]
    } else {
      temp = citations.length - i
    }
    if (maxH < temp) maxH = temp
  }
  return maxH
}

const citations = [3, 0, 6, 1, 5]
console.log(hIndex(citations))
