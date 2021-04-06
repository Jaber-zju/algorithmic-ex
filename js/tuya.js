console.log('tuya')

function findActiveUrlIndex( urlList ,  currentUrl ) {
  // write code here
  let maxlen = 0
  let index = -1
  let path = currentUrl.split('?')[0] ? currentUrl.split('?')[0] : currentUrl
  let search = currentUrl.split('?').length > 1 ? currentUrl.split('?')[1] : ''
  for (let i = 0; i < urlList.length; i++) {
    if (path.includes(urlList[i])) {
      maxlen = maxlen > urlList[i].length ? maxlen : urlList[i].length
      index = maxlen > urlList[i].length ? index : i
    }
  }
  return index
}

const urlList = ["https://www.youzan.com/foo/sub/abc", "https://www.youzan.com/other/sub/abc", "https://www.youzan.com/foo/sub/abc#/uvw", "https://www.youzan.com/foo/sub", "https://www.youzan.com/foo/sub/abc#/uvw/xyz"]
const currentUrl = "https://www.youzan.com/foo/sub/abc/rst"

console.log(findActiveUrlIndex(urlList, currentUrl))
