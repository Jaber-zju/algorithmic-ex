// 判断子序列
// https://leetcode-cn.com/problems/is-subsequence/


/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
// 方法一：暴力破解，无法通过
var isSubsequence = function (s, t) {
  if (!s.length) return true
  if (s.length < 3) {
    for (let i = 0; i < s.length; i++) {
      if (!t.includes(s[i])) return false
    }
    return true
  } else {
    // debugger
    let first = t.indexOf(s[0])
    let second = t.indexOf(s[1])
    if (first === -1 || second === -1) return false
    let gap = second - first
    let temp = second
    for (let i = 0; i < s.length; i++) {
      let index = t.indexOf(s[i])
      if (index === -1 || (i - temp < 0)) return false
      temp = i
      t = t.substr(0, index) + t.substr(index + 1)
    }
    return true
  }
};

const s = "abc", t = "ahbgdc"
console.log(isSubsequence(s, t))


// 方法二：使用正则
var isSubsequence = function (s, t) {
  return new RegExp([...s].join('[a-z]*')).test(t)
};


// 双指针：两个指针分别扫描长串和短串，目标是为短串中的字符在长串中找到匹配
// 如果指向的字符相同，两个指针都移动考察下一个字符
// 如果不相同，短串的指针不动，长串的指针移动考察下一个字符
// 如果短串走完了，说明短串的字符在长串中都找到匹配
// 如果短串没有走完，长串走完了，说明考察了整个长串也没能找齐短串的所有字符
const isSubsequence = (s, t) => {
  if (s.length == 0) return true;
  let index = 0;
  let subIndex = 0;
  while (index < t.length) {
    if (s[subIndex] === t[index]) {
      subIndex++;
      if (subIndex > s.length - 1) {
        return true;
      }
    }
    index++;
  }
  return false;
};
