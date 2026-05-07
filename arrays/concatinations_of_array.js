/* You are given an integer array nums of length n. Create an array ans of length 2n where ans[i] == nums[i] and ans[i + n] == nums[i] for 0 <= i < n (0-indexed).

Specifically, ans is the concatenation of two nums arrays.

Return the array ans.

Example 1:

Input: nums = [1,4,1,2]

Output: [1,4,1,2,1,4,1,2]
Example 2:

Input: nums = [22,21,20,1]

Output: [22,21,20,1,22,21,20,1]*/

function brute(nums){
    let res =[]
    for(let i=0;i<2;i++){
        for(let num of nums){
            res.push(num)
        }
    }
    return res;
}

console.log(brute([1,4,1,2]));


//optimal 
function optimal(nums){
    let res =[]
    for(let i =0;i<nums.length;i++){
        res[i] = nums[i];
        res[i+nums.length] = nums[i];
    }
    return res;
}

console.log(optimal([1,4,1,2]))