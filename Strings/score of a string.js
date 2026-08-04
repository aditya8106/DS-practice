/*  

Pro
Account
Score of a String
Easy
Topics
Company Tags
You are given a string s. The score of a string is defined as the sum of the absolute difference between the ASCII values of adjacent characters.

Return the score of s.

Example 1:

Input: s = "code"

Output: 24
Explanation: The ASCII values of the characters in the given string are: 'c' = 99, 'o' = 111, 'd' = 100, and 'e' = 101. The score of s will be: |111 - 99| + |100 - 111| + |101 - 100|.

Example 2:

Input: s = "neetcode"

Output: 65
Constraints:

2 <= s.length <= 100
s is made up of lowercase English letters.


Topics

Company Tags
Seen this question in a real interview?
Yes
No
Acceptance Rate
86.0%
Solution 1
+

NeetBot
|

Hint
|
|
Ln 1, Col 1*/
class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    scoreOfString(s) {
        let score = 0
        let left =0
        while(left < s.length - 1){
            score += Math.abs(s.charCodeAt(left+1) - s.charCodeAt(left));
            left++
        }
        return score
    }
}






























