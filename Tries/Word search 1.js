/* Word Search

Given an m x n grid of characters board and a string word, return true if word exists in the grid.

The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once.

 

Example 1:


Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
Output: true
Example 2:


Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "SEE"
Output: true
Example 3:


Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCB"
Output: false
 

Constraints:

m == board.length
n = board[i].length
1 <= m, n <= 6
1 <= word.length <= 15
board and word consists of only lowercase and uppercase English letters. */

//optimized solution using backtracking and dfs

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {

    // Try every cell as starting point
    for (let row = 0; row < board.length; row++) {

        for (let col = 0; col < board[0].length; col++) {

            if (board[row][col] === word[0]) {

                // Start DFS from CURRENT cell
                if (dfs(row, col, 0)) {
                    return true;
                }
            }
        }
    }

    function dfs(row, col, i) {

        // Out of boundary
        if (
            row < 0 ||
            row >= board.length ||
            col < 0 ||
            col >= board[0].length
        ) {
            return false;
        }

        let char = board[row][col];

        // Wrong character OR already visited
        if (char === '#' || char !== word[i]) {
            return false;
        }

        // Last character found
        if (i === word.length - 1) {
            return true;
        }

        // Mark visited
        board[row][col] = '#';

        // Search 4 directions
        let found =
            dfs(row + 1, col, i + 1) ||
            dfs(row - 1, col, i + 1) ||
            dfs(row, col + 1, i + 1) ||
            dfs(row, col - 1, i + 1);

        // Backtrack
        board[row][col] = char;

        return found;
    }

    return false;
};