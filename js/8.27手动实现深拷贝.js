// 8.27手动实现深拷贝

// function deepClone(obj) {
//   let objClone = Array.isArray(obj) ? [] : {};
//   if (obj && typeof obj === "object") {
//     for (key in obj) {
//       if (obj.hasOwnProperty(key)) {
//         //判断ojb子元素是否为对象，如果是，递归复制
//         if (obj[key] && typeof obj[key] === "object") {
//           objClone[key] = deepClone(obj[key]);
//         } else {
//           //如果不是，简单复制
//           objClone[key] = obj[key];
//         }
//       }
//     }
//   }
//   return objClone
// }


function deepClone(obj) {
  let clone = Array.isArray(obj) ? [] : {}

  if (obj && typeof obj === 'object') {
    for (key in obj) {
      if (obj.hasOwnProperty(key)) {
        if (obj[key] && typeof obj[key] === 'object') {
          clone[toTuoFeng(key)] = deepClone(obj[key])
        } else {
          clone[toTuoFeng(key)] = obj[key]
        }
      }
    }
  }
  return clone
}

// 去掉属性的下划线分隔符，改成驼峰形式
function toTuoFeng(s) {
  let arr = s.split('_')
  for (let i = 1; i < arr.length; i++) {
    let el = arr[i]
    let head = el[0].toUpperCase()
    arr[i] = head + el.substring(1)
  }
  return arr.join('')
}

const testData = {
  a_bbb: 123,
  a_g: [1, 2, 3, 4],
  a_d: {
    s: 2,
    s_d: 3
  },
  a_f: [1, 2, 3, {
    a_g: 5
  }],
  a_d_s: 1
}
console.log(deepClone(testData))

// const s = 'ads'
// let s1 = s[0].toUpperCase()
// console.log(s1)
