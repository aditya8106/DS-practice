/*  Binary Tree Maximum Path Sum
Hard
Topics
Company Tags
Hints
Given the root of a non-empty binary tree, return the maximum path sum of any non-empty path.

A path in a binary tree is a sequence of nodes where each pair of adjacent nodes has an edge connecting them. A node can not appear in the sequence more than once. The path does not necessarily need to include the root.

The path sum of a path is the sum of the node's values in the path.

Example 1:



Input: root = [1,2,3]

Output: 6
Explanation: The path is 2 -> 1 -> 3 with a sum of 2 + 1 + 3 = 6.

Example 2:



Input: root = [-15,10,20,null,null,15,5,-5]

Output: 40  */

/**
 * Binary Tree Maximum Path Sum
 */

/**
 * Definition for a binary tree node.
 */
function TreeNode(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
}


/**
 * @param {TreeNode} root
 * @return {number}
 */
function maxPathSum(root) {

    // Stores the maximum path sum found so far
    let maxi = -Infinity;


    // DFS function
    function dfs(node) {

        // If there is no node, contribution is 0
        if (node === null) {
            return 0;
        }


        // Find the best path coming from the left
        // Ignore negative paths
        let left = Math.max(0, dfs(node.left));


        // Find the best path coming from the right
        // Ignore negative paths
        let right = Math.max(0, dfs(node.right));


        // Path passing through the current node
        // This path can use BOTH left and right
        let currentPath = node.val + left + right;


        // Update the overall maximum
        maxi = Math.max(maxi, currentPath);


        // Return only ONE side to the parent
        // We cannot return both sides because that would
        // create a branching path
        return node.val + Math.max(left, right);
    }


    // Start DFS from root
    dfs(root);


    // Return the maximum path found
    return maxi;
}