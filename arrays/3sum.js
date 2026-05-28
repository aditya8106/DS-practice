/// 3 sum 
/*Input: nums = [-1,0,1,2,-1,-4]

Output: [[-1,-1,2],[-1,0,1]]
Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] where nums[i] + nums[j] + nums[k] == 0, and the indices i, j and k are all distinct.
*/
// no duplicate arrays should print distrinct sub arrays with three indexes = 0 will print

// brute force 
function brute(nums){
    let set = new Set()
    let res = []
    let n = nums.length;
    for(let i=0;i<n;i++){
        let sum =0
        for (let j=i+1;j<n;j++){
            for(let k=j+1;k<n;k++){
                sum=nums[i]+nums[j]+nums[k]
                if(sum == 0){
                    let trip=[nums[i],nums[j],nums[k]].sort((a,b)=>a-b)
                    set.add(JSON.stringify(trip));
                }
            }
        }
        
    }
     for(let item of set){
            res.push(JSON.parse(item))
         }
    return res
   
}
console.log(brute([-1,0,1,2,-1,-4]));


/// optimal two pointers 

function optimal(nums){
    let n = nums.length
    
    let res =[]
    nums.sort((a,b)=>a-b)
    for(let i =0;i<n;i++){
        if(i>0&&nums[i] == nums[i-1]) continue;
        let left = i+1
        let right = n-1
        while(left<right){
            let trip = [nums[i]+nums[left]+nums[right]]
            if(trip <0){
                left++
            }else if(trip>0){
                right--
            }else{
                res.push([nums[i],nums[left],nums[right]]);
                left++;
                right--;
                while(left<right&&nums[left]==nums[left-1]){//it skips duplicates  // means we have already added this triplet to the result array, so we need to skip the duplicate elements to avoid adding the same triplet again. The condition `nums[left] == nums[left-1]` checks if the current left element is the same as the previous left element. If it is, we increment the left pointer to skip over the duplicate element and move to the next unique element.
                    left++;
                }
                while(left<right&&nums[right] == nums[right+1]){//i t cheks  // means we have already added this triplet to the result array, so we need to skip the duplicate elements to avoid adding the same triplet again. The condition `nums[right] == nums[right+1]` checks if the current right element is the same as the next right element. If it is, we decrement the right pointer to skip over the duplicate element and move to the previous unique element.
                    right--;
                }
            }
        
        }
    }
    return res;
}

console.log(optimal([-1,0,1,2,-1,-4]));