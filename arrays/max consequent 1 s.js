/*  
Max Consecutive Ones
Easy
Topics
Company Tags
You are given a binary array nums, return the maximum number of consecutive 1's in the array.

Example 1:

Input: nums = [1,1,0,1,1,1]

Output: 3

Example 2:

Input: nums = [1,0,1,1,0,1]

Output: 2
Constraints:

1 <= nums.length <= 100,000
nums[i] is either 0 or 1.  */


//optimal solution
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let cnt = 0;
    let maxcnt = 0;

    for (let num of nums) {

        // If current number is 1
        if (num === 1) {
            cnt++;

            // Update maximum consecutive count
            maxcnt = Math.max(maxcnt, cnt);
        } 
        else {
            // Reset when we encounter 0
            cnt = 0;
        }
    }

    return maxcnt;
};