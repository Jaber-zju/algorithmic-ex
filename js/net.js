// 第一题：樱桃
let arr1 = readline()
let m = parseInt(arr1[0])
let n = parseInt(arr1[1])

let obj = {}

while (line = readline()) {
  var lines = line.split(" ");
  var father = parseInt(lines[0]);
  var position = lines[1]
  var child = parseInt(lines[2]);
  let temp = child + ''
  let arr = []
  arr.push(temp)
  if (obj[father + '']) obj[father + ''].push(temp)
  else {
    obj[father] = arr
  }
}

let nodes = Object.keys(obj)
let res = 0
for (let i = 0; i < nodes.length; i++) {
  let key = nodes[i]
  let childs = obj[key]
  if (childs.length === 2) {
    if (!obj[childs[0]] && !obj[childs[1]]) res++
  }
}

console.log(res)


// 第二题：最多的回文
let str = readline()

function fn(str) {
  let len = str.length
  let res = 0
  if (len < 2) return 0
  else if (len === 2) {
    if (str[0] === str[1]) return 1
  } else {
    for (let i = 0; i <= len; i++) {
      for (let j = i + 2; j <= len; j++) {
        let arr = str.slice(i, j).split('')
        let str1 = arr.join('')
        let str2 = arr.reverse().join('')
        if (str1 === str2) res++
      }
    }
    return res
  }
}

console.log(fn(str))


// 第三题：成双成对
let str = readline()
let reg = /^[abcxyz]$/

function fn(str) {
  if (!str) return 0
  else {
    let res = []
    for (let i = 0; i < str.length; i++) {
      let obj = {}
      obj.a = obj.b = obj.c = obj.x = obj.y = obj.z = 0
      if (reg.test(str[i])) {
        obj[str[i]]++
      }
      for (let j = i + 1; j <= str.length; j++) {
        if (reg.test(str[j])) {
          obj[str[j]]++
        }
        if (Object.values(obj).every(item => item % 2 === 0)) {
          res.push(str.slice(i, j + 1))
        }
      }
    }
    if (res.length) return Math.max(...res.map(item => item.length))
    else return str.length
  }
}

console.log(fn(str))


// 第四题：组合幸运数字
function fn(arr) {
  let res = []
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 7 === 0) {
      res.push(arr[i])
      if (i === arr.length - 1) {
        arr = arr.slice(0, i)
      } else if (i === 0) {
        arr = arr.slice(i + 1)
      } else {
        arr = arr.slice(0, i).concat(arr.slice(i + 1))
      }
    }
  }

  for (let i = 0; i <= arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      let num = arr[i] + arr[j]
      if (num % 7 === 0) {
        res.push(arr[i])
        res.push(arr[j])
      }
    }
  }

  let sum1 = 0
  if (!res.length) return 0
  else {
    for (let i = 0; i < res.length; i++) {
      sum1 += res[i]
    }
  }

  return sum1
}

const arr = [7, 1, 3, 4]
console.log(fn(arr))




