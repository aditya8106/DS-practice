/*Given an array of strings strs, group the anagrams together. You can return the answer in any order.

 ///  group Anagrams

Example 1:

Input: strs = ["eat","tea","tan","ate","nat","bat"]

Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

Explanation:

There is no string in strs that can be rearranged to form "bat".
The strings "nat" and "tan" are anagrams as they can be rearranged to form each other.
The strings "ate", "eat", and "tea" are anagrams as they can be rearranged to form each other.
Example 2:

Input: strs = [""]

Output: [[""]]

Example 3:

Input: strs = ["a"]

Output: [["a"]]*/   



function brute(strs){
    let map = new Map();
    let str1 = ''
    for(let str of strs){
        str1 = str.split('').sort().join()
        if(!map.has(str1)){
            map.set(str1,[])
        }
        map.get(str1).push(str)
    }
  return Array.from(map.values());
}

console.log(brute(["eat","tea","tan","ate","nat","bat"]));