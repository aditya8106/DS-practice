/*  Given a 2D grid of size m x n and an integer k. You need to shift the grid k times.

In one shift operation:

Element at grid[i][j] moves to grid[i][j + 1].
Element at grid[i][n - 1] moves to grid[i + 1][0].
Element at grid[m - 1][n - 1] moves to grid[0][0].
Return the 2D grid after applying shift operation k times.

 

Example 1:


Input: grid = [[1,2,3],[4,5,6],[7,8,9]], k = 1
Output: [[9,1,2],[3,4,5],[6,7,8]]
Example 2:


Input: grid = [[3,8,1,9],[19,7,2,5],[4,6,11,10],[12,0,21,13]], k = 4
Output: [[12,0,21,13],[3,8,1,9],[19,7,2,5],[4,6,11,10]]
Example 3:

Input: grid = [[1,2,3],[4,5,6],[7,8,9]], k = 9
Output: [[1,2,3],[4,5,6],[7,8,9]]
 */

/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number[][]}
 */
var shiftGrid = function(grid, k) {

    // Number of rows
    let m = grid.length;

    // Number of columns
    let n = grid[0].length;

    // Perform the shift operation k times
    for (let shift = 0; shift < k; shift++) {

        // Create a new empty grid for the current shift
        let res = Array.from({ length: m }, () => Array(n));

        // Traverse every cell in the grid
        for (let i = 0; i < m; i++) {

            for (let j = 0; j < n; j++) {

                // Case 1:
                // If it's NOT the last column,
                // move the element one step to the right.
                if (j < n - 1) {

                    // Example:
                    // 1 2 3
                    // ^
                    // 1 moves to the next column
                    res[i][j + 1] = grid[i][j];

                }

                // Case 2:
                // If it's the last column but NOT the last row,
                // move it to the first column of the next row.
                else if (i < m - 1) {

                    // Example:
                    // 1 2 3
                    //     ^
                    // becomes
                    //       3
                    // 4 5 6
                    res[i + 1][0] = grid[i][j];

                }

                // Case 3:
                // Last element of the entire grid.
                // Move it to the top-left corner.
                else {

                    // Example:
                    // 7 8 9
                    //     ^
                    // 9 moves to (0,0)
                    res[0][0] = grid[i][j];

                }
            }
        }

        // Update grid so the next shift starts from
        // the newly shifted grid.
        grid = res;
    }

    // Return the final shifted grid
    return grid;
};