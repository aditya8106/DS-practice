/// product of array except self
// Given an array nums of n integers where n > 1,  return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].
// Example:
// Input:  [1,2,3,4]    
// Output: [24,12,8,6]


//optimal -approach prefix and sufix
function productExceptSelf(arr) {
    let n = arr.length;
    let arr =[]
    let left =1;
    for (let i = 0; i < n; i++) {
        arr[i] = left; /// 
        left *= arr[i]; // Update left to be the product of all elements to the left of the current index

}
    let right =1
    for (let j = n - 1; j >= 0; j--) {
        arr[j] *= right; ///
        right *= arr[j]; // Update right to be the product of all elements to the right of the current index
    }
    return arr;
}
console.log(productExceptSelf([1, 2, 3, 4])); // Output: [24, 12, 8, 6]

//brute force approach
function productExceptSelfBruteForce(arr) {
    let n = arr.length;
    let result = [];
    for (let i = 0; i < n; i++) {
        let product = 1; // Initialize the product for the current index
        for (let j = 0; j < n; j++) {
            if (i !== j) { // Skip the current index
                product *= arr[j]; // Multiply the product by the element at index j
            }
        }
        result.push(product);
    }
    return result;
}
console.log(productExceptSelfBruteForce([1, 2, 3, 4])); // Output: [24, 12, 8, 6]