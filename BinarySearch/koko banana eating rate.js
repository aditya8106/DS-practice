/*   Koko Eating Bananas
Medium
Topics
Company Tags
Hints
You are given an integer array piles where piles[i] is the number of bananas in the ith pile. You are also given an integer h, which represents the number of hours you have to eat all the bananas.

You may decide your bananas-per-hour eating rate of k. Each hour, you may choose a pile of bananas and eats k bananas from that pile. If the pile has less than k bananas, you may finish eating the pile but you can not eat from another pile in the same hour.

Return the minimum integer k such that you can eat all the bananas within h hours.

Example 1:

Input: piles = [1,4,3,2], h = 9

Output: 2
Explanation: With an eating rate of 2, you can eat the bananas in 6 hours. With an eating rate of 1, you would need 10 hours to eat all the bananas (which exceeds h=9), thus the minimum eating rate is 2.

Example 2:

Input: piles = [25,10,23,4], h = 4

Output: 25
Constraints:

1 <= piles.length <= 1,000
piles.length <= h <= 1,000,000
1 <= piles[i] <= 1,000,000,000   */


// brute force approch which is O(n)  but baseed on constraints it will cause the error time limit exceeded


function Brute(piles, h) {

    // Try every possible eating speed from 1 to max pile
    for (let k = 1; k <= Math.max(...piles); k++) {

        // Total hours needed at speed k
        let tot = 0;

        // Calculate hours required for all piles
        for (let pile of piles) {

            // Hours needed for current pile
            tot += Math.ceil(pile / k);
        }

        // If Koko can finish within h hours
        if (tot <= h) {

            // Since we're checking speeds from smallest to largest,
            // the first valid speed is the answer
            return k;
        }
    }
}

console.log(Brute([25, 10, 23, 4], 4));



// optimal solution using binary search  O(n)

function Optimal(piles, h) {

    // Minimum possible eating speed
    let left = 1;

    // Maximum possible eating speed
    // (no need to eat faster than the largest pile)
    let right = Math.max(...piles);

    // Binary Search on the answer (eating speed)
    while (left <= right) {

        // Candidate eating speed
        let mid = Math.floor((left + right) / 2);

        // Total hours needed if Koko eats at speed = mid
        let tot = 0;

        // Calculate hours required for all piles
        for (let pile of piles) {

            // Hours needed for one pile
            // Use ceil because even a partial pile takes a full hour
            tot += Math.ceil(pile / mid);
        }

        // If Koko can finish within h hours
        if (tot <= h) {

            // mid is a valid speed
            // Try to find a smaller valid speed
            right = mid - 1;

        } else {

            // mid is too slow
            // Need a larger eating speed
            left = mid + 1;
        }
    }

    // left ends up pointing to the smallest valid speed
    return left;
}

console.log(Optimal([25, 10, 23, 4], 4));