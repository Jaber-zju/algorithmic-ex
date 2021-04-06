function add(n) {
  if (n !== 0) {
    let res = []
    for (let a = 1; a < 9; a++) {
      for (let b = 0; b < 9; b++) {
        for (let c = 0; c < 9; c++) {
          if (a !== b && a !== c && b !== c) {
            let num1 = a * 100 + b * 10 + c
            let num2 = a * 100 + c * 10 + c
            if (num1 + num2 === n) {
              res.push([num1, num2])
            }
          }
        }
      }
    }
    return res
  }
}

// console.log(add(1068))


let arr = [1, 2, 3, 4, 5, [6, 7, 8, [9, 10, 11, 12, [13, 14, 15, 16]]]]
console.log(arr.join())   // 输出为：1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16
let newArr = arr.join().split(',')
console.log(newArr)

if ([] == false) {console.log(1);};  // 1
if ({} == false ) {console.log(2);};  //
if ([]) {console.log(3);};  // 3
if ([1] == [1]) {console.log(4);};  //


// async function async1() {
//   console.log('async1 start');
//   await async2();
//   console.log('async1 end');
// }
//
// async function async2() {
//   console.log('async2');
// }
//
// console.log('script start');
//
// setTimeout(function () {
//   console.log('setTimeout');
// }, 0);
//
// async1()
//
// new Promise(function (resolve) {
//   console.log('promise1');
//   resolve();
// }).then(function () {
//   console.log('promise2');
// });
// console.log('script end');


var a = function () { this.b = 3; }
var c = new a();
a.prototype.b = 9;
var b = 7;
a();
console.log(b);
console.log(c.b);

console.log([1]==[1])
console.log([1]===[1])
console.log(0.1+0.2==0.3)


function foo() {
  console.log(this.a);
}
const obj = {
  a: 1,
  foo,
}
obj.foo(); // 1
const bar = obj.foo
bar(); // undefined
