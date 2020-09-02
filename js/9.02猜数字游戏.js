// 猜数字游戏
// https://leetcode-cn.com/problems/bulls-and-cows/


/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function (secret, guess) {
  let hash = Array(10).fill(0), m = n = 0
  for (let i = 0, len = secret.length; i < len; i++) {
    if (secret[i] === guess[i]) m++
    else {
      if (hash[secret[i]]++ < 0) n++
      if (hash[guess[i]]-- > 0) n++
    }
  }
  return `${m}A${n}B`
}

const secret = '1807', guess = '7810'
console.log(getHint(secret, guess))
