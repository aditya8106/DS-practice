/*  Minimum Window Substring
Hard
Topics
Company Tags
Hints
Given two strings s and t, return the shortest substring of s such that every character in t, including duplicates, is present in the substring. If such a substring does not exist, return an empty string "".

You may assume that the correct output is always unique.

Example 1:

Input: s = "OUZODYXAZV", t = "XYZ"

Output: "YXAZ"
Explanation: "YXAZ" is the shortest substring that includes "X", "Y", and "Z" from string t.

Example 2:

Input: s = "xyz", t = "xyz"

Output: "xyz"
Example 3:

Input: s = "x", t = "xy"

Output: ""
Constraints:

1 <= s.length <= 1000
1 <= t.length <= 1000
s and t consist of uppercase and lowercase English letters. */

// brute force but leetcode not accepted
/**
 * Brute Force Approach
 *
 * Time Complexity: O(n² × m)
 *      n = length of s
 *      m = number of distinct characters (or length) of t
 *
 * Space Complexity: O(m)
 *      Frequency maps for t and current window
 *
 * Idea:
 * 1. Build the frequency map of string t.
 * 2. Try every possible starting index.
 * 3. Expand the window one character at a time.
 * 4. Maintain the frequency of the current window.
 * 5. After every expansion, check whether the window satisfies t.
 * 6. If valid, update the minimum answer.
 */

var minWindow = function(s, t) {

    // Frequency map of string t
    let tfreq = {};

    for (let ch of t) {
        tfreq[ch] = (tfreq[ch] || 0) + 1;
    }

    let min = Infinity;
    let ans = "";

    // Try every starting position
    for (let i = 0; i < s.length; i++) {

        // Frequency map of current window
        let window = {};

        // Expand window
        for (let j = i; j < s.length; j++) {

            // Add current character
            window[s[j]] = (window[s[j]] || 0) + 1;

            let valid = true;

            // Check whether current window contains
            // all required characters
            for (let ch in tfreq) {

                if ((window[ch] || 0) < tfreq[ch]) {
                    valid = false;
                    break;
                }
            }

            // Current window is valid
            if (valid) {

                let len = j - i + 1;

                // Update minimum answer
                if (len < min) {
                    min = len;
                    ans = s.slice(i, j + 1);
                }

                // Any further expansion from the same i
                // will only make the window longer,
                // so stop and move to the next starting index.
                break;
            }
        }
    }

    return ans;
};


