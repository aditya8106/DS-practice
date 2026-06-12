/*  Decode String
Medium
Topics
Company Tags
You are given an encoded string s, return its decoded string.

The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is being repeated exactly k times. Note that k is guaranteed to be a positive integer.

You may assume that the input string is always valid; there are no extra white spaces, square brackets are well-formed, etc. There will not be input like 3a, 2[4], a[a] or a[2].

The test cases are generated so that the length of the output will never exceed 100,000.

Example 1:

Input: s = "2[a3[b]]c"

Output: "abbbabbbc"
Example 2:

Input: s = "axb3[z]4[c]"

Output: "axbzzzcccc"
Example 3:

Input: s = "ab2[c]3[d]1[x]"

Output: "abccdddx"
Constraints:

1 <= s.length <= 30
s is made up of lowercase English letters, digits, and square brackets '[]'.
All the integers in s are in the range [1, 300].
s is guaranteed to be a valid input.
  */

// optimal solution using stack 

function Decode(s) {
    let stack = [];          // store [previousString, repeatCount]
    let currentNum = 0;      // current number
    let currentStr = '';     // current decoded string

    for (let ch of s) {      // traverse each character

        if (!isNaN(ch)) {    // if digit
            currentNum = currentNum * 10 + Number(ch); // build number (e.g. 100)
        }

        else if (ch == '[') { // start of encoded part
            stack.push([currentStr, currentNum]); // save state
            currentNum = 0;    // reset number
            currentStr = '';   // reset string
        }

        else if (ch == ']') { // end of encoded part
            let [prevStr, repeat] = stack.pop(); // get saved state
            currentStr = prevStr + currentStr.repeat(repeat); // decode
        }

        else { // normal character
            currentStr += ch; // append character
        }
    }

    return currentStr; // final answer
}
console.log(Decode("2[a3[b]]c"))