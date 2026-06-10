/*  Car Fleet
Medium
Topics
Company Tags
Hints
There are n cars traveling to the same destination on a one-lane highway.

You are given two arrays of integers position and speed, both of length n.

position[i] is the position of the ith car (in miles)
speed[i] is the speed of the ith car (in miles per hour)
The destination is at position target miles.

A car can not pass another car ahead of it. It can only catch up to another car and then drive at the same speed as the car ahead of it.

A car fleet is a non-empty set of cars driving at the same position and same speed. A single car is also considered a car fleet.

If a car catches up to a car fleet the moment the fleet reaches the destination, then the car is considered to be part of the fleet.

Return the number of different car fleets that will arrive at the destination.

Example 1:

Input: target = 10, position = [1,4], speed = [3,2]

Output: 1
Explanation: The cars starting at 1 (speed 3) and 4 (speed 2) become a fleet, meeting each other at 10, the destination.

Example 2:

Input: target = 10, position = [4,1,0,7], speed = [2,2,1,1]

Output: 3
Explanation: The cars starting at 4 and 7 become a fleet at position 10. The cars starting at 1 and 0 never catch up to the car ahead of them. Thus, there are 3 car fleets that will arrive at the destination.   */


// using stack

function Carfleet(target, positions, speed) {

    // Create pairs of [position, speed]
    // So position and speed stay together after sorting
    let cars = [];

    for (let i = 0; i < positions.length; i++) {
        cars.push([positions[i], speed[i]]);
    }

    // Sort by position in descending order
    // Closest car to destination comes first
    cars.sort((a, b) => b[0] - a[0]);

    // Stack stores fleet arrival times
    let stack = [];

    // Process cars from nearest to farthest
    for (let [pos, sp] of cars) {

        // Time required for current car to reach destination
        let time = (target - pos) / sp;

        // If stack is empty
        // OR current car cannot catch fleet ahead
        // then it forms a new fleet
        if (stack.length === 0 || time > stack[stack.length - 1]) {
            stack.push(time);
        }

        // Else:
        // time <= stack top
        // Current car catches the fleet ahead
        // So we do nothing and merge into that fleet
    }

    // Number of fleets = number of times stored in stack
    return stack.length;
}
console.log(Carfleet(target = 10, positions = [1,4], speed = [3,2]))