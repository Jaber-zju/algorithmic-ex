function printNum(time) {
  let count = 1
  setInterval(() => {
    if (count <= 3) {
      console.log(count)
      count++
    } else {
      clearInterval()
      return 0
    }
  }, time * 1000)
}

printNum(1)
