/*  
CONSTRUCT BINARY TREE USING SORTED ARRAY

Given an integer array nums where the elements are sorted in ascending order, convert it to a height-balanced binary search tree.

 

Example 1:


Input: nums = [-10,-3,0,5,9]
Output: [0,-3,9,-10,null,5]
Explanation: [0,-10,5,null,-3,null,9] is also accepted:

Example 2:


Input: nums = [1,3]
Output: [3,1]
Explanation: [1,null,3] and [3,1] are both height-balanced BSTs.
 

Constraints:

1 <= nums.length <= 104
-104 <= nums[i] <= 104
nums is sorted in a strictly increasing order. */



//OPTIMAL SOLUTION 
class TreeNode {
    constructor(val = 0, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

var sortedArrayToBST = function(nums) {

    function dfs(left, right) {

        // Base case: no elements in this range
        if (left > right) {
            return null;
        }

        // Find middle element
        let mid = Math.floor((left + right) / 2);

        // Middle element becomes the root
        let root = new TreeNode(nums[mid]);

        // Build left subtree
        root.left = dfs(left, mid - 1);

        // Build right subtree
        root.right = dfs(mid + 1, right);

        return root;
    }

    return dfs(0, nums.length - 1);
};


// Test
let nums = [-10, -3, 0, 5, 9];

let root = sortedArrayToBST(nums);

console.log(root);