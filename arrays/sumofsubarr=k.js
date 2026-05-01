// sum of subarray equals k
function sumOfSubarrEqualsK(arr, k) {
    let map = new Map();
    map.set(0, 1); // Initialize the map with a prefix sum of 0 occurring once
    let prefixSum = 0;
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        prefixSum += arr[i]; // Update the prefix sum with the current element
        if (map.has(prefixSum - k)) { // Check if there is a prefix sum that, when subtracted from the current prefix sum, equals k (i.e., if there is a previous prefix sum that would make the current subarray sum to k)
            count += map.get(prefixSum - k); // If such a prefix sum exists, add its count to the total count
        }
        map.set(prefixSum, (map.get(prefixSum) || 0) + 1); // Update the map with the current prefix sum and its count
    }
    return count;
}


console.log(sumOfSubarrEqualsK([1, 1, 1], 2)); // Output: 2
console.log(sumOfSubarrEqualsK([1, 2, 3], 3));
// Output: 2 (subarrays [1, 2] and [3] sum to 3)
console.log(sumOfSubarrEqualsK([1, -1, 0], 0)); // Output: 3 (subarrays [1, -1], [-1, 0], and [1, -1, 0] sum to 0)


//brute force approach
function sumOfSubarrEqualsKBruteForce(arr, k) {
    let count = 0;  
    for (let i = 0; i < arr.length; i++) {
        let sum = 0; // Initialize the sum for the current starting index
        for (let j = i; j < arr.length; j++) {
            sum += arr[j]; // Update the sum with the current element
            if (sum === k) { // Check if the current sum equals k
                count++; // If it does, increment the count
            }
        }
    }
    return count; // Return the total count of subarrays that sum to k
}
console.log(sumOfSubarrEqualsKBruteForce([1, 1, 1], 2)); // Output: 2
console.log(sumOfSubarrEqualsKBruteForce([1, 2, 3], 3));
// Output: 2 (subarrays [1, 2] and [3] sum to 3)
console.log(sumOfSubarrEqualsKBruteForce([1, -1, 0], 0)); // Output: 3 (subarrays [1, -1], [-1, 0], and [1, -1, 0] sum to 0)
