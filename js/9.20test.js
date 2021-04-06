// const n = readline()
// while(n > 0) {
//   let line = readline().split(' ')
//   let char = line.pop()
//   switch (char) {
//     case '+' :
//       console.log((parseInt(line[0]) + parseInt(line[1]))%1000000007)
//       break
//     case '-' :
//       console.log((parseInt(line[0]) - parseInt(line[1]))%1000000007)
//       break
//     case '*' :
//       console.log((parseInt(line[0]) * parseInt(line[1]))%1000000007)
//       break
//     case '^' :
//       let a = parseInt(line[0])
//       let b = parseInt(line[1])
//       console.log(Math.pow(a, b)%1000000007)
//       break
//   }
// }
// let res = 1n
// for (let i = 0; i < 1000000000; i++) {
//   res = res << 1n
// }
// console.log(Number(res % 1000000007n))


// const str = readline()

function look(str) {
  // if (str.split('').filter((item, index, arr) => arr.indexOf(item) === index).length === str.length) return str
  for (let i = 1; i < str.length; i++) {
    let word = str.slice(0, i)
    let arr = str.split(word).filter((item, index, arr) => arr.indexOf(item) === index)
    if (arr.length === 1 && !arr[0]) return word
  }
  return str
}

console.log(look('abababab'))
