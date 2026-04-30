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