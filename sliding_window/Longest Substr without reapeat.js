/*  Longest Substring Without Repeating Characters
Medium
Topics
Company Tags
Hints
Given a string s, find the length of the longest substring without duplicate characters.

A substring is a contiguous sequence of characters within a string.

Example 1:

Input: s = "zxyzxyz"

Output: 3
Explanation: The string "xyz" is the longest without duplicate characters.

Example 2:

Input: s = "xxxx"

Output: 1
Constraints:

0 <= s.length <= 1000
s may consist of printable ASCII characters.
  */


// ==========================================
// BRUTE FORCE 1
// Using string + includes()
// Time Complexity: O(n²)
// (includes itself takes time, so not optimal)
// ==========================================

function Brute(s) {


// Stores the maximum length found so far
let maxl = 0;

// Pick every possible starting index
for(let i = 0; i < s.length; i++) {

    // Stores characters seen in current substring
    let seen = '';

    // Expand substring from i onwards
    for(let j = i; j < s.length; j++) {

        // If current character already exists,
        // duplicate found, stop expanding
        if(seen.includes(s[j])) {
            break;
        }

        // Add current character
        seen += s[j];

        // Update maximum length
        maxl = Math.max(maxl, j - i + 1);
    }
}

return maxl;

}

console.log(Brute('zyxzyxz'));

// ==========================================
// BRUTE FORCE 2 (Better)
// Using Set
// Time Complexity: O(n²)
// ==========================================

function Brute2(s) {


// Stores maximum length found
let maxl = 0;

// Try every starting index
for(let i = 0; i < s.length; i++) {

    // Fresh Set for each starting point
    let set = new Set();

    // Expand substring
    for(let j = i; j < s.length; j++) {

        // Duplicate found
        if(set.has(s[j])) {
            break;
        }

        // Add current character
        set.add(s[j]);

        // Update maximum length
        maxl = Math.max(maxl, j - i + 1);
    }
}

return maxl;


}

console.log(Brute2('zyxzyxz'));

// ==========================================
// OPTIMAL - Sliding Window + Set
// Time Complexity: O(n)
// Space Complexity: O(n)
// ==========================================

function optimal(s) {


// Stores characters currently inside window
let set = new Set();

// Maximum valid substring length
let maxl = 0;

// Left boundary of window
let left = 0;

// Right boundary of window
for(let i = 0; i < s.length; i++) {

    // If duplicate exists,
    // keep shrinking window from left
    while(set.has(s[i])) {

        // Remove left character
        set.delete(s[left]);

        // Move left pointer forward
        left++;
    }

    // Add current character
    set.add(s[i]);

    // Current window length
    let currentLength = i - left + 1;

    // Update maximum length
    maxl = Math.max(maxl, currentLength);
}

return maxl;


}

console.log(optimal('zyxzyxz'));
