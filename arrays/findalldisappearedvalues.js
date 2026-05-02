///missing values in an array
// Given an array of integers where 1 ≤ a[i] ≤ n (n = size of array), some elements appear twice and others appear once. Find all the elements of [1, n] inclusive that do not appear in this array.
// Example:
// Input:  [4,3,2,7,8,2,3,1]
// Output: [5,6]   

//approach 1 brute force
function findDisappearedNumbers(arr) {
    let map = new Map();
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        map.set(arr[i], true);
    }
    for (let j = 1; j <= arr.length; j++) {
        if (!map.has(j)) {
            result.push(j);
        }   
    }
    return result; // Return the array of disappeared numbers
}

console.log(findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1])); // Output: [5, 6]
//approach 2 using set
function findDisappearedNumbersSet(arr) {
    let set = new Set(arr); // Create a set from the input array to store unique values 
    let result = [];
    for (let i = 1; i <= arr.length; i++) {
        if (!set.has(i)) { // Check if the set does not contain the current number i
            result.push(i); // If it doesn't, add it to the result array
        }
    }
    return result; // Return the array of disappeared numbers
}

console.log(findDisappearedNumbersSet([4, 3, 2, 7, 8, 2, 3, 1])); // Output: [5, 6]

//approach 3 optimal approach   
function findDisappearedNumbersOptimal(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        let index = Math.abs(arr[i]) - 1; // Get the index corresponding to the value at arr[i]
        if (arr[index] > 0) { // If the value at that index is positive, it means we haven't marked it yet
            arr[index] = -arr[index]; // Mark the value at that index as negative to indicate that we've seen it why? Because the problem states that the values in the array are between 1 and n, we can use the indices of the array to keep track of which numbers have been seen. By negating the value at the corresponding index, we can mark that number as seen without using extra space for a separate data structure. When we later check for positive values, it indicates that those indices (and thus those numbers) were not seen in the original array.
        }
    }
    for (let j = 0; j < arr.length; j++) {
        if (arr[j] > 0) {
            result.push(j + 1);
        }
    }
    return result;
}

console.log(findDisappearedNumbersOptimal([4, 3, 2, 7, 8, 2, 3, 1])); // Output: [5, 6]
//how it works:
//1. We iterate through the input array and for each element, we calculate the corresponding index by taking the absolute value of the element and subtracting 1 (since array indices are 0-based).
//2. If the value at that index is positive, it means we haven't marked it yet, so we negate the value at that index to mark it as seen.
//3. After marking all seen numbers, we iterate through the array again and check for positive values. If we find a positive value at index j, it means that the number j + 1 was not seen in the original array, so we add j + 1 to the result array.
//4. Finally, we return the result array containing all the disappeared numbers.
//example:
// Input: [4, 3, 2, 7, 8, 2, 3, 1]
// Step 1: Mark seen numbers by negating values at corresponding indices:
// - For 4: index = 3, arr[3] becomes -7
// - For 3: index = 2, arr[2] becomes -2
// - For 2: index = 1, arr[1] becomes -3
// - For 7: index = 6, arr[6] becomes -3
// - For 8: index = 7, arr[7] becomes -1
// - For 2: index = 1, arr[1] is already negative, so we skip it
// - For 3: index = 2, arr[2] is already negative, so we skip it
// - For 1: index = 0, arr[0] becomes -4
// After Step 1, the array looks like: [-4, -3, -2, -7, 8, 2, -3, -1]
// Step 2: Check for positive values to find disappeared numbers:
// - Index 0: value is -4 (negative), so 1 is seen
// - Index 1: value is -3 (negative), so 2 is seen
// - Index 2: value is -2 (negative), so 3 is seen
// - Index 3: value is -7 (negative), so 4 is seen
// - Index 4: value is 8 (positive), so 5 is not seen
// - Index 5: value is 2 (positive), so 6 is not seen
// - Index 6: value is -3 (negative), so 7 is seen
// - Index 7: value is -1 (negative), so 8 is seen
// After Step 2, the result array contains [5, 6].