/* 4Sum
Medium
Topics
Company Tags
You are given an integer array nums of size n, return an array of all the unique quadruplets [nums[a], nums[b], nums[c], nums[d]] such that:

0 <= a, b, c, d < n
a, b, c, and d are distinct.
nums[a] + nums[b] + nums[c] + nums[d] == target
You may return the answer in any order.

Note: [1,0,3,2] and [3,0,1,2] are considered as same quadruplets.

Example 1:

Input: nums = [3,2,3,-3,1,0], target = 3

Output: [[-3,0,3,3],[-3,1,2,3]]
Example 2:

Input: nums = [1,-1,1,-1,1,-1], target = 2

Output: [[-1,1,1,1]]  */   


  // brute force
function brute(nums,target){
    let set = new Set()
    let res = []
    let n = nums.length;
    for(let i=0;i<n;i++){
        let sum =0
        for (let j=i+1;j<n;j++){
            for(let k=j+1;k<n;k++){
                for(let l=k+1;l<n;l++){
                    sum=nums[i]+nums[j]+nums[k]+nums[l]
                    if(sum == target){
                        let trip=[nums[i],nums[j],nums[k],nums[l]].sort((a,b)=>a-b)
                        set.add(JSON.stringify(trip));
                    }
                }
            }
        }
    }
        for(let item of set){
            res.push(JSON.parse(item))
         }
    return res
}

console.log(brute([3,2,3,-3,1,0],3));


// optimal two pointers

var fourSum = function(nums, target) {
     let n = nums.length
    let res = []
    nums.sort((a,b)=> a-b)
    for(let i=0 ;i<n-3;i++){
        if(i>0 && nums[i] == nums[i-1]) continue;
        for(let j=i+1;j<n-2;j++){
            if(j > i+1&& nums[j] == nums[j-1]) continue;
            let left =j+1
            let right = n-1
            while(left < right){
                let sum = nums[i]+nums[j]+nums[left]+nums[right];
                if(sum < target){
                    left++;
                }else if(sum > target ){
                    right --
                }else{
                    res.push([nums[i],nums[j],nums[left],nums[right]])
                    left++
                    right--
                    while(left < right && nums[left] == nums[left -1 ]){
                        left++
                    }
                    while(left < right && nums[right] == nums[right +1]){
                        right--
                    }
                }
            }
        }
    }
    return res;

};

console.log(fourSum([3,2,3,-3,1,0],3));  