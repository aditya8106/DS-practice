/// contain duplicates in an array  sliding window approach
// Given an array of integers and an integer k, find out whether there are two distinct indices i and j in the array such that arr[i] = arr[j] and the absolute difference between i and j is at most k.
// Example 1:
// Input: arr = [1,2,3,1], k = 3
// Output: true
// Explanation: The duplicate number is 1 and its indices are 0 and 3. The absolute difference between them is 3 which is equal to k.
// Example 2:
// Input: arr = [1,0,1,1], k = 1
// Output: true
// Explanation: The duplicate number is 1 and its indices are 0 and 2. The absolute difference between them is 2 which is greater than k.
function containDuplicates(arr , k){     
    let set = new Set();
    let left = 0;    // left pointer of the sliding window
    for (let right = 0; right < arr.length; right++) {
        if (right - left > k) { // right - left means the size of the current window previously we were checking if the size of the window exceeds k but now we are checking if the size of the window is greater than k because we want to maintain a window of size k
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