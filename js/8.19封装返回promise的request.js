// 封装
const myRequest = (url) => {
  return new Promise((resolve, reject) => {
    myRequest.get(url, function (res, err) {
      if (res) {
        resolve(res)
      } else {
        reject(err)
      }
    })
  })
}
// 调用
const test = async (url) => {
  await myRequest(url)
};
