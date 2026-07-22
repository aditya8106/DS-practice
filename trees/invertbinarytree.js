/*  
Invert Binary Tree
Easy
Topics
Company Tags
Hints
You are given the root of a binary tree root. Invert the binary tree and return its root.

Example 1:



Input: root = [1,2,3,4,5,6,7]

Output: [1,3,2,7,6,5,4]
Example 2:



Input: root = [3,2,1]

Output: [3,1,2]
Example 3:

Input: root = []

Output: []
Constraints:

0 <= The number of nodes in the tree <= 100.
-100 <= Node.val <= 100  */

//with helper recursive funcion

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
     * @return {TreeNode}
     */
    invertTree(root) {

        // DFS function to invert the tree
        function dfs(node) {

            // Base Case:
            // If the node is null, there is nothing to invert.
            if (node === null) return null;

            // ---------------------------------------------------
            // Step 1:
            // Recursively invert the left subtree.
            // ---------------------------------------------------
            let left = dfs(node.left);

            // ---------------------------------------------------
            // Step 2:
            // Recursively invert the right subtree.
            // ---------------------------------------------------
            let right = dfs(node.right);

            // ---------------------------------------------------
            // Step 3:
            // Swap the inverted left and right subtrees.
            // ---------------------------------------------------
            node.left = right;
            node.right = left;

            // Return the current node after inversion.
            return node;
        }

        // Start DFS from the root.
        return dfs(root);
    }
}


//without helper recursive function


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
     * @return {TreeNode}
     */
    invertTree(root) {

        // Base Case:
        // If the current node is null,
        // there is nothing to invert.
        if (root === null) return null;

        // ------------------------------------------
        // Step 1:
        // Recursively invert the left subtree.
        // ------------------------------------------
        let left = this.invertTree(root.left);

        // ------------------------------------------
        // Step 2:
        // Recursively invert the right subtree.
        // ------------------------------------------
        let right = this.invertTree(root.right);

        // ------------------------------------------
        // Step 3:
        // Swap the inverted subtrees.
        // ------------------------------------------
        root.left = right;
        root.right = left;

        // Return the current root.
        return root;
    }
}