// console.log('sxf')

// 第二题
// let str = '/b/c,/b/cf'
// let str = '/a/c,/a/d,/x/y/z/b,/x/y/z,/x/y'
// function path(str) {
//   if (!str.length) return false
//   let res = []
//   let arr = str.split(',').sort((a, b) => a.length - b.length)
//   for (let i = 0; i < arr.length-1; i++) {
//     let p1 = arr[i]
//     for (let j = i+1; j < arr.length; j++) {
//       if (arr[j].includes(p1 + '/') && !res.includes(p1)) {
//         res.push(p1)
//       }
//     }
//   }
//   let arr2 = str.split(',')
//   let obj = {}
//   for (let i = 0; i < res.length; i++) {
//     obj[res[i]] = arr2.indexOf(res[i])
//   }
//   let arr3 = Object.keys(obj)
//   arr3.sort((a, b) => obj[a] - obj[b])
//   if (arr3.length) return arr3.join(',')
//   else return false
// }
// console.log(path(str))


// 第一题
let str = '#FFe'
function toRgb(str) {
  if (str.length < 4 || str[0] !== '#') return str
  const pattern = /^(#?)[a-fA-F0-9]{6}$/
  const pattern2 = /^(#?)[a-fA-F0-9]{3}$/
  if (!pattern.test(str) && !pattern2.test(str)) return str
  let v = str.replace(/#/, '')
  let rgbArr = []
  let rgbStr = ''
  if (v.length === 3) {
    let s = []
    for(let i = 0; i < 3; i++) {
      s.push(v[i])
      s.push(v[i])
    }
    v = s.join('')
  }
  for (let i = 0; i < 3; i++) {
    let item = v.substring(i*2, i*2+2)
    let num = parseInt(item, 16)
    rgbArr.push(num)
  }

  rgbStr = rgbArr.join(', ')
  rgbStr = 'rgb(' + rgbStr + ')'
  return rgbStr
}
console.log(toRgb(str))
