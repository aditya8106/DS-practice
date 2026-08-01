/* Delete Node in a BST
Medium
Topics
Company Tags
You are given a root node reference of a BST and a key, delete the node with the given key in the BST, if present. Return the root node reference (possibly updated) of the BST.

Basically, the deletion can be divided into two stages:

Search for a node to remove.
If the node is found, delete the node.
Note: There can be multiple results after deleting the node, return any one of them.

Example 1:



Input: root = [5,3,9,1,4], key = 3

Output: [5,4,9,1]
Explanation: Another valid answer is:



Example 2:

Input: root = [5,3,6,null,4,null,10,null,null,7], key = 3

Output: [5,4,6,null,null,null,10,7]
Constraints:

0 <= The number of nodes in the tree <= 10,000.
-100,000 <= key, Node.val <= 100,000
All the values Node.val are unique.  */

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
     * @param {number} key
     * @return {TreeNode}
     */
    deleteNode(root, key) {

        // Base Case:
        // Tree is empty or node not found.
        if (root === null) return null;

        // ==================================================
        // STEP 1 : Search for the node to delete
        // ==================================================

        // If key is smaller, search in left subtree.
        if (key < root.val) {

            // Left subtree may change after deletion,
            // so reconnect it.
            root.left = this.deleteNode(root.left, key);

        }

        // If key is greater, search in right subtree.
        else if (key > root.val) {

            // Right subtree may change after deletion,
            // so reconnect it.
            root.right = this.deleteNode(root.right, key);

        }

        // ==================================================
        // STEP 2 : Node Found
        // ==================================================
        else {

            // -------------------------------
            // CASE 1 : Leaf Node
            // -------------------------------
            if (root.left === null && root.right === null) {

                // Remove this node.
                return null;
            }

            // -------------------------------
            // CASE 2 : Only Left Child
            // -------------------------------
            else if (root.left !== null && root.right === null) {

                // Left child becomes new subtree root.
                return root.left;
            }

            // -------------------------------
            // CASE 3 : Only Right Child
            // -------------------------------
            else if (root.left === null && root.right !== null) {

                // Right child becomes new subtree root.
                return root.right;
            }

            // -------------------------------
            // CASE 4 : Two Children
            // -------------------------------
            else {

                // Find inorder successor
                // (smallest value in right subtree).
                let curr = root.right;

                while (curr.left !== null) {
                    curr = curr.left;
                }

                // Copy successor value.
                root.val = curr.val;

                // Delete original successor.
                root.right = this.deleteNode(root.right, curr.val);
            }
        }

        // Return updated subtree root.
        return root;
    }
}