/* Find Lucky Integer in an Array
Easy
Topics
Company Tags
You are given an array of integers arr, a lucky integer is an integer that has a frequency in the array equal to its value.

Return the largest lucky integer in the array. If there is no lucky integer return -1.

Example 1:

Input: arr = [1,2,2,3,3,3]

Output: 3
Explanation: 1, 2 and 3 are all lucky numbers, 3 is the largest.


Example 2:

Input: arr = [2,2,2,3,3]

Output: -1
Constraints:

1 <= arr.length <= 500
1 <= arr[i] <= 500 */


// Approach 1: Using a Hash Map to Store Frequencies
function findLucky(arr) {
    let map = new Map();

    // Count frequency of each number
    for (let n of arr) {
        map.set(n, (map.get(n) || 0) + 1);
    }

    let max = -1;

    // Check if number === its frequency
    for (let [key, freq] of map) {
        if (key === freq) {
            max = Math.max(max, key);
        }
    }

    return max;
}


// Test cases
let arr1 = [1, 2, 2, 3, 3, 3];
let arr2 = [2, 2, 2, 3, 3];

console.log(findLucky(arr1)); // 3
console.log(findLucky(arr2)); // -1
