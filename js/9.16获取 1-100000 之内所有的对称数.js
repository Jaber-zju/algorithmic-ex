// 获取 1-100000 之内所有的对称数

// 方法一：遍历，判断每个数首尾两边的数是否一致，若一致，则把这个数推进数组
function isSymNum(start, end) {
  let res = []
  start = start <= 11 ? 11 : start
  for (let i = start; i <= end; i++) {
    let str = i.toString()
    let len = str.length
    let iHalf = Math.floor(len / 2)
    let flag = true
    for (let j = 0; j <= iHalf; j++) {
      if (str[j] !== str[len - 1 - j]) {
        flag = false
        break
      }
    }
    flag && res.push(i)
  }
  return res
}

// console.log(isSymNum(0, 100))


// 方法二：根据对称数的特性，反转过来还是一样的，判断是否是回文数
function isSymNum2(start, end) {
  let res = []
  start = start <= 11 ? 11 : start
  for (let i = start; i <= end; i++) {
    let str1 = i + ''
    let str2 = str1.split('').reverse().join('')
    if (str1 === str2) res.push(i)
  }
  return res
}

console.log(isSymNum2(0, 100))
