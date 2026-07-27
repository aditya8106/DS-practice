/*Subtree of Another Tree
Easy
Topics
Company Tags
Hints
Given the roots of two binary trees root and subRoot, return true if there is a subtree of root with the same structure and node values of subRoot and false otherwise.

A subtree of a binary tree tree is a tree that consists of a node in tree and all of this node's descendants. The tree tree could also be considered as a subtree of itself.

Example 1:



Input: root = [1,2,3,4,5], subRoot = [2,4,5]

Output: true
Example 2:



Input: root = [1,2,3,4,5,null,null,6], subRoot = [2,4,5]

Output: false
Constraints:

1 <= The number of nodes in both trees <= 100.
-100 <= root.val, subRoot.val <= 100
*/


/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val === undefined ? 0 : val);
 *     this.left = (left === undefined ? null : left);
 *     this.right = (right === undefined ? null : right);
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function(root, subRoot) {

    // Helper function to check if two trees are exactly the same
    function isSameTree(node1, node2) {

        // If both nodes are null, they match
        if (node1 === null && node2 === null) {
            return true;
        }

        // If one is null and the other isn't, they don't match
        if (node1 === null || node2 === null) {
            return false;
        }

        // If values are different, trees are different
        if (node1.val !== node2.val) {
            return false;
        }

        // Compare left subtree
        let left = isSameTree(node1.left, node2.left);

        // Compare right subtree
        let right = isSameTree(node1.right, node2.right);

        // Both left and right must match
        return left && right;
    }

    // If we reached the end of the main tree,
    // subRoot was not found
    if (root === null) {
        return false;
    }

    // Check if the subtree starts at the current node
    if (isSameTree(root, subRoot)) {
        return true;
    }

    // Otherwise, keep searching in the left and right subtrees
    return (
        isSubtree(root.left, subRoot) ||
        isSubtree(root.right, subRoot)
    );
};