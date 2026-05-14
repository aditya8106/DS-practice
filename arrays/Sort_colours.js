/*  Sort Colors
Medium
Topics
Company Tags
You are given an array nums consisting of n elements where each element is an integer representing a color:

0 represents red
1 represents white
2 represents blue
Your task is to sort the array in-place such that elements of the same color are grouped together and arranged in the order: red (0), white (1), and then blue (2).

You must not use any built-in sorting functions to solve this problem.

Example 1:

Input: nums = [1,0,1,2]

Output: [0,1,1,2]
Example 2:

Input: nums = [2,1,0]

Output: [0,1,2]   */


 // brute force  
   function brute(nums)   {
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length - i - 1; j++) {
            if (nums[j] > nums[j + 1]) {
                // Swap nums[j] and nums[j + 1]
                let temp = nums[j];
                nums[j] = nums[j + 1];
                nums[j + 1] = temp;
            }       
        }
   }
    return nums;
}

console.log(brute([1, 0, 1, 2])); // Output: [0, 1, 1, 2]
console.log(brute([2, 1, 0])); // Output: [0, 1, 2]


/// optimal approach - dutch national flag algorithm
function sortColors(nums) {
    let low = 0;
    let mid = 0;
    let high = nums.length - 1;
    while (mid <= high) {
        if (nums[mid] === 0) {
            // Swap nums[low] and nums[mid]     
            [nums[low], nums[mid]] = [nums[mid], nums[low]]; // Swap the elements at low and mid
            low++;// Move the low pointer to the right
            mid++;// Move the mid pointer to the right
        } else if (nums[mid] === 1) { //    If the current element is 1, just move the mid pointer to the right
            mid++;// Move the mid pointer to the right
        } else {
            // Swap nums[mid] and nums[high]
            [nums[mid], nums[high]] = [nums[high], nums[mid]];// Swap the elements at mid and high
            high--; // Move the high pointer to the left
        }
    }
    return nums;
}

console.log(sortColors([1, 0, 1, 2])); // Output: [0, 1, 1, 2]
console.log(sortColors([2, 1, 0])); // Output: [0, 1, 2]
// explanation 
// The function initializes three pointers: low, mid, and high. The low pointer starts at the beginning of the array, the mid pointer also starts at the beginning, and the high pointer starts at the end of the array.
// The while loop continues until the mid pointer is less than or equal to the high pointer. Inside the loop, the function checks the value at the mid pointer:
// If the value is 0, it swaps the values at low and mid, then increments both low and mid pointers.
// If the value is 1, it simply increments the mid pointer.
// If the value is 2, it swaps the values at mid and high, then decrements the high pointer.
// This process effectively partitions the array into three sections: all 0s to the left of low, all 1s between low and mid, and all 2s to the right of high. By the end of the loop, the array is sorted in-place with all colors grouped together in the correct order.   