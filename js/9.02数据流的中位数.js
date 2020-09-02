// 数据流的中位数
// https://leetcode-cn.com/problems/find-median-from-data-stream/


/**
 * initialize your data structure here.
 */
var MedianFinder = function() {
  this.stack = []
};

/**
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {
  this.stack.push(num)
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
  this.stack.sort((a, b) => a - b)
  let len = this.stack.length
  if (len % 2) {
    return this.stack[Math.floor(len / 2)]
  } else {
    return ((this.stack[len/2] + this.stack[len/2-1]) / 2).toFixed(1)
  }
};

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */
