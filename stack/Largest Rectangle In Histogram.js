/*  Largest Rectangle In Histogram
Hard
Topics
Company Tags
Hints
You are given an array of integers heights where heights[i] represents the height of a bar. The width of each bar is 1.

Return the area of the largest rectangle that can be formed among the bars.

Note: This chart is known as a histogram.

Example 1:

Input: heights = [7,1,7,2,2,4]

Output: 8
Example 2:

Input: heights = [1,3,7]

Output: 7 */

function Rectangular(heights) {
    let n = heights.length;

    // stack stores indices of bars
    // we maintain increasing order of heights in stack
    let stack = [];

    let maxarea = 0;

    // we go till n (extra step with height = 0 to clear stack)
    for (let i = 0; i <= n; i++) {

        // if i == n, treat height as 0 (forces popping remaining stack)
        let current = (i === n) ? 0 : heights[i];

        // while current is smaller than stack top → we found boundary
        while (
            stack.length &&
            current < heights[stack[stack.length - 1]]
        ) {

            // pop index
            let top = stack.pop();
            let height = heights[top];

            // right boundary = current index i (first smaller element)
            let right = i;

            // left boundary = previous element in stack
            let left = stack.length == 0 ? -1 : stack[stack.length - 1];

            // width of rectangle
            let width = right - left - 1;

            // area using popped height
            let area = height * width;

            // update max
            maxarea = Math.max(maxarea, area);
        }

        // push current index into stack
        stack.push(i);
    }

    return maxarea;
}

console.log(Rectangular([7, 1, 7, 2, 2, 4]));



// heights = [7, 1, 7, 2, 2, 4]

// stack stores indices, increasing order of heights

// i = 0 → 7
// stack = [0]

// i = 1 → 1
// 1 < 7 → pop 7
// area = 7 * 1 = 7
// stack = []
// push 1 → [1]

// i = 2 → 7
// stack = [1, 2]

// i = 3 → 2
// 2 < 7 → pop 7
// area = 7 * 1 = 7
// stack = [1]
// push 2 → [1, 3]

// i = 4 → 2
// stack = [1, 3, 4]

// i = 5 → 4
// stack = [1, 3, 4, 5]

// i = 6 → 0 (fake)
// start popping:

// pop 4 → area = 4 * 1 = 4
// pop 2 → area = 2 * 2 = 4
// pop 2 → area = 2 * 4 = 8  ← MAX
// pop 1 → area = 1 * 6 = 6

// final answer = 8