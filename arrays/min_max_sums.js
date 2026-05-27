/* 
    * Complete the 'miniMaxSum' function below.

    * The function accepts INTEGER_ARRAY arr as parameter.

    * The function prints two space-separated integers on one line: the minimum sum and the maximum sum of 4 of 5 elements.
    * Example
    * arr = [1, 2, 3, 4, 5]
    * Output
    * 10 14
    * Explanation   
    * The numbers are 1, 2, 3, 4 and 5. Calculate the sum of all combinations of four of the five integers. The minimal sum is 1+2+3+4 = 10 and the maximal sum is 2+3+4+5 = 14. The function prints these sums as two space-separated integers on a single line.
    * Function Description
    *       
    * Complete the miniMaxSum function in the editor below.
    * 
    */

function miniMaxSum(arr) {
    let min =Math.min(...arr); // The `Math.min(...arr)` expression uses the spread operator (`...`) to pass all elements of the `arr` array as individual arguments to the `Math.min` function, which returns the smallest value among them. This value is assigned to the variable `min`. 

    let max =Math.max(...arr);// The `Math.max(...arr)` expression uses the spread operator (`...`) to pass all elements of the `arr` array as individual arguments to the `Math.max` function, which returns the largest value among them. This value is assigned to the variable `max`.
    let sum = arr.reduce((a, b) => a + b, 0);// The `arr.reduce((a, b) => a + b, 0)` expression uses the `reduce` method to calculate the sum of all elements in the `arr` array. The callback function `(a, b) => a + b` takes two arguments (the accumulator `a` and the current value `b`) and returns their sum. The second argument `0` is the initial value for the accumulator, meaning that the summation starts from 0. The final result is assigned to the variable `sum`.
    let minSum = sum - max;// The `sum - max` expression calculates the minimum sum of four out of the five integers by subtracting the maximum value from the total sum. This is because to get the minimum sum, we need to exclude the largest number. The result is assigned to the variable `minSum`.
    let maxSum = sum - min;// The `sum - min` expression calculates the maximum sum of four out of the five integers by subtracting the minimum value from the total sum. This is because to get the maximum sum, we need to exclude the smallest number. The result is assigned to the variable `maxSum`.
    console.log(minSum + " " + maxSum);// The `console.log(minSum + " " + maxSum)` statement prints the minimum sum and maximum sum as space-separated integers on a single line. The `+` operator is used to concatenate the `minSum`, a space character `" "`, and the `maxSum` into a single string that is then output to the console.
}