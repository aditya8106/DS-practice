/* Implement Stack Using Queues
Easy
Topics
Company Tags
Implement a last-in-first-out (LIFO) stack using only two queues. The implemented stack should support all the functions of a normal stack (push, top, pop, and empty).

Implement the MyStack class:

void push(int x) Pushes element x to the top of the stack.
int pop() Removes the element on the top of the stack and returns it.
int top() Returns the element on the top of the stack.
boolean empty() Returns true if the stack is empty, false otherwise.
Notes:

You must use only standard operations of a queue, which means that only push to back, peek/pop from front, size and is empty operations are valid.
Depending on your language, the queue may not be supported natively. You may simulate a queue using a list or deque (double-ended queue) as long as you use only a queue's standard operations.
Example 1:

Input: ["MyStack", "push", "push", "top", "pop", "empty"]
[[], [1], [2], [], [], []]

Output: [null, null, null, 2, 2, false]
Explanation:
MyStack myStack = new MyStack();
myStack.push(1);
myStack.push(2);
myStack.top(); // return 2
myStack.pop(); // return 2
myStack.empty(); // return False  */


// using two quees
class Solution {
    constructor() {
        // Main queue that will behave like a stack
        this.q1 = [];

        // Helper queue used during push operation
        this.q2 = [];
    }

    push(x) {
        // Put new element into helper queue first
        this.q2.push(x);

        // Example:
        // q1 = [2]
        // push(3)
        // q2 = [3]

        // Move all elements from q1 to q2
        while (this.q1.length > 0) {

            // Remove front element from q1
            // and add it to back of q2
            this.q2.push(this.q1.shift());

            // After first iteration:
            // q1 = []
            // q2 = [3, 2]
        }

        // Swap q1 and q2
        // q1 becomes [3,2]
        // q2 becomes []
        [this.q1, this.q2] = [this.q2, this.q1];

        // Now q1 front is always stack top
    }

    pop() {
        // Remove and return front element
        // Since front is treated as stack top
        return this.q1.shift();
    }

    top() {
        // Return front element without removing it
        return this.q1[0];
    }

    empty() {
        // Return true if q1 has no elements
        return this.q1.length == 0;
    }
}

let s1 = new Solution();


// ----------------------
// push(2)
// ----------------------

s1.push(2);

/*
Before:
q1 = []
q2 = []

After push(2):
q1 = [2]
q2 = []
*/


// ----------------------
// push(3)
// ----------------------

s1.push(3);

/*
Step 1:
q2.push(3)

q1 = [2]
q2 = [3]

Step 2:
Move q1 elements to q2

q1.shift() => 2
q2.push(2)

q1 = []
q2 = [3,2]

Step 3:
Swap

q1 = [3,2]
q2 = []

Final:
front -> [3,2]

Top of stack = 3
*/


// Check top
console.log(s1.top());

/*
q1 = [3,2]

returns 3
*/


// Pop
console.log(s1.pop());

/*
q1.shift()

removes 3

q1 = [2]

returns 3
*/


// Empty check
console.log(s1.empty());

/*
q1 = [2]

length != 0

returns false
*/




/// using only single quee

class Sol2 {
    constructor() {

        // Only ONE queue is used
        this.q = [];
    }

    push(x) {

        // Add new element to the back
        this.q.push(x);

        // Example:
        // push(3)
        // q = [4,3]

        // Rotate old elements behind the new element
        for (let i = 0; i < this.q.length - 1; i++) {

            // Remove front element
            // Add it back to the rear
            this.q.push(this.q.shift());

            // Example:
            // q = [4,3]
            // shift() removes 4
            // q becomes [3]
            // push(4)
            // q becomes [3,4]
        }

        // After rotations:
        // newest element becomes front
    }

    top() {

        // Front of queue = top of stack
        return this.q[0];
    }

    pop() {

        // Remove front element
        // Front is treated as stack top
        return this.q.shift();
    }

    empty() {

        // Check if queue is empty
        return this.q.length == 0;
    }
}

let s2 = new Sol2();

s2.push(4);
s2.push(3);
s2.push(4);

console.log(s2.pop());