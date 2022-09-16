/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */

class Tree {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

var buildTree = function (preorder, inorder) {
  if (!preorder.length || !inorder.length) return null;

  let root = new Tree(preorder[0]);
  // mid means?
  // mid means - root of a subtree?
  let mid = inorder.indexOf(preorder[0]);

  const newPreOrderArrLeft = preorder.slice(1, mid + 1);
  const newInOrderArrLeft = inorder.slice(0, mid);
  const newPreOrderArrRight = preorder.slice(mid + 1);
  const newInOrderArrRight = inorder.slice(mid + 1);

  root.left = buildTree(preorder.slice(1, mid + 1), inorder.slice(0, mid));
  root.right = buildTree(preorder.slice(mid + 1), inorder.slice(mid + 1));
  return root;
};

const preorder = [3, 9, 20, 15, 7];
const inorder = [9, 3, 15, 20, 7];
// Output: [3,9,20,null,null,15,7]

console.log(buildTree(preorder, inorder));
