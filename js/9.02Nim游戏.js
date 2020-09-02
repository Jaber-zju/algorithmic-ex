// 9.02 Nim游戏
// https://leetcode-cn.com/problems/nim-game/


/**
 * @param {number} n
 * @return {boolean}
 */
var canWinNim = function(n) {
  // 很明显，作为先手，只用把剩余棋子数量取到4的倍数，那么无论对方取1~3任意个数，只用保证剩下的棋子数量仍是4的倍数，即可取得最后的胜利。
  //
  // 所以，只有在原始棋子数量是4的倍数的时候，会输；其他情况，赢。

  return n % 4;
}
