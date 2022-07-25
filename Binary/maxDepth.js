// var Tree = require('leetcode').Tree;
import { Tree } from "leetcode";

/**
 * @param {TreeNode} root
 * @return {number}
 */

const bst = Tree.create([1,2,2,3,3,null,null,4,4]);

var maxDepth = function(root) {
  if(!root){
    return 0
  }
  //still very wondering why if(!root) return 0 is not executed for maxDepth(root.left)

  let leftMax = maxDepth(root.left)
  let rightMax = maxDepth(root.right)

  return Math.max(leftMax, rightMax) + 1
};

maxDepth(bst)
