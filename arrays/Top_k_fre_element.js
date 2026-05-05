/*  TOP K FREQUENT ELEMENT

Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

 

Example 1:

Input: nums = [1,1,1,2,2,3], k = 2

Output: [1,2]

Example 2:

Input: nums = [1], k = 1

Output: [1]

Example 3:

Input: nums = [1,2,1,2,1,2,3,1,3,2], k = 2

Output: [1,2]*/


// brute forcce 

function brute(nums , k){
    let freq = {}
    let max =0
    for(let num  of nums){
        freq[num] = (freq[num]||0)+1;
    }
    max = Object.keys(freq).sort((a,b)=>a-b);
    max = max.slice(0,k)
    return Array.from(max);
}

console.log(brute([1,2,1,2,1,2,3,1,3,2],2)); 


/// optimal -Solution


function Optimal(nums ,k){
    let freq ={}
    let bucket = []
    let res =[]
    for(let num of nums){
        freq[num] = (freq[num]||0)+1;
    }
    for(let key in freq){
        let f = freq[key]
          if (!bucket[f]) {
            bucket[f] = [];
        }
        bucket[f].push(Number(key));
    }
    for(let pos=bucket.length-1;pos>=0;pos--){
        for(let num of bucket[pos]){
            res.push(num);
            if(res.length === k) return res;
        }
    }
}

console.log(Optimal([1,2,1,2,1,2,3,1,3,2],2)); 

