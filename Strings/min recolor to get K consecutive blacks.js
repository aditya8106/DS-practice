/*  Minimum Recolors to Get K Consecutive Black Blocks
Easy
Topics
Company Tags
You are given a 0-indexed string blocks of length n, where blocks[i] is either 'W' or 'B', representing the color of the ith block. The characters 'W' and 'B' denote the colors white and black, respectively.

You are also given an integer k, which is the desired number of consecutive black blocks.

In one operation, you can recolor a white block such that it becomes a black block.

Return the minimum number of operations needed such that there is at least one occurrence of k consecutive black blocks.

Example 1:

Input: blocks = "WBBWWBBWBW", k = 7

Output: 3
Explanation: Recolor the 0th, 3rd, and 4th blocks to get 7 consecutive black blocks.

Example 2:

Input: blocks = "BWWWBB", k = 6

Output: 3
Explanation: Recolor all the white blocks with black.

Constraints:

1 <= k <= blocks.length <= 100
blocks[i] is either 'W' or 'B'.  */

/**
 * Minimum Recolors to Get K Consecutive Black Blocks
 * LeetCode 2379
 */

var minimumRecolors = function(blocks, k) {

    // STEP 1:
    // Count the number of white blocks ('W')
    // in the first window of size k.
    let cnt = 0;

    for (let i = 0; i < k; i++) {
        if (blocks[i] === 'W') {
            cnt++;
        }
    }

    // STEP 2:
    // The first window's white count is our
    // initial minimum.
    let res = cnt;


    // STEP 3:
    // Start sliding the window.
    //
    // i = k means:
    // We already processed indexes 0 to k-1.
    // Now index k is the new character entering.
    for (let i = k; i < blocks.length; i++) {

        // STEP 4:
        // Remove the character that is leaving
        // the window.
        //
        // i - k gives us the index leaving the window.
        if (blocks[i - k] === 'W') {
            cnt--;
        }


        // STEP 5:
        // Add the new character entering the window.
        //
        // i is the new rightmost character.
        if (blocks[i] === 'W') {
            cnt++;
        }


        // STEP 6:
        // Keep the minimum number of white blocks.
        //
        // Fewer W's = fewer recoloring operations.
        res = Math.min(res, cnt);
    }


    // STEP 7:
    // Return the minimum number of recolors required.
    return res;
};


// Example
console.log(minimumRecolors("WBBWWBBWBW", 7)); // 3
console.log(minimumRecolors("BWWWBB", 6));       // 3