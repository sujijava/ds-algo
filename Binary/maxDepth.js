// var Tree = require('leetcode').Tree;
import { Tree } from "leetcode";

/**
 * @param {TreeNode} root
 * @return {number}
 */

const bst = Tree.create([1, 2, 3, 4, null, 5, 6, 7]);

console.log(bst);

function maxDepthHelper(root, depth) {
  if (!root) {
    return depth;
  }

  if (root.right || root.left) {
    let newDept = depth++;
    return Math.max(
      maxDepthHelper(root?.left, newDept),
      maxDepthHelper(root?.right, newDept)
    );
  }
}

console.log(maxDepthHelper(bst.root, 0));
