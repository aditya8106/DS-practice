/* Min Stack
Medium
Topics
Company Tags
Hints
Design a stack class that supports the push, pop, top, and getMin operations.

MinStack() initializes the stack object.
void push(int val) pushes the element val onto the stack.
void pop() removes the element on the top of the stack.
int top() gets the top element of the stack.
int getMin() retrieves the minimum element in the stack.
Each function should run in 
O
(
1
)
O(1) time.

Example 1:

Input: ["MinStack", "push", 1, "push", 2, "push", 0, "getMin", "pop", "top", "getMin"]

Output: [null,null,null,null,0,null,2,1]

Explanation:
MinStack minStack = new MinStack();
minStack.push(1);
minStack.push(2);
minStack.push(0);
minStack.getMin(); // return 0
minStack.pop();
minStack.top();    // return 2
minStack.getMin(); // return 1  */


class MinStack {

    // Constructor runs when a new MinStack object is created
    constructor() {

        // Main stack stores all actual values
        this.stack = [];

        // Min stack stores the minimum value at each position
        this.minStack = [];
    }

    // Push a new value into the stack
    push(val) {

        // Add value to the main stack
        this.stack.push(val);

        // If minStack is empty, this is the first element
        // so it is automatically the minimum
        if (this.minStack.length === 0) {

            // Store the first minimum
            this.minStack.push(val);

        } else {

            // Get current minimum from top of minStack
            let currentMin = this.minStack[this.minStack.length - 1];

            // Compare current minimum with incoming value
            // and store the smaller one
            this.minStack.push(Math.min(currentMin, val));
        }
    }

    // Remove top element from stack
    pop() {

        // Remove from main stack
        this.stack.pop();

        // Remove corresponding minimum value
        // so both stacks stay synchronized
        this.minStack.pop();
    }

    // Return top element without removing it
    top() {

        // Last element of main stack
        return this.stack[this.stack.length - 1];
    }

    // Return current minimum element
    getMin() {

        // Top of minStack always contains
        // minimum of the current stack
        return this.minStack[this.minStack.length - 1];
    }
}


// ---------------------
// Example Execution
// ---------------------

const minStack = new MinStack();

minStack.push(1);

/*
stack    = [1]
minStack = [1]
*/

minStack.push(2);

/*
stack    = [1, 2]
minStack = [1, 1]
*/

minStack.push(0);

/*
stack    = [1, 2, 0]
minStack = [1, 1, 0]
*/

console.log(minStack.getMin());

/*
Output: 0

Current minimum is top of minStack
*/

minStack.pop();

/*
stack    = [1, 2]
minStack = [1, 1]
*/

console.log(minStack.top());

/*
Output: 2

Top of stack is 2
*/

console.log(minStack.getMin());

/*
Output: 1

Current minimum is now 1
*/