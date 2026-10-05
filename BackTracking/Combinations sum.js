/* Combination Sum
Medium
Topics
Company Tags
Hints
You are given an array of distinct integers nums and a target integer target. Your task is to return a list of all unique combinations of nums where the chosen numbers sum to target.

The same number may be chosen from nums an unlimited number of times. Two combinations are the same if the frequency of each of the chosen numbers is the same, otherwise they are different.

You may return the combinations in any order and the order of the numbers in each combination can be in any order.

Example 1:

Input:
nums = [2,5,6,9]
target = 9

Output: [[2,2,5],[9]]
Explanation:
2 + 2 + 5 = 9. We use 2 twice, and 5 once.
9 = 9. We use 9 once.

Example 2:

Input:
nums = [3,4,5]
target = 16

Output: [[3,3,3,3,4],[3,3,5,5],[4,4,4,4],[3,4,4,5]]
Example 3:

Input:
nums = [3]
target = 5

Output: []
Constraints:

All elements of nums are distinct.
1 <= nums.length <= 20
2 <= nums[i] <= 30
2 <= target <= 30 */



class Solution {
    /**
     * @param {number[]} nums - Array of distinct candidate numbers
     * @param {number} target - Target sum to achieve
     * @returns {number[][]} - List of unique combinations that sum to target
     */
    combinationSum(nums, target) {
        // Array to store all valid combinations found
        const result = [];

        /**
         * Helper function to perform Depth-First Search with Backtracking
         * 
         * @param {number} index - Current candidate index in `nums`
         * @param {number[]} currentCombination - Array storing chosen numbers for current path
         * @param {number} currentSum - Running total of numbers in `currentCombination`
         */
        function dfs(index, currentCombination, currentSum) {
            // BASE CASE 1: Pruning / Out of Bounds
            // Stop exploring if index is out of bounds or current sum exceeds target
            if (index >= nums.length || currentSum > target) {
                return;
            }

            // BASE CASE 2: Success
            // If running sum equals target, we found a valid combination
            if (currentSum === target) {
                // Must create a copy (spread operator [...]) so future pops don't mutate this result
                result.push([...currentCombination]);
                return;
            }

            // DECISION 1: Include nums[index]
            // Pick current number and recurse (stay at same index since reuse is allowed)
            currentCombination.push(nums[index]);
            dfs(index, currentCombination, currentSum + nums[index]);

            // BACKTRACK: Remove the last added element before exploring Decision 2
            currentCombination.pop();

            // DECISION 2: Exclude nums[index]
            // Skip current number and move to the next index (index + 1)
            dfs(index + 1, currentCombination, currentSum);
        }

        // Start DFS starting from index 0 with an empty combination and sum of 0
        dfs(0, [], 0);

        return result;
    }
}

// ==========================================
// Example Usage / Test Run in VS Code Node.js
// ==========================================
if (typeof require !== 'undefined' && require.main === module) {
    const solver = new Solution();
    
    const nums = [2, 5, 6, 9];
    const target = 9;
    
    const output = solver.combinationSum(nums, target);
    console.log("Input:", { nums, target });
    console.log("Output:", output);
    // Expected Output: [[2, 2, 5], [9]]
}