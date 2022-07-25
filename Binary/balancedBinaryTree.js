// var Tree = require('leetcode').Tree;
import { Tree } from "leetcode";

/**
 * @param {TreeNode} root
 * @return {number}
 */

const bst = Tree.create([1,2,2,3,3,null,null,4,4]);


function height(root){

  // base condition when binary tree is empty
  if(root == null)
      return 0
  return Math.max(height(root.left), height(root.right)) + 1
}

var isBalanced = function (root) {

  if(!root){
    return 0
  }
  //still very wondering why if(!root) return 0 is not executed for maxDepth(root.left)

  let leftHeight = height(root.left)
  let rightHeight = height(root.right)

  return leftHeight === rightHeight
};

isBalanced(bst)
