/* Guess Number Higher Or Lower
Easy
Topics
Company Tags
We are playing the Guess Game. The game is as follows:

I pick a number from 1 to n. You have to guess which number I picked.

Every time you guess wrong, I will tell you whether the number I picked is higher or lower than your guess.

You call a pre-defined API int guess(int num), which returns three possible results:

0: your guess is equal to the number I picked (i.e. num == pick).
-1: Your guess is higher than the number I picked (i.e. num > pick).
1: Your guess is lower than the number I picked (i.e. num < pick).
Return the number that I picked.

Example 1:

Input: n = 5, pick = 3

Output: 3
Example 2:

Input: n = 15, pick = 10

Output: 10
Example 3:

Input: n = 1, pick = 1

Output: 1  */

//brute force 
// guess function 
// Secret number picked by the game
let pick = 9;

// Simulates LeetCode's hidden guess() API
function Guess(num){

    // Correct guess
    if(num == pick) return 0;

    // Guess is too high
    else if (num > pick) return -1;

    // Guess is too low
    else return 1;
}


// ---------------- BRUTE FORCE ----------------

function Brute(n){

    // Check every number from 0 to n
    for(let i = 0; i <= n; i++){

        // If Guess returns 0, we found the number
        if(Guess(i) === 0){
            return i;
        }
    }

    // Number not found in range
    return -1;
}

console.log(Brute(10)); // 9



// ---------------- BINARY SEARCH ----------------

function optimal(n){

    // Search space starts from 0 to n
    let left = 0;
    let right = n;

    // Continue until search space becomes invalid
    while(left <= right){

        // Find middle element
        let mid = Math.floor((left + right) / 2);

        // Ask the API about mid
        let res = Guess(mid);

        // If res = 0, we found the picked number
        if(res === 0){
            return mid;
        }

        // If res = -1
        // Our guess is too high
        // Search in the left half
        if(res === -1){
            right = mid - 1;
        }

        // If res = 1
        // Our guess is too low
        // Search in the right half
        else{
            left = mid + 1;
        }
    }

    // Number not found
    return -1;
}

console.log(optimal(15)); // 9