// 存在重复元素II

// 题目链接：https://leetcode-cn.com/problems/contains-duplicate-ii/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
  let map = new Map()
  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i]) && i - map.get(nums[i]) <= k) return true
    map.set(nums[i], i)
  }
  return false
}

const nums = [0, 1, 2, 3, 4, 0, 0, 7, 8, 9, 10, 11, 12, 0], k = 1
console.log(containsNearbyDuplicate(nums, k))
