// 二叉树的最小深度

// 题目链接：https://leetcode-cn.com/problems/minimum-depth-of-binary-tree/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
const minDepth = (root) => {
  if (root == null) return 0;

  if (root.left && root.right) {
    return 1 + Math.min(minDepth(root.left), minDepth(root.right));
  } else if (root.left) {
    return 1 + minDepth(root.left);
  } else if (root.right) {
    return 1 + minDepth(root.right);
  } else {
    return 1;
  }
}
