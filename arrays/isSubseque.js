/* Is Subsequence
Easy
Topics
Company Tags
You are given two strings s and t, return true if s is a subsequence of t, or false otherwise.

A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).

Example 1:

Input: s = "node", t = "neetcode"

Output: true
Example 2:

Input: s = "axc", t = "ahbgdc"

Output: false
Constraints:

0 <= s.length <= 100
0 <= t.length <= 10,000
s and t consist only of lowercase English letters.
Follow up: Suppose there are lots of incoming s, say s1, s2, ..., sk where k >= 1,000,000,000, and you want to check one by one to see if t has its subsequence. In this scenario, how would you change your code?

*/

//optimal solution using two pointer technique Time complexity O(n) and space complexity O(1)
class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isSubsequence(s, t) {

        let i = 0; // Pointer for s
        let j = 0; // Pointer for t

        // Continue until one string is fully traversed
        while (i < s.length && j < t.length) {

            // Characters match
            if (s[i] === t[j]) {
                i++;
            }

            // Always move through t
            j++;
        }

        // If all characters in s were matched
        return i === s.length;
    }
}