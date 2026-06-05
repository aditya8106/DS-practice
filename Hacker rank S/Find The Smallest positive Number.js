/*  Find the Smallest Missing Positive Integer
Given an unsorted array of integers, find the smallest positive integer not present in the array in O(n) time and O(1) extra space.

Example

Input

orderNumbers = [3, 4, -1, 1]
Output

2
Explanation

We want the smallest positive missing integer.

Start with [3, 4, -1, 1]
- i=0: value 3 ⇒ swap with index 2 ⇒ [-1, 4, 3, 1]
- i=0: value -1 is out of range ⇒ move on
- i=1: value 4 ⇒ swap with index 3 ⇒ [-1, 1, 3, 4]
- i=1: value 1 ⇒ swap with index 0 ⇒ [1, -1, 3, 4]
- now 1 at index 0, 3 at 2, 4 at 3; -1 remains at index 1

Scan from index 0:
index 0 has 1 (correct), index 1 has -1 (not 2) ⇒ missing positive is 2
Input Format

An integer n on the first line, where 0 ≤ n ≤ 1000.
The next n lines contains an integer representing orderNumbers[i].
Example

4
3
4
-1
1
here 4 is the length of array, followed by the elements of array on each line.

Constraints

0 <= orderNumbers.length <= 1000
-10^9 <= orderNumbers[i] <= 10^9 for all 0 <= i < orderNumbers.length
Duplicates are allowed in orderNumbers
Negative numbers and zero are allowed in orderNumbers
Output Format

A single integer denoting the smallest positive order number (≥1) that does not appear in the input array.
Sample Input 0

0
Sample Output 0

1
Sample Input 1

1
1
Sample Output 1

2  */


// brute force
function brute(orderNumbers){
    let n = orderNumbers.length;
    for(let i =1;i<=n+1;i++){ // we are checking from 1 to n+1 because if all numbers from 1 to n are present then the answer will be n+1
        if(!orderNumbers.includes(i)){ // if the number is not present in the array then return that number
            return i;
        }
    }
    return n+1; // if all numbers from 1 to n are present then return n+1
}   
console.log(brute([3, 4, -1, 1])); // output is 2 because the smallest positive integer that is missing from the array is 2

// optimal using cyclic sort
function optimal(orderNumbers){
    let n = orderNumbers.length;
    for(let i =0;i<n;i++){
        while(orderNumbers[i]>0 && orderNumbers[i]<=n && orderNumbers[i] !==orderNumbers[orderNumbers[i]-1]){ // we are checking if the number is in the range of 1 to n and if it is not in the correct position then we will swap it with the number at the index of that number
            let currentndex = orderNumbers[i]-1; // index of the number that we want to swap with
            [orderNumbers[i],orderNumbers[currentndex]] = [orderNumbers[currentndex],orderNumbers[i]]; // swap the numbers
        }
    }
    for(let i =0;i<n;i++){
        if(orderNumbers[i] !== i+1){ // if the number is not in the correct position then return that number
            return i+1;
        }
    }
    return n+1; // if all numbers from 1 to n are present then return n+1
}
console.log(optimal([3, 4, -1, 1])); // output is 2 because the smallest positive integer that is missing from the array is 2
                