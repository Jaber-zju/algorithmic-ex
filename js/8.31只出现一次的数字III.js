// 只出现一次的数字 III
// https://leetcode-cn.com/problems/single-number-iii/


/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function(nums) {
  const res = nums.filter((item, index, arr) => arr.indexOf(item) === arr.lastIndexOf(item))
  return res
};
