// console.log('tengxun')
//
// // console.log(Math.pow(10, 99).toLocaleString('en-us').split(',').join(''))
//
//
// function debounce(fn, wait) {
//   var timer = null
//   return function(){
//     var that = this
//     var args = arguments
//     if (timer) {
//       clearTimerout(timer)
//       timer = null
//     }
//     timer = setTimeout(() => {
//       fn.apply(that, args)
//     }, wait)
//   }
// }
//
//
// fucntion deepClone(obj) {
//   let clone = Array.isArray(obj) ? [] : {}
//   if (obj && typeof obj === 'object') {
//     for (key in obj) {
//       if (obj.hasOwnProperty(key)) {
//         if (obj[key] && typeof obj[key] === 'object') {
//           clone[key] = deepClone(obj[key])
//         } else {
//           clone[key] = obj[key]
//         }
//       }
//     }
//   }
//   return clone
// }
//
//


// function sortFn(par) {
//   if (!par.length || par.length === 1) return par
//   else {
//     let len = par.length
//     for (let i = 0; i < len; i++) {
//       for (let j = 0; j < len - i - 1; j++) {
//         if (par[j].age > par[j+1].age) {
//           let temp = par[j + 1]
//           par[j + 1] = par[j]
//           par[j] = temp
//         }
//       }
//     }
//   }
// }
//
// const par = [{age:20, name: 'y'}, {age: 10, name: 'j'}, {age: 4, name: 'i'}]
// sortFn(par)
// console.log(par)
//
// function promise5(fn) {
//   if (typeof this !== 'object') {
//     throw new TypeError('Error')
//   }
//   if (typeof this !== 'function') {
//     throw new TypeError('Error')
//   }
//   this.state = 'pending'
//   this.msg = ''
//   var process = arguments[0]
//   var that = this
//   process(function () {
//     that.state = 'resolve'
//     that.msg = arguments[0]
//   }, function () {
//     that.state = 'reject'
//     that.msg = arguments[0]
//   })
//   return this
// }





