/*   Longest Repeating Character Replacement
Medium
Topics
Company Tags
Hints
You are given a string s consisting of only uppercase english characters and an integer k. You can choose up to k characters of the string and replace them with any other uppercase English character.

After performing at most k replacements, return the length of the longest substring which contains only one distinct character.

Example 1:

Input: s = "XYYX", k = 2

Output: 4
Explanation: Either replace the 'X's with 'Y's, or replace the 'Y's with 'X's.

Example 2:

Input: s = "AAABABB", k = 1

Output: 5
Constraints:

1 <= s.length <= 1000
0 <= k <= s.length
   */


//// brute force5

function characterReplacementBrute(s, k) {
    let n = s.length;
    let ans = 0;

    for (let i = 0; i < n; i++) {

        let freq = new Array(26).fill(0);

        for (let j = i; j < n; j++) {

            freq[s.charCodeAt(j) - 65]++;

            let maxFreq = Math.max(...freq);

            let len = j - i + 1;

            let replacements = len - maxFreq;

            if (replacements <= k) {
                ans = Math.max(ans, len);
            }
        }
    }

    return ans;
}



/// optimal solution
function characterReplacement(s, k) {

    let freq = new Array(26).fill(0);

    let left = 0;
    let maxFreq = 0;
    let ans = 0;

    for (let right = 0; right < s.length; right++) {

        // Add current character
        let idx = s.charCodeAt(right) - 65;
        freq[idx]++;

        // Update maximum frequency in window
        maxFreq = Math.max(maxFreq, freq[idx]);

        // If window is invalid, shrink it
        while ((right - left + 1) - maxFreq > k) {

            freq[s.charCodeAt(left) - 65]--;
            left++;
        }

        // Update answer
        ans = Math.max(ans, right - left + 1);
    }

    return ans;
}