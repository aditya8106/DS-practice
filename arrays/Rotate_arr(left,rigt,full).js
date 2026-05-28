// rotate array left by d elements
/* 
A  operation on a circular array shifts each of the array's elements  unit to the left. The elements that fall off the left end reappear at the right end. Given an integer , rotate the array that many steps to the left and return the result.

Example


After  rotations, .

Function Description

Complete the  function with the following parameters:

: the amount to rotate by
: the array to rotate
Returns

: the rotated array
Input Format

The first line contains two space-separated integers that denote , the number of integers, and , the number of left rotations to perform.
The second line contains  space-separated integers that describe*/

// brute force approaches 
function rotateLeft(arr, d) {
    let n = arr.length;
    d = d % n; // means we will take the modulus of d with n to handle the case when d is greater than n, as rotating an array of size n by n or any multiple of n will result in the same array
    return arr.slice(d).concat(arr.slice(0, d)); // means we will take the slice of the array from index d to the end and concatenate it with the slice of the array from index 0 to index d, which will give us the rotated array
}
console.log(rotateLeft([1, 2, 3, 4, 5], 2)); // output: [3, 4, 5, 1, 2]
// brute force 2
function rotateLeft(arr, d) {
    let n = arr.length;
    d = d % n;
    //shift the array d times
    for (let i = 0; i < d; i++) {
        let temp = arr[0]; // means we will store the first element of the array in a temporary variable
        for (let j = 0; j < n - 1; j++) { // means we will iterate through the array from index 0 to index n-2 and shift each element to the left by one position
            arr[j] = arr[j + 1]; // means we will shift the element at index j+1 to index j
        }
        arr[n - 1] = temp; // means we will place the first element of the array, which is stored in the temporary variable, at the end of the array
    }
    return arr;
}
console.log(rotateLeft([1, 2, 3, 4, 5], 2)); // output: [3, 4, 5, 1, 2]

// optimal approach using reversal algorithm
function reverse(arr, start, end) {
    while (start < end) {
        [arr[start], arr[end]] = [arr[end], arr[start]]; // means we will swap the elements at index start and index end
        start++; // means we will move the start pointer to the right
        end--; // means we will move the end pointer to the left
    }
}
function  rotateL(arr , d){// d is the number of positions to rotate the array to the left
    let n = arr.length;
    d = d % n;
    reverse(arr, 0, d - 1); // means we will reverse the first d elements of the array
    reverse(arr, d, n - 1); // means we will reverse the remaining n-d elements of the array
    reverse(arr, 0, n - 1); // means we will reverse the entire array to get the rotated array
    return arr;
}
console.log(rotateL([1, 2, 3, 4, 5], 2)); // output: [3, 4, 5, 1, 2]

// rotate array right by d elements
function rotateRight(arr, d) {
    let n = arr.length;
    d = d % n;
    for(let i = 0; i < d; i++) {
        let temp = arr[n - 1]; // means we will store the last element of the array in a temporary variable
        for(let j = n - 1; j > 0; j--) {
            arr[j] = arr[j - 1]; // means we will shift the element at index j-1 to index j
        }
        arr[0] = temp; // means we will place the last element of the array, which is stored in the temporary variable, at the beginning of the array
    }
    return arr;
}
console.log(rotateRight([1, 2, 3, 4, 5], 2)); // output: [4, 5, 1, 2, 3]
// brure force 2nusing unshift and pop

function rotateRight(arr, d) {
    let n = arr.length;
    d = d % n;
    for(let i = 0; i < d; i++) {
        arr.unshift(arr.pop());
    }
    return arr;
}
console.log(rotateRight([1, 2, 3, 4, 5], 2)); // output: [4, 5, 1, 2, 3]
// optimal approach using reversal algorithm
function rotateR(arr , d){
    let n = arr.length;
    d = d % n;
    // here we use above reverse function to reverse the first n-d elements of the array, then reverse the last d elements of the array and finally reverse the entire array to get the rotated array
    reverse(arr, 0, n - 1); // means we will reverse the entire array to get the elements in the order they would be after rotating right by d elements
    reverse(arr, 0, d - 1);// reverse fir d elements to get the last d elements of the original array at the beginning of the array
    reverse(arr, d, n - 1);// reverse the remaining n-d elements to get the first n-d elements of the original array at the end of the array
    return arr;
}
console.log(rotateR([1, 2, 3, 4, 5], 2)); // output: [4, 5, 1, 2, 3]



// above all brute foces are failed  at where inputs are large 
// so we use reversal algorithm which is optimal and works in O(n) time complexity and O(1) space complexity

// rotate array full by d elements
function rotateFull(arr, d) {
    let n = arr.length;
    d = d % n;
    reverse(arr, 0, n - 1); 
    return arr;
}
console.log(rotateFull([1, 2, 3, 4, 5], 2)); // output: [5, 4, 3, 2, 1]

