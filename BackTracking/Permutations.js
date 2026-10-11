/* Permutations
Medium
Topics
Company Tags
Hints
Given an array nums of unique integers, return all the possible permutations. You may return the answer in any order.

Example 1:

Input: nums = [1,2,3]

Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
Example 2:

Input: nums = [7]

Output: [[7]]
Constraints:

1 <= nums.length <= 6
-10 <= nums[i] <= 10

*/


var permute = function(nums) {
    let res = []; // Stores all possible permutations

    function dfs(curr, visited) {

        // STEP 1: If curr contains all numbers,
        // we have completed one permutation.
        if (curr.length === nums.length) {
            res.push([...curr]); // Save a COPY of curr
            return; // Go back to the previous DFS call
        }

        // STEP 2: Try every number in nums
        for (let i = 0; i < nums.length; i++) {

            // If this number is already selected,
            // skip it and check the next number.
            if (visited[i]) continue;

            // STEP 3: Choose the number
            visited[i] = true; // Mark it as used
            curr.push(nums[i]); // Add it to the current permutation

            // STEP 4: Choose the next number recursively
            dfs(curr, visited);

            // STEP 5: BACKTRACK after DFS returns
            curr.pop(); // Remove the last selected number
            visited[i] = false; // Make the number available again
        }
        // When the loop finishes, this DFS call returns automatically.
    }

    // Start with an empty permutation and all numbers unused
    dfs([], new Array(nums.length).fill(false));

    // Return all completed permutations
    return res;
};
