/* Same Binary Tree
Easy
Topics
Company Tags
Hints
Given the roots of two binary trees p and q, return true if the trees are equivalent, otherwise return false.

Two binary trees are considered equivalent if they share the exact same structure and the nodes have the same values.

Example 1:



Input: p = [1,2,3], q = [1,2,3]

Output: true
Example 2:



Input: p = [4,7], q = [4,null,7]

Output: false
Example 3:



Input: p = [1,2,3], q = [1,3,2]

Output: false
Constraints:

0 <= The number of nodes in both trees <= 100.
-100 <= Node.val <= 100
*/

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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {boolean}
     */
    isSameTree(p, q) {

        // Compare two trees using DFS
        function dfs(node1, node2) {

            // Case 1: Both nodes are null
            // Both trees ended at the same place
            if (node1 === null && node2 === null) {
                return true;
            }

            // Case 2: One node is null and the other isn't
            // Structure is different
            if (node1 === null || node2 === null) {
                return false;
            }

            // Case 3: Values are different
            if (node1.val !== node2.val) {
                return false;
            }

            // Compare left subtrees
            let left = dfs(node1.left, node2.left);

            // Compare right subtrees
            let right = dfs(node1.right, node2.right);

            // Trees are same only if BOTH left and right are same
            return left && right;
        }

        // Start comparing from the roots
        return dfs(p, q);
    }
}  

