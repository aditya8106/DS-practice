/* Word Pattern
Easy
Topics
Company Tags
You are given a pattern and a string s, find if s follows the same pattern.

Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in s. Specifically:

Each letter in pattern maps to exactly one unique word in s.
Each unique word in s maps to exactly one letter in pattern.
No two letters map to the same word, and no two words map to the same letter.
Example 1:

Input: pattern = "abba", s = "dog cat cat dog"

Output: true
Explanation: The bijection can be established as:

'a' maps to "dog".
'b' maps to "cat".
Example 2:

Input: pattern = "abba", s = "dog cat cat fish"

Output: false
Explanation: The bijection cannot be established as:

'a' maps to "dog".
'b' maps to "cat".
The second 'a' should map to "dog", but it maps to "fish" instead.
Example 3:

Input: pattern = "aaaa", s = "dog cat cat dog"

Output: false
Explanation: The bijection cannot be established as:

'a' maps to "dog" for the first occurrence.
The second 'a' should also map to "dog", but it maps to "cat" instead.
Constraints:

1 <= pattern.length <= 300
pattern contains only lowercase English letters.
1 <= s.length <= 3000
s contains only lowercase English letters and spaces ' '.
s does not contain any leading or trailing spaces.
All the words in s are separated by a single space. */


var wordPattern = function(pattern, s) {
    const words = s.split(" ");

    if (pattern.length !== words.length) {
        return false;
    }

    const charToWord = new Map();
    const wordToChar = new Map();

    for (let i = 0; i < pattern.length; i++) {
        const char = pattern[i];
        const word = words[i];

        // If character already maps to a different word
        if (charToWord.has(char) && charToWord.get(char) !== word) {
            return false;
        }

        // If word already maps to a different character
        if (wordToChar.has(word) && wordToChar.get(word) !== char) {
            return false;
        }

        charToWord.set(char, word);
        wordToChar.set(word, char);
    }

    return true;
};