/* Combination Sum II
Medium
Topics
Company Tags
Hints
You are given an array of integers candidates, which may contain duplicates, and a target integer target. Your task is to return a list of all unique combinations of candidates where the chosen numbers sum to target.

Each element from candidates may be chosen at most once within a combination. The solution set must not contain duplicate combinations.

You may return the combinations in any order and the order of the numbers in each combination can be in any order.

Example 1:

Input: candidates = [9,2,2,4,6,1,5], target = 8

Output: [
  [1,2,5],
  [2,2,4],
  [2,6]
]
Example 2:

Input: candidates = [1,2,3,4,5], target = 7

Output: [
  [1,2,4],
  [2,5],
  [3,4]
]
Constraints:

1 <= candidates.length <= 100
1 <= candidates[i] <= 50
1 <= target <= 30

*/

//Optimized Backtracking solution


function combinationSum2(candidates, target) {

    // Stores all valid combinations
    let res = [];

    // Sort the array
    // Example:
    // [10,1,2,7,6,1,5]
    // becomes
    // [1,1,2,5,6,7,10]
    //
    // Sorting helps us:
    // 1. Handle duplicates easily
    // 2. Stop early when sum becomes greater than target
    candidates.sort((a, b) => a - b);


    // start = index from where we can choose
    // arr   = current combination
    // sum   = current sum
    function dfs(start, arr, sum) {

        // If current sum equals target,
        // we found a valid combination
        if (sum === target) {

            // Make a COPY of arr
            // because arr will later change during backtracking
            res.push([...arr]);

            return;
        }


        // Try every possible number
        // starting from 'start'
        for (let i = start; i < candidates.length; i++) {

            // Because the array is sorted,
            // if current number makes sum > target,
            // all numbers after it will also be too large.
            //
            // So we can stop this loop.
            if (sum + candidates[i] > target) {
                break;
            }


            // Skip duplicate numbers at the SAME recursion level.
            //
            // Example:
            // [1,1,2,5,6,7,10]
            //
            // At dfs(0,...):
            // i = 0 → first 1 → ALLOW
            // i = 1 → second 1 → SKIP
            //
            // But at dfs(1,...):
            // i = 1 and start = 1
            // i > start is false
            // so the second 1 can be used.
            if (i > start && candidates[i] === candidates[i - 1]) {
                continue;
            }


            // CHOOSE
            // Add the current number to our combination
            arr.push(candidates[i]);


            // RECURSE
            //
            // Use i + 1 because every element
            // can be used only ONCE in Combination Sum II.
            //
            // If we choose index 2,
            // next search starts from index 3.
            dfs(i + 1, arr, sum + candidates[i]);


            // BACKTRACK
            //
            // Remove the number we just chose
            // so that we can try another number.
            arr.pop();
        }
    }


    // Start the recursion:
    //
    // start = 0
    // arr   = []
    // sum   = 0
    dfs(0, [], 0);


    // Return all valid combinations
    return res;
} 