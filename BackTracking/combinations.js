/* Combinations
Medium
Topics
Company Tags
You are given two integers n and k, return all possible combinations of k numbers chosen from the range [1, n].

You may return the answer in any order.

Example 1:

Input: n = 3, k = 2

Output: [
    [1,2],
    [1,3],
    [2,3]
]
Example 2:

Input: n = 3, k = 3

Output: [[1,2,3]]
Constraints:
   
1 <= k <= n <= 20  */  

class Solution {
    combine(n, k) {
        let res = [];

        function dfs(start, arr) {

            // 1. If arr contains k numbers, save it
            if (arr.length === k) {
                res.push([...arr]); // Copy arr into res
                return;             // Stop this branch
            }

            // 2. Try every number from start to n
            for (let i = start; i <= n; i++) {

                // 3. Choose the current number
                arr.push(i);

                // 4. Choose the next number after i
                dfs(i + 1, arr);

                // 5. Undo the choice and try another number
                arr.pop();
            }
        }

        // 6. Start from number 1 with an empty array
        dfs(1, []);

        // 7. Return all combinations
        return res;
    }
}