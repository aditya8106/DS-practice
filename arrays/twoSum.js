function twoSum(numbers, target) {
    const numMap = new Map();
    for (let i = 0; i < numbers.length; i++) {
        const Req = target - numbers[i];
        if (numMap.has(Req)) {
            return [numMap.get(Req), i];
        }
        numMap.set(numbers[i], i);
    }
    return null;
}

console.log(twoSum([2, 7, 11, 15], 9));