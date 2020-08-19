function Promise(fn) {
  let that = this
  that.status = 'pending' // 存储promise的state
  that.value = '' // 存储promise的成功value
  that.reason = '' // 存储promise的失败reason
  that.onFulfilledCb = []  // 存储then方法中注册的成功回调函数（第一个参数）
  that.onRejectedCb = []   // 存储then方法中注册的失败回调函数（第二个参数）

  function resolve(value) {
    // 将promise的状态从pending更改为fulfilled，并且以value为参数依次调用then方法中注册的成功回调
    setTimeout(() => {
      if (that.status === 'pending') {
        that.status = 'fulfilled'
        that.value = value
        that.onFulfilledCb.forEach(item => {
          item(that.value)
        })
      }
    }, 0)
  }

  function reject(value) {
    // 将promise的状态从pending更改为rejected，并且以reason为参数依次调用then方法中注册的失败回调
    setTimeout(() => {
      if (that.status === 'pending') {
        that.status = 'rejected'
        that.reason = value
        that.onRejectedCb.forEach(item => {
          item(that.reason)
        })
      }
    }, 0)
  }

  fn(resolve, reject)
}
