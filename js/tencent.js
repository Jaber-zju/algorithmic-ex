function checkChinese(obj) {
  var reg = /^[\u0391-\uFFE5]+$/;
  return reg.test(obj)
}
function getLength(str) {
  var length = 0
  for (var i = 0; i < str.length; i++) {
    if(checkChinese(str[i])) {
      length += 2
    } else {
      length++
    }
  }
  return length
}

// const str = 'hh中'
// console.log(getLength(str))

let N = 7
let str = '1234567890'

function jianhua(N, str) {
  if(getLength(str) <= N) {
    console.log(str)
  } else {
    let len = 0
    let current = ''
    for (var i = 0; i < str.length; i++) {
      if (checkChinese(str[i])) {
        len += 2
      } else {
        len++
      }
      if (len <= (N - 3)) {
        current += str[i]
      } else {
        return current + '...'
      }
    }
  }
}

console.log(jianhua(N, str))

// let head = str.substr(0, 4)
// let num = 0
// let current = ''
// for (let j = 0; j < head.length; j++) {
//   if (num <= 4) {
//     if (checkChinese(head[i])) {
//       num += 2
//     } else {
//       num++
//     }
//     current += head[i]
//   } else {
//     return current + '...'
//   }
// }

str.substring()

let color = readline();

function checkColor(bgVal) {
  let type = '^#[0-9a-fA-F]{6}$'
  let re = new RegExp(type)
  if (bgVal.match(re) == null) {
    type = '^[rR][gG][bB][\(]([\\s]*(2[0-4][0-9]|25[0-5]|[01]?[0-9][0-9]?)[\\s]*,){2}[\\s]*(2[0-4]\\d|25[0-5]|[01]?\\d\\d?)[\\s]*[\)]{1}$';
    re = new RegExp(type)
    if (bgVal.match(re) == null) {
      type = '^[hH][sS][lL][\(]([\\s]*(3[0-5][0-9]|360|[012]?[0-9][0-9]?)[\\s]*,)[\\s]*(([1-9]?\d|100)(\.[0-9])?%[\\s]*,){2}[\)]]{1}$';
      re = new RegExp(type)
      if (bgVal.match(re) == null) {
        return 'invalid';
      }
    }
  }
  return 'valid';
}
print(checkColor(color))
