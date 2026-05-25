/* Maximum Count of Positive Integer and Negative Integer 
Given an array nums sorted in non-decreasing order, return the maximum between the number of positive integers and the number of negative integers.

In other words, if the number of positive integers in nums is pos and the number of negative integers is neg, then return the maximum of pos and neg.
Note that 0 is neither positive nor negative.

 

Example 1:

Input: nums = [-2,-1,-1,1,2,3]
Output: 3
Explanation: There are 3 positive integers and 3 negative integers. The maximum count among them is 3.
Example 2:

Input: nums = [-3,-2,-1,0,0,1,2]
Output: 3
Explanation: There are 2 positive integers and 3 negative integers. The maximum count among them is 3.
Example 3:

Input: nums = [5,20,66,1314]
Output: 4
Explanation: There are 4 positive integers and 0 negative integers. The maximum count among them is 4.
*/

// o(n) time complexity brute force approach
var maximumCount = function(nums) {
    let pos = 0;
    let neg = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) {
            pos++;
        } else if (nums[i] < 0) {
            neg++;
        }
    }
    return Math.max(pos, neg);
}
console.log(maximumCount([-2,-1,-1,1,2,3]));    

// o(log n) time complexity binary search approach
var maximumCount1 = function(nums) {
    let pos = nums.length - lowerBound(nums, 1);// to find the number of positive integers, we need to find the index of the first positive integer, which is the same as the number of negative integers, so we can subtract that from the total length of the array to get the number of positive integers
    let neg = lowerBound(nums, 0);// to find the number of negative integers, we need to find the index of the first non-negative integer, which is the same as the number of negative integers, so we can use that index as the count of negative integers
    return Math.max(pos, neg);
}

var lowerBound = function(nums, target) {
    let left = 0;
    let right = nums.length;
    while (left < right) {// while left is less than right
        let mid = left + Math.floor((right - left) / 2); // to avoid overflow
        if (nums[mid] < target) {// if mid is less than target, we need to search in the right half
            left = mid + 1; // move left to mid + 1 cause mid is less than target, we need to search in the right half
        } else {
            right = mid;// if mid is greater than or equal to target, we need to search in the left half, so we move right to mid
        }
    }
    return left;
}

console.log(maximumCount1([-2,-1,-1,1,2,3]));