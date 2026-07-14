/*  single Element In sorted array

You are given a sorted array consisting of only integers where every element appears exactly twice, except for one element which appears exactly once.

Return the single element that appears only once.

Your solution must run in O(log n) time and O(1) space.

 

Example 1:

Input: nums = [1,1,2,3,3,4,4,8,8]
Output: 2
Example 2:

Input: nums = [3,3,7,7,10,11,11]
Output: 10
 

Constraints:

1 <= nums.length <= 105
0 <= nums[i] <= 105 */

// brute force
/**
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */

var singleNonDuplicate = function(nums) {

    for (let i = 0; i < nums.length; i++) {

        // First element
        if (i === 0) {
            if (nums[0] !== nums[1]) {
                return nums[0];
            }
        }

        // Last element
        else if (i === nums.length - 1) {
            if (nums[i] !== nums[i - 1]) {
                return nums[i];
            }
        }

        // Middle elements
        else if (
            nums[i] !== nums[i - 1] &&
            nums[i] !== nums[i + 1]
        ) {
            return nums[i];
        }
    }
};

// optimal approach 
/**
 * Time Complexity: O(log n)
 * Space Complexity: O(1)
 */

var singleNonDuplicate = function(nums) {

    let left = 0;
    let right = nums.length - 1;

    while (left < right) {

        let mid = Math.floor((left + right) / 2);

        // Make mid even
        if (mid % 2 === 1) {
            mid--;
        }

        // Pair is correct
        if (nums[mid] === nums[mid + 1]) {

            // Skip this pair
            left = mid + 2;

        } else {

            // Single element lies on left side (including mid)
            right = mid;
        }
    }

    // Left points to the single element
    return nums[left];
};