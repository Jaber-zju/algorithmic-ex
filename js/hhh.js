// function fn(arr) {
//
//   let s1 = arr.pop() + ''
//   let special = parseInt(arr.pop())
//
//   let specialStr = ''
//   for (let i = 0; i < s1.length; i++) {
//     if(parseInt(s1[i]) < special) {
//       specialStr += s1[i]
//     }
//   }
//
//   let specialArr = {}
//   for (let i = 0; i < arr.length; i++) {
//     let str = arr[i]
//     let litter = ''
//     for (let j = 0; j < str.length; j++) {
//       if(parseInt(str[j]) < special) {
//         litter += str[j]
//       }
//     }
//     specialArr[str] = litter
//   }
//
//   let nums = Object.keys(specialArr)
//   for (let i = 0; i < nums.length; i++) {
//     let key = nums[i]
//     if (specialArr[key].indexOf(specialStr) !== -1) {
//       console.log(key)
//     }
//   }
// }
//
// const arr = ['135682318','23457','14282123','14231728','3','1724153']
// fn(arr)

// I need book.;I need book 2.
// let arr = ['I need book.', 'I need book 2.']
// // let arr = arrm.split(';')
// let test = arr[0].split(' ')
// let answer = arr[1].split(' ')
//
// let piancha = 0
// let total = 0
//
// let str1 = test[test.length-1].match(/[.,!?]+/)
// let str2 = answer[answer.length-1].match(/[.,!?]+/)
//
// if (str2[0].includes('.') || str2.includes('!') || str2.includes('?') || str2.includes(',')) {
//   total = answer.length+1
// } else {
//   total = answer.length
// }
// // debugger
// console.log(answer)
// for (let i = 0; i < answer.length; i++) {
//   let word = answer[i].match(/^[a-zA-Z]+/)
//   console.log(word[0])
//   if (!test.includes(word)) {
//     piancha++
//   }
// }

// function fn(num) {
//   let reg = /^\d{2}$/
//   return reg.test(num)
// }
// console.log(fn(1))


const a = new Promise((resolve, reject) => {
  console.log(1)
  resolve(3)
})
setTimeout(() => {
  console.log(4)
})
setTimeout(() => {
  a.then(value => {
    console.log(0)
  })
})
console.log(2)



