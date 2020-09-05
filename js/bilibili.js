// bilibili

// function drink(s, x, y) {
//   let res = []
//   let step = []
//   let minstep = Math.pow(2, 31)
//   for (let i = 0; i < s.length; i++) {
//     let sum = 0
//     let count = 0
//     for (let j = i; j < s.length; j++) {
//       if (s[j] <= y) {
//         sum += s[j]
//       } else {
//         sum += y
//       }
//       count = j - i
//       if (sum >= x) {
//         if (minstep >= count) {
//           minstep = count
//           res.push(i)
//           // step.push(count)
//         }
//         break
//       }
//     }
//   }
//   if (res.length > 0) return Math.min(...res)
//   else return null
//   // return step
// }
//
// const s = [3, 2, 0, 3, 4], x = 5, y = 2
// console.log(drink(s, x, y))


// function fractionToDecimal(numerator, denominator) {
//   let res = ''
//   let mid = numerator / denominator + ''
//   if (mid.length < 10) {
//     return mid
//   } else {
//     let str = ''
//     for (let i = 1; i < mid.length - 2; i++) {
//       let s1 = mid.substr(2, i)
//       let s2 = mid.substr(2 + i, i)
//       if (s1 === s2) {
//         str = s1
//         break
//       }
//     }
//     res = '0.(' + str + ')'
//     return res
//   }
// }
//
//
//
// function getSearch(url) {
//   let index = url.indexOf('?')
//   let arr = url.substring(index+1).split('&')
//   let search = arr[1].split('=')
//   return search[1]
// }


// async function getData() {
//   console.log(1)
//   await fn()
//   let data = await axios.get('./data.json')
//   console.log(data)
// }
//
// function fn() {
//   console.log(4)
//   return new Promise((resolve, reject) => {
//     console.log(5)
//   }).then(() => {
//     console.log(6)
//   }).catch(() => {
//     console.log(7)
//   })
// }
//
// console.log('start')
// setTimeout(() => {
//   console.log(2)
// }, 0)
//
// getData()
// console.log('end')

//
// var username = 'john'
// function fn() {
//   console.log(this.username)
//   this.username = 'tom'
//   this.getName = () => {
//     this.username = 'bob'
//     return {
//       username: 'jack',
//       fn1: () => {
//         console.log(this.username)
//       },
//       fn2: function () {
//         console.log(this.username)
//       }
//     }
//   }
// }
//
// fn()
// let person = new fn()
// console.log(person.username)
// var obj = person.getName()
// obj.fn1()
// obj.fn2()
// console.log(this.username)


function toHTML(arr) {
  if (!arr.length) return ''
  let res = ''
  for (let i = 0; i < arr.length; i++) {
    let obj = arr[i]
    let peizhi = Object.keys(obj)

    let tag = ''
    let attr = {}
    let children = ''
    let style = ''

    if (peizhi.includes('tag')) tag = obj['tag']
    if (peizhi.includes('attr')) attr = obj['attr']

    for (let key in attr) {
      style = style + key + ":'" + attr[key] + "'"
    }
    if (peizhi.includes('children')) children = obj['children']

    let el = '<' + tag + ' ' + style + '>' + children + '</' + tag + '>'
    res += el
  }
  return res
}

const arr = [{tag: 'P', attr: {title: '文本描述'}, children: '这是文本'}]
console.log(toHTML(arr))
