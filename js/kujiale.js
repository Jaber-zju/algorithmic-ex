function zeroNum(num) {

}

function jiecheng(num) {
  if (num > 1) {
    return num * jiecheng(num - 1)
  } else {
    return num
  }
}

console.log(jiecheng(5))
