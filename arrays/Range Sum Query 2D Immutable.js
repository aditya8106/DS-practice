/* You are given a 2D matrix matrix, handle multiple queries of the following type:

Calculate the sum of the elements of matrix inside the rectangle defined by its upper left corner (row1, col1) and lower right corner (row2, col2).
Implement the NumMatrix class:

NumMatrix(int[][] matrix) Initializes the object with the integer matrix matrix.
int sumRegion(int row1, int col1, int row2, int col2) Returns the sum of the elements of matrix inside the rectangle defined by its upper left corner (row1, col1) and lower right corner (row2, col2).
You must design an algorithm where sumRegion works on O(1) time complexity.
Example 1:



Input: ["NumMatrix", "sumRegion", "sumRegion", "sumRegion"]
[[[[3, 0, 1, 4, 2], [5, 6, 3, 2, 1], [1, 2, 0, 1, 5], [4, 1, 0, 1, 7], [1, 0, 3, 0, 5]]], [2, 1, 4, 3], [1, 1, 2, 2], [1, 2, 2, 4]]

Output: [null, 8, 11, 12]
Explanation:

NumMatrix numMatrix = new NumMatrix([[3, 0, 1, 4, 2], [5, 6, 3, 2, 1], [1, 2, 0, 1, 5], [4, 1, 0, 1, 7], [1, 0, 3, 0, 5]]);
numMatrix.sumRegion(2, 1, 4, 3); // return 8 (i.e sum of the red rectangle)
numMatrix.sumRegion(1, 1, 2, 2); // return 11 (i.e sum of the green rectangle)
numMatrix.sumRegion(1, 2, 2, 4); // return 12 (i.e sum of the blue rectangle)
Constraints:

m == matrix.length
n == matrix[i].length
1 <= m, n <= 200
-10,000 <= matrix[i][j] <= 10,000
0 <= row1 <= row2 < m
0 <= col1 <= col2 < n
At most 10,000 calls will be made to sumRegion. */
matrix = [[3, 0, 1, 4, 2], [5, 6, 3, 2, 1], [1, 2, 0, 1, 5], [4, 1, 0, 1, 7], [1, 0, 3, 0, 5]];
// brute force approach
var NumMatrix = function(matrix) {
    this.matrix = matrix;
};

NumMatrix.prototype.sumRegion = function(row1, col1, row2, col2) {
    let sum = 0;
    for (let i = row1; i <= row2; i++) {
        for (let j = col1; j <= col2; j++) {
            sum += this.matrix[i][j];
        }
    }
    return sum;
};

// optimal approach - prefix sum
var NumMatrix = function(matrix) {
    this.prefix = Array(matrix.length).fill(0).map(() => Array(matrix[0].length).fill(0)); // create a prefix sum matrix of the same size as the input matrix
    if (matrix.length === 0 || matrix[0].length === 0) {
        return; // if the input matrix is empty, we can return early as there are no elements to sum
    }
    let rows = matrix.length;// number of rows in the input matrix
    let cols = matrix[0].length;// number of columns in the input matrix
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            let top = i > 0 ? this.prefix[i - 1][j] : 0; // get the prefix sum from the top cell, if it exists
            let left = j > 0 ? this.prefix[i][j - 1] : 0;// get the prefix sum from the left cell, if it exists
            let topLeft = (i > 0 && j > 0) ? this.prefix[i - 1][j - 1] : 0; // get the prefix sum from the top-left cell, if it exists
            this.prefix[i][j] = matrix[i][j] + top + left - topLeft; // calculate the prefix sum for the current cell
        }   
    }
    
}

    
NumMatrix.prototype.sumRegion = function(row1, col1, row2, col2) {
    let total = this.prefix[row2][col2]
        let top = row1>0?this.prefix[row1-1][col2]:0;
        let left = col1>0?this.prefix[row2][col1-1]:0;
        let lefttop = row1>0&&col1>0?this.prefix[row1-1][col1-1]:0;
        return  total-top-left+lefttop;
}

let obj = new NumMatrix(matrix);

console.log(obj.sumRegion(2,1,4,3));