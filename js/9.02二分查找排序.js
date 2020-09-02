// 二分查找排序

var erfen = function (val, arr) {
  if (arr.length < 1 || val < arr[0] || val > arr[arr.length - 1]) {
    return false;
  }//如果这个数字没在其中直接返回false
  else if (val === arr[0] || val === arr[arr.length - 1]) {
    return true;
  }//如果找到了就返回true
  else if (arr.length === 1) {
    return false;
  }//如果不能再缩小了而且没查到返回false
  var res = [];
  var base = Math.floor(arr.length / 2);
  if (val > arr[base]) {
    res = arr.splice(base + 1, arr.length - 1);
  }//如果大于中间的从右边开始找
  else if (val === arr[base]) {
    return true;
  }//恰巧等于中间的就返回true
  else {
    res = arr.splic(0, base - 1);
  }//如果小于中间的就从右边找
  return erfen(val, res);//递归
}
