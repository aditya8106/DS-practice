/* Append Characters to String to Make Subsequence
Medium
Topics
Company Tags
You are given two strings s and t consisting of only lowercase English letters.

Return the minimum number of characters that need to be appended to the end of s so that t becomes a subsequence of s.

A subsequence is a string that can be derived from another string by deleting some or no characters without changing the order of the remaining characters.

Example 1:

Input: s = "coaching", t = "coding"

Output: 4
Explanation: Append the characters "ding" to the end of s so that s = "coachingding".
Now, t is a subsequence of s (coachingding).
It can be shown that appending any 3 characters to the end of s will never make t a subsequence.

Example 2:

Input: s = "abcde", t = "a"

Output: 0
Explanation: t is already a subsequence of s ("abcde").

Example 3:

Input: s = "z", t = "abcde"

Output: 5
Explanation: Append the characters "abcde" to the end of s so that s = "zabcde".
Now, t is a subsequence of s (zabcde).
It can be shown that appending any 4 characters to the end of s will never make t a subsequence.

Constraints:

1 <= s.length, t.length <= 100,000
s and t consist of lowercase English letters. */


//optimal solution and Brute force solution  Time complexity: O(n) and Space complexity: O(1)
class Solution {
    /**
     * Find the minimum number of characters that need to be
     * appended to the end of s so that t becomes a subsequence.
     *
     * @param {string} s
     * @param {string} t
     * @return {number}
     */
    appendCharacters(s, t) {

        // Pointer for traversing string 's'
        let left = 0;

        // Pointer for traversing string 't'
        let right = 0;

        // Traverse both strings until one of them finishes
        while (left < s.length && right < t.length) {

            // If current characters match,
            // we have successfully found one character of 't'
            if (s[left] === t[right]) {
                right++;
            }

            // Always move to the next character in 's'
            // because we're scanning the entire string 's'
            left++;
        }

        // 'right' represents the number of characters
        // successfully matched in 't'
        //
        // Remaining characters of 't'
        // must be appended to the end of 's'
        return t.length - right;
    }
}


// ---------------------------------------------------
// Driver Code (For VS Code Testing)
// ---------------------------------------------------

function main() {

    const solution = new Solution();

    console.log(solution.appendCharacters("coaching", "coding")); // 4
    console.log(solution.appendCharacters("abcde", "a"));         // 0
    console.log(solution.appendCharacters("z", "abcde"));         // 5

}

main();