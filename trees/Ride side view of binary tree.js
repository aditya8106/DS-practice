/* Binary Tree Right Side View
Medium
Topics
Company Tags
Hints
You are given the root of a binary tree. Return only the values of the nodes that are visible from the right side of the tree, ordered from top to bottom.

Example 1:



Input: root = [1,2,3,null,4,null,5]

Output: [1,3,5]
Example 2:



Input: root = [1,2,3,4,null,null,null,5]

Output: [1,3,4,5]
Example 3:

Input: root = [1,null,2]

Output: [1,2]
Example 4:

Input: root = []

Output: []

Constraints:

0 <= number of nodes in the tree <= 100
-100 <= Node.val <= 100 */


//solution using .shift()

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val === undefined ? 0 : val);
 *     this.left = (left === undefined ? null : left);
 *     this.right = (right === undefined ? null : right);
 * }
 */

/**
 * Returns the nodes visible from the right side of the binary tree.
 *
 * Approach:
 * - Perform a level-order (BFS) traversal.
 * - Before processing each level, the last node in the queue
 *   represents the rightmost node of that level.
 * - Add its value to the result.
 *
 * Time Complexity:
 * O(n) (Conceptually)
 * Note: In JavaScript, Array.shift() is O(n), so in the worst case
 * this implementation can degrade to O(n²).
 *
 * Space Complexity:
 * O(w)
 * where w is the maximum width of the tree.
 */

var rightSideView = function(root) {

    // If the tree is empty, return an empty array.
    if (root === null) return [];

    // Queue used for BFS.
    let queue = [root];

    // Stores the right side view.
    let result = [];

    while (queue.length > 0) {

        // Number of nodes in the current level.
        let levelSize = queue.length;

        // Last node of the current level is visible from the right.
        result.push(queue[levelSize - 1].val);

        // Process every node in the current level.
        for (let i = 0; i < levelSize; i++) {

            let current = queue.shift();

            if (current.left !== null) {
                queue.push(current.left);
            }

            if (current.right !== null) {
                queue.push(current.right);
            }
        }
    }

    return result;
};

//optimal solution 


/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val === undefined ? 0 : val);
 *     this.left = (left === undefined ? null : left);
 *     this.right = (right === undefined ? null : right);
 * }
 */

/**
 * Returns the nodes visible from the right side of the binary tree.
 *
 * Approach:
 * - Use BFS with a queue.
 * - Instead of using shift(), maintain a front pointer.
 * - This avoids moving elements inside the array.
 *
 * Time Complexity:
 * O(n)
 *
 * Space Complexity:
 * O(w)
 * where w is the maximum width of the tree.
 */

var rightSideView = function(root) {

    // If the tree is empty, return an empty array.
    if (root === null) return [];

    // Queue used for BFS.
    let queue = [root];

    // Front index of the queue.
    let front = 0;

    // Stores the right side view.
    let result = [];

    while (front < queue.length) {

        // Number of nodes in the current level.
        let levelSize = queue.length - front;

        // The last node of this level is the rightmost node.
        result.push(queue[front + levelSize - 1].val);

        // Process all nodes in the current level.
        for (let i = 0; i < levelSize; i++) {

            let current = queue[front];
            front++;

            // Add left child to the queue.
            if (current.left !== null) {
                queue.push(current.left);
            }

            // Add right child to the queue.
            if (current.right !== null) {
                queue.push(current.right);
            }
        }
    }

    return result;
};   