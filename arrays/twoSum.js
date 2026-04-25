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

 function twoSum2(){
        const numbers = [2, 7, 11, 15];
        const target = 9;
        for (let i = 0; i < numbers.length; i++) {
            for (let j = i + 1; j < numbers.length; j++) {
                if (numbers[i] + numbers[j] === target) {
                    return [i, j];
                }
            }        }
        return null;
 }


