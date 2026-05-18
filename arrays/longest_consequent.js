/*  
  Longest Consecutive Sequence
Medium
Topics
Company Tags
Hints
Given an array of integers nums, return the length of the longest consecutive sequence of elements that can be formed.

A consecutive sequence is a sequence of elements in which each element is exactly 1 greater than the previous element. The elements do not have to be consecutive in the original array.

You must write an algorithm that runs in O(n) time.

Example 1:

Input: nums = [2,20,4,10,3,4,5]

Output: 4
Explanation: The longest consecutive sequence is [2, 3, 4, 5].

Example 2:

Input: nums = [0,3,2,5,4,6,1,1]

Output: 7 
*/

// optimal and brute forrce
 
function longestConsequent(nums) {
    let set = new Set(nums);
        let longest = 0;
        for(let num of set){

            // only start if previous number missing
            if(!set.has(num - 1)){

                let currentNum = num;
                let count = 1;

                // keep checking next numbers
                while(set.has(currentNum + 1)){
                    currentNum++;
                    count++;
                }

                longest = Math.max(longest, count);
            }
        }

        return longest;
}

console.log(longestConsequent([2,20,4,10,3,4,5])); // output 4
console.log(longestConsequent([0,3,2,5,4,6,1,1])); // output 7

