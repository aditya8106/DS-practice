/*  Given a string s, return true if the s can be palindrome after deleting at most one character from it.

 

Example 1:

Input: s = "aba"
Output: true
Example 2:

Input: s = "abca"
Output: true
Explanation: You could delete the character 'c'.
Example 3:

Input: s = "abc"
Output: false
 

Constraints:

1 <= s.length <= 105
s consists of lowercase English letters.
    */

// optimal approach two pointer
function validPalindrome(s) {
    let left = 0;
    let right = s.length - 1;
    while (left < right) {
        if (s[left] !== s[right]) {
            return isPalindrome(s, left + 1, right) /* this line makes a recursive call to check if the substring from left+1 to right is a palindrome */|| isPalindrome(s, left, right - 1); /* this line makes a recursive call to check if the substring from left to right-1 is a palindrome */ 
        }
        left++;
        right--;
    }
    return true;
}

function isPalindrome(s, left, right) {
    while (left < right) { //  `isPalindrome` function checks if the substring of `s` from index `left` to `right` is a palindrome
        if (s[left] !== s[right]) {  // If characters at left and right pointers do not match, it's not a palindrome
            return false;
        }
        left++;
        right--;
    }
    return true;
}
console.log(validPalindrome("aba")); // Output: true    
console.log(validPalindrome("abca")); // Output: true
console.log(validPalindrome("abc")); // Output: false
