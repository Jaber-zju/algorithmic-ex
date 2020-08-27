// 天际线问题
// https://leetcode-cn.com/problems/the-skyline-problem/


/**
 * @param {number[][]} buildings
 * @return {number[][]}
 */
// 归并排序
var getSkyline = function (buildings) {
  let len = buildings.length
  let mid = Math.floor(len / 2)
  let output = []

  // 没有建筑物，天际线返回[]
  if (len === 0) return output

  // 只有一个建筑物时，返回这个建筑物的天际线
  if (len === 1) {
    let xStrat = buildings[0][0]
    let xEnd = buildings[0][1]
    let y = buildings[0][2]
    output.push([xStrat, y])
    output.push([xEnd, 0])
    return output
  }

  // 有多个建筑物时，递归查找左边的天际线，右边的天际线，然后再合并
  let leftSkyline = getSkyline(buildings.slice(0, mid))
  let rightSkyline = getSkyline(buildings.slice(mid))

  return mergeSkylines(leftSkyline, rightSkyline)
}

// 将左右的天际线进行合并
function mergeSkylines(leftSkyline, rightSkyline) {
  let lLen = leftSkyline.length, rLen = rightSkyline.length
  let pL = 0, pR = 0
  let currY = 0, leftY = 0, rightY = 0
  let x, maxY
  let output = []

  while ((pL < lLen) && (pR < rLen)) {
    let pointL = leftSkyline[pL]
    let pointR = rightSkyline[pR]
    if (pointL[0] < pointR[0]) {
      x = pointL[0]
      leftY = pointL[1]
      pL++
    } else {
      x = pointR[0]
      rightY = pointR[1]
      pR++
    }

    maxY = Math.max(leftY, rightY)
    if (currY !== maxY) {
      updateOutput(output, x, maxY)
      currY = maxY
    }
  }

  appendSkyline(output, leftSkyline, pL, lLen, currY);
  appendSkyline(output, rightSkyline, pR, rLen, currY);
  return output
}

function updateOutput(output, x, y) {
  if (output.length === 0 || output[output.length - 1][0] !== x) {
    output.push([x, y])
  } else {
    output[output.length - 1][1] = y
  }
}

function appendSkyline(output, skyline, p, n, currY) {
  while (p < n) {
    let point = skyline[p]
    let x = point[0]
    let y = point[1]
    p++
    if (currY !== y) {
      updateOutput(output, x, y)
      currY = y
    }
  }
}
