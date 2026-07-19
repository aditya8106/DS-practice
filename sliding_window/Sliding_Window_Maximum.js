/*  Sliding Window Maximum
 
 You are given an array of integers nums and an integer k. There is a sliding window of size k that starts at the left edge of the array. The window slides one position to the right until it reaches the right edge of the array.

Return a list that contains the maximum element in the window at each step.

Example 1:

Input: nums = [1,2,1,0,4,2,6], k = 3

Output: [2,2,4,4,6]

Explanation:
Window position            Max
---------------           -----
[1  2  1] 0  4  2  6        2
 1 [2  1  0] 4  2  6        2
 1  2 [1  0  4] 2  6        4
 1  2  1 [0  4  2] 6        4
 1  2  1  0 [4  2  6]       6  */


 /// brute focrce

 function brute(nums ,k){
    let res =[];
    for(let i=0;i<=nums.length-k;i++){
        let max = nums[i];
        for(let j =i;j<=i+k-1;j++){
            max=Math.max(max,nums[j])
        }
        res.push(max);
    }
    return res;
 }

 console.log(brute([1,2,1,0,4,2,6],3));  // output [2,2,4,4,6]



 /// optimal 



 
    function maxSlidingWindow(nums, k)  {

        let deque = []; // stores indexes  means 
        let result = [];

        for (let i = 0; i < nums.length; i++) {

            // Remove indexes outside window
            while (deque.length && deque[0] <= i - k) {
                deque.shift();
            }

            // Remove smaller elements from back
            while (
                deque.length &&
                nums[deque[deque.length - 1]] < nums[i]
            ) {
                deque.pop();
            }

            // Add current index
            deque.push(i);

            // Window formed
            if (i >= k - 1) {
                result.push(nums[deque[0]]);
            }
        }

        return result;
    }

    console.log(maxSlidingWindow([1,2,1,0,4,2,6],3));  // output [2,2,4,4,6]
    // this one is optimal solution using deque - deque is a double ended queue which allows us to add and remove elements from both ends of the queue, we will use deque to store the indexes of the elements in the current window and we will keep removing the indexes of the elements which are smaller than the current element and also we will keep removing the indexes of the elements which are outside the current window, at the end of each window we will add the maximum element in the current window to the result array which is the element at the front of the deque.