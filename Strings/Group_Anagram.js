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
        str1 = str.split('').sort().join()  // means "eat" => "aet"  and "tea" => "aet"  so they are anagrams
        if(!map.has(str1)){  //means if we have not seen this anagram before then we will create a new entry in the map with the sorted string as the key and an empty array as the value
            map.set(str1,[]) // means we will push the original string into the array corresponding to the sorted string key in the map
        }
        map.get(str1).push(str)// means we will push the original string into the array corresponding to the sorted string key in the map
    }
  return Array.from(map.values());// means we will return an array of the values in the map, which are the arrays of anagrams
}

console.log(brute(["eat","tea","tan","ate","nat","bat"]));