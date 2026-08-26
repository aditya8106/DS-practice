/* Extra Characters in a String
Medium
Topics
Company Tags
You are given a string s and a dictionary of words dictionary. You have to break s into one or more non-overlapping substrings such that each substring is present in dictionary. There may be some extra characters in s which are not present in any of the substrings.

Return the minimum number of extra characters left over if you break up s optimally.

Note that the same word in the dictionary may be reused multiple times.

Example 1:

Input: s = "neetcodes", dictionary = ["neet","code","neetcode"]

Output: 1
Explanation: The optimal way is to break s into two substrings: "neet" from index 0 to 3 and "code" from index 4 to 7. There is one character which is at index 8.

Example 2:

Input: s = "neetcodde", dictionary = ["neet","code","neetcode"]

Output: 5
Explanation: The optimal way is to break s into one substring: "neet" from index 0 to 3. The characters at indices from 4 to 8 are extra.

Constraints:

1 <= s.length <= 50
1 <= dictionary.length <= 50
1 <= dictionary[i].length <= 50
s and dictionary[i] consist of only lowercase English letters
dictionary contains distinct words */

/**
 * @param {string} s
 * @param {string[]} dictionary
 * @return {number}
 */
var minExtraChar = function(s, dictionary) {

    let n = s.length;

    // dp[i] = minimum extra characters from index i to the end
    let dp = new Array(n + 1).fill(0);

    // Start from the end
    for (let i = n - 1; i >= 0; i--) {

        // OPTION 1:
        // Make s[i] an extra character
        dp[i] = 1 + dp[i + 1];

        // OPTION 2:
        // Try every dictionary word
        for (let word of dictionary) {

            // Check if word starts at index i
            if (s.substring(i, i + word.length) === word) {

                // Position after using this word
                let next = i + word.length;

                // Use the word and continue from next
                dp[i] = Math.min(dp[i], dp[next]);
            }
        }
    }

    return dp[0];
};



// Example:
// s = "neetcodes"
// dictionary = ["neet", "code", "neetcode"]


// Index:
//   0 1 2 3 4 5 6 7 8
//   n e e t c o d e s


// dp[i] = minimum extra characters from index i to the end


// ------------------------------------
// Start
// ------------------------------------

dp[9] = 0;


// ------------------------------------
// i = 8
// s[8] = "s"
// ------------------------------------

// "s" is not a dictionary word
// So make "s" an extra character

dp[8] = 1 + dp[9];
//       = 1 + 0
//       = 1


// dp:
// [ ?, ?, ?, ?, ?, ?, ?, ?, 1, 0 ]


// ------------------------------------
// i = 7
// s[7] = "e"
// ------------------------------------

// No dictionary word starts with "e"
// Make "e" extra

dp[7] = 1 + dp[8];
//       = 1 + 1
//       = 2


// dp:
// [ ?, ?, ?, ?, ?, ?, ?, 2, 1, 0 ]


// ------------------------------------
// i = 6
// s[6] = "d"
// ------------------------------------

// No dictionary word starts with "d"
// Make "d" extra

dp[6] = 1 + dp[7];
//       = 1 + 2
//       = 3


// dp:
// [ ?, ?, ?, ?, ?, ?, 3, 2, 1, 0 ]


// ------------------------------------
// i = 5
// s[5] = "o"
// ------------------------------------

// No dictionary word starts with "o"
// Make "o" extra

dp[5] = 1 + dp[6];
//       = 1 + 3
//       = 4


// dp:
// [ ?, ?, ?, ?, ?, 4, 3, 2, 1, 0 ]


// ------------------------------------
// i = 4
// s[4] = "c"
// ------------------------------------

// Option 1:
// Make "c" extra

dp[4] = 1 + dp[5];
//       = 1 + 4
//       = 5


// Option 2:
// Check dictionary words

// "neet"      → ❌
// "code"      → ✅
// "neetcode"  → ❌


// "code" exists at index 4:
//
//   0 1 2 3 | 4 5 6 7 | 8
//   n e e t | c o d e | s
//             --------
//                code


// "code" length = 4

let next = 4 + 4;
//          = 8


// After using "code", continue from index 8

// dp[8] = 1
//
//   neet | code | s
//               ↑
//              extra


// Compare both choices:
//
// Option 1 → 5
// Option 2 → 1

dp[4] = Math.min(5, dp[8]);
//       = Math.min(5, 1)
//       = 1


// dp:
// [ ?, ?, ?, ?, 1, 4, 3, 2, 1, 0 ]


// ------------------------------------
// i = 3
// s[3] = "t"
// ------------------------------------

// No dictionary word starts with "t"
// Make "t" extra

dp[3] = 1 + dp[4];
//       = 1 + 1
//       = 2


// dp:
// [ ?, ?, ?, 2, 1, 4, 3, 2, 1, 0 ]


// ------------------------------------
// i = 2
// s[2] = "e"
// ------------------------------------

// No dictionary word starts here
// Make "e" extra

dp[2] = 1 + dp[3];
//       = 1 + 2
//       = 3


// dp:
// [ ?, ?, 3, 2, 1, 4, 3, 2, 1, 0 ]


// ------------------------------------
// i = 1
// s[1] = "e"
// ------------------------------------

// No dictionary word starts here
// Make "e" extra

dp[1] = 1 + dp[2];
//       = 1 + 3
//       = 4


// dp:
// [ ?, 4, 3, 2, 1, 4, 3, 2, 1, 0 ]


// ------------------------------------
// i = 0
// s[0] = "n"
// ------------------------------------

// Option 1:
// Make "n" extra

dp[0] = 1 + dp[1];
//       = 1 + 4
//       = 5


// Option 2:
// Check dictionary

// "neet"      → ✅
// "code"      → ❌
// "neetcode"  → ✅


// ------------------------------------
// "neet" exists
// ------------------------------------
//
//   0 1 2 3 | 4 5 6 7 8
//   n e e t | c o d e s
//   --------
//      neet


// "neet" length = 4

next = 0 + 4;
//     = 4


// After "neet", continue from index 4
// dp[4] = 1


// Compare:
//
// Option 1 → 5
// Use "neet" → 1

dp[0] = Math.min(5, dp[4]);
//       = Math.min(5, 1)
//       = 1


// ------------------------------------
// "neetcode" also exists
// ------------------------------------
//
//   0 1 2 3 4 5 6 7 | 8
//   n e e t c o d e | s
//   ----------------
//          neetcode


// "neetcode" length = 8

next = 0 + 8;
//     = 8


// dp[8] = 1


// Compare again:
//
// Current answer → 1
// "neetcode"    → 1

dp[0] = Math.min(1, dp[8]);
//       = Math.min(1, 1)
//       = 1


// ------------------------------------
// FINAL DP
// ------------------------------------

// index:
//  0 1 2 3 4 5 6 7 8 9
//
// dp:
// [ 1,4,3,2,1,4,3,2,1,0 ]
//   ↑
// answer


// Final:
//
//   neet | code | s
//   ----   ----   -
//   word   word extra
//
// Extra characters = 1


return dp[0]; // 1