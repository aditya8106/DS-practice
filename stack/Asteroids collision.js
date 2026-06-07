/* Asteroid Collision
Medium
Topics
Company Tags
You are given an array asteroids of integers representing asteroids in a row. The indices of the asteriod in the array represent their relative position in space.

For each asteroid, the absolute value represents its size, and the sign represents its direction (positive meaning right, negative meaning left). Each asteroid moves at the same speed.

Find out the state of the asteroids after all collisions. If two asteroids meet, the smaller one will explode. If both are the same size, both will explode. Two asteroids moving in the same direction will never meet.

Example 1:

Input: asteroids = [2,4,-4,-1]

Output: [2]
Example 2:

Input: asteroids = [5,5]

Output: [5,5]
Example 3:

Input: asteroids = [7,-3,9]

Output: [7,9]
Constraints:

2 <= asteroids.length <= 10,000.
-1000 <= asteroids[i] <= 1000
asteroids[i] != 0 */

///  solutions using stack 
 function AsteroidCollision(asteroids) {

    // Stores asteroids that are still alive
    let stack = [];

    // Process each asteroid one by one
    for (let astr of asteroids) {

        // Assume current asteroid is alive
        let alive = true;

        // Collision is possible only when:
        // top of stack is moving right (+)
        // current asteroid is moving left (-)
        while (
            alive &&
            stack.length &&
            stack[stack.length - 1] > 0 &&
            astr < 0
        ) {

            // Last surviving asteroid
            let top = stack[stack.length - 1];

            // Current asteroid is larger
            // Example: 5 vs -10
            if (Math.abs(top) < Math.abs(astr)) {

                // Top asteroid explodes
                stack.pop();

                // Current asteroid is still alive
                // Continue checking with previous asteroid
            }

            // Same size
            // Example: 5 vs -5
            else if (Math.abs(top) === Math.abs(astr)) {

                // Both explode
                stack.pop();

                // Current asteroid also dies
                alive = false;
            }

            // Top asteroid is larger
            // Example: 10 vs -5
            else {

                // Current asteroid explodes
                alive = false;
            }
        }

        // If current asteroid survived all collisions
        if (alive) {
            stack.push(astr);
        }
    }

    // Remaining asteroids
    return stack;
}

console.log(AsteroidCollision([2, 4, -4, -1]));

// brute force without stack 

function AsteroidCollision2(asteroids) {

    while (true) {

        let found = false;

        for (let i = 0; i < asteroids.length - 1; i++) {

            // collision possible
            if (asteroids[i] > 0 && asteroids[i + 1] < 0) {

                found = true;

                let left = Math.abs(asteroids[i]);
                let right = Math.abs(asteroids[i + 1]);

                if (left > right) {

                    // destroy right asteroid
                    asteroids.splice(i + 1, 1);

                } else if (left < right) {

                    // destroy left asteroid
                    asteroids.splice(i, 1);

                } else {

                    // both destroyed
                    asteroids.splice(i, 2);
                }

                break;
            }
        }

        if (!found) {
            return asteroids;
        }
    }
}

console.log(AsteroidCollision2([2, 4, -4, -1]))