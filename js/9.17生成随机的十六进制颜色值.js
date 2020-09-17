// 生成随机的十六进制颜色值

const randoms = (length = 6, chars = '0123456789ABCDEF') => {
  let maxNum = chars.length - 1;
  let hex = '#';
  let num = 0;
  for (let i = 0; i < length; i++) {
    num = rand(0, maxNum - 1);
    hex += chars.slice(num, num + 1);
  }
  return hex;
}

function rand(minNum, maxNum) {
  let choices = maxNum - minNum;
  let num = minNum + Math.round(Math.random() * choices)
  return parseInt(num);
}

console.log(randoms())
