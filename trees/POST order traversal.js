/* Binary Tree Postorder Traversal
Easy
Topics
Company Tags
You are given the root of a binary tree, return the postorder traversal of its nodes' values.

Example 1:



Input: root = [1,2,3,4,5,6,7]

Output: [4,5,2,6,7,3,1]
Example 2:



Input: root = [1,2,3,null,4,5,null]

Output: [4,2,5,3,1]
Example 3:

Input: root = []

Output: []
Constraints:

0 <= number of nodes in the tree <= 100
-100 <= Node.val <= 175 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number[]}
     */
    postorderTraversal(root) {

        // Array to store the postorder traversal
        let ans = [];

        // Recursive DFS function
        function dfs(node) {

            // Base Case:
            // If the current node is null, simply return.
            if (node === null) return;

            // Step 1: Traverse the left subtree
            dfs(node.left);

            // Step 2: Traverse the right subtree
            dfs(node.right);

            // Step 3: Visit the current node
            // (This is what makes it Postorder: Left -> Right -> Root)
            ans.push(node.val);
        }

        // Start DFS from the root
        dfs(root);

        // Return the final traversal
        return ans;
    }
}