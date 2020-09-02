/*
* 归并排序，分开数组，不断一分为二直到只剩一个元素（这里用到递归思想，不断自己分开自己），
* 然后对分开的自己进行排序，在归并的路上不断排序，从而实现最终排序
* 时间复杂度O(NlogN)
* 它的速度仅次于快速排序，而且很稳定
* 但是空间需求一般会高点，大型的项目或者数据均为有序的时候用归并排序会多点
*/

function mergeSort(arr) {               //先在主函数中定义分离方法，最后在结果中调用排序算法
  if (arr.length === 1) {               //定义递归终止条件，当元素均为1个时，开始归并
    return arr
  }
  let mid = Math.floor((arr.length) / 2)       //Math.floor用以寻找当前给的数，如果没有则向下寻找最近的
  let left = arr.slice(0, mid)              //调用slice方法来返回数组，其不改变原数组
  let right = arr.slice(mid)
  return rank(mergeSort(left), mergeSort(right))     //递归用在了这里
}

function rank(left, right) {
  let result = []                                           //定义容器
  let pl = 0, pr = 0                                        //定义两个指针

  while (pl < left.length && pr < right.length) {    //两个数组只要都同时有数，就进行循环
    if (left[pl] < right[pr]) {                    //这里的两个数组必然是都已经排序完成了，互相比较即可
      result.push(left[pl])
      pl++                                   //谁添加了数组元素，谁就移动一下自己的指针，所以这里用while不用for
    } else {
      result.push(right[pr])
      pr++
    }
  }

  while (pl < left.length) {                         //上面循环结束的条件是有一个数组循环结束了
    result.push(left[pl])                      //他们俩不可能同时有数，所以不管谁剩了，统统添加进去
    pl++
  }

  while (pr < right.length) {
    result.push(right[pr])
    pr++
  }

  return result
}
