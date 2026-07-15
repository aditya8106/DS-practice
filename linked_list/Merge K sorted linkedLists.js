/* Merge K Sorted Linked Lists
Hard
Topics
Company Tags
Hints
You are given an array of k linked lists lists, where each list is sorted in ascending order.

Return the sorted linked list that is the result of merging all of the individual linked lists.

Example 1:

Input: lists = [[1,2,4],[1,3,5],[3,6]]

Output: [1,1,2,3,3,4,5,6]
Example 2:

Input: lists = []

Output: []
Example 3:

Input: lists = [[]]

Output: []
Constraints:

0 <= lists.length <= 1000
0 <= lists[i].length <= 100
-1000 <= lists[i][j] <= 1000  
*/

///brute force using extra array

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val === undefined ? 0 : val)
 *     this.next = (next === undefined ? null : next)
 * }
 */

/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {

    // Store all node values
    let arr = [];

    // Traverse every linked list
    for (let i = 0; i < lists.length; i++) {

        let curr = lists[i];

        while (curr !== null) {
            arr.push(curr.val);
            curr = curr.next;
        }
    }

    // Sort all values
    arr.sort((a, b) => a - b);

    // Create a new linked list from sorted values
    let dummy = new ListNode(0);
    let current = dummy;

    for (let num of arr) {
        current.next = new ListNode(num);
        current = current.next;
    }

    return dummy.next;
};


//optimal approach using min heap

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val === undefined ? 0 : val)
 *     this.next = (next === undefined ? null : next)
 * }
 */

// ----------------------
// Min Heap Class
// ----------------------
class MyMinHeap {

    constructor() {
        this.heap = [];
    }

    // Returns heap size
    size() {
        return this.heap.length;
    }

    // Swap two heap nodes
    swap(i, j) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }

    // Insert a ListNode into heap
    insert(node) {
        this.heap.push(node);
        this.heapifyUp();
    }

    // Move inserted node upward
    heapifyUp() {

        let index = this.heap.length - 1;

        while (index > 0) {

            let parent = Math.floor((index - 1) / 2);

            // Heap property satisfied
            if (this.heap[parent].val <= this.heap[index].val) {
                break;
            }

            this.swap(parent, index);

            index = parent;
        }
    }

    // Remove smallest node
    remove() {

        if (this.heap.length === 0) return null;

        if (this.heap.length === 1) {
            return this.heap.pop();
        }

        let min = this.heap[0];

        // Move last node to root
        this.heap[0] = this.heap.pop();

        // Restore heap
        this.heapifyDown();

        return min;
    }

    // Move root downward
    heapifyDown() {

        let index = 0;

        while (true) {

            let left = 2 * index + 1;
            let right = 2 * index + 2;

            let smallest = index;

            // Compare left child
            if (
                left < this.heap.length &&
                this.heap[left].val < this.heap[smallest].val
            ) {
                smallest = left;
            }

            // Compare right child
            if (
                right < this.heap.length &&
                this.heap[right].val < this.heap[smallest].val
            ) {
                smallest = right;
            }

            // Heap property restored
            if (smallest === index) {
                break;
            }

            this.swap(index, smallest);

            index = smallest;
        }
    }
}

/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {

    // Create Min Heap
    let minHeap = new MyMinHeap();

    // Insert the head of every linked list
    for (let head of lists) {
        if (head !== null) {
            minHeap.insert(head);
        }
    }

    // Dummy node for answer
    let dummy = new ListNode(0);
    let curr = dummy;

    // Process until heap becomes empty
    while (minHeap.size() > 0) {

        // Smallest node among all current heads
        let smallest = minHeap.remove();

        // Add to answer
        curr.next = smallest;
        curr = curr.next;

        // Insert next node from the same list
        if (smallest.next !== null) {
            minHeap.insert(smallest.next);
        }
    }

    return dummy.next;
};