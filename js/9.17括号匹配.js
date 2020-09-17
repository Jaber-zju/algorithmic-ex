// 括号匹配

function fn(str) {
  let arr = []
  for (let i = 0; i < str.length; i++) {
    if (str[i] === '[') arr.push(']')
    else if (str[i] === '(') arr.push(')')
    else if (str[i] === '{') arr.push('}')
    else {
      if (arr.pop() !== str[i]) return false
    }
  }
  if (!arr.length) return true
  else return false
}
