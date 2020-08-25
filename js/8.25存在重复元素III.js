// 存在重复元素III

// 题目链接：https://leetcode-cn.com/problems/contains-duplicate-iii/


/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} t
 * @return {boolean}
 */
var containsNearbyAlmostDuplicate = function (nums, k, t) {
  // 方法一：暴力破解
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (i !== j && Math.abs(nums[i] - nums[j]) <= t && Math.abs(i - j) <= k) return true
    }
  }
  return false


  // 方法二：
  return nums.some((val, index) => {
    const newArr = nums.slice(index + 1, index + k + 1);
    let flag = newArr.filter(num => {
      return Math.abs(num - nums[index]) <= t
    })
    if (flag.length !== 0) {
      return true
    }
  })
}

const nums = [1, 5, 9, 1, 5, 9], k = 2, t = 3
console.log(containsNearbyAlmostDuplicate(nums, k, t))
