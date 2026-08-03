/*  
Binary Tree Level Order Traversal
Medium
Topics
Company Tags
Hints
Given a binary tree root, return the level order traversal of it as a nested list, where each sublist contains the values of nodes at a particular level in the tree, from left to right.

Example 1:



Input: root = [1,2,3,4,5,6,7]

Output: [[1],[2,3],[4,5,6,7]]
Example 2:

Input: root = [1]

Output: [[1]]
Example 3:

Input: root = []

Output: []
Constraints:

0 <= The number of nodes in the tree <= 1000.
-1000 <= Node.val <= 1000


*/

//optimal solution using 3 helper queues and Time complexity: O(n) and Space complexity: O(n)

/**
 * Binary Tree Level Order Traversal (BFS)
 *
 * Pattern:
 * - Breadth First Search (BFS)
 * - Queue
 *
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */

// Definition of a Binary Tree Node
class TreeNode {
    constructor(val = 0, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

/**
 * Returns the level order traversal of a binary tree.
 *
 * @param {TreeNode} root
 * @returns {number[][]}
 */
function levelOrder(root) {

    // If the tree is empty, return an empty array.
    if (root === null) {
        return [];
    }

    // Queue is used for BFS traversal.
    const queue = [];

    // Final answer.
    const result = [];

    // Start BFS from the root node.
    queue.push(root);

    // Continue until all nodes are processed.
    while (queue.length) {

        // Number of nodes present in the current level.
        const levelSize = queue.length;

        // Stores values of the current level.
        const level = [];

        // Process exactly one level.
        for (let i = 0; i < levelSize; i++) {

            // Remove the first node from the queue.
            const current = queue.shift();

            // Store only the node's value.
            level.push(current.val);

            // Add left child if it exists.
            if (current.left) {
                queue.push(current.left);
            }

            // Add right child if it exists.
            if (current.right) {
                queue.push(current.right);
            }
        }

        // Store the completed level.
        result.push(level);
    }

    return result;
}

/* ---------------- Example ---------------- */

const root =
    new TreeNode(
        1,
        new TreeNode(
            2,
            new TreeNode(4),
            new TreeNode(5)
        ),
        new TreeNode(
            3,
            new TreeNode(6),
            new TreeNode(7)
        )
    );

console.log(levelOrder(root));

/*
Output:

[
  [1],
  [2, 3],
  [4, 5, 6, 7]
]
*/