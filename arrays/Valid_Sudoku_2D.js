// valid sudoku 2d array
/* Valid Sudoku
Medium
Topics
Company Tags
Hints
You are given a 9 x 9 Sudoku board board. A Sudoku board is valid if the following rules are followed:

Each row must contain the digits 1-9 without duplicates.
Each column must contain the digits 1-9 without duplicates.
Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without duplicates.
Return true if the Sudoku board is valid, otherwise return false

Note: A board does not need to be full or be solvable to be valid.

Example 1:



Input: board =
[["1","2",".",".","3",".",".",".","."],
 ["4",".",".","5",".",".",".",".","."],
 [".","9","8",".",".",".",".",".","3"],
 ["5",".",".",".","6",".",".",".","4"],
 [".",".",".","8",".","3",".",".","5"],
 ["7",".",".",".","2",".",".",".","6"],
 [".",".",".",".",".",".","2",".","."],
 [".",".",".","4","1","9",".",".","8"],
 [".",".",".",".","8",".",".","7","9"]]

Output: true
Example 2:

Input: board =
[["1","2",".",".","3",".",".",".","."],
 ["4",".",".","5",".",".",".",".","."],
 [".","9","1",".",".",".",".",".","3"],
 ["5",".",".",".","6",".",".",".","4"],
 [".",".",".","8",".","3",".",".","5"],
 ["7",".",".",".","2",".",".",".","6"],
 [".",".",".",".",".",".","2",".","."],
 [".",".",".","4","1","9",".",".","8"],
 [".",".",".",".","8",".",".","7","9"]]

Output: false
Explanation: There are two 1's in the top-left 3x3 sub-box.

Constraints:

board.length == 9
board[i].length == 9
board[i][j] is a digit 1-9 or '.'.
*/


// simple brte force  and optimal approach

function sudoku(board){
    for(let i=0;i<9;i++){  
        let rowSet =new Set;
        for(let j =0;j<9;j++){
            let val = board[i][j] // this is the value of current cell we are checking for row we are checking i and j because we are checking row wise so we are fixing row and changing column and for column we are fixing column and changing row
            if(val == '.') continue;
            if(rowSet.has(val)){
                return false;
            }
            rowSet.add(val);
        }
/* this loop checks each rows like as */
    }
    for(let i=0;i<9;i++){
        let colSet =new Set;
        for(let j =0;j<9;j++){
            let val = board[j][i]// this is the value of current cell we are checking for column we are checking j and i because we are checking column wise so we are fixing column and changing row and for row we are fixing row and changing column
            if(val == '.') continue;
            if(colSet.has(val)){
                return false;
            }
            colSet.add(val);
        }
    }
    for(let row =0;row<9;row+=3){ // this starts at row 0 and column 0 and checks 3 * 3 sub box example 
    /* example: checking the top-left 3*3 sub box 
    1 2 .
    4 . .
    . 9 8   
    then we will move to next 3*3 sub box which is top-middle 3*3 sub box
    . 3 .
    5 . .
    . . .
    and so on we will check all 3*3 sub boxes and if we find any duplicate then we will return false otherwise we will return true at the end */    
    
    // this loop checks each 3*3 sub box how? for each row we are checking 3*3 sub box and then we are moving to next row and checking next 3*3 sub box and so on
        for(let col =0;col<9;col+=3){ // this loop checks each 3*3 sub box how? for each column we are checking 3*3 sub box and then we are moving to next column and checking next 3*3 sub box and so on
            let set = new Set()
            for(let i =row;i<row+3;i++){// this is starts at row and then we are checking next 3 rows and so on
                for(let j = col;j<col+3;j++){// this is starts at column and then we are checking next 3 columns and so on
                    let val = board[i][j]// this is the value of current cell we are checking
                    if(val =='.') continue;
                    if(set.has(val)) return false;
                    set.add(val);
                }
            }
        }
    }
    return true;
}

console.log(sudoku([["1","2",".",".","3",".",".",".","."],
                    ["4",".",".","5",".",".",".",".","."],
                    [".","9","1",".",".",".",".",".","3"],
                    ["5",".",".",".","6",".",".",".","4"],
                    [".",".",".","8",".","3",".",".","5"],
                    ["7",".",".",".","2",".",".",".","6"],
                    [".",".",".",".",".",".","2",".","."],
                    [".",".",".","4","1","9",".",".","8"],
                    [".",".",".",".","8",".",".","7","9"]]
                    ))