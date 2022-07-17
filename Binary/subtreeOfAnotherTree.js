import { Node, BST} from '../DataStructure/Binary.js'


/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */


var isSubtree = function(root, subRoot) {

};



// const isSameTree = (root1, root2) => {

//     if(root1.val === root2.val && root1.val === root2.val){
//         return isSameTree(root1.left, root.left)
//         isSameTree(root.right, root.right)
//     } else {
//         return false
//     }
// }




const bst = new BST();

bst.add(9);
bst.add(4);
bst.add(17);
bst.add(3);
bst.add(6);
bst.add(22);
bst.add(5);
bst.add(7);
bst.add(20);
console.log(bst.inOrder());

console.log(bst.root)
