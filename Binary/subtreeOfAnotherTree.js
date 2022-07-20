// var Tree = require('leetcode').Tree;
import { Tree } from 'leetcode'

 const bst = Tree.create([1,null,2,3]);
 const bst2 = Tree.create([1,null,2,3]);

var isSubtree = function (root, subRoot) {
  // edge cases
  if (!subRoot) {
    return true;
  }

  if (!root) {
    return false;
  }

  if(isSameTree(root, subRoot)){
    return true
  }

  return (isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot));
};

const isSameTree = (root1, root2) => {
  if (!root1 && !root2){
    return true
  }

  if(root1 && root2 && (root1.val === root2.val)){
    return isSameTree(root1.left, root2.left) && isSameTree(root1.right, root2.right)
  }
  return false
};

console.log(isSubtree(bst.root, bst2.root));
