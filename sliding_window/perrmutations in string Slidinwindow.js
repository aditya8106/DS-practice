/*  Permutation in String
Medium
Topics
Company Tags
Hints
You are given two strings s1 and s2.

Return true if s2 contains a permutation of s1, or false otherwise. That means if a permutation of s1 exists as a substring of s2, then return true.

Both strings only contain lowercase letters.

Example 1:

Input: s1 = "abc", s2 = "lecabee"

Output: true
Explanation: The substring "cab" is a permutation of "abc" and is present in "lecabee".

Example 2:

Input: s1 = "abc", s2 = "lecaabee"

Output: false
Constraints:

1 <= s1.length, s2.length <= 1000 */

// brute force 
/* Time Complexity
There are about (n - k + 1) windows.
For every window:
slice() → O(k)
sort() → O(k log k)

Overall:

Time : O(n × k log k)
Space: O(k)  */
function checkInclusion(s1, s2) {

        // Length of the substring we need to check
        let k = s1.length;

        // Sort s1 once
        let sortedS1 = s1.split('').sort().join('');

        // Check every substring of length k
        for (let left = 0; left <= s2.length - k; left++) {

            // Take the current substring
            let window = s2.slice(left, left + k);

            // Sort the substring
            let sortedWindow = window.split('').sort().join('');

            // If both sorted strings are equal,
            // then the window is a permutation of s1
            if (sortedWindow === sortedS1) {
                return true;
            }
        }

        // No permutation found
        return false;
 }
console.log(checkInclusion('abc' , 'lecbaed')) // true

function checkInclusion2(s1, s2) {
/* Optimal (No Helper Function)
Time Complexity

Building frequency arrays

O(k)

Sliding the window

O(n)

Comparing 26 elements every slide

26 = constant = O(1)

Overall

Time : O(n)
Space: O(26) = O(1) */
        // Compare two frequency arrays
        const isSame = (arr1, arr2) => {
            for (let i = 0; i < 26; i++) {
                if (arr1[i] !== arr2[i]) {
                    return false;
                }
            }
            return true;
        };

        // If s1 is longer, no permutation is possible
        if (s1.length > s2.length) return false;

        // Frequency arrays for s1 and current window
        let s1Arr = new Array(26).fill(0);
        let s2Arr = new Array(26).fill(0);

        let k = s1.length;

        // Build frequency array for s1
        for (let ch of s1) {
            let idx = ch.charCodeAt(0) - 'a'.charCodeAt(0);
            s1Arr[idx]++;
        }

        // Build frequency array for the first window of s2
        for (let i = 0; i < k; i++) {
            let idx = s2[i].charCodeAt(0) - 'a'.charCodeAt(0);
            s2Arr[idx]++;
        }

        // Check the first window
        if (isSame(s1Arr, s2Arr)) {
            return true;
        }

        // Two pointers
        let left = 0;
        let right = k;

        // Slide the window until the end
        while (right < s2.length) {

            // Remove the left character from the window
            let leftIdx = s2[left].charCodeAt(0) - 'a'.charCodeAt(0);
            s2Arr[leftIdx]--;

            // Add the new right character into the window
            let rightIdx = s2[right].charCodeAt(0) - 'a'.charCodeAt(0);
            s2Arr[rightIdx]++;

            // Move both pointers
            left++;
            right++;

            // Compare frequency arrays
            if (isSame(s1Arr, s2Arr)) {
                return true;
            }
        }

        // No permutation found
        return false;
    }

    console.log(checkInclusion2('abc' , 'lecbaed')) // true  
    /* with out helper functionn we caan directly write that function logiic like 
        let same = true;

        for (let i = 0; i < 26; i++) {
            if (s1Arr[i] !== s2Arr[i]) {
                same = false;
                break;
            }
        }

        if (same) return true;
  this also return same logic */
  

