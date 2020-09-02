// 移动零
// https://leetcode-cn.com/problems/move-zeroes/


/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  // 方法一
  if (!nums.length) return nums
  let zeros = []
  for (let i = 0; i < nums.length;) {
    let temp = i
    if (nums[i] === 0) {
      nums.splice(i, 1)
      zeros.push(0)
      i = temp
    } else {
      i = temp + 1
    }
  }
  nums = nums.concat(zeros)
  return nums


  // 方法二
  nums.sort((a, b) => b ? 0 : -1)


  // 方法三
  let j = 0;
  for (let i = 0; i < nums.length; i++) {
    nums[i] && (j !== i ? ([nums[j++], nums[i]] = [nums[i], nums[j]]) : j++)
  }
}

const nums = [0, 1, 0, 3, 12]
console.log(moveZeroes(nums))
