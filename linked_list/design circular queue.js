/*  Design Circular Queue
Medium
Topics
Company Tags
Design and implement circular queue. The circular queue is a linear data structure in which the operations are performed based on FIFO (First In First Out) principle, and the last position is connected back to the first position to make a circle. It is also called "Ring Buffer".

One of the benefits of the circular queue is that we can make use of the spaces in front of the queue. In a normal queue, once the queue becomes full, we cannot insert the next element even if there is a space in front of the queue. But using the circular queue, we can use the space to store new values.

Implement the MyCircularQueue class:

MyCircularQueue(k) Initializes the object with the size of the queue to be k.
int Front() Gets the front item from the queue. If the queue is empty, return -1.
int Rear() Gets the last item from the queue. If the queue is empty, return -1.
boolean enQueue(int value) Inserts an element into the circular queue. Return true if the operation is successful.
boolean deQueue() Deletes an element from the circular queue. Return true if the operation is successful.
boolean isEmpty() Checks whether the circular queue is empty or not.
boolean isFull() Checks whether the circular queue is full or not.
You must solve the problem without using the built-in queue data structure in your programming language.
Example 1:

Input: ["MyCircularQueue", "enQueue", "enQueue", "enQueue", "enQueue", "Rear", "isFull", "deQueue", "enQueue", "Rear"]
[[3], [1], [2], [3], [4], [], [], [], [4], []]

Output: [null, true, true, true, false, 3, true, true, true, 4]
Explanation:
MyCircularQueue myCircularQueue = new MyCircularQueue(3);
myCircularQueue.enQueue(1); // return True
myCircularQueue.enQueue(2); // return True
myCircularQueue.enQueue(3); // return True
myCircularQueue.enQueue(4); // return False
myCircularQueue.Rear(); // return 3
myCircularQueue.isFull(); // return True
myCircularQueue.deQueue(); // return True
myCircularQueue.enQueue(4); // return True
myCircularQueue.Rear(); // return 4

Constraints:

1 <= k <= 1000.
0 <= value <= 1000
At most 3000 calls will be made to enQueue, deQueue, Front, Rear, isEmpty, and isFull.
  */

/// optimal solution using queuse array 


class MyCircularQueue {
    /**
     * @param {number} k
     */
    constructor(k) {
        // Array to store queue elements
        this.arr = new Array(k);

        // Maximum capacity of the queue
        this.cap = k;

        // Points to the front element
        this.front = 0;

        // Points to the next insertion position
        this.rear = 0;

        // Current number of elements in the queue
        this.size = 0;
    }

    /**
     * Insert an element into the queue.
     * @param {number} value
     * @return {boolean}
     */
    enQueue(value) {
        // Queue is full
        if (this.size === this.cap) {
            return false;
        }

        // Insert element at rear
        this.arr[this.rear] = value;

        // Move rear to next position (circularly)
        this.rear = (this.rear + 1) % this.cap;

        // Increase current size
        this.size++;

        return true;
    }

    /**
     * Delete the front element.
     * @return {boolean}
     */
    deQueue() {
        // Queue is empty
        if (this.size === 0) {
            return false;
        }

        // Move front to next position
        this.front = (this.front + 1) % this.cap;

        // Decrease size
        this.size--;

        return true;
    }

    /**
     * Get the front element.
     * @return {number}
     */
    Front() {
        // Queue is empty
        if (this.size === 0) {
            return -1;
        }

        return this.arr[this.front];
    }

    /**
     * Get the last inserted element.
     * @return {number}
     */
    Rear() {
        // Queue is empty
        if (this.size === 0) {
            return -1;
        }

        // rear points to the NEXT empty position,
        // so the last element is one position behind it.
        let lastIndex = (this.rear - 1 + this.cap) % this.cap;

        return this.arr[lastIndex];
    }

    /**
     * Check whether the queue is empty.
     * @return {boolean}
     */
    isEmpty() {
        return this.size === 0;
    }

    /**
     * Check whether the queue is full.
     * @return {boolean}
     */
    isFull() {
        return this.size === this.cap;
    }
}



/// linked list approach  

// Node class
class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class MyCircularQueue {
    /**
     * @param {number} k
     */
    constructor(k) {
        // Maximum capacity
        this.capacity = k;

        // Current number of elements
        this.size = 0;

        // Front of queue
        this.head = null;

        // Rear of queue
        this.tail = null;
    }

    /**
     * @param {number} value
     * @return {boolean}
     */
    enQueue(value) {
        // Queue is full
        if (this.size === this.capacity) {
            return false;
        }

        let newNode = new Node(value);

        // If queue is empty
        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            // Insert at tail
            this.tail.next = newNode;
            this.tail = newNode;
        }

        this.size++;
        return true;
    }

    /**
     * @return {boolean}
     */
    deQueue() {
        // Queue is empty
        if (this.size === 0) {
            return false;
        }

        // Remove front node
        this.head = this.head.next;
        this.size--;

        // If queue becomes empty
        if (this.size === 0) {
            this.tail = null;
        }

        return true;
    }

    /**
     * @return {number}
     */
    Front() {
        if (this.size === 0) {
            return -1;
        }

        return this.head.val;
    }

    /**
     * @return {number}
     */
    Rear() {
        if (this.size === 0) {
            return -1;
        }

        return this.tail.val;
    }

    /**
     * @return {boolean}
     */
    isEmpty() {
        return this.size === 0;
    }

    /**
     * @return {boolean}
     */
    isFull() {
        return this.size === this.capacity;
    }
}