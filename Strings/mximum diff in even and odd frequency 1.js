/* Maximum Difference Between Even and Odd Frequency I
Easy
Topics
Company Tags
You are given a string s consisting of lowercase English letters.

Your task is to find the maximum difference diff = freq(a1) - freq(a2) between the frequency of characters a1 and a2 in the string such that:

a1 has an odd frequency in the string.
a2 has an even frequency in the string.
Return this maximum difference.

Example 1:

Input: s = "aaaaabbc"

Output: 3
Explanation:

The character 'a' has an odd frequency of 5, and 'b' has an even frequency of 2.
The maximum difference is 5 - 2 = 3.
Example 2:

Input: s = "abcabcab"

Output: 1
Explanation:

The character 'a' has an odd frequency of 3, and 'c' has an even frequency of 2.
The maximum difference is 3 - 2 = 1.
Constraints:

3 <= s.length <= 100
s consists only of lowercase English letters.
s contains at least one character with an odd frequency and one with an even frequency. */

// Maximum Difference Between Even and Odd Frequency I

function maxDifference(s) {

    // Store frequency of each character
    let freq = new Map();

    for (let ch of s) {
        freq.set(ch, (freq.get(ch) || 0) + 1);
    }

    let maxOdd = 0;
    let minEven = Infinity;

    // Find maximum odd frequency
    // and minimum even frequency
    for (let count of freq.values()) {

        if (count % 2 === 1) {
            maxOdd = Math.max(maxOdd, count);
        } else {
            minEven = Math.min(minEven, count);
        }
    }

    return maxOdd - minEven;
}


// Test cases

console.log(maxDifference("aaaaabbc")); // 3
console.log(maxDifference("abcabcab"));  // 1