/// contain duplicates in an array  sliding window approach
function containDuplicates(arr , k){     
    let set = new Set();
    let left = 0;    // left pointer of the sliding window
    for (let right = 0; right < arr.length; right++) {
        if (right - left > k) {
            set.delete(arr[left]);/// remove the leftmost element from the set when the window size exceeds k
            left++;// move the left pointer to the right to maintain the window size of k
        }
        if (set.has(arr[right])) {// if the current element is already in the set, it means we have found a duplicate within the window of size k
            return true;// return true if a duplicate is found
        }
        set.add(arr[right]);// add the current element to the set for future duplicate checks
    }
    return false;
}
console.log(containDuplicates([1, 2, 3, 1], 3)); // Output: true
console.log(containDuplicates([1, 0, 1, 1], 1));// Output: true
console.log(containDuplicates([1, 2, 3, 1, 2, 3], 2));// Output: false