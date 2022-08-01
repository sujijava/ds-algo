// var Tree = require('leetcode').Tree;
import { Tree } from "leetcode";

/**
 * @param {TreeNode} root
 * @return {number}
 */

const bst = Tree.create([1,2,null,null,4,3,null,null,5]);

var isBalanced = function (root) {
  const [ height, balanced ] = getHeight(root);

  return balanced;
};

const getHeight = (root) => {
  if (!root) return [-1, true];

  let left = root.left
  let right = root.right

  const [leftHeight, leftBalanced] = getHeight(left);
  const [rightHeight, rightBalanced] = getHeight(right);

  const balanced =
      leftBalanced &&
      rightBalanced &&
      Math.abs(leftHeight - rightHeight) < 2;

  return [1 + Math.max(leftHeight, rightHeight), balanced];
};

console.log(isBalanced(bst))
