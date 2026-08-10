/* Kth Smallest Integer in BST
Medium
Topics
Company Tags
Hints
Given the root of a binary search tree, and an integer k, return the kth smallest value (1-indexed) in the tree.

A binary search tree satisfies the following constraints:

The left subtree of every node contains only nodes with keys less than the node's key.
The right subtree of every node contains only nodes with keys greater than the node's key.
Both the left and right subtrees are also binary search trees.
Example 1:



Input: root = [2,1,3], k = 1

Output: 1
Example 2:



Input: root = [4,3,5,2,null], k = 4

Output: 5
Constraints:

1 <= k <= The number of nodes in the tree <= 10,000.
0 <= Node.val <= 10,000
*/

//optimal solution using iterative inorder traversal


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
     * @param {number} k
     * @return {number}
     */
    kthSmallest(root, k) {
        let cnt = 0;

        function dfs(node) {
            if (node === null) return null;

            // Search left subtree
            let left = dfs(node.left);

            // If answer was found in left subtree
            if (left !== null) {
                return left;
            }

            // Visit current node
            cnt++;

            if (cnt === k) {
                return node.val;
            }

            // Search right subtree
            let right = dfs(node.right);

            // If answer was found in right subtree
            if (right !== null) {
                return right;
            }

            return null;
        }

        return dfs(root);
    }
}