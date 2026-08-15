/*  Delete Leaves With a Given Value
Medium
Topics
Company Tags
You are given a binary tree root and an integer target, delete all the leaf nodes with value target.

Note that once you delete a leaf node with value target, if its parent node becomes a leaf node and has the value target, it should also be deleted (you need to continue doing that until you cannot).

Example 1:





Input: root = [1,2,3,5,2,2,5], target = 2

Output: [1,2,3,5,null,null,5]
Example 2:



Input: root = [3,null,3,3], target = 3

Output: []
Explanation: The output is an empty tree after removing all the nodes with value 3.

Constraints:

1 <= number of nodes in the tree <= 3000
1 <= Node.val, target <= 1000
*/   

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val === undefined ? 0 : val)
 *     this.left = (left === undefined ? null : left)
 *     this.right = (right === undefined ? null : right)
 * }
 */

/**
 * @param {TreeNode} root
 * @param {number} target
 * @return {TreeNode}
 */
var removeLeafNodes = function(root, target) {

    // If tree is empty
    if (root === null) {
        return null;
    }

    // First process the left subtree
    root.left = removeLeafNodes(root.left, target);

    // Then process the right subtree
    root.right = removeLeafNodes(root.right, target);

    // After deleting children, check if current node
    // has become a leaf and its value is target
    if (root.left === null &&
        root.right === null &&
        root.val === target) {

        return null;
    }

    // Keep the current node
    return root;
};