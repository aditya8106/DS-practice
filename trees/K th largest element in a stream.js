/* Kth Largest Element in a Stream
Easy
Topics
Company Tags
Hints
Design a class to find the kth largest integer in a stream of values, including duplicates. E.g. the 2nd largest from [1, 2, 3, 3] is 3. The stream is not necessarily sorted.

Implement the following methods:

constructor(int k, int[] nums) Initializes the object given an integer k and the stream of integers nums.
int add(int val) Adds the integer val to the stream and returns the kth largest integer in the stream.
Example 1:

Input:
["KthLargest", [3, [1, 2, 3, 3]], "add", [3], "add", [5], "add", [6], "add", [7], "add", [8]]

Output:
[null, 3, 3, 3, 5, 6]

Explanation:
KthLargest kthLargest = new KthLargest(3, [1, 2, 3, 3]);
kthLargest.add(3);   // return 3
kthLargest.add(5);   // return 3
kthLargest.add(6);   // return 3
kthLargest.add(7);   // return 5
kthLargest.add(8);   // return 6
Constraints:

1 <= k <= 1000
0 <= nums.length <= 1000
-1000 <= nums[i] <= 1000
-1000 <= val <= 1000
There will always be at least k integers in the stream when you search for the kth integer.  */

class MyMinHeap {
    constructor() {
        // Array used to store the Min Heap
        this.heap = [];
    }

    push(val) {
        // Add the new value at the end
        this.heap.push(val);

        // Move the value upward to maintain Min Heap
        this.heapifyUp();
    }

    pop() {
        // If there is only one element, simply remove it
        if (this.heap.length === 1) {
            return this.heap.pop();
        }

        // Root contains the smallest value
        const min = this.heap[0];

        // Take the last element and put it at the root
        this.heap[0] = this.heap.pop();

        // Move the root downward to fix the heap
        this.heapifyDown();

        // Return the smallest value we removed
        return min;
    }

    peek() {
        // Root of Min Heap is the smallest value
        return this.heap[0];
    }

    size() {
        // Return number of elements in the heap
        return this.heap.length;
    }

    heapifyUp() {
        // New element is always at the last index
        let index = this.heap.length - 1;

        // Continue until we reach the root
        while (index > 0) {

            // Find the parent index
            let parent = Math.floor((index - 1) / 2);

            // If parent is already smaller, heap is correct
            if (this.heap[parent] <= this.heap[index]) {
                break;
            }

            // Parent is bigger, so swap parent and child
            [this.heap[parent], this.heap[index]] =
                [this.heap[index], this.heap[parent]];

            // Move to the parent's position
            index = parent;
        }
    }

    heapifyDown() {
        // Start from the root
        let index = 0;

        while (true) {

            // Find left and right child indexes
            let left = 2 * index + 1;
            let right = 2 * index + 2;

            // Assume current element is the smallest
            let smallest = index;

            // Check if left child is smaller
            if (
                left < this.heap.length &&
                this.heap[left] < this.heap[smallest]
            ) {
                smallest = left;
            }

            // Check if right child is smaller
            if (
                right < this.heap.length &&
                this.heap[right] < this.heap[smallest]
            ) {
                smallest = right;
            }

            // Current element is already the smallest
            if (smallest === index) {
                break;
            }

            // Swap current element with the smaller child
            [this.heap[index], this.heap[smallest]] =
                [this.heap[smallest], this.heap[index]];

            // Move downward
            index = smallest;
        }
    }
}


class KthLargest {
    constructor(k, nums) {

        // Store k
        this.k = k;

        // Create a Min Heap
        this.minHeap = new MyMinHeap();

        // Add all initial numbers
        for (let num of nums) {
            this.add(num);
        }
    }

    add(val) {

        // Add the new value to the heap
        this.minHeap.push(val);

        // We only need the k largest numbers
        if (this.minHeap.size() > this.k) {

            // Remove the smallest number
            this.minHeap.pop();
        }

        // Smallest among the k largest
        // is the kth largest number
        return this.minHeap.peek();
    }
}


// =========================
// TEST
// =========================

let kthLargest = new KthLargest(3, [1, 2, 3, 3]);

console.log(kthLargest.add(3)); // 3
console.log(kthLargest.add(5)); // 3
console.log(kthLargest.add(6)); // 3
console.log(kthLargest.add(7)); // 5
console.log(kthLargest.add(8)); // 6