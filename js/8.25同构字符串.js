// 同构字符串

// 题目链接：https://leetcode-cn.com/problems/isomorphic-strings/


/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
  // 两个字符串的长度不同，返回false
  if (s.length !== t.length) return false

  // 字符串去重后的长度不同，返回false
  let len1 = Array.from(new Set(s.split(''))).length
  let len2 = Array.from(new Set(t.split(''))).length
  if (len1 !== len2) return false

  // 判断相同位置上的元素，在各自字符串中出现的索引是否相同，若不同则返回false
  for (let i = 0; i< s.length; i++) {
    if (s.indexOf(s[i]) !== t.indexOf(t[i])) return false
  }

  // 若都是true的，则返回true
  return true
}

const s = "egg", t = "add"
console.log(isIsomorphic(s, t))
