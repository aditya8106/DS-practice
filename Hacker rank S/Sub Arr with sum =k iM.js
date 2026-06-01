/* Subarrays with Given Sum and Bounded Maximum
Given an integer array nums and integers k and M, count the number of contiguous subarrays whose sum equals k and whose maximum element is at most M.

Example

Input

nums = [2, -1, 2, 1, -2, 3]
k = 3
M = 2
Output

2
Explanation

We need subarrays with sum = 3 and all elements ≤ 2. 
Also, any subarray containing 3 is invalid because 3 > M. Check all starts:

- From index 0: [2, -1, 2] → sum = 3, max = 2 → valid (count = 1).
- From index 2: [2, 1] → sum = 3, max = 2 → valid (count = 2). No other subarray qualifies. Thus the total count is 2.
Input Format

The first line contains an integer n denoting the number of elements in nums.
The next n lines contains an integer denoting elements in nums followed by the value of k & M.
Example

6 → number of elements in nums
2 → elements of nums
-1
2
1
-2
3
3 → value of k
2 → value of M
Constraints

0 <= nums.length <= 1000000
-10^9 <= nums[i] <= 10^9 for all 0 <= i < nums.length
-10^15 <= k <= 10^15
-10^9 <= M <= 10^9
Output Format

Returns a non-negative integer denoting the count of all contiguous subarrays of nums.
Sample Input 0

0
0
0
Sample Output 0

0
Sample Input 1

1
5
5
5
Sample Output 1

1 */  


function countSubarrays(nums, k, M) {
    let count = 0; // Initialize count of valid subarrays
    let sum = 0;// Initialize the current sum of the subarray
    let map = new Map();// Map to store the frequency of prefix sums
    map.set(0, 1);// Initialize the map with a prefix sum of 0 occurring once (to handle cases where a subarray itself equals k)
    for(let num of nums){
        sum += num;// Update the current sum with the current number
        if(num > M){ // If the current number exceeds M, we cannot include it in any valid subarray, so we reset the sum and map
            sum = 0; // sum becomes 0 because we are starting a new subarray after this point
            map.clear();// Clear the map because we are starting fresh and any previous prefix sums are no longer relevant
            map.set(0, 1);// Re-initialize the map with a prefix sum of 0 occurring once for the new subarray
            continue; // Skip the rest of the loop and move to the next number
        }
        if(map.has(sum - k)){ // Check if there is a prefix sum that, when subtracted from the current sum, equals k (i.e., if there is a previous prefix sum that would make the current subarray sum to k)
            count += map.get(sum - k); // If such a prefix sum exists, it means we have found a valid subarray that sums to k, and we can add the count of that prefix sum to our total count
        }
        map.set(sum, (map.get(sum) || 0) + 1); // Update the map with the current sum and its count (if the sum already exists in the map, increment its count; otherwise, set it to 1)
    }
    return count;// Return the total count of valid subarrays
}

console.log(countSubarrays([2, -1, 2, 1, -2, 3], 3, 2)); // Output: 2
