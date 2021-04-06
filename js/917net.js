function myFlat(arr, num = 1) {
  for (let i = 0; i < arr.length; i++) {
    arr = [].concat(...arr)
  }
  return arr
}

const arr = [1, [2, 3, [4, 5, [7, 8, [9]]]]]
// console.log(myFlat(arr))


// 斐波那契数列实现：后往前递归，思路简单，但计算速度慢
const fibo = (n) => {
  if (n === 1) return 1
  else if (n === 2) return 1
  else {
    return fibo(n - 1) + fibo(n - 2)
  }
}

// console.log(fibo(50))

// 斐波那契数列实现：前往后累加，思路简单，计算速度快
function fibo2(n) {
  if (n === 1) return 1
  else if (n === 2) return 1
  else {
    let head = 1, end = 1
    let res = 0
    for (let i = 3; i <= n; i++) {
      res = head + end
      head = end
      end = res
    }
    return res
  }
}

// console.log(fibo2(10))


// 给定一个数，判断其是否存在于斐波那契数列中
function fibo3(num) {
  if (num === 1) return true
  else {
    let head = 1, end = 1
    let res = 0
    for (let i = 3; i <= num; i++) {
      res = head + end
      head = end
      end = res
      if (res === num) return true
      else if (res > num) return false
    }
    return true
  }
}

// console.log(fibo3(12586269025))

// 利用正则将下划线命名转换成驼峰命名
let s1 = 'get_element_by_id'
s1 = s1.replace(/_(\w)/g, x => x.slice(1).toUpperCase())
console.log(s1)



