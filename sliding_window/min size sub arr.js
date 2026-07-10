/*  Minimum Size Subarray Sum
Medium
Topics
Company Tags
You are given an array of positive integers nums and a positive integer target, return the minimal length of a subarray whose sum is greater than or equal to target. If there is no such subarray, return 0 instead.

A subarray is a contiguous non-empty sequence of elements within an array.

Example 1:

Input: target = 10, nums = [2,1,5,1,5,3]

Output: 3
Explanation: The subarray [5,1,5] has the minimal length under the problem constraint.

Example 2:

Input: target = 5, nums = [1,2,1]

Output: 0
Constraints:

1 <= nums.length <= 100,000
1 <= nums[i] <= 10,000
1 <= target <= 1,000,000,000
Follow up: If you have figured out the O(n) solution, try coding another solution of which the time complexity is O(n log(n)).

 */  


// ======================================================
// Minimum Size Subarray Sum
// Problem:
// Given an array of POSITIVE integers and a target,
// return the minimum length of a contiguous subarray
// whose sum is greater than or equal to the target.
//
// If no such subarray exists, return 0.
// ======================================================



// ======================================================
// Approach 1 : Brute Force
// Time Complexity : O(n²)
// Space Complexity : O(1)
// ======================================================

function MinSizeSubArr(nums, target) {

    // Stores the minimum length found so far.
    // Infinity means "no valid subarray found yet."
    let minLen = Infinity;

    // Choose every element as the starting point.
    for (let i = 0; i < nums.length; i++) {

        // Running sum for the current starting index.
        let sum = 0;

        // Extend the subarray one element at a time.
        for (let j = i; j < nums.length; j++) {

            // Add current element.
            sum += nums[j];

            // If the current subarray satisfies the condition...
            if (sum >= target) {

                // Update the minimum length.
                minLen = Math.min(minLen, j - i + 1);

                // Since all numbers are POSITIVE,
                // extending this subarray will only make it longer.
                // So stop checking this starting index.
                break;
            }
        }
    }

    // If no valid subarray was found.
    if (minLen === Infinity) {
        return 0;
    }

    return minLen;
}

console.log(MinSizeSubArr([2, 1, 5, 1, 5, 3], 10));



// ======================================================
// Approach 2 : Sliding Window (Optimal)
// Time Complexity : O(n)
// Space Complexity : O(1)
// ======================================================

function MinSizeSubArr2(nums, target) {

    // Minimum length found.
    let minLen = Infinity;

    // Left pointer of the window.
    let left = 0;

    // Current window sum.
    let sum = 0;

    // Right pointer expands the window.
    for (let right = 0; right < nums.length; right++) {

        // Include the current element.
        sum += nums[right];

        // While the window is valid...
        while (sum >= target) {

            // Update the smallest window length.
            minLen = Math.min(minLen, right - left + 1);

            // Remove the leftmost element.
            sum -= nums[left];

            // Shrink the window.
            left++;
        }
    }

    // No valid subarray found.
    if (minLen === Infinity) {
        return 0;
    }

    return minLen;
}

console.log(MinSizeSubArr2([2, 1, 5, 1, 5, 3], 10));