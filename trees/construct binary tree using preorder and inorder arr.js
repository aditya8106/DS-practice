/* Construct Binary Tree from Preorder and Inorder Traversal
Medium
Topics
Company Tags
Hints
You are given two integer arrays preorder and inorder.

preorder is the preorder traversal of a binary tree
inorder is the inorder traversal of the same tree
Both arrays are of the same size and consist of unique values.
Rebuild the binary tree from the preorder and inorder traversals and return its root.

Example 1:



Input: preorder = [1,2,3,4], inorder = [2,1,3,4]

Output: [1,2,3,null,null,null,4]
Example 2:

Input: preorder = [1], inorder = [1]

Output: [1]
Constraints:

1 <= inorder.length <= 2001.
inorder.length == preorder.length
-1000 <= preorder[i], inorder[i] <= 1000
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val === undefined ? 0 : val)
 *     this.left = (left === undefined ? null : left)
 *     this.right = (right === undefined ? null : right)
 * }
 */

/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */

var buildTree = function(preorder, inorder) {

    // Map: value -> index in inorder
    const inMap = new Map();

    for (let i = 0; i < inorder.length; i++) {
        inMap.set(inorder[i], i);
    }

    // Keeps track of which element we are currently
    // taking from preorder
    let preorderIndex = 0;

    // Function to build a subtree
    // using inorder[left ... right]
    function build(left, right) {

        // No elements in this range
        if (left > right) {
            return null;
        }

        // Preorder gives us the root
        const rootValue = preorder[preorderIndex];
        preorderIndex++;

        const root = new TreeNode(rootValue);

        // Find root's position in inorder
        const rootIndex = inMap.get(rootValue);

        // Build left subtree
        root.left = build(left, rootIndex - 1);

        // Build right subtree
        root.right = build(rootIndex + 1, right);

        return root;
    }

    // Initially, the whole inorder array belongs
    // to the tree
    return build(0, inorder.length - 1);
};

//using two pointer approach
