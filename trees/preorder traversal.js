/*  Binary Tree Preorder Traversal
Easy
Topics
Company Tags
You are given the root of a binary tree, return the preorder traversal of its nodes' values.

Example 1:



Input: root = [1,2,3,4,5,6,7]

Output: [1,2,4,5,3,6,7]
Example 2:



Input: root = [1,2,3,null,4,5,null]

Output: [1,2,4,3,5]
Example 3:

Input: root = []

Output: []   */


//optimal solution using recursion

/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number[]}
     */
    preorderTraversal(root) {

        // Array to store preorder traversal
        let ans = [];

        // DFS function
        function dfs(node) {

            // Base Case:
            // If current node is null, stop recursion
            if (node === null) return;

            // Step 1: Visit the current node (Root)
            ans.push(node.val);

            // Step 2: Traverse the left subtree
            dfs(node.left);

            // Step 3: Traverse the right subtree
            dfs(node.right);
        }

        // Start DFS from the root
        dfs(root);

        // Return preorder traversal
        return ans;
    }
}