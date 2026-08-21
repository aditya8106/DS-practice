/*  Construct Quad Tree
Medium
Topics
Company Tags
Given a n * n matrix grid of 0's and 1's only. We want to represent grid with a Quad-Tree.

Return the root of the Quad-Tree representing grid.

A Quad-Tree is a tree data structure in which each internal node has exactly four children. Besides, each node has two attributes:

val: True if the node represents a grid of 1's or False if the node represents a grid of 0's. Notice that you can assign the val to True or False when isLeaf is False, and both are accepted in the answer.

isLeaf: True if the node is a leaf node on the tree or False if the node has four children.

class Node {
    public boolean val;
    public boolean isLeaf;
    public Node topLeft;
    public Node topRight;
    public Node bottomLeft;
    public Node bottomRight;
}
We can construct a Quad-Tree from a two-dimensional area using the following steps:

If the current grid has the same value (i.e all 1's or all 0's) set isLeaf True and set val to the value of the grid and set the four children to Null and stop.

If the current grid has different values, set isLeaf to False and set val to any value and divide the current grid into four sub-grids as shown in the photo.

Recurse for each of the children with the proper sub-grid.



If you want to know more about the Quad-Tree, you can refer to the wiki.

Quad-Tree format:

You don't need to read this section for solving the problem. This is only if you want to understand the output format here. The output represents the serialized format of a Quad-Tree using level order traversal, where null signifies a path terminator where no node exists below.

It is very similar to the serialization of the binary tree. The only difference is that the node is represented as a list [isLeaf, val].

If the value of isLeaf or val is True we represent it as 1 in the list [isLeaf, val] and if the value of isLeaf or val is False we represent it as 0.


Example 1:



Input: grid = [[0,1],[1,0]]

Output: [[0,1],[1,0],[1,1],[1,1],[1,0]]
Explanation: The explanation of this example is shown below:
Notice that 0 represents False and 1 represents True in the photo representing the Quad-Tree.



Example 2:



Input: grid = [[1,1,1,1,0,0,0,0],[1,1,1,1,0,0,0,0],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,0,0,0,0],[1,1,1,1,0,0,0,0],[1,1,1,1,0,0,0,0],[1,1,1,1,0,0,0,0]]

Output: [[0,1],[1,1],[0,1],[1,1],[1,0],null,null,null,null,[1,0],[1,0],[1,1],[1,1]]
Explanation: All values in the grid are not the same. We divide the grid into four sub-grids.
The topLeft, bottomLeft and bottomRight each has the same value.
The topRight have different values so we divide it into 4 sub-grids where each has the same value.
Explanation is shown in the photo below:




Constraints:

n == grid.length == grid[i].length
n == 2ˣ where 0 <= x <= 6  */


//solution with example

/**
 * Definition for a QuadTree Node.
 *
 * class Node {
 *     constructor(val, isLeaf, topLeft, topRight, bottomLeft, bottomRight) {
 *         this.val = val;
 *         this.isLeaf = isLeaf;
 *         this.topLeft = topLeft;
 *         this.topRight = topRight;
 *         this.bottomLeft = bottomLeft;
 *         this.bottomRight = bottomRight;
 *     }
 * }
 */

class Solution {

