// 9.14字符串的全排列

function permute(str) {
  let res = [], usedChars = []
  let arr = str.split('')

  function main(arr) {
    let char = ''
    for (let i = 0; i < arr.length; i++) {
      char = arr.splice(i, 1)[0]
      usedChars.push(char)
      if (arr.length === 0) {
        res.push(usedChars.slice())
      }

      main(arr)
      arr.splice(i, 0, char)
      usedChars.pop()
    }
    return res
  }

  main(arr)
  res.forEach((item, index, arr) => arr[index] = item.join(''))
  return res

}

const str = 'word'
console.log(permute(str))

const arr1 = [ 'w', 'o', 'r', 'd' ]
console.log(arr1.join(''))
