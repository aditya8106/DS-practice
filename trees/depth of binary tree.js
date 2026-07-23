/* Maximum Depth of Binary Tree
Easy
Topics
Company Tags
Hints
Given the root of a binary tree, return its depth.

The depth of a binary tree is defined as the number of nodes along the longest path from the root node down to the farthest leaf node.

Example 1:



Input: root = [1,2,3,null,null,4]

Output: 3
Example 2:

Input: root = []

Output: 0
Constraints:

0 <= The number of nodes in the tree <= 100.
-100 <= Node.val <= 100
 */

//  with helper function
class TreeNode {
    constructor(val = 0, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

function maxDepth(root) {

    function dfs(node) {
    if (node === null) {
        console.log("Reached null -> return 0");
        return 0;
    }

    console.log("Visiting:", node.val);

    let left = dfs(node.left);
    let right = dfs(node.right);

    let depth = 1 + Math.max(left, right);

    console.log(
        `Node ${node.val} -> left=${left}, right=${right}, returns ${depth}`
    );

    return depth;
}
    return dfs(root);
}

// ------------ Create Tree ------------
//
//          10
//         /  \
//        5    20
//       / \     \
//      3   7     30
//     /
//    1
//

let root = new TreeNode(10);

root.left = new TreeNode(5);
root.right = new TreeNode(20);

root.left.left = new TreeNode(3);
root.left.right = new TreeNode(7);

root.left.left.left = new TreeNode(1);

root.right.right = new TreeNode(30);

console.log(maxDepth(root)); // 4