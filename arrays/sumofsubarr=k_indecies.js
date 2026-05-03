// indexes of sub array sum
// ex :-
/*Input: arr[] = [1, 2, 3, 7, 5], target = 12
2 + 3 + 7 = 12
Output: [2, 4]
1 based indexing is used. 
Explanation: The sum of elements from 2nd to 4th position is 12.*/

//brute force approach
function sumOfSubarrEqualsKBruteForce(arr, k) {
    for (let i = 0; i < arr.length; i++) {
        let sum = 0; // Initialize the sum for the current starting index
        for (let j = i; j < arr.length; j++) {
            sum += arr[j]; // Update the sum with the current element
            if (sum === k) { // Check if the current sum equals k
                return [i + 1, j + 1]; // If it does, return the 1-based indices of the subarray
            }
        }
    }
    return [-1]; // If no subarray is found, return an empty array
}

console.log(sumOfSubarrEqualsKBruteForce([1, 2, 3, 7, 5], 12)); // Output: [2, 4]

//optimal approach using two pointers  and sliding window technique   works only for positive numbers
function sumOfSubarrEqualsKTwoPointers(arr, k) {
    let left = 0; // Initialize the left pointer    
    let sum = 0; // Initialize the sum for the current window
    for (let right = 0; right < arr.length; right++) { // Iterate with the right pointer
        sum += arr[right]; // Update the sum with the current element
        while (sum > k && left <= right) { // If the sum exceeds k, move the left pointer to the right   
            sum -= arr[left]; // Reduce the sum by removing the element at the left pointer
            left++; // Move the left pointer to the right
        }   
        if (sum === k) { // Check if the current sum equals k
            return [left + 1, right + 1]; // If it does, return the 1-based indices of the subarray
        }
    }
    return [-1]; // If no subarray is found, return an empty array
}

console.log(sumOfSubarrEqualsKTwoPointers([1, 2, 3, 7, 5], 12)); // Output: [2, 4]
