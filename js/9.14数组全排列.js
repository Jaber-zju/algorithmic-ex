// 数组的全排列

function permute(arr) {
  let res = [], usedNums = []

  function main(arr) {
    let num = 0
    for (let i = 0; i < arr.length; i++) {
      num = arr.splice(i, 1)[0]
      usedNums.push(num)
      if (arr.length === 0) {
        res.push(usedNums.slice())
      }

      main(arr)
      // 再i位置添加num
      arr.splice(i, 0, num)
      usedNums.pop()
    }
    return res
  }

  return main(arr)
}

const arr = [2, 5, 7, 1]
console.log(permute(arr))
