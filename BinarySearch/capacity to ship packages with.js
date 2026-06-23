/* Capacity to Ship Packages Within D Days
Medium
Topics
Company Tags
A conveyor belt has packages that must be shipped from one port to another within days days.

The ith package on the conveyor belt has a weight of weights[i]. Each day, we load the ship with packages on the conveyor belt (in the order given by weights). It is not allowed to load weight more than the maximum weight capacity of the ship.

Return the least weight capacity of the ship that will result in all the packages on the conveyor belt being shipped within days days.

Example 1:

Input: weights = [2,4,6,1,3,10], days = 4

Output: 10
Explanation:
1st day: [2]
2nd day: [4,6]
3rd day: [1,3]
4th day: [10]

Example 2:

Input: weights = [1,2,3,4,5], days = 5

Output: 5
Explanation:
1st day: [1]
2nd day: [2]
3rd day: [3]
4th day: [4]
5th day: [5]

Example 3:

Input: weights = [1,5,4,4,2,3], days = 3

Output: 8
Explanation:
1st day = [1,5]
2nd day = [4,4]
3rd day = [2,3]

Constraints:

1 <= days, weights.length <= 50,000
1 <= weights[i] <= 500  */      

// function using  binary search 

function Capacity(weights, days) {

    // Minimum capacity cannot be less than the heaviest package
    let left = Math.max(...weights);

    // Maximum capacity can be sum of all packages
    // (ship everything in one day)
    let right = weights.reduce((sum, w) => sum + w, 0);

    // Binary Search on capacity
    while (left <= right) {

        // Try this capacity
        let mid = Math.floor((left + right) / 2);

        // Start with Day 1
        let daysNeeded = 1;

        // Current load of ship for a day
        let currentWeight = 0;

        // Check how many days are needed
        for (let weight of weights) {

            // If adding this package exceeds capacity
            if (currentWeight + weight > mid) {

                // Move to next day
                daysNeeded++;

                // Start new day with current package
                currentWeight = weight;

            } else {

                // Add package to current day
                currentWeight += weight;
            }
        }

        // If capacity is enough to finish within given days
        if (daysNeeded <= days) {

            // Try a smaller capacity
            right = mid - 1;

        } else {

            // Capacity is too small
            // Need a bigger ship
            left = mid + 1;
        }
    }

    // left will be the minimum valid capacity
    return left;
}

console.log(Capacity([1, 5, 4, 4, 2, 3], 3));