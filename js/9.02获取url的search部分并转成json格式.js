// 9.02获取url的search部分并转成json格式

function getSearch(url) {
  // let url = window.location.search
  let jsonList = {}

  if (url.indexOf("?") !== -1) {
    let search = url.slice(url.indexOf("?") + 1)
    let arr = search.split("&")

    for (let i = 0; i < arr.length; i++) {
      let keyval = arr[i].split('=')
      jsonList[keyval[0]] = keyval[1]
    }
  }
  return jsonList
}

const url = 'https://www.nowcoder.com/discuss/488574?type=post&order=time&pos=&page=1&channel=1009&source_id=search_post'
console.log(getSearch(url))
