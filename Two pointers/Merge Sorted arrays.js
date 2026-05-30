/* 
 Merge Sorted Array
Easy
Topics
Company Tags
You are given two integer arrays nums1 and nums2, both sorted in non-decreasing order, along with two integers m and n, where:

m is the number of valid elements in nums1,
n is the number of elements in nums2.
The array nums1 has a total length of (m+n), with the first m elements containing the values to be merged, and the last n elements set to 0 as placeholders.

Your task is to merge the two arrays such that the final merged array is also sorted in non-decreasing order and stored entirely within nums1.
You must modify nums1 in-place and do not return anything from the function.

Example 1:

Input: nums1 = [10,20,20,40,0,0], m = 4, nums2 = [1,2], n = 2

Output: [1,2,10,20,20,40]
Example 2:

Input: nums1 = [0,0], m = 0, nums2 = [1,2], n = 2

Output: [1,2] */ 

// brute force approach using two pointers and extra space 

function BruteTwoP(nums1, m, nums2, n) {

    // Pointer for nums1 valid elements
    let left = 0;

    // Pointer for nums2
    let right = 0;

    // Temporary array to store merged result
    let arr = [];

    // Points to the next empty position in arr
    let index = 0;

    // Compare elements from both arrays until one array is exhausted
    while (left < m && right < n) {

        // If current element in nums1 is smaller (or equal),
        // put it into arr
        if (nums1[left] < nums2[right]) {

            // Store value and then move both pointers
            arr[index++] = nums1[left++];

        } else {

            // nums2 element is smaller,
            // store it in arr and move pointers
            arr[index++] = nums2[right++];
        }
    }

    // If nums1 still has remaining elements,
    // copy all of them into arr
    while (left < m) {
        arr[index++] = nums1[left++];
    }

    // If nums2 still has remaining elements,
    // copy all of them into arr
    while (right < n) {
        arr[index++] = nums2[right++];
    }

    // Return merged sorted array
    return arr;
}
console.log(BruteTwoP(nums1 = [10,20,20,40,0,0], m = 4, nums2 = [1,2], n = 2));



// optimal using Two pointers with out extra arr storing in nums1

function OptimalTwoP(nums1, m, nums2, n) {

    // Points to the last VALID element in nums1
    // Ignore the extra 0 placeholders
    let i = m - 1;

    // Points to the last element in nums2
    let j = n - 1;

    // Points to the last position of nums1
    // This is where we will place the largest remaining element
    let k = m + n - 1;

    // Compare elements from the END of both arrays
    while (i >= 0 && j >= 0) {

        // If nums1 has the larger element
        if (nums1[i] > nums2[j]) {

            // Put that larger element at position k
            nums1[k] = nums1[i];

            // Move nums1 pointer left
            i--;

        } else {

            // nums2 has the larger (or equal) element
            // Put it at position k
            nums1[k] = nums2[j];

            // Move nums2 pointer left
            j--;
        }

        // One position has been filled,
        // move k to the next empty position
        k--;
    }

    // If nums2 still has elements left,
    // copy them into nums1
    while (j >= 0) {

        nums1[k] = nums2[j];

        j--;
        k--;
    }

    // nums1 now contains the fully merged array
    return nums1;
}

console.log(OptimalTwoP(nums1 = [10,20,20,40,0,0], m = 4, nums2 = [1,2], n = 2));
