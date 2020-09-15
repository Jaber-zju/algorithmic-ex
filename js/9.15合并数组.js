// 合并数组

function hebing(arr1, arr2) {
  if (!arr1.length) return arr2
  else if (!arr2.length) return arr1
  else {
    let res = []
    let fir = 0, sec = 0
    while(true) {
      let num1 = arr1[fir], num2 = arr2[sec]
      if (fir < arr1.length && sec < arr2.length) {
        if (num1 < num2 && !res.includes(num1)) {
          res.push(num1)
          fir++
        } else if (num1 > num2 && !res.includes(num2)) {
          res.push(num2)
          sec++
        } else if (num1 === num2 && !res.includes(num1)) {
          res.push(num1)
          fir++
          sec++
        } else {
          fir++
          sec++
        }
      } else if (fir >= arr1.length && sec < arr2.length) {
        if (!res.includes(num2)) {
          res.push(num2)
          sec++
        }
      } else if (fir < arr1.length && sec >= arr2.length) {
        if (!res.includes(num1)) {
          res.push(num1)
          fir++
        }
      } else {
        return res
      }
    }
  }
}

const arr1 = [1, 2, 3, 5, 8, 11, 45, 65,]
const arr2 = [4, 9, 10, 11, 13, 35, 56, 99]
console.log(hebing(arr1, arr2))
