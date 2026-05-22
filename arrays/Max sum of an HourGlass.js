// max sumof an hourglass from a 2D array leetcode 2428 and hackerrank

/*You are given an m x n integer matrix grid.

We define an hourglass as a part of the matrix with the following form:


Return the maximum sum of the elements of an hourglass.

Note that an hourglass cannot be rotated and must be entirely contained within the matrix.

 

Example 1:


Input: grid = [[6,2,1,3],[4,2,1,5],[9,2,8,7],[4,1,2,9]]
Output: 30
Explanation: The cells shown above represent the hourglass with the maximum sum: 6 + 2 + 1 + 2 + 9 + 2 + 8 = 30.
Example 2:


Input: grid = [[1,2,3],[4,5,6],[7,8,9]]
Output: 35
Explanation: There is only one hourglass in the matrix, with the sum: 1 + 2 + 3 + 5 + 7 + 8 + 9 = 35.
  */
// brute force approach
var maxSum = function(arr) {
    let max = -Infinity;
    for (let i = 0; i < arr.length - 2; i++) {  
        for (let j = 0; j < arr[0].length - 2; j++) {
            let sum = arr[i][j] + arr[i][j + 1] + arr[i][j + 2] + arr[i + 1][j + 1] + arr[i + 2][j] + arr[i + 2][j + 1] + arr[i + 2][j + 2];
            max = Math.max(max, sum);
        }   
    }
    return max;
}

console.log(maxSum([[6,2,1,3],[4,2,1,5],[9,2,8,7],[4,1,2,9]])); // 30
console.log(maxSum([[1,2,3],[4,5,6],[7,8,9]])); // 35

// optimal approach - prefix sum
var maxSum = function(arr) {
    let max = -Infinity;
    let prefix = Array(arr.length).fill(0).map(() => Array(arr[0].length).fill(0)); // create a prefix sum matrix of the same size as the input matrix
    let rows = arr.length;  
    let cols = arr[0].length;
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            let top = i > 0 ? prefix[i - 1][j] : 0; // get the prefix sum from the top cell, if it exists
            let left = j > 0 ? prefix[i][j - 1] : 0;
            let topLeft = (i > 0 && j > 0) ? prefix[i - 1][j - 1] : 0; // get the prefix sum from the top-left cell, if it exists
            prefix[i][j] = arr[i][j] + top + left - topLeft; // calculate the prefix sum for the current cell
        }
    }
    for (let i = 0; i < rows - 2; i++) {  
        for (let j = 0; j < cols - 2; j++) {
            let sum = prefix[i + 2][j + 2] - prefix[i + 2][j - 1] - prefix[i - 1][j + 2] + prefix[i - 1][j - 1] - arr[i + 1][j] - arr[i + 1][j + 2];
            /*
             example:
                1 2 3 4
                5 6 7 8
                9 10 11 12
                13 14 15 16
                prefix sum matrix would be:
                1 3 6 10
                6 14 27 45
                15 33 60 100
                28 60 105 160
            the hourglass starting at (0, 0) would be:
                1 2 3
                     6
                9 10 11
                here prefix[i+2][j+2] is value at (2, 2) which is 60 this is last cell of the hourglass 
                prefix[i+2][j-1] is value at (2, -1) which is 0 (out of bounds) on the left side of the hourglass
                prefix[i-1][j+2] is value at (-1, 2) which is 0 (out of bounds) on the top side of the hourglass
                prefix[i-1][j-1] is value at (-1, -1) which is 0 (out of bounds) on the top left corner of the hourglass
                arr[i+1][j] is value at (1, 0) which is 5
                arr[i+1][j+2] is value at (1, 2) which is 7
                so the sum of the hourglass would be:
                60 - 0 - 0 + 0 - 5 - 7 = 60 - 12 = 48

              */
            // the sum of the hourglass can be calculated using the prefix sums by taking the sum of the bottom right corner of the hourglass and subtracting the sums of the areas that are not part of the hourglass, and then adding back the value of the middle cell that was subtracted twice
            max = Math.max(max, sum);
        }   
    }
    return max;
}