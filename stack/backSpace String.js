/* 844. Backspace String Compare
Solved
Easy
Topics
premium lock icon
Companies
Given two strings s and t, return true if they are equal when both are typed into empty text editors. '#' means a backspace character.

Note that after backspacing an empty text, the text will continue empty.

 

Example 1:

Input: s = "ab#c", t = "ad#c"
Output: true
Explanation: Both s and t become "ac".
Example 2:

Input: s = "ab##", t = "c#d#"
Output: true
Explanation: Both s and t become "".
Example 3:

Input: s = "a#c", t = "b"
Output: false
Explanation: s becomes "c" while t becomes "b".
 

Constraints:

1 <= s.length, t.length <= 200
s and t only contain lowercase letters and '#' characters.
 

Follow up: Can you solve it in O(n) time and O(1) space? */


/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function (s, t) {

    // Stack for string s
    let Sstr = [];

    // Process string s
    for (let i = 0; i < s.length; i++) {

        // If current character is '#'
        if (s[i] === '#') {

            // If stack is not empty,
            // remove the last character
            if (Sstr.length > 0) {
                Sstr.pop();
            }

        } else {

            // Normal character → add to stack
            Sstr.push(s[i]);
        }
    }

    // Stack for string t
    let Tstr = [];

    // Process string t
    for (let i = 0; i < t.length; i++) {

        // If current character is '#'
        if (t[i] === '#') {

            // If stack is not empty,
            // remove the last character
            if (Tstr.length > 0) {
                Tstr.pop();
            }

        } else {

            // Normal character → add to stack
            Tstr.push(t[i]);
        }
    }

    // Convert both arrays into strings
    // and compare their contents
    return Tstr.join("") === Sstr.join("");
};


// Test cases
console.log(backspaceCompare("ab#c", "ad#c")); // true
console.log(backspaceCompare("ab##", "c#d#")); // true
console.log(backspaceCompare("a#c", "b"));     // false
console.log(backspaceCompare("#a", "a"));       // true
console.log(backspaceCompare("##abc", "abc")); // true
