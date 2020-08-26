function handleParam(input) {
  if (input === 'undefined') {
    return undefined
  }
  return JSON.parse(input)
}

const list = [{"col1": 2, "col2": 10}, {"col1": 2, "col2": 20}, {"col1": 1, "col2": 90}]
const cols = ["col1", "col2"]

function sortBy(list, cols) {
  list.sort((a, b) => {
    if (a[cols[0]] === b[cols[0]]) {
      if (a[cols[1]] > b[cols[1]]) return 1
      else if (a[cols[1]] < b[cols[1]]) return -1
      else return 0
    } else {
      if (a[cols[0]] > b[cols[0]]) return 1
      else return -1
    }
  })
  return list
}

console.log(JSON.stringify(sortBy(list, cols)))
