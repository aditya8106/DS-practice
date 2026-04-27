///// find sub arrays with equal sum
function findTwoArrSum(arr) {
    let sumMap = new Map();
    for (let i = 0; i < arr.length -1; i++) {
        let sum = arr[i] + arr[i + 1];
        if (sumMap.has(sum)) {
            return true;  
        }
        sumMap.set(sum);
    }
    return false;
}
console.log(findTwoArrSum([2  ,4,2]));
console.log(findTwoArrSum([1, 2, 3, 4, 5]));