///find missing value in array
function findMissingValue(arr) {
    let map = new Map();
    for (let i = 0; i < arr.length; i++) {
        map.set(arr[i], true);
    }
    for (let j =0;j<=arr.length;j++){
        if (!map.has(j)){
            return j;
        }   
    }
    return -1; // No missing value found
}   
console.log(findMissingValue([0, 1, 2, 4, 5])); // Output: 3
console.log(findMissingValue([0, 1, 3, 4, 5])); // Output: 2
console.log(findMissingValue([1, 2, 3, 4, 5])); // Output: 0    
console.log(findMissingValue([0, 1, 2, 3, 4])); // Output: 5

///approach 2
function findMissingValue2(arr) {
    let n = arr.length + 1;
    let total = n *(n-1)/2; // The formula n*(n-1)/2 calculates the sum of the first n-1 natural numbers, which is the expected sum of the array if it contained all numbers from 0 to n-1. Since one number is missing, we calculate the total sum for n numbers and then subtract the actual sum of the array to find the missing value.
    // example: if n=6, total = 6*(6-1)/2 = 15, which is the sum of numbers from 0 to 5. If the array is [0, 1, 2, 4, 5], the sum is 12. So the missing value is 15 - 12 = 3.
    let sum = arr.reduce((a,b)=>a+b,0); // 0 means the initial value of the accumulator (a) before the first iteration. If the array is empty, it will return 0. If the array has elements, it will sum them up starting from 0.
    // ex ample: if arr = [0, 1, 2, 4, 5], the reduce function will calculate the sum as follows:
    // - Start with an initial value of 0 (the second argument to reduce).
    // - Add 0 to the accumulator (initially 0), resulting in 0.  
// sum is become at last 12 after processing all elements in the array.
    return total - sum ;
}

console.log(findMissingValue2([0, 1, 2, 4, 5])); // Output: 3
console.log(findMissingValue2([0, 1, 3, 4, 5])); // Output: 2
console.log(findMissingValue2([1, 2, 3, 4, 5])); // Output: 0    
console.log(findMissingValue2([0, 1, 2, 3, 4])); // Output: 5
//approach 3
function findMissingValue3(arr) {
    let n = arr.length + 1;
    let total = n *(n-1)/2;
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return total - sum ;
}

console.log(findMissingValue3([0, 1, 2, 4, 5])); // Output: 3
console.log(findMissingValue3([0, 1, 3, 4, 5])); // Output: 2
///to find multiple missing values in an array
f