// Matrix Diagonal Sum
/* Given a square matrix mat, return the sum of the matrix diagonals.
 Matrix Diagonal Sum
Easy
Topics
Company Tags
You are given a square matrix mat, return the sum of the matrix diagonals.

Only include the sum of all the elements on the primary diagonal and all the elements on the secondary diagonal that are not part of the primary diagonal.

Example 1:

Input: mat = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]

Output: 25
Example 2:

Input: mat = [
    [2,1,3,4],
    [1,2,9,8],
    [10,11,2,3],
    [2,2,2,2]
]

Output: 34
Example 3:

Input: mat = [[1]]

Output: 1 */  

function diagonalSum(mat){

    let sum =0
    let n = mat.length
    for(let i=0;i<n;i++){
        sum+=mat[i][i]
        if(i!=n-1-i){  // we write it as if((n-1-i) == i)  continue;  but we can also write it as if(i!=n-1-i) then only we will add the secondary diagonal element to sum
            sum+=mat[i][n-1-i]  // this is the next step for that 
        }
    }
    return sum
}
console.log(diagonalSum([[1,2,3],[4,5,6],[7,8,9]])); // output 25

// optimal solution
function diagonalSum(mat){
    let sum =0
    let n = mat.length
    for(let i=0;i<n;i++){
        sum+=mat[i][i]
        if(i!=n-1-i){
            sum+=mat[i][n-1-i]
        }
    }
    return sum
}
console.log(diagonalSum([[1,2,3],[4,5,6],[7,8,9]])); // output 25  