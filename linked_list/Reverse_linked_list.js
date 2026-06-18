/* Given the beginning of a singly linked list head, reverse the list, and return the new beginning of the list.

Example 1:

Input: head = [0,1,2,3]

Output: [3,2,1,0]
Example 2:

Input: head = []

Output: []
Constraints:

0 <= The length of the list <= 1000.
-1000 <= Node.val <= 1000 */


/// optimal solution 

// Node class for Linked List
class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;     // value stored in node
        this.next = next;   // pointer to next node
    }
}

// Create Linked List from Array
// [0,1,2,3] => 0 -> 1 -> 2 -> 3 -> null
function createList(arr) {
    let head = null;

    // Start from last element and build backwards
    for (let i = arr.length - 1; i >= 0; i--) {
        head = new ListNode(arr[i], head);
    }

    return head;
}

// Reverse Linked List
function ReverseLinkedList(head) {

    // prev starts as null
    let prev = null;

    // curr starts at head (first node)
    let curr = head;

    // Traverse until end of list
    while (curr !== null) {

        // Save next node before breaking link
        // Example:
        // curr = 0 -> 1 -> 2 -> 3
        // next = node containing 1
        let next = curr.next;

        // Reverse the arrow
        // 0 -> 1 becomes 0 -> null
        // later 1 -> 2 becomes 1 -> 0
        curr.next = prev;

        // Move prev to current node
        // prev now points to reversed part
        prev = curr;

        // Move curr to next node
        // continue traversing original list
        curr = next;
    }

    // prev now points to:
    // 3 -> 2 -> 1 -> 0 -> null
    // which is the new head
    return prev;
}

// Print Linked List
function printList(head) {
    let temp = head;

    while (temp !== null) {
        process.stdout.write(temp.val + " -> ");
        temp = temp.next;
    }

    console.log("null");
}

// Input: [0,1,2,3]
let head = createList([0, 1, 2, 3]);

console.log("Original List:");
printList(head);

// Reverse the list
let newHead = ReverseLinkedList(head);

console.log("Reversed List:");
printList(newHead);