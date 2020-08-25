// 存在重复元素

// 题目链接：https://leetcode-cn.com/problems/contains-duplicate/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
  if (!nums.length) return false
  for (let i = 0; i < nums.length; i++) {
    if (nums.indexOf(nums[i]) !== nums.lastIndexOf(nums[i])) return true
  }
  return false
}

const nums = [1,2,3,4]
console.log(containsDuplicate(nums))
