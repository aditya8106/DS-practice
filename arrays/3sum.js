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