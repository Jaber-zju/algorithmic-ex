// 8.19多次展开字符

function zhankai(str) {
  let res = ''
  const numReg = /\d+/g
  const letterReg = /[a-zA-Z]+/g
  let nums = str.match(numReg)
  let letters = str.match(letterReg)
  for (let i = 0; i < nums.length; i++) {
    let count = nums[i]
    for (let j = 0; j < count; j++) {
      res += letters[i]
    }
  }
  return res
}


const str = '3(xyz)1a2b3c'
console.log(zhankai(str))
