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
/// we will use bucket sort to sort the elements based on their frequency and then we will return the top k elements from the bucket
/* bucket sort works ass 
      
*/

function Optimal(nums ,k){
    let freq ={}
    let bucket = []
    let res =[]
    for(let num of nums){
        freq[num] = (freq[num]||0)+1;
    }
    for(let key in freq){
        let f = freq[key] //  means frequency of the element  like occurence of key in freq object 
        if (!bucket[f]) { // if bucket for this frequency doesn't exist
            bucket[f] = []; // create a new bucket for this frequency
        }
        bucket[f].push(Number(key));//  push the element to its frequency bucket
    }
    for(let pos=bucket.length-1;pos>=0;pos--){ // iterate from the highest frequency to the lowest
        for(let num of bucket[pos]){ // means iterate through all elements in the current frequency bucket
            res.push(num); // push the element to the result array
            if(res.length === k) return res; // return the result array if it has k elements
        }
    }
}

console.log(Optimal([1,2,1,2,1,2,3,1,3,2],2)); 

