let num = 1000 + ''
let s1 = +num.split('').reverse().filter(item => Number(item) !== 0).join('')
console.log(typeof s1)
let left = res.slice(0, a-1)
let right = res.slice(a-1)

res = left.concat(b, right)

res = res.filter((item, index) => index !== a-1)


let n = parseInt(read_line())


let res = []

while (n > 0) {
  let arr = read_line().split(' ')
  let op = parseInt(arr[0])
  if (op === 1) {
    let a = parseInt(arr[1])
    let b = parseInt(arr[2])
    if (a >= res.length) {
      res[a-1] = b
    } else {
      let temp = []
      for (let i = 0; i < res.length; i++) {
        if (i === a-1) {
          temp.push(b)
          temp.push(res[i])
        } else {
          temp.push(res[i])
        }
      }
      res = JSON.parse(JSON.stringify(temp))
    }
  } else if (op === 2) {
    let a = parseInt(arr[1])
    let temp2 = []
    for (let i = 0; i < res.length; i++) {
      if (i === a-1) continue
      else {
        temp2.push(res[i])
      }
    }
    res = JSON.parse(JSON.stringify(temp2))
  } else if (op === 3) {
    for (let i = 0; i < res.length; i++) {
      print(Number(res[i]))
    }
  }
  n--
}
