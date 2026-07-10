/*  Minimum Size Subarray Sum
Medium
Topics
Company Tags
You are given an array of positive integers nums and a positive integer target, return the minimal length of a subarray whose sum is greater than or equal to target. If there is no such subarray, return 0 instead.

A subarray is a contiguous non-empty sequence of elements within an array.

Example 1:

Input: target = 10, nums = [2,1,5,1,5,3]

Output: 3
Explanation: The subarray [5,1,5] has the minimal length under the problem constraint.

Example 2:

Input: target = 5, nums = [1,2,1]

Output: 0
Constraints:

1 <= nums.length <= 100,000
1 <= nums[i] <= 10,000
1 <= target <= 1,000,000,000
Follow up: If you have figured out the O(n) solution, try coding another solution of which the time complexity is O(n log(n)).

 */  


//brute force O(N2) 

function MinSizeSubArr( nums , target ){
    let minlen = Infinity
    for(let i = 0 ; i< nums.length;i++){
        let sum = 0
        for(let j= i;j< nums.length;j++){
            sum+=nums[j]
            if(sum  >= target){
                minlen = Math.min(minlen , j-i+1)
                break;
            }
        }
    }
    if(minlen === Infinity) {
        return  0}
    else{return  minlen}
}

console.log(MinSizeSubArr([2,1,5,1,5,3], 10));


// optimal using sliding window 

function MinSizeSubArr2(nums , target){
    let  Minlen = Infinity
    let left = 0 
    let sum = 0
    for(let i = 0;i< nums.length;i++){
        sum+=nums[i]
        while(sum >= target){
        Minlen = Math.min(Minlen , i - left + 1)
        sum-=nums[left]
        left++
        }
    }
     if(Minlen === Infinity) {
        return  0}
    else{return  Minlen}

}
console.log(MinSizeSubArr2([2,1,5,1,5,3], 10));
