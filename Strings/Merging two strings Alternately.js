// merging two strings alternately leet code 1768 neet code
/* You are given two strings, word1 and word2. Construct a new string by merging them in alternating order, starting with word1 — take one character from word1, then one from word2, and repeat this process.

If one string is longer than the other, append the remaining characters from the longer string to the end of the merged result.

Return the final merged string.

Example 1:

Input: word1 = "abc", word2 = "xyz"

Output: "axbycz"
Example 2:

Input: word1 = "ab", word2 = "abbxxc"

Output: "aabbbxxc"
*/
// brute force approach and optimal approach are the same in this case
var mergeAlternately = function(word1, word2) {
    let result = "";
    let left = 0;
    let right = 0;
    while (left < word1.length || right < word2.length) {
        result += left < word1.length ? word1[left] : ""; // if left pointer is within the bounds of word1, add the character at left pointer to result, otherwise add an empty string
        result += right < word2.length ? word2[right] : "";
        left++; // move the left pointer to the next character in word1
        right++; // move the right pointer to the next character in word2
    }   
    return result;
}