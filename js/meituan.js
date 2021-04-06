// const count = Number(read_line())
let arr = []
const reg = /^[a-zA-Z]+[0-9]+[0-9a-zA-Z]+$/g

// while ((line = read_line()) !== '') {
//   arr.push(line)
// }
//
// for (let i = 0; i < arr.length; i++) {
//   if (reg.test(arr[i])) print('Accept')
//   else print('Wrong')
// }
const str = '6666'
if (reg.test(str)) console.log('Accept')
else console.log('Wrong')

