/*  Find in Mountain Array
Hard
Topics
Company Tags
(This problem is an interactive problem.)

An array arr is called a mountain array if and only if:

arr.length >= 3
There exists some index i with 0 < i < arr.length - 1 such that:
arr[0] < arr[1] < ... < arr[i - 1] < arr[i]
arr[i] > arr[i + 1] > ... > arr[arr.length - 1]
You are given a mountain array mountainArr and an integer target, return the minimum index such that mountainArr.get(index) == target. If such an index does not exist, return -1.

You cannot access the mountain array directly. You may only access the array using a MountainArray interface:

MountainArray.get(k) returns the element of the array at index k (0-indexed).
MountainArray.length() returns the length of the array.
You can only make at most 100 calls to the function get(). Submissions making more than 100 calls will be judged as Wrong Answer. Also, any solutions that attempt to circumvent the judge will result in disqualification.

Example 1:

Input: mountainArr = [2,4,5,2,1], target = 2

Output: 0
Example 2:

Input: mountainArr = [1,2,3,4,2,1], target = 6

Output: -1
Constraints:

3 <= mountainArr.length() <= 10,000
0 <= target, mountainArr.get(index) <= 1,000,000,000 */

// brute force solution
/**
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 *
 * This solution checks every index one by one.
 * It is logically correct but exceeds the allowed number
 * of mountainArr.get() calls for large arrays.
 */

var findInMountainArray = function(target, mountainArr) {

    // Traverse the entire mountain array
    for (let i = 0; i < mountainArr.length(); i++) {

        // Check current value
        if (mountainArr.get(i) === target) {

            // Return the first occurrence (minimum index)
            return i;
        }
    }

    // Target not found
    return -1;
};


// Optimized solution using binary search

/**
 * Time Complexity: O(log n)
 * Space Complexity: O(1)
 *
 * Idea:
 * 1. Find the peak of the mountain.
 * 2. Binary search on the left (ascending).
 * 3. If not found, binary search on the right (descending).
 */

var findInMountainArray = function(target, mountainArr) {

    //---------------------------------------------------------
    // STEP 1 : Find Peak Index
    //---------------------------------------------------------
    // Peak is the largest element in the mountain.
    // Compare mid with mid + 1.
    // If increasing -> move right.
    // If decreasing -> move left.
    //---------------------------------------------------------

    let left = 0;
    let right = mountainArr.length() - 1;

    while (left < right) {

        let mid = Math.floor((left + right) / 2);

        // We are still climbing.
        if (mountainArr.get(mid) < mountainArr.get(mid + 1)) {

            left = mid + 1;

        } else {

            // Peak is at mid or on the left.
            right = mid;
        }
    }

    // left == right == peak index
    let peak = left;

    //---------------------------------------------------------
    // Binary Search Helper
    //---------------------------------------------------------
    // asc = true  -> ascending binary search
    // asc = false -> descending binary search
    //---------------------------------------------------------

    function binarySearch(left, right, asc) {

        while (left <= right) {

            let mid = Math.floor((left + right) / 2);

            let value = mountainArr.get(mid);

            // Target found
            if (value === target) {
                return mid;
            }

            // Ascending part
            if (asc) {

                if (value < target) {

                    left = mid + 1;

                } else {

                    right = mid - 1;
                }

            }

            // Descending part
            else {

                if (value < target) {

                    // Reverse movement because array is descending
                    right = mid - 1;

                } else {

                    left = mid + 1;
                }
            }
        }

        // Target not found
        return -1;
    }

    //---------------------------------------------------------
    // STEP 2 : Search Left Side
    //---------------------------------------------------------
    // Left side is increasing.
    // Search here first because the problem asks
    // for the minimum index.
    //---------------------------------------------------------

    let ans = binarySearch(0, peak, true);

    if (ans !== -1) {
        return ans;
    }

    //---------------------------------------------------------
    // STEP 3 : Search Right Side
    //---------------------------------------------------------
    // Only search here if the target wasn't found
    // on the left side.
    //---------------------------------------------------------

    return binarySearch(peak + 1, mountainArr.length() - 1, false);
};