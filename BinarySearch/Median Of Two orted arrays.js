/* Median of Two Sorted Arrays
Hard
Topics
Company Tags
Hints
You are given two integer arrays nums1 and nums2 of size m and n respectively, where each is sorted in ascending order. Return the median value among all elements of the two arrays.

Your solution must run in 
O
(
l
o
g
(
m
+
n
)
)
O(log(m+n)) time.

Example 1:

Input: nums1 = [1,2], nums2 = [3]

Output: 2.0
Explanation: Among [1, 2, 3] the median is 2.

Example 2:

Input: nums1 = [1,3], nums2 = [2,4]

Output: 2.5
Explanation: Among [1, 2, 3, 4] the median is (2 + 3) / 2 = 2.5.

Constraints:

nums1.length == m
nums2.length == n
0 <= m <= 1000
0 <= n <= 1000
-10^6 <= nums1[i], nums2[i] <= 10^6
  */


/// brute force 

class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */
    findMedianSortedArrays(nums1, nums2) {

        // Copy all elements of nums2 into nums1
        for (let i = 0; i < nums2.length; i++) {
            nums1.push(nums2[i]);
        }

        // Sort the merged array
        nums1.sort((a, b) => a - b);

        let n = nums1.length;

        // Odd number of elements
        if (n % 2 === 1) {
            return nums1[Math.floor(n / 2)];
        }

        // Even number of elements
        let mid = n / 2;
        return (nums1[mid - 1] + nums1[mid]) / 2;
    }
}


/// better approach 

class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */
    findMedianSortedArrays(nums1, nums2) {

        let i = 0;
        let j = 0;

        // Store merged sorted elements
        let merged = [];

        // Merge both sorted arrays
        while (i < nums1.length && j < nums2.length) {

            if (nums1[i] <= nums2[j]) {
                merged.push(nums1[i]);
                i++;
            } else {
                merged.push(nums2[j]);
                j++;
            }
        }

        // Copy remaining elements of nums1
        while (i < nums1.length) {
            merged.push(nums1[i]);
            i++;
        }

        // Copy remaining elements of nums2
        while (j < nums2.length) {
            merged.push(nums2[j]);
            j++;
        }

        let n = merged.length;

        // Odd number of elements
        if (n % 2 === 1) {
            return merged[Math.floor(n / 2)];
        }

        // Even number of elements
        let mid = n / 2;
        return (merged[mid - 1] + merged[mid]) / 2;
    }
}
