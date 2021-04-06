function fn(num) {
  if (num === 1) return [[1]]
  else if (num === 2) return [[1], [1, 1]]
  else {
    let res = [[1], [1, 1]]
    for (let i = 2; i < num; i++) {
      let row = res[i-1]
      let arr = new Array(i+1)
      for (let j=0; j <= i; j++) {
        if(j === 0) arr[j] = 1
        else if (j === i) arr[j] = 1
        else {
          arr[j] = row[j] + row[j-1]
        }
      }
      res.push(arr)
    }
    return res
  }
}

console.log(fn(7))
