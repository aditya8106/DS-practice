function duplicants_in_arr(arr) {
    let countMap = new Map();   
    for (let i = 0; i < arr.length; i++) {
        if (countMap.has(arr[i])) {
            return arr[i];  
        }   
        countMap.set(arr[i]);
    }
    return false;
}
console.log(duplicants_in_arr([1, 2, 3, 4, 5]));
console.log(duplicants_in_arr([1, 2, 3, 4, 5, 2]));