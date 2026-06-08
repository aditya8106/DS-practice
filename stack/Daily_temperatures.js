/* Daily Temperatures
Medium
Topics
Company Tags
Hints
You are given an array of integers temperatures where temperatures[i] represents the daily temperatures on the ith day.

Return an array result where result[i] is the number of days after the ith day before a warmer temperature appears on a future day. If there is no day in the future where a warmer temperature will appear for the ith day, set result[i] to 0 instead.

Example 1:

Input: temperatures = [30,38,30,36,35,40,28]

Output: [1,4,1,2,1,0,0]
Example 2:

Input: temperatures = [22,21,20]

Output: [0,0,0]
Constraints:

1 <= temperatures.length <= 1000.
1 <= temperatures[i] <=n@ 100
 */


/// brute force time O(n2) space O(n)
function brute(temps)
{
    let n = temps.length
    let res =[]
    for(let i=0;i<=n;i++){
        for(let j =i+1;j<=n;j++){
            if(temps[j] > temps[i]){
                res[i] = j-i;
                break;
            }else{
                res[i] =0
            }
        }
    }
    return res;
}

console.log(brute([30,38,30,36,35,40,28]))


// optimal using stack time O(n) space O(n)

function Optimal(temps){
    let n = temps.length;                      // total number of days
    let res = new Array(n).fill(0);           // default answer is 0 (no warmer day found)
    let stack = [];                           // stores indices of useful future days

    for(let i = n - 1; i >= 0; i--){          // process from right to left

        while(
            stack.length !== 0 &&             // stack is not empty
            temps[i] >= temps[stack[stack.length - 1]] // remove all colder/equal temperatures
        ){
            stack.pop();                      // they can never be the answer for current day
        }

        if(stack.length !== 0){               // if a warmer day exists
            res[i] = stack[stack.length - 1] - i; // distance to nearest warmer day
        }

        stack.push(i);                        // current day may help days to its left
    }

    return res;                               // return final answers
}
console.log(Optimal([30,38,30,36,35,40,28]))