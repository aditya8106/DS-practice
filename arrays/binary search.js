/*  Binary search is a search algorithm that finds the position of a target value within a sorted array. Binary search compares the target value to the middle element of the array; if they are not equal, the half in which the target cannot lie is eliminated and the search continues on the remaining half until it is successful or the remaining half is empty.

Given an array of distinct integers nums, sorted in ascending order, and an integer target, return the index of target if it is present in nums, or -1 if it is not present in nums.
You are given an array of distinct integers nums, sorted in ascending order, and an integer target.

Implement a function to search for target within nums. If it exists, then return its index, otherwise, return -1.

Your solution must run in 
O
(
l
o
g
n
)
O(logn) time.

Example 1:

Input: nums = [-1,0,2,4,6,8], target = 4

Output: 3
Example 2:

Input: nums = [-1,0,2,4,6,8], target = 3

Output: -1*/

var search = function(nums, target) {
    nums.sort((a, b) => a - b); // sort the array in ascending order
    let left = 0;
    let right = nums.length - 1;
    while (left <= right) {

        let mid = left + Math.floor((right - left) / 2); // to avoid overflow
        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return -1;
}
console.log(search([-1,0,2,4,6,8], 4));