/* Maximum Ascending Subarray Sum
Easy
Topics
Company Tags
You are given an array of positive integers nums, return the maximum possible sum of an strictly increasing subarray in nums.

A subarray is defined as a contiguous sequence of numbers in an array.

Note: An array is said to be strictly increasing if each element is strictly greater than its previous one (if exists).

Example 1:

Input: nums = [10,20,30,5,10,50]

Output: 65
Explanation: [5,10,50] is the ascending subarray with the maximum sum of 65.

Example 2:

Input: nums = [10,20,30,40,50]

Output: 150
Explanation: [10,20,30,40,50] is the ascending subarray with the maximum sum of 150.

Example 3:

Input: nums = [12,17,15,13,10,11,12]

Output: 33
Explanation: [10,11,12] is the ascending subarray with the maximum sum of 33.

Constraints:

1 <= nums.length <= 100
1 <= nums[i] <= 100  */

function maxAscendingSum(nums) {
    let currSum = nums[0];
    let maxSum = nums[0];

    for (let i = 1; i < nums.length; i++) {

        // If current number is greater than previous,
        // the ascending subarray continues
        if (nums[i] > nums[i - 1]) {
            currSum += nums[i];
        } 
        
        // Ascending order broke, start a new subarray
        else {
            currSum = nums[i];
        }

        // Keep track of the maximum sum
        maxSum = Math.max(maxSum, currSum);
    }

    return maxSum;
}


// Example
let nums = [10, 20, 30, 5, 10, 50];

console.log(maxAscendingSum(nums));