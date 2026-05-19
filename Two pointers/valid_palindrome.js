// valid _ palindome

/* A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.

 

Example 1:

Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.
Example 2:

Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.
Example 3:

Input: s = " "
Output: true
Explanation: s is an empty string "" after removing non-alphanumeric characters.
Since an empty string reads the same forward and backward, it is a palindrome.
 

Constraints:

1 <= s.length <= 2 * 105
s consists only of printable ASCII characters.
*/

// brute force solution

function brute(s){
    let clean = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase(); // means we will remove all non-alphanumeric characters and convert all uppercase letters to lowercase letters
    let reversed = clean.split('').reverse().join(''); // means we will reverse the cleaned string and join it back to a string
    return clean === reversed; // means we will compare the cleaned string with the reversed string and return true if they are equal and false otherwise
}
// optimal solution using two pointers
function optimal(s) {
    let clean = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase(); // means we will remove all non-alphanumeric characters and convert all uppercase letters to lowercase letters    
    let left = 0; // means we will have two pointers, one at the beginning of the cleaned string and one at the end of the cleaned string
    let right = clean.length - 1;
    while (left < right) { // means we will loop until the left pointer is less than the right pointer
        if (clean[left] !== clean[right]) { // means if the characters at the left and right pointers are not equal then we will return false
            return false;
        }
        left++; // means we will move the left pointer to the right
        right--; // means we will move the right pointer to the left
    }
    return true; // means if we have looped through the cleaned string and all characters at the left and right pointers are equal then we will return true
}

console.log(brute("A man, a plan, a canal: Panama")); // Output: true
console.log (brute("race a car")); // Output: false     
console.log(optimal("A man, a plan, a canal: Panama")); // Output: true
console.log(optimal("race a car")); // Output: false
console.log(optimal(" ")); // Output: true  