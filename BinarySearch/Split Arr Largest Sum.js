/* Split Array Largest Sum
Hard
Topics
Company Tags
You are given an integer array nums and an integer k, split nums into k non-empty subarrays such that the largest sum of any subarray is minimized.

Return the minimized largest sum of the split.

A subarray is a contiguous part of the array.

Example 1:

Input: nums = [2,4,10,1,5], k = 2

Output: 16
Explanation: The best way is to split into [2,4,10] and [1,5], where the largest sum among the two subarrays is only 16.

Example 2:

Input: nums = [1,0,2,3,5], k = 4

Output: 5
Explanation: The best way is to split into [1], [0,2], [3] and [5], where the largest sum among the two subarrays is only 5.

Constraints:

1 <= nums.length <= 1000
0 <= nums[i] <= 1,000,000
1 <= k <= min(50, nums.length) */ 


//optimal using helper function and binary search  O(log n(sum (nums)))

var splitArray = function(nums, k) {
  function canSplit(mid){
    let subarrs = 1
    let sum = 0
    for(let num of nums){
        if(sum + num > mid ){
            subarrs++
            sum = num

        }else{
            sum+=num
        }
    }
    return subarrs<= k
  }  
  let left = Math.max(...nums)
  let right = nums.reduce((a,b)=>a+b,0)
  while(left <=right){
    let mid = Math.floor((left + right) / 2)
    if(canSplit(mid)){
        right = mid -1
    }
    else{
        left = mid +1
    }
      
  }return left

};

// brute fore

class Solution {
    splitArray(nums, k) {

        function dfs(index, remaining) {

            // Only one subarray left
            if (remaining === 1) {
                let sum = 0;

                for (let i = index; i < nums.length; i++) {
                    sum += nums[i];
                }

                return sum;
            }

            let answer = Infinity;
            let currentSum = 0;

            // Try every possible ending position
            for (
                let i = index;
                i <= nums.length - remaining;
                i++
            ) {

                currentSum += nums[i];

                let nextLargest =
                    dfs(i + 1, remaining - 1);

                let largest =
                    Math.max(currentSum, nextLargest);

                answer =
                    Math.min(answer, largest);
            }

            return answer;
        }

        return dfs(0, k);
    }
}