// Majority Element

/**  Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times in the array. You may assume that the majority element always exists in the array.

Example 1:

Input: nums = [5,5,1,1,1,5,5]

Output: 5
Example 2:

Input: nums = [2,2,2]

Output: 2 */

// brute force

function brute(nums){
    let n = nums.length;
    let freq = {    }
    for(let num of nums){// 5,5,1,1,1,5,5
        freq[num] = (freq[num] || 0) + 1;// means 5:2,1:3
        if(freq[num] > n/2){ // 3.5
            return num;/// 5
        }
    }
}

console.log(brute([5,5,1,1,1,5,5])); // out put  5

// optimal
    function majorityElement(nums) {
        let count = 0;
        let candidate = null;   
        for (let num of nums) {
            if (count === 0) {
                candidate = num;
            }   
            count += (num === candidate) ? 1 : -1;
        }
        return candidate;
    }

    console.log(majorityElement([5,5,1,1,1,5,5])); // output 5
     /* explanation:
1. We initialize a count variable to keep track of the count of the current candidate and a candidate variable to store the current majority element.
2. We iterate through each number in the input array nums.
3. If the count is zero, we set the current number as the new candidate.
4. We then update the count: if the current number is the same as the candidate, we increment the count; otherwise, we decrement it.
5. By the end of the loop, the candidate variable will hold the majority element, which we return. */   

