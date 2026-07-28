/*  Replace Elements With Greatest Element On Right Side
Easy
Topics
Company Tags
You are given an array arr, replace every element in that array with the greatest element among the elements to its right, and replace the last element with -1.

After doing so, return the array.

Example 1:

Input: arr = [2,4,5,3,1,2]

Output: [5,5,3,2,2,-1]
Example 2:

Input: arr = [3,3]

Output: [3,-1]
Constraints:

1 <= arr.length <= 10,000
1 <= arr[i] <= 100,000 */




///brute force solution T-O(n^2) S-O(1)
/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function(arr) {

    // Traverse every element except the last one
    for (let i = 0; i < arr.length - 1; i++) {

        // Assume first right element is the maximum
        let max = arr[i + 1];

        // Traverse all elements to the right
        for (let j = i + 1; j < arr.length; j++) {

            // Update maximum if a bigger element is found
            max = Math.max(max, arr[j]);
        }

        // Replace current element with greatest element on the right
        arr[i] = max;
    }

    // Last element has no right element
    arr[arr.length - 1] = -1;

    return arr;
};


//optimized solution T-O(n) S-O(1)

/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function(arr) {

    // Greatest element seen so far on the right
    let maxRight = arr[arr.length - 1];

    // Start from the second last element
    let left = arr.length - 2;

    // Last element has no right element
    arr[arr.length - 1] = -1;

    while (left >= 0) {

        // Save original value before replacing it
        let curr = arr[left];

        // Replace current element with greatest right element
        arr[left] = maxRight;

        // Update maxRight using the ORIGINAL value
        // This prepares maxRight for the next element on the left
        maxRight = Math.max(maxRight, curr);

        // Move towards left
        left--;
    }

    return arr;
};