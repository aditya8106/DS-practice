/*Kth Distinct String in an Array
Easy
Topics
Company Tags
A distinct string is a string that is present only once in an array.

You are given an array of strings arr, and an integer k, return the k-th distinct string present in arr. If there are fewer than k distinct strings, return an empty string "".

Note that the strings are considered in the order in which they appear in the array.

Example 1:

Input: arr = ["d","b","c","b","c","a"], k = 2

Output: "a"
Explanation: The only distinct strings in arr are "d" and "a".
"d" appears 1st, so it is the 1st distinct string.
"a" appears 2nd, so it is the 2nd distinct string.
Since k == 2,"a" is returned.

Example 2:

Input: arr = ["aaa","aa","a"], k = 1

Output: "aaa"
Explanation: All strings in arr are distinct, so the 1st string "aaa" is returned.

Example 3:

Input: arr = ["a","b","a"], k = 3

Output: ""
Explanation: The only distinct string is "b". Since there are fewer than 3 distinct strings, we return an empty string "".

Constraints:

1 <= k <= arr.length <= 1000
1 <= arr[i].length <= 5
arr[i] consists of lowercase English letters.*/

// Kth Distinct String in an Array

function kthDistinct(arr, k) {

    // Map to store the frequency of each string
    let frequency = new Map();

    // Count how many times each string appears
    for (let str of arr) {
        frequency.set(str, (frequency.get(str) || 0) + 1);
    }

    // Go through the array in original order
    for (let str of arr) {

        // If the string appears only once
        if (frequency.get(str) === 1) {

            // Found one distinct string
            k--;

            // If this is the kth distinct string
            if (k === 0) {
                return str;
            }
        }
    }

    // Fewer than k distinct strings
    return "";
}


// Test cases

let arr1 = ["d", "b", "c", "b", "c", "a"];
let k1 = 2;

console.log(kthDistinct(arr1, k1));
// Output: "a"


let arr2 = ["aaa", "aa", "a"];
let k2 = 1;

console.log(kthDistinct(arr2, k2));
// Output: "aaa"


let arr3 = ["a", "b", "a"];
let k3 = 3;

console.log(kthDistinct(arr3, k3));
// Output: ""