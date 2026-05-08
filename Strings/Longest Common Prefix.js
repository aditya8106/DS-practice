// longest common  prefix 
/* You are given an array of strings strs. Return the longest common prefix of all the strings.

If there is no longest common prefix, return an empty string "".

Example 1:

Input: strs = ["bat","bag","bank","band"]

Output: "ba"
Example 2:

Input: strs = ["dance","dag","danger","damage"]

Output: "da"
Example 3:

Input: strs = ["neet","feet"]

Output: "" */


// brute force
function brute(strs){
    let first = strs[0] // means we will take the first string in the array as the reference string and compare it with the other strings in the array to find the longest common prefix

    for(let i =0;i<first.length;i++){ // means we will iterate through each character of the first string and compare it with the corresponding character of the other strings in the array
        for(let j =0;j<strs.length;j++){// means we will iterate through each string in the array and compare the corresponding character with the character of the first string
            if(first[i] !== strs[j][i]){// means if the characters do not match then we will return the longest common prefix found so far, which is the substring of the first string from the beginning to the current index
                return first.slice(0,i);   // means we will return the longest common prefix found so far, which is the substring of the first string from the beginning to the current index
            }
        }
    } 
    return first;// means if we have iterated through all the characters of the first string and all the characters match with the corresponding characters of the other strings in the array then we will return the first string as the longest common prefix
}

console.log(brute(["bat","bag","bank","band"]));// output: "ba"

// optimal

function longestCommonPrefix(strs) {
    if (strs.length === 0) return "";
    let prefix = strs[0]; // means we will take the first string in the array as the reference string and compare it with the other strings in the array to find the longest common prefix  
    for (let i = 1; i < strs.length; i++) { // means we will iterate through each string in the array starting from the second string and compare it with the reference string to find the longest common prefix
        while (strs[i].indexOf(prefix) !== 0) { // means we will check if the current string in the array starts with the current prefix, if it does not then we will remove the last character from the prefix and check again until we find a common prefix or the prefix becomes empty
            prefix = prefix.slice(0, -1); // means we will remove the last character from the prefix
            if (prefix === "") return ""; // means if the prefix becomes empty then we will return an empty string as there is no common prefix
        }   
    }
    return prefix; // means if we have iterated through all the strings in the array and found a common prefix then we will return the common prefix
}   

console.log(longestCommonPrefix(["bat","bag","bank","band"]));// output: "ba"

