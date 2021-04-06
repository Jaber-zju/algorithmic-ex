// let arr1 = read_line().split(' ')
// let total = parseInt(arr1[0])
// let day = parseInt(arr1[1])
//
// let arr2 = read_line().split(' ')
//
// for (let i = 0; i < arr2.length; i++) {
//   let water = parseInt(arr2[i])
//   total += water
//   total = total - Math.ceil(total / 2)
// }
// let count = 0
// while (day > 0) {
//   let water = parseInt(arr2[count])
//   total += water
//   total = total - Math.ceil(total / 2)
//   count++
//   day--
// }
//
// print(total)
//
//
// let flag = true
// while ((line = read_line()) != '') {
//   if (flag) {
//     let row = parseInt(line)
//   } else {
//     let arr = read_line().split(' ')
//     arr.forEach(item => parseInt(item))
//     let arrFil = arr.filter((item, index, arr) => arr.indexOf(item) === index)
//     if (arrFil.length === 1 && arrFil[0] === -1) {
//       print(1)
//     }
//
//   }
//
// }
//
//

// let s = 'MMATATSATMMT'
//
// function code(n, s) {
//   if (n <= 4) {
//     return ''
//   }
//   let head = false
//   let tail = false
//
//   let arr1 = s.split('T')
//   for (let i = 0; i < arr1.length; i++) {
//     if (arr1[i].includes('M')) {
//       s = arr1.slice(i+1).join('T')
//       head = true
//       break
//     }
//   }
//
//   if (head) {
//     let arr2 = s.split('M')
//     for (let i = arr2.length-1; i > 0; i--) {
//       if (arr2[i].includes('T')) {
//         s = arr2.slice(0, i).join('M')
//         tail = true
//         break
//       }
//     }
//   }
//
//   if (head && tail) {
//     return s
//   } else {
//     return ''
//   }
// }
//
// console.log(code(5, s))

// 手动实现parseInt()
// let ZERO_CODE = 48
// let NINE_CODE = 57
// let parse = function (str) {
//   let ret = 0
//   for(let i = 0; i < str.length; i++) {
//     let asc = str[i].charCodeAt(0)
//     let value = asc - ZERO_CODE
//     ret = ret + value * Math.pow(10, str.length - i - 1)
//   }
//   return ret
// }
//
// console.log(parse('256'))

// var F = function(){}
// Object.prototype.a = function(){}
// Function.prototype.b = function(){}
// var f = new F()
//
// console.log(f.a)
// console.log(f.b)
// console.log(F.a)
// console.log(F.b)


// function foo() {
//   console.log(this.a)
// }
// function doFoo() {
//   foo()
// }
// var obj = {
//   a: 1,
//   doFoo: doFoo
// }
// var a = 2
// obj.doFoo()   // undefined


// 非递归方式实现二叉树的中序遍历
// function midOrder(root) {
//   if (!root) return null
//   else {
//     let arr = []
//     let res = []
//     let p = root
//     while (p || arr.length !== 0) {
//       if (p) {
//         arr.push(p)
//         p = p.left
//       } else {
//         let node = arr.pop()
//         res.push(node)
//         p = node.right
//       }
//     }
//     return res
//   }
// }

// reduce实现数组里面各个对象元素的特定属性值相加
// const obj = [{a: 5, b: 1}, {a: 2, b: 2}, {a: 3, b: 3}, {a: 5, b: 3}]
// const res = obj.reduce((prev, cur) => {
//   let sum = (prev.a ? prev.a : prev) + cur.a
//   return sum
// }, 0)
// console.log(res)


// const arr = [{a: 1}, {b: 1}, [{c: 1}, [{d: 1}, [{e: 1}]]]]
//
// console.log(arr.flat(3))
//
//
// var obj = {a: 1, b: 2};
// console.log({...obj}) // TypeError: Cannot spread non-iterable object


// var a
// var b
// (function () {
//   console.log(a)
//   console.log(b)
//   var a = b = 3
//   console.log(a)
//   console.log(b)
// })()
// console.log(a)
// console.log(b)


// new Promise((resolve, reject) => {
//   console.log(1)
//   setTimeout(() => {
//     console.log(5)
//   }, 0)
//   resolve(3)
//   Promise.resolve.then(() => console.log(4))
// }).then((value) => {
//   console.log(value)
// })
// console.log(2)

// let a = 10
//
// const obj = {
//   a: 20,
//   say: () => {
//     console.log(this.a)
//   }
// }
// const obj2 = {a: 30}
//
// obj.say()   // undefined
// obj.say.call(obj2)  // undefined

// say: function () {
//   console.log(this.a)
// }

function child() {
}

function parent() {
}

child.prototype.__proto__ = parent.prototype
child.prototype = new parent()


// var arrayLike = {
//   haha: '2rr',
//   hehe: 'enen',
//   length: 3,
//   push : Array.prototype.push
// }
// arrayLike.push(34, 'yjb');
// console.log(arrayLike);		// {3:34, haha:'2rr',...,length:4 ...}


// promise.all()实现
// function myPromiseAll(all) {
//   return new Promise((resolve, reject) => {
//     let finish = 0
//     let result = new Array(all.length)
//     if (!all.length) {
//       return resolve(result)
//     } else {
//       for (let i=0; i < all.length; i++) {
//         let promise = all[i]
//         promise.then(value => {
//           result.push(value)
//           finish++
//           if (finish === all.length) {
//             return resolve(result)
//           }
//         }, err => {
//           return reject(err)
//         })
//       }
//     }
//   })
// }


// const start = Date.now()
// for(var i = 0; i < 3; i++) {
//   setTimeout(function() {
//     console.log(i, Date.now() - start);
//   }, 1000);
// }


// const arr5 = [1, 1, 1, 1, 1, 2, 2, 2, 4, 4, 7, 8, 8, 12]
//
// function quchong(arr) {
//   for (let i = 0; i < arr.length - 1;) {
//     let temp = i
//     if (arr[i] === arr[i + 1]) {
//       arr.splice(i + 1, 1)
//       i = temp
//     } else {
//       i = temp + 1
//     }
//   }
//   return arr
// }
//
//
// console.log(quchong(arr5))
// console.log(arr5.length)


// if({}) console.log(1)
// if({}.length)console.log(2)
// if({}==={}) console.log(3)

// if ([]) console.log(1)
// if ([].length) console.log(2)
// if ([] == []) console.log(3)

// for (var i = 1;i <= 5;i ++) {
//   setTimeout(function timer() {
//     console.log(i)
//   }, 5000)
// }


// 实现每隔1秒，两秒，3秒输出1，2，3
// let count = 0
// for (var i = 1; i <= 10; i++) {
//   (function (i) {
//     setTimeout(() => {
//       count++
//       if (count === 1) console.log(1)
//       if (count === 3) console.log(2)
//       if (count === 6) console.log(3)
//     }, i * 1000)
//   })(i)
// }

// var m = 1, j = k = 0;
//
// function add(n) {
//   return n = n + 1;
// }
//
// y = add(m);
//
// function add(n) {
//   return n = n + 3;
// }
//
// z = add(m);
//
// console.log(y, z)
//
//
// function Foo() {
//   'use strict'
//   console.log(this.location);
// }
//
// Foo()


// var arr = [{a: 1}, {}]
// arr.map(function (item, idx) {
//   item.b = idx
// })
// console.log(arr)

// let i = 0;
// new Array(10).map(() => {
//   i++;
// });
//
// console.log(i)


// (function () {
//   var x = foo()
//   var foo = function foo() {
//     return "foobar"
//   }
//   return x
// })()


// console.log(1);
// new Promise((resolve, reject) => {
//   console.log(6)
//   resolve()
// }).then(() => {
//   console.log(7)
// })
// let a = setTimeout(() => {
//   console.log(2)
// }, 0);
// console.log(3);
// Promise.resolve(4).then(b => {
//   console.log(b);
//   clearTimeout(a);
// });
// console.log(5);


let d = Date.now()
console.log(new Date(d))
