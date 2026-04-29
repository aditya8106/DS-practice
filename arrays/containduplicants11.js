/// contain duplicates in an array
function containDuplicates(arr , k){     
    let set = new Set();
    let left = 0;
    for (let right = 0; right < arr.length; right++) {
        if (right - left > k) {
            set.delete(arr[left]);
            left++;
        }
        if (set.has(arr[right])) {
            return true;
        }
        set.add(arr[right]);
    }
    return false;
}
console.log(containDuplicates([1, 2, 3, 1], 3)); // Output: true
console.log(containDuplicates([1, 0, 1, 1], 1));// Output: true
console.log(containDuplicates([1, 2, 3, 1, 2, 3], 2));// Output: false