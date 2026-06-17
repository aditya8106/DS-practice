/* Sqrt(x)
Easy
Topics
Company Tags
You are given a non-negative integer x, return the square root of x rounded down to the nearest integer. The returned integer should be non-negative as well.

You must not use any built-in exponent function or operator.

For example, do not use pow(x, 0.5) in c++ or x ** 0.5 in python.
Example 1:

Input: x = 9

Output: 3
Example 2:

Input: x = 13

Output: 3
Constraints:

0 <= x <= ((2^31)-1)   */   

function mySqrt(x) {

    // Edge cases:
    // sqrt(0) = 0
    // sqrt(1) = 1
    if (x < 2) return x;

    // Search space: answer will be between 1 and x
    let left = 1;
    let right = x;

    while (left <= right) {

        // Find middle element
        let mid = Math.floor(left + (right - left) / 2);

        // Square of mid
        let square = mid * mid;

        // Perfect square found
        if (square === x) {
            return mid;
        }  
        // instead of this 
        /*   if (mid === Math.floor(x / mid)) {
            return mid;
        }
          */

        // If square is smaller than x,
        // answer may be mid or on the right side
        if (square < x) {
            left = mid + 1;
        }

        // If square is greater than x,
        // answer must be on the left side
        else {
            right = mid - 1;
        }
    }

    // When loop ends:
    // left crosses right
    // right will be the largest number whose square <= x
    return right;
}


// Examples
console.log(mySqrt(9));   // 3
console.log(mySqrt(13));  // 3
console.log(mySqrt(16));  // 4
console.log(mySqrt(20));  // 4 

