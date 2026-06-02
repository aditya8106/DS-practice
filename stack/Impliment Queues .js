/* Implement Queue using Stacks
Easy
Topics
Company Tags
Implement a first in first out (FIFO) queue using only two stacks. The implemented queue should support all the functions of a normal queue (push, peek, pop, and empty).

Implement the MyQueue class:

void push(int x) Pushes element x to the back of the queue.
int pop() Removes the element from the front of the queue and returns it.
int peek() Returns the element at the front of the queue.
boolean empty() Returns true if the queue is empty, false otherwise.
Notes:

You must use only standard operations of a stack, which means only push to top, peek/pop from top, size, and is empty operations are valid.
Depending on your language, the stack may not be supported natively. You may simulate a stack using a list or deque (double-ended queue) as long as you use only a stack's standard operations.
Example 1:

Input: ["MyQueue", "push", "push", "peek", "pop", "empty"]
[[], [1], [2], [], [], []]

Output: [null, null, null, 1, 1, false]
Explanation:
MyQueue myQueue = new MyQueue();
myQueue.push(1); // queue is: [1]
myQueue.push(2); // queue is: [1, 2] (leftmost is front of the queue)
myQueue.peek(); // return 1
myQueue.pop(); // return 1, queue is [2]
myQueue.empty(); // return false    
// 

*/     


class MyStack {
    constructor() {
        // Main stack that will behave like a queue
        this.s1 = [];
        // Helper stack used during push operation
        this.s2 = [];
    }

    push(x) {
        // Put new element into helper stack first
        this.s2.push(x);
        // Example:
        // s1 = [2]
        // push(3)
        // s2 = [3] 
        // Move all elements from s1 to s2
    }
    pop() {
        if (this.s1.length === 0) {
            // Move all elements from s2 to s1
            while (this.s2.length > 0) {
                // Remove top element from s2
                // and add it to top of s1
                this.s1.push(this.s2.pop());
                // After first iteration:
                // s1 = [2]
                // s2 = []
            }
        }

        // Remove the top element from s1 and return it
        return this.s1.pop();
    }

    top() {
        if (this.s1.length === 0) {
            // Move all elements from s2 to s1
            while (this.s2.length > 0) {
                // Remove top element from s2
                // and add it to top of s1
                this.s1.push(this.s2.pop());
            }
        }
        // Return the top element of s1
        return this.s1[this.s1.length - 1];
    }
    empty() {
        // Queue is empty if both stacks are empty
        return this.s1.length === 0 && this.s2.length === 0;
    }
}

let s1 = new MyStack();
s1.push(2);
s1.push(3);
console.log(s1.top());