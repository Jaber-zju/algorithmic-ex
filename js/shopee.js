var firstInput = readline();
var secondInput = readline();

function handleParam(input) {
  if(input === 'undefined') {
    return undefined
  }
  return JSON.parse(input)
}

function deepEq(p1, p2) {
  if (typeof p1 !== typeof p2) return false
  if (Array.isArray(p1) && Array.isArray(p2)) {
    let s1 = p1.join('')
    let s2 = p2.join('')
    for (let i = 0; i < s1.length; i++) {
      if (s1[i] !== s2[i]) return false
    }
    return true
  } else if (typeof p1 === 'oject' && typeof p2 === 'object') {

  } else {
    if (p1.length !== p2.length) return false
    for (let i = 0; i < p1.length; i++) {
      if (p1[i] !== p2[i]) return false
    }
    return true
  }

}

console.log(deepEq(handleParam(firstInput), handleParam(secondInput)))
const a = {a:1}
console.log(typeof a)
