// 二叉树的序列化和反序列化
// https://leetcode-cn.com/problems/serialize-and-deserialize-binary-tree/submissions/


// 序列化
var serialize = function (root) {
  // 方法一
  if (!root) return 'null'
  return `${root.val},${serialize(root.left)},${serialize(root.right)}`

  // 方法二
  return JSON.stringify(root)
}

// 反序列化
var deserialize = function (data) {
  // 方法一
  let arr = data.split(',')

  function getNode() {
    let val = arr.shift()
    if (val === 'null') return null
    return {
      val,
      left: getNode(),
      right: getNode()
    }
  }

  return getNode()

  // 方法二
  return JSON.parse(data)
}
