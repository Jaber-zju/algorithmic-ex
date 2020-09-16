// 两数之和
// https://leetcode-cn.com/problems/two-sum/

// 方法一：暴力破解，两个for循环

// 方法二：双指针
function fn(arr, target) {
  let res = []
  if (!arr.length) return res
  else {
    let head = 0, end = arr.length - 1
    while (head < end) {
      let sum = arr[head] + arr[end]
      if (sum > target) end--
      else if (sum < target) head++
      else {
        res.push(head)
        res.push(end)
        return res
      }
    }
    return []
  }
}

const arr = [2, 7, 11, 15], target = 16
console.log(fn(arr, target))

// 方法三：hashmap
const twoSum = (nums, target) => {
  // 1. 构造哈希表
  const map = new Map(); // 存储方式 {need, index}
  // 2. 遍历数组
  for (let i = 0; i < nums.length; i++) {
    // 2.1 如果找到 target - nums[i] 的值
    if (map.has(nums[i])) {
      return [map.get(nums[i]), i];
    } else {
      // 2.2 如果没找到则进行设置
      map.set(target - nums[i], i);
    }
  }
};

// console.log(twoSum([2, 7, 11, 15], 9)); // [0, 1]
