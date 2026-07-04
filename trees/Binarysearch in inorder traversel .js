/*   NeetCode.io Logo


Binary Tree Inorder Traversal
Easy
Topics
Company Tags
You are given the root of a binary tree, return the inorder traversal of its nodes' values.

Example 1:



Input: root = [1,2,3,4,5,6,7]

Output: [4,2,5,1,6,3,7]
Example 2:



Input: root = [1,2,3,null,4,5,null]

Output: [2,4,1,5,3]
Example 3:

Input: root = []

Output: []
Constraints:

0 <= number of nodes in the tree <= 100
-100 <= Node.val <= 100
Follow up: Recursive solution is trivial, could you do it iteratively?



Topics

Company Tags
Seen this question in a real interview?
Yes
No
Acceptance Rate
83.1%

Solution 1
+

NeetBot
|

Hint
|
|
Ln 39, Col 1

Ask NeetBot

151617181920212223241116class Solution {    inorderTraversal(root) {
Accepted

Passed test cases: 22 / 22


Visualize code
You have successfully completed this problem!
*/   

function inorderTraversal(root) {
        const result = [];

    function dfs(node) {

        // Base case
        if (node === null) return;

        // Visit Left
        dfs(node.left);

        // Visit Root
        result.push(node.val);

        // Visit Right
        dfs(node.right);
    }

    dfs(root);

    return result;
    }
