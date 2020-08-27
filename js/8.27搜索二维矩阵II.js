// 8.27搜索二维矩阵II
// https://leetcode-cn.com/problems/search-a-2d-matrix-ii/


/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
  if (!matrix.length) return false

  for (let i = 0; i < matrix.length; i++) {
    let row = matrix[i]
    if (target < row[0]) return false
    else {
      if (row.includes(target)) return true
      else continue
    }
  }

  return false
}

const matrix = [[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]]
console.log(searchMatrix(matrix, 20))
