// var merge = function(nums1,nums2) {
//   for (let i = 0; i < nums2.length; i++) {
//     let el = nums2[i]
//     if (i === 0 && el <= nums1[0]) {
//       nums1.splice(0, 0, el)
//       continue
//     }
//     for (let j = 1; j < nums1.length; j++) {
//       if (el <= nums1[j] && el > nums1[j - 1] && j !== nums1.length-1) {
//         nums1.splice(j, 0, el)
//       } else if (el < nums1[j] && el > nums1[j - 1]) {
//         nums1.splice(j, 0, el)
//       } else if (el > nums1[j] && j !== nums1.length-1) {
//         continue
//       } else if (j === nums1.length - 1){
//         if (el > nums1[nums1.length-1]) nums1.push(el)
//       }
//     }
//   }
//   return nums1
// };
//
// const nums1 = [1,2,3,7,10,18], nums2 = [1,8,9,11,20], m = 4, n = 3
// console.log(merge(nums1, nums2))

// 合并两个有序数组
const nums1 = [1, 2, 3, 7, 10, 18, 90], nums2 = [1, 8, 9, 11, 20], m = 7, n = 5

// 方法一
var merge = function (nums1, m, nums2, n) {
  let len1 = m - 1;
  let len2 = n - 1;
  let len = m + n - 1;
  while (len1 >= 0 && len2 >= 0) {
    // 注意--符号在后面，表示先进行计算再减1，这种缩写缩短了代码
    nums1[len--] = nums1[len1] > nums2[len2] ? nums1[len1--] : nums2[len2--];
  }

  function arrayCopy(src, srcIndex, dest, destIndex, length) {
    dest.splice(destIndex, length, ...src.slice(srcIndex, srcIndex + length));
  }

  // 表示将nums2数组从下标0位置开始，拷贝到nums1数组中，从下标0位置开始，长度为len2+1
  arrayCopy(nums2, 0, nums1, 0, len2 + 1);
  // return nums1
};

console.log(merge(nums1, m, nums2, n))


// 方法二：
var merge = function (nums1, m, nums2, n) {
  let length = m + n
  while (n > 0) {
    if (m <= 0) {
      nums1[--length] = nums2[--n]
      continue
    }
    nums1[--length] = nums1[m - 1] >= nums2[n - 1] ? nums1[--m] : nums2[--n]
  }
};
