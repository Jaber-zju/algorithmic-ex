// console.log('beike')

// function bubbleSort(arr) {
//   const len = arr.length
//   for (let i = 0; i < len; i++) {
//     for (let j = 0; j < len - i - 1; j++) {
//       if (arr[j] > arr[j + 1]) {
//         let temp = arr[j + 1]
//         arr[j + 1] = arr[j]
//         arr[j] = temp
//       }
//     }
//   }
// }

function sort(str) {
  let letters = []
  let nums = []
  let res = ''
  for (let i = 0; i < str.length; i++) {
    if (Number(str[i])) nums.push(Number(str[i]))
    else letters.push(str[i])
  }

  res = letters.sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0)).join('') + nums.sort((a, b) => a - b).join('')
  return res
}
console.log(sort('cab3d21'))
