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


//optimal approach using sliding window

/**
 * Minimum Window Substring
 *
 * Optimal Approach - Sliding Window
 *
 * Time Complexity: O(n)
 *      - Right pointer visits each character once.
 *      - Left pointer also visits each character at most once.
 *      - Total pointer movements = 2n = O(n)
 *
 * Space Complexity: O(m)
 *      - m = Number of unique characters in t
 *      - Frequency maps store only required characters.
 */

var minWindow = function(s, t) {

    // -------------------------------
    // Step 1: Build frequency map of t
    // -------------------------------
    //
    // Example:
    //
    // t = "AABC"
    //
    // tfreq = {
    //     A : 2,
    //     B : 1,
    //     C : 1
    // }
    //
    // We need:
    // A twice
    // B once
    // C once
    //
    let tfreq = {};

    for (let ch of t) {
        tfreq[ch] = (tfreq[ch] || 0) + 1;
    }

    // Number of unique characters whose frequency
    // requirements must be satisfied.
    //
    // Example:
    //
    // tfreq = {
    //   A : 2,
    //   B : 1,
    //   C : 1
    // }
    //
    // need = 3
    //
    let need = Object.keys(tfreq).length;

    // Number of unique characters currently satisfied.
    let have = 0;

    // Current window frequency map
    let window = {};

    // Left pointer
    let left = 0;

    // Store minimum window length
    let minLen = Infinity;

    // Store final answer
    let ans = "";

    // ------------------------------------------------
    // Move right pointer to expand the window
    // ------------------------------------------------
    for (let right = 0; right < s.length; right++) {

        // Add current character into window
        window[s[right]] = (window[s[right]] || 0) + 1;

        // If current character reaches exactly
        // the required frequency,
        // then one requirement is satisfied.
        //
        // Example:
        //
        // tfreq
        // A :2
        //
        // window
        //
        // A :1  -> not enough
        //
        // A :2  -> requirement satisfied
        //          have++
        //
        if (tfreq[s[right]] &&
            window[s[right]] === tfreq[s[right]]) {

            have++;
        }

        // ------------------------------------------------
        // Window is valid
        //
        // Example:
        //
        // s = "ADOBECODEBANC"
        //
        // Window = "ADOBEC"
        //
        // A ✔
        // B ✔
        // C ✔
        //
        // have == need
        //
        // Now try to shrink it.
        // ------------------------------------------------
        while (have === need) {

            // Current window length
            let currLen = right - left + 1;

            // Update minimum answer
            if (currLen < minLen) {

                minLen = currLen;

                ans = s.slice(left, right + 1);
            }

            // Character leaving the window
            let ch = s[left];

            // Remove it
            window[ch]--;

            // ------------------------------------------------
            // Example
            //
            // tfreq
            // A :2
            //
            // window before removing
            // A :2
            //
            // remove one A
            //
            // window
            // A :1
            //
            // Now
            //
            // 1 < 2
            //
            // Requirement breaks.
            //
            // have--
            // ------------------------------------------------
            if (tfreq[ch] &&
                window[ch] < tfreq[ch]) {

                have--;
            }

            // Shrink window
            left++;
        }
    }

    return ans;
};