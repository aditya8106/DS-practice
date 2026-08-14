/*  House Robber III
Medium
Topics
Company Tags
The thief has found himself a new place for his thievery again. There is only one entrance to this area, called root.

In this new place, there are houses and each house has its only one parent house. All houses in this place form a binary tree. It will automatically contact the police if two directly-linked houses were broken.

You are given the root of the binary tree, return the maximum amount of money the thief can rob without alerting the police.

Example 1:



Input: root = [1,4,null,2,3,3]

Output: 7
Explanation: Maximum amount of money the thief can rob = 4 + 3 = 7

Example 2:



Input: root = [1,null,2,3,5,4,2]

Output: 12
Explanation: Maximum amount of money the thief can rob = 1 + 4 + 2 + 5 = 12

Constraints:

1 <= The number of nodes in the tree <= 10,000.
0 <= Node.val <= 10,000
*/

//optimal solution using dp using recursive function

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
 * @return {number}
 */

var rob = function(root) {

    // DFS returns:
    // [0] -> maximum money if we ROB this node
    // [1] -> maximum money if we DON'T ROB this node
    function dfs(node) {

        // If there is no node, nothing can be robbed
        if (node === null) {
            return [0, 0];
        }

        // Recursively calculate the result for the left subtree
        // left = [rob left, don't rob left]
        let left = dfs(node.left);

        // Recursively calculate the result for the right subtree
        // right = [rob right, don't rob right]
        let right = dfs(node.right);

        // If we ROB the current node:
        // We CANNOT rob its left or right children
        //
        // left[1]  -> don't rob left child
        // right[1] -> don't rob right child
        let rob = node.val + left[1] + right[1];

        // If we DON'T ROB the current node:
        // We can either rob or not rob each child.
        // So choose whichever gives more money.
        let notrob =
            Math.max(left[0], left[1]) +
            Math.max(right[0], right[1]);

        // Return both possibilities to the parent
        // [rob current, don't rob current]
        return [rob, notrob];
    }

    // Calculate both possibilities for the root
    let res = dfs(root);

    // At the root, choose whichever gives more money
    return Math.max(res[0], res[1]);
};