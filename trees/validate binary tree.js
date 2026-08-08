/* Valid Binary Search Tree
Medium
Topics
Company Tags
Hints
Given the root of a binary tree, return true if it is a valid binary search tree, otherwise return false.

A valid binary search tree satisfies the following constraints:

The left subtree of every node contains only nodes with keys less than the node's key.
The right subtree of every node contains only nodes with keys greater than the node's key.
Both the left and right subtrees are also binary search trees.
Example 1:



Input: root = [2,1,3]

Output: true
Example 2:



Input: root = [1,2,3]

Output: false
Explanation: The root node's value is 1 but its left child's value is 2 which is greater than 1.

Constraints:

1 <= The number of nodes in the tree <= 10000.
-1000000000 <= Node.val <= 1000000000 */

//optimmal solution using  recursion dfs

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
     * @return {boolean}
     */
    isValidBST(root) {

        function dfs(root, min, max) {

            // If node is null, it is valid
            if (root === null) {
                return true;
            }

            // Node must be inside the allowed range
            if (root.val <= min || root.val >= max) {
                return false;
            }

            // Left subtree
            let left = dfs(root.left, min, root.val);

            // Right subtree
            let right = dfs(root.right, root.val, max);

            return left && right;
        }

        return dfs(root, -Infinity, Infinity);
    }
}