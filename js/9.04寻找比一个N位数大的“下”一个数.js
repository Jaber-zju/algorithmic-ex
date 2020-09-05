// 寻找比一个N位数大的“下”一个数
// 思路：先把数字变成字符串，从右往左开始找，找到第一个比前一位大的数，以此为界
// 这个数之前的为一部分，转成数组left；这个数以及之后的是另一部分，并把它变成数组right并反转顺序；
// 取出left的最后一位，遍历right数组，找到第一个比它大的数，并交换二者顺序
// 拼接left和right并转成数字输出
function lookNextNum(num) {
  let str = num + ''
  const len = str.length
  let left = [], right = [], res = [], mid = 0
  for (let i = len-1; i > 0; i--) {
    if (str[i-1] < str[i]) {
      left = str.substring(0, i).split('')
      right = str.substring(i).split('').reverse()
      mid = i-1
      break
    }
  }

  for (let i = 0; i < right.length; i++) {
    if (parseInt(right[i]) > parseInt(left[mid])) {
      let temp = left[mid]
      left[mid] = right[i]
      right[i] = temp
      break
    }
  }

  res = left.concat(right)
  return +res.join('')
}

let num = 83557761
console.log(lookNextNum(num))

