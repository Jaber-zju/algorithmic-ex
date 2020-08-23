// 方法一：join()，将数组变成字符串
let arr = [1, 2, 3, 4, 5, [6, 7, 8, [9, 10, 11, 12, [13, 14, 15, 16]]]]
console.log(arr.join())   // 输出为：1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16
let newArr = arr.join().split(',')
console.log(newArr)


// 方法二：toString()，将数组变成字符串
let arr = [1, 2, 3, 4, 5, [6, 7, 8, [9, 10, 11, 12, [13, 14, 15, 16]]]]
console.log(arr.toString())   // 输出为：1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16
let newArr = arr.toString().split(',')
console.log(newArr)


// 方法三：将数组变成字符串
let arr = [1, 2, 3, 4, 5, [6, 7, 8, [9, 10, 11, 12, [13, 14, 15, 16]]]]
console.log(arr + '')    // 输出为：1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16
let newArr = (arr + '').split(',')
console.log(newArr)


// 方法四：递归调用
let arr = [1, 2, 3, 4, 5, [6, 7, 8, [9, 10, 11, 12, [13, 14, 15, 16]]]]
let newArr = [] // 存放转化后的一维数组
function arrConversion (arr) {
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      arrConversion(arr[i])
    } else {
      newArr.push(arr[i])
    }
  }
}
arrConversion(arr)
console.log(newArr) // 输出：[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]


// 方法五：flat()
console.log([1 ,[2, 3]].flat()); // [1, 2, 3]，默认解析一层
// 指定转换的嵌套层数
console.log([1, [2, [3, [4, 5]]]].flat(2)); // [1, 2, 3, [4, 5]]
// 不管嵌套多少层
console.log([1, [2, [3, [4, 5]]]].flat(Infinity)); // [1, 2, 3, 4, 5]
// 自动跳过空位
console.log([1, [2, , 3]].flat());  // [1, 2, 3]
