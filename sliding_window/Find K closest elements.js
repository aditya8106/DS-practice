/*   Find K Closest Elements
Medium
Topics
Company Tags
You are given a sorted integer array arr, two integers k and x, return the k closest integers to x in the array. The result should also be sorted in ascending order.

An integer a is closer to x than an integer b if:

|a - x| < |b - x|, or
|a - x| == |b - x| and a < b
Example 1:

Input: arr = [2,4,5,8], k = 2, x = 6

Output: [4,5]
Example 2:

Input: arr = [2,3,4], k = 3, x = 1

Output: [2,3,4]
Constraints:

1 <= k <= arr.length <= 10,000.
-10,000 <= arr[i], x <= 10,000
arr is sorted in ascending order.
  */


/// brute force solution 

class Solution {
    /**
     * @param {number[]} arr
     * @param {number} k
     * @param {number} x
     * @return {number[]}
     */
    findClosestElements(arr, k, x) {

        // Step 1: Find the insertion position of x (Lower Bound)
        let l = 0;
        let r = arr.length - 1;

        while (l <= r) {
            let mid = Math.floor((l + r) / 2);

            if (arr[mid] < x) {
                // x lies on the right side
                l = mid + 1;
            } else {
                // x lies on the left side (or mid itself)
                r = mid - 1;
            }
        }

        // After binary search:
        // l = insertion position of x
        let left = l - 1;
        let right = l;

        let res = [];

        // Step 2: Pick the k closest elements
        while (res.length < k) {

            // No elements left on the left side
            if (left < 0) {
                res.push(arr[right]);
                right++;
            }

            // No elements left on the right side
            else if (right >= arr.length) {
                res.push(arr[left]);
                left--;
            }

            // Both pointers are valid
            else {

                let leftDist = Math.abs(arr[left] - x);
                let rightDist = Math.abs(arr[right] - x);

                // Left element is closer
                if (leftDist < rightDist) {
                    res.push(arr[left]);
                    left--;
                }

                // Right element is closer
                else if (rightDist < leftDist) {
                    res.push(arr[right]);
                    right++;
                }

                // Same distance -> choose smaller element (left)
                else {
                    res.push(arr[left]);
                    left--;
                }
            }
        }

        // Result must be in ascending order
        return res.sort((a, b) => a - b);
    }
}