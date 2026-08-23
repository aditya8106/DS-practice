/* Isomorphic Strings
Easy
Topics
Company Tags
You are given two strings s and t, determine if they are isomorphic.

Two strings s and t are isomorphic if the characters in s can be replaced to get t.

All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.

Example 1:

Input: s = "egg", t = "add"

Output: true
Explanation: The strings s and t can be made identical by:

Mapping 'e' to 'a'.
Mapping 'g' to 'd'.
Example 2:

Input: s = "foo", t = "bar"

Output: false
Explanation: The strings s and t can not be made identical as 'o' needs to be mapped to both 'a' and 'r'.

Example 3:

Input: s = "paper", t = "title"

Output: true */

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    let mapST = new Map(); // s -> t
    let mapTS = new Map(); // t -> s

    for (let i = 0; i < s.length; i++) {
        let charS = s[i];
        let charT = t[i];

        // Check s -> t mapping
        if (mapST.has(charS) && mapST.get(charS) !== charT) {
            return false;
        }

        // Check t -> s mapping
        if (mapTS.has(charT) && mapTS.get(charT) !== charS) {
            return false;
        }

        // Create the mappings
        mapST.set(charS, charT);
        mapTS.set(charT, charS);
    }

    return true;
};