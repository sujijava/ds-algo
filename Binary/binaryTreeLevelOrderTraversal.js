// var Tree = require('leetcode').Tree;
import { Tree } from "leetcode";

const bst = Tree.create([]);
const bst2 = Tree.create([1, null, 2, 3]);

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
 var levelOrder = function (root) {
    const result = [];
    if (!root || root === []) {
      result;
    }
    const queue = [];
    queue.push(root);

    while (queue.length !== 0) {
      let nodesInLevel = [];
      let numberOfNodesInLevel = queue.length

      for (let i = 0; i < numberOfNodesInLevel; i++) {
        let currentNode = queue.shift();
        nodesInLevel.push(currentNode.val);

        if (currentNode.left) {
          queue.push(currentNode.left);
        }

        if (currentNode.right) {
          queue.push(currentNode.right);
        }
      }
      result.push(nodesInLevel);
    }
    return result
  };


  levelOrder(bst)
