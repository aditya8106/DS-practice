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
    let total = n *(n-1)/2;
    let sum = arr.reduce((a,b)=>a+b,0); // 0 means the initial value of the accumulator (a) before the first iteration. If the array is empty, it will return 0. If the array has elements, it will sum them up starting from 0.
    return total - sum ;
}

console.log(findMissingValue2([0, 1, 2, 4, 5])); // Output: 3
console.log(findMissingValue2([0, 1, 3, 4, 5])); // Output: 2
console.log(findMissingValue2([1, 2, 3, 4, 5])); // Output: 0    
console.log(findMissingValue2([0, 1, 2, 3, 4])); // Output: 5