    /**
     * @param {number[][]} grid
     * @return {Node}
     */
    construct(grid) {

        let n = grid.length;

        // =====================================================
        // EXAMPLE
        // =====================================================
        //
        // grid = [
        //     [0, 1],
        //     [1, 0]
        // ]
        //
        // We start with the complete grid:
        //
        //     0  1
        //     1  0
        //
        // Call:
        //
        //     dfs(0, 0, 2)
        //
        // row  = 0
        // col  = 0
        // size = 2
        //
        // The current square contains:
        //
        //     0  1
        //     1  0
        //
        // First value = 0
        //
        // Check all values:
        //
        //     0 == 0  -> same
        //     1 != 0  -> DIFFERENT
        //
        // Since values are different,
        // divide the square into 4 parts.
        //
        // half = size / 2
        //      = 2 / 2
        //      = 1
        //
        // Now create:
        //
        //     Top-left     -> dfs(0, 0, 1) -> 0
        //     Top-right    -> dfs(0, 1, 1) -> 1
        //     Bottom-left  -> dfs(1, 0, 1) -> 1
        //     Bottom-right -> dfs(1, 1, 1) -> 0
        //
        // Final tree:
        //
        //                 ROOT
        //              isLeaf=false
        //              /    |    |    \
        //             0     1    1     0
        //           leaf  leaf  leaf  leaf
        //
        // =====================================================


        // dfs() solves one square portion of the grid.
        //
        // row  -> starting row
        // col  -> starting column
        // size -> size of current square

        function dfs(row, col, size) {

            // Take the first value of the current square.
            //
            // Example:
            // dfs(0, 0, 2)
            //
            // grid[0][0] = 0
            //
            // firstValue = 0

            let firstValue = grid[row][col];


            // Check every cell inside the current square.
            //
            // Example:
            //
            // Current square:
            //
            //     0  1
            //     1  0
            //
            // We compare every value with firstValue = 0.

            for (let i = row; i < row + size; i++) {

                for (let j = col; j < col + size; j++) {


                    // If we find a different value,
                    // the current square is NOT a leaf.
                    //
                    // Example:
                    //
                    // firstValue = 0
                    // grid[0][1] = 1
                    //
                    // 1 != 0
                    //
                    // So we must divide the square.

                    if (grid[i][j] !== firstValue) {


                        // Divide the current square into
                        // 4 equal parts.
                        //
                        // Example:
                        //
                        // size = 2
                        //
                        // half = 2 / 2 = 1

                        let half = size / 2;


                        // =================================================
                        // TOP-LEFT
                        // =================================================
                        //
                        // Example:
                        //
                        // dfs(0, 0, 1)
                        //
                        // Represents:
                        //
                        //     0
                        //
                        // All values are same,
                        // so it returns:
                        //
                        //     Node(0, true, null, null, null, null)

                        let topLeft = dfs(
                            row,
                            col,
                            half
                        );


                        // =================================================
                        // TOP-RIGHT
                        // =================================================
                        //
                        // Example:
                        //
                        // dfs(0, 1, 1)
                        //
                        // Represents:
                        //
                        //     1
                        //
                        // Returns:
                        //
                        //     Node(1, true, null, null, null, null)

                        let topRight = dfs(
                            row,
                            col + half,
                            half
                        );


                        // =================================================
                        // BOTTOM-LEFT
                        // =================================================
                        //
                        // Example:
                        //
                        // dfs(1, 0, 1)
                        //
                        // Represents:
                        //
                        //     1
                        //
                        // Returns:
                        //
                        //     Node(1, true, null, null, null, null)

                        let bottomLeft = dfs(
                            row + half,
                            col,
                            half
                        );


                        // =================================================
                        // BOTTOM-RIGHT
                        // =================================================
                        //
                        // Example:
                        //
                        // dfs(1, 1, 1)
                        //
                        // Represents:
                        //
                        //     0
                        //
                        // Returns:
                        //
                        //     Node(0, true, null, null, null, null)

                        let bottomRight = dfs(
                            row + half,
                            col + half,
                            half
                        );


                        // =================================================
                        // CREATE PARENT NODE
                        // =================================================
                        //
                        // At this point we have:
                        //
                        // topLeft     = 0
                        // topRight    = 1
                        // bottomLeft  = 1
                        // bottomRight = 0
                        //
                        // Since this node has 4 children,
                        // isLeaf = false.
                        //
                        // val can be either true/false when
                        // isLeaf is false.

                        return new Node(
                            firstValue,
                            false,
                            topLeft,
                            topRight,
                            bottomLeft,
                            bottomRight
                        );
                    }
                }
            }


            // =========================================================
            // ALL VALUES ARE SAME
            // =========================================================
            //
            // If the loops finish without finding
            // a different value, the entire square
            // contains the same value.
            //
            // Example:
            //
            //     1  1
            //     1  1
            //
            // All values are 1.
            //
            // Therefore:
            //
            //     val = 1
            //     isLeaf = true
            //     children = null
            //
            // Return a leaf node.

            return new Node(
                firstValue,
                true,
                null,
                null,
                null,
                null
            );
        }


        // =========================================================
        // START RECURSION
        // =========================================================
        //
        // Example:
        //
        // n = 2
        //
        // dfs(0, 0, 2)
        //
        // Start from:
        // row = 0
        // col = 0
        // size = 2
        //
        // This means we start with the COMPLETE grid.

        return dfs(0, 0, n);
    }
}