function intersectionOfArrays(arr1, arr2) {
    let map = new Map();
    let set = new Set();
    for (let i = 0; i < arr1.length; i++) {
        map.set(arr1[i], true);
    }   
    for (let j = 0; j < arr2.length; j++) {
        if (map.has(arr2[j])) {
            set.add(arr2[j]);
        }
    }
    return [...set];
}
console.log(intersectionOfArrays([1, 2, 3, 4], [3, 4, 5, 6]));
console.log(intersectionOfArrays([1, 2, 3], [4, 5, 6]));