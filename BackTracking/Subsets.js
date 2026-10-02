/*  Subsets
Medium
Topics
Company Tags
Hints
Given an array nums of unique integers, return all possible subsets of nums.

The solution set must not contain duplicate subsets. You may return the solution in any order.

Example 1:

Input: nums = [1,2,3]

Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
Example 2:

Input: nums = [7]

Output: [[],[7]]
Constraints:

1 <= nums.length <= 10
-10 <= nums[i] <= 10  */

//Optimal solution
function subsets(nums) {
            let res = [];
            let curr = [];

            function dfs(ind) {

                // If ind reaches nums.length,
                // we have made a decision for every element.
                // So curr is one complete subset.
                if (ind === nums.length) {
                    res.push([...curr]);   // Store a copy of curr
                    return;                // Go back to the previous call
                }

                // =========================
                // CHOICE 1: TAKE nums[ind]
                // =========================

                // Add the current element to the subset
                curr.push(nums[ind]);

                // Move to the next index
                // Example: ind = 0 → dfs(1)
                dfs(ind + 1);


                // =========================
                // BACKTRACK
                // =========================

                // Remove the element we just added
                // so we can try the other choice
                curr.pop();


                // =========================
                // CHOICE 2: DON'T TAKE nums[ind]
                // =========================

                // Move to the next index without adding nums[ind]
                dfs(ind + 1);
            }

            // Start from index 0
            dfs(0);

            // Return all generated subsets
            return res
        }

    // Example usage:
    console.log(subsets([1, 2, 3]));
    // Output: [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]