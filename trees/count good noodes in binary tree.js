/*  Count Good Nodes in Binary Tree
Medium
Topics
Company Tags
Hints
Within a binary tree, a node x is considered good if the path from the root of the tree to the node x contains no nodes with a value greater than the value of node x

Given the root of a binary tree root, return the number of good nodes within the tree.

Example 1:



Input: root = [2,1,1,3,null,1,5]

Output: 3


Example 2:

Input: root = [1,2,-1,3,4]

Output: 4
Constraints:

1 <= number of nodes in the tree <= 100,000
-100 <= Node.val <= 100  */

//Optimal Solution

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
 * @return {number}
 */
var goodNodes = function(root) {
    let count = 0;

    function dfs(node, maxSoFar) {
        // Base case
        if (!node) return;

        // Check if current node is a good node
        if (node.val >= maxSoFar) {
            count++;
        }

        // Update maximum value seen on this path
        maxSoFar = Math.max(maxSoFar, node.val);

        // Visit left and right children
        dfs(node.left, maxSoFar);
        dfs(node.right, maxSoFar);
    }

    // Start DFS with the root value as the initial maximum
    dfs(root, root.val);

    return count;
};


