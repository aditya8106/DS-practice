/*  Monotonic Array
Easy
Topics
Company Tags
An array is monotonic if it is either monotone increasing or monotone decreasing.

An array nums is monotone increasing if for all i <= j, nums[i] <= nums[j]. An array nums is monotone decreasing if for all i <= j, nums[i] >= nums[j].

You are given an integer array nums, return true if the given array is monotonic, or false otherwise.

Example 1:

Input: nums = [1,2,2,3]

Output: true
Example 2:

Input: nums = [6,5,4,4]

Output: true
Example 3:

Input: nums = [1,3,2]

Output: false
Constraints:

1 <= nums.length <= 100,000
-100,000 <= nums[i] <= 100,000 */

function isMonotonic(nums) {

    let increasing = true;
    let decreasing = true;

    // Check every adjacent pair
    for (let i = 0; i < nums.length - 1; i++) {

        // If current number is greater than next,
        // array cannot be increasing
        if (nums[i] > nums[i + 1]) {
            increasing = false;
        }

        // If current number is smaller than next,
        // array cannot be decreasing
        if (nums[i] < nums[i + 1]) {
            decreasing = false;
        }
    }

    // If either increasing or decreasing is true,
    // the array is monotonic
    return increasing || decreasing;
}


// Test cases
let nums1 = [1, 2, 2, 3];
let nums2 = [6, 5, 4, 4];
let nums3 = [1, 3, 2];

console.log(isMonotonic(nums1)); // true
console.log(isMonotonic(nums2)); // true
console.log(isMonotonic(nums3)); // false