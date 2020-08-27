// 滑动窗口最大值
// https://leetcode-cn.com/problems/sliding-window-maximum/


/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  // 方法一：对数组的操作太频繁，导致超出时间限制
  if (k > nums.length) return Math.max().apply(Math, nums)
  else {
    let res = []
    let arr = []
    for (let i = 0; i < nums.length - k + 1; i++) {
      arr = nums.slice(i, i + k)
      let max = Math.max(...arr)
      res.push(max)
      aarr = []
    }

    return res
  }


  // 方法二
  if (k === 1) return nums
  let result = [], arr = []
  for (let i = 0; i < nums.length; i++) {
    arr.push(nums[i])
    if (i >= k - 1) {
      result.push(Math.max(...arr))
      arr.shift()
    }
  }
  return result


  // 方法三
  const deque = []
  const result = []
  for (let i = 0; i < nums.length; i++) {
    // 把滑动窗口之外的踢出
    if (i - deque[0] >= k) {
      deque.shift()
    }
    while (nums[deque[deque.length - 1]] <= nums[i]) {
      deque.pop()
    }
    deque.push(i)
    if (i >= k - 1) {
      result.push(nums[deque[0]])
    }
  }
  return result

}

const nums = [1, 3, -1, -3, 5, 3, 6, 7], k = 3
console.log(maxSlidingWindow(nums, k))
