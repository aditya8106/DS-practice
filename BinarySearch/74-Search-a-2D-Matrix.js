/* Search a 2D Matrix
Medium
Topics
Company Tags
Hints
You are given an m x n 2-D integer array matrix and an integer target.

Each row in matrix is sorted in non-decreasing order.
The first integer of every row is greater than the last integer of the previous row.
Return true if target exists within matrix or false otherwise.

Can you write a solution that runs in O(log(m * n)) time?

Example 1:



Input: matrix = [[1,2,4,8],[10,11,12,13],[14,20,30,40]], target = 10

Output: true
Example 2:



Input: matrix = [[1,2,4,8],[10,11,12,13],[14,20,30,40]], target = 15

Output: false
Constraints:

m == matrix.length
n == matrix[i].length
1 <= m, n <= 100
-10000 <= matrix[i][j], target <= 10000
*/


/// brute force 
 /**
 * Time Complexity: O(m * n)
 * Space Complexity: O(1)
 */

var searchMatrix = function(matrix, target) {

    // Traverse every row
    for (let i = 0; i < matrix.length; i++) {

        // Traverse every column
        for (let j = 0; j < matrix[i].length; j++) {

            // Target found
            if (matrix[i][j] === target) {
                return true;
            }
        }
    }

    // Target doesn't exist
    return false;
};


/// better Approach

/**
 * Time Complexity: O(m + log n)
 * Space Complexity: O(1)
 */

var searchMatrix = function(matrix, target) {

    // Traverse each row
    for (let i = 0; i < matrix.length; i++) {

        // Check whether target can exist in this row
        if (
            target >= matrix[i][0] &&
            target <= matrix[i][matrix[i].length - 1]
        ) {

            let left = 0;
            let right = matrix[i].length - 1;

            // Binary Search on the selected row
            while (left <= right) {

                let mid = Math.floor((left + right) / 2);

                if (matrix[i][mid] === target) {
                    return true;
                }

                if (matrix[i][mid] < target) {
                    left = mid + 1;
                } else {
                    right = mid - 1;
                }
            }
        }
    }

    return false;
};


/// optimal solution 

/**
 * Time Complexity: O(log(m * n))
 * Space Complexity: O(1)
 */

var searchMatrix = function(matrix, target) {

    let rows = matrix.length;
    let cols = matrix[0].length;

    // Treat matrix as a sorted 1D array
    let left = 0;
    let right = rows * cols - 1;

    while (left <= right) {

        let mid = Math.floor((left + right) / 2);

        // Convert 1D index to 2D indices
        let row = Math.floor(mid / cols);
        let col = mid % cols;

        if (matrix[row][col] === target) {
            return true;
        }

        if (matrix[row][col] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return false;
}; 