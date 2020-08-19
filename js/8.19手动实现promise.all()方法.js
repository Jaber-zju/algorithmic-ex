let promiseAll = (promises) => {
  return new Promise((resolve, reject) => {
    // 用来存储每个promise的返回值，长度与promise数组的长度一致
    let results = new Array(promises.length)
    // 当前已经完成了几个promise
    let finishCount = 0


    for (let i = 0; i < promises.length; ++i) {
      let promise = promises[i]
      promise.then(value => {
        results[i] = value
        ++finishCount
        if (finishCount === promises.length) {
          resolve(results)
        }
      }).catch(err => {
        reject(err)
      })
    }
  })
}

function promiseAll(all) {
  return new Promise((resolve, reject) => {
    // 当前已经完成了几个promise
    let finishCount = 0
    // 用来存储每个promise的返回值，长度与promise数组的长度一致
    let result = new Array(all.length)
    if (!all.length) {
      return resolve(result)
    } else {
      for (let i = 0; i < all.length; i++) {
        let promise = all[i]
        promise.then(value => {
          result[i] = value
          finishCount++
          if (finishCount === all.length) {
            return resolve(result)
          }
        }, err => {
          return reject(err)
        })
      }
    }
  })
}
