//continous subarray sum equal to k
// Given an array of integers and an integer k, find the total number of continuous subarrays whose sum equals to k.
/* You are given an integer array nums and an integer k, return true if nums has a good subarray or false otherwise.

A good subarray is a subarray where:

its length is at least two, and
the sum of the elements of the subarray is a multiple of k.
Note:

A subarray is a contiguous part of the array.
An integer x is a multiple of k if there exists an integer n such that x = n * k. 0 is always a multiple of k.
Example 1:

Input: nums = [23,2,4,6,7], k = 6

Output: true
Explanation: [2,4] is a continuous subarray of size 2 whose sum is 6.

Example 2:

Input: nums = [23,2,6,4,7], k = 6

Output: true
Explanation: [23,2,6,4,7] is an continuous subarray of size 5 whose sum is 42, which is a multiple of 6..

Example 3:

Input: nums = [23,2,6,4,7], k = 13

Output: false */

// Approach 1: Using a Hash Map to Store Prefix Sums optimall

function continuousSubarrSum(arr, k) {
    let map = new Map();
    map.set(0, -1);
    let prefixSum = 0;
    for (let i = 0; i < arr.length; i++) {
        prefixSum += arr[i];
        let rem = prefixSum % k;
        //why remainder? because if the sum of a subarray is a multiple of k, then the prefix sums at the start and end of that subarray will have the same remainder when divided by k. By storing the remainders of the prefix sums in a map, we can quickly check if we have seen the same remainder before, which indicates that there is a subarray between those two indices that sums to a multiple of k. This allows us to efficiently determine if there is a good subarray without having to check every possible subarray.
        
        if (map.has(rem)) {
            if (i - map.get(rem) >=2) { // Check if the length of the subarray is at least 2
            //i-map.get(rem) gives the length of the subarray between the previous occurrence of this remainder and the current index. If this length is at least 2, it means we have found a good subarray that sums to a multiple of k, and we can return true.
            // If the same remainder has been seen before, it means that the sum of the elements between the previous index and the current index is a multiple of k. We also need to check if the length of this subarray is at least 2, which is a requirement for it to be considered a good subarray. If both conditions are satisfied, we can
                return true;
            }
        } else {
            map.set(rem, i); // Store the index of the first occurrence of this remainder
        }
    }
    return false;
}
console.log(continuousSubarrSum([23, 2, 4, 6, 7], 6)); // Output: true
console.log(continuousSubarrSum([23, 2, 6, 4, 7], 6)); // Output: true
console.log(continuousSubarrSum([23, 2, 6, 4, 7], 13)); // Output: false

//brute force approach
function continuousSubarrSumBruteForce(arr, k) {
    for (let i = 0; i < arr.length; i++) {
        let sum = 0;
        for (let j = i; j < arr.length; j++) {
            sum += arr[j];
            if (j - i >= 1 && sum % k === 0) { // Check if the length of the subarray is at least 2 and if the sum is a multiple of k
                return true;
            }
        }
    }   
    return false;
}
console.log(continuousSubarrSumBruteForce([23, 2, 4, 6, 7], 6));    // Output: true
console.log(continuousSubarrSumBruteForce([23, 2, 6, 4, 7], 6));    // Output: true
console.log(continuousSubarrSumBruteForce([23, 2, 6, 4, 7], 13));   // Output: false    