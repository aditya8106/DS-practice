function findPivot(arr) {
    let leftSum = 0;
    let totalSum = arr.reduce((acc, val) => acc + val, 0);
    for (let i = 0; i < arr.length; i++) {
        let rightSum = totalSum - leftSum - arr[i];
        if (leftSum === rightSum) {
            return arr[i] + " at index " + i; // Return the pivot element and its index
        }
        leftSum += arr[i];
    }
    return -1; // No pivot found
}
console.log(findPivot([1, 7, 3, 6, 5, 6])); // Output: 3 at index 2