// 缺失数字
// https://leetcode-cn.com/problems/missing-number/


/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
  const len = nums.length
  for (let i = 0; i <= len; i++) {
    if (!nums.includes(i)) return i
  }

}

const nums = [9,6,4,2,3,5,7,0,1]
console.log(missingNumber(nums))
