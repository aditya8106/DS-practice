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


//optimal solution using binary search and slide window

class Solution {
    /**
     * @param {number[]} arr
     * @param {number} k
     * @param {number} x
     * @return {number[]}
     */
    findClosestElements(arr, k, x) {

        // We are binary searching for the starting index
        // of the window having k closest elements.
        let l = 0;
        let r = arr.length - k;

        while (l < r) {

            // Middle starting index
            let mid = Math.floor((l + r) / 2);

            /*
                Window 1 starts at mid
                Window 2 starts at mid + 1

                Window 1:
                [arr[mid], ............, arr[mid + k - 1]]

                Window 2:
                [arr[mid + 1], ........., arr[mid + k]]

                Both windows have (k-1) common elements.

                The only difference is:

                arr[mid]      -> leaves the window
                arr[mid + k]  -> enters the window

                Therefore, we only compare these two elements.
            */

            // If the entering element is closer to x,
            // move to the right window.
            if (x - arr[mid] > arr[mid + k] - x) {
                l = mid + 1;
            }
            // Otherwise keep searching on the left side
            // (also handles tie because smaller element wins).
            else {
                r = mid;
            }
        }

        // l is now the starting index of the best window.
        return arr.slice(l, l + k);
    }
}