// 函数柯理化
function keli(add) {
  return function(...args) {
    if (args.length === 0) {
      return add(...args)
    }
    return keli(add.bind(null, ...args))
  }
}

function add(...args) {
  // return args.reduce((prev, cur) => {
  //   return prev + cur
  // })

  return eval( args.join("+") )
}

add = keli(add)

console.log( add(1)() ); //1
console.log( add(1)(2,3)() ); //6
console.log(add(1,2,3)(1)(2)(3)(4,5,6)(7,8)()) // 42
