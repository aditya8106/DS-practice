/*  Given an unsorted integer array nums. Return the smallest positive integer that is not present in nums.

You must implement an algorithm that runs in O(n) time and uses O(1) auxiliary space.

 

Example 1:

Input: nums = [1,2,0]
Output: 3
Explanation: The numbers in the range [1,2] are all in the array.
Example 2:

Input: nums = [3,4,-1,1]
Output: 2
Explanation: 1 is in the array but 2 is missing.
Example 3:

Input: nums = [7,8,9,11,12]
Output: 1
Explanation: The smallest positive integer 1 is missing.
*/ 
  

/// brute forcce 
 function brute(nums){
    let map = new  Map()
    for(let num of nums){
        map.set(num,true)
    }
    for(let i =0;i<nums.length;i++){
        if(!map.has(i)&&i>0){
            return i;
        }
    }
 }

 console.log(brute([7,1,9,11,12]));//2


 //optimal solution that make no use of map and using same array with low time and space complexity

 function optimal(nums){
    let n = nums.length;
    for(let i = 0;i<n;i++){
        if(nums[i]<=0 && nums[i]>n){   //this loop clean the code 
            nums[i]=n+1;
        }
    }
    for(let i=0;i<n;i++){
        let num = Math.abs(nums[i]);
        if (num >n)continue;
        if(nums[num - 1] >0){           //this loop make negitive of existing numbers which in the range of length  
            nums[num-1] = -nums[num-1]
        }
    }

    for(let i =0;i<n;i++){
        if(nums[i]>0){
            return i+1   // this loop  return the first positive number index
        }
    }
    return n+1; //if no number returned on above loop the missing numbers length +1;
 }

 console.log(optimal([-7,-8,9,11,12,1,2,5]))