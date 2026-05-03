/// squares of a sorted array
// Given an array of integers A sorted in non-decreasing order, return an array of the squares of each number, also in sorted non-decreasing order.
// Example:
// Input: [-4,-1,0,3,10]
// Output: [0,1,9,16,100]   

//brute force approach
function sortedSquares(arr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i] * arr[i]; // Square each element
    }
    return arr.sort((a, b) => a - b); // Sort the array in non-decreasing order
}
console.log(sortedSquares([-4, -1, 0, 3, 10])); // Output: [0, 1, 9, 16, 100]

//optimal approach using two pointers
function sortedSquaresOptimal(arr) {
    let n = arr.length;
    let result = new Array(n); // Create a new array to store the squared values
    let left = 0;   
    let right = n - 1;
    let pos = n-1;
    while(left<=right){// Loop until the left pointer is less than or equal to the right pointer
        let leftA = arr[left] **2; // Square the left element
        let rightA = arr[right]**2;// Square the right element
    }
    if(leftA>rightA){/// Compare the squared values and place the larger one at the current position in the result array
        result[pos] = leftA;// Place the larger squared value at the current position in the result array
        left++; // Move the left pointer to the right
    }else{
        result[pos] = rightA;   // Place the larger squared value at the current position in the result array
        right--;    }// Move the right pointer to the left
    pos--;// Move the position pointer to the left
    return result;
    }

console.log(sortedSquaresOptimal([-4, -1, 0, 3, 10])); // Output: [0, 1, 9, 16, 100]
