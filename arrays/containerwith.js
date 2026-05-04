/// container with most water 
/*Container With Most Water
Medium
Topics
Company Tags
Hints
You are given an integer array heights where heights[i] represents the height of the 
i
t
h
i 
th
  bar.

You may choose any two bars to form a container. Return the maximum amount of water a container can store.

Example 1:



Input: height = [1,7,2,5,4,7,3,6]

Output: 36
Example 2:

Input: height = [2,2,2]

Output: 4*/

function brute(heights){
    let n = heights.length;
    let maxwater=0
    for(let i =0;i<n;i++){
        for(let j =i+1;j<n;j++){
            let area = Math.min(heights[i],heights[j])*(j-i);
            maxwater=Math.max(maxwater,area);
        }
    }
    return maxwater;
}
console.log(brute([1,8,6,2,5,4,8,3,7]));///output is 49 because  The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.


///optimal two pointers

function optimal(heights){
    let n =heights.length;
    let res = 0;
    let left =0
    let right=n-1;
    let maxwater = 0
    while(left<right){
        let sum = Math.min(heights[left],heights[right])*(right-left);
        maxwater=Math.max(maxwater,sum);
        if(heights[left]<heights[right]){
            left++;
        }else{
            right++;
        }
    }
    return maxwater;
}
console.log(optimal([1,8,6,2,5,4,8,3,7]))

