/*  Search in Rotated Sorted Array II
Medium
Topics
Company Tags
You are given an array of length n which was originally sorted in non-decreasing order (not necessarily with distinct values). It has now been rotated between 1 and n times. For example, the array nums = [1,2,3,4,5,6] might become:

[3,4,5,6,1,2] if it was rotated 4 times.
[1,2,3,4,5,6] if it was rotated 6 times.
Given the rotated sorted array nums and an integer target, return true if target is in nums, or false if it is not present.

You must decrease the overall operation steps as much as possible.

Example 1:

Input: nums = [3,4,4,5,6,1,2,2], target = 1

Output: true
Example 2:

Input: nums = [3,5,6,0,0,1,2], target = 4

Output: false
Constraints:

1 <= nums.length <= 5000
-10,000 <= target, nums[i] <= 10,000
nums is guaranteed to be rotated at some pivot.
  */


// optimal soltion using binary search 
function OptimalSearch(nums , target){
    let left = 0 
    let right = nums.length - 1
    while (left <= right) {

    // Find the middle index
    let mid = Math.floor((left + right) / 2);

    // Target found
    if (nums[mid] === target) {
        return true;
    }

    // If left, mid, and right are all equal,
    // we cannot determine which half is sorted.
    // Remove the duplicate boundaries.
    else if (nums[left] === nums[mid] && nums[mid] === nums[right]) {
        left++;
        right--;
    }

    // Left half is sorted
    else if (nums[left] <= nums[mid]) {

        // Check if target lies within the left sorted half
        if (target >= nums[left] && target < nums[mid]) {
            right = mid - 1;   // Search left half
        } else {
            left = mid + 1;    // Search right half
        }

    }

    // Right half is sorted
    else {

        // Check if target lies within the right sorted half
        if (target > nums[mid] && target <= nums[right]) {
            left = mid + 1;    // Search right half
        } else {
            right = mid - 1;   // Search left half
        }

    }
}

// Target not found
return false;


}
console.log(OptimalSearch(nums = [3,4,4,5,6,1,2,2], target = 1))