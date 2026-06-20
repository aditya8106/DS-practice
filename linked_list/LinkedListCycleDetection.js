/* Linked List Cycle Detection
Easy
Topics
Company Tags
Hints
Given the beginning of a linked list head, return true if there is a cycle in the linked list. Otherwise, return false.

There is a cycle in a linked list if at least one node in the list can be visited again by following the next pointer.

Internally, index determines the index of the beginning of the cycle, if it exists. The tail node of the list will set it's next pointer to the index-th node. If index = -1, then the tail node points to null and no cycle exists.

Note: index is not given to you as a parameter.

Example 1:



Input: head = [1,2,3,4], index = 1

Output: true
Explanation: There is a cycle in the linked list, where the tail connects to the 1st node (0-indexed).

Example 2:



Input: head = [1,2], index = -1

Output: false
Constraints:

0 <= Length of the list <= 1000.
-1000 <= Node.val <= 1000
index is -1 or a valid index in the linked list.   */


// setup for list or arr to linkedlist connetion

// Definition of Linked List Node
class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

// Function to detect cycle using Set
function ListCycle(head) {

    // Store visited nodes
    let visited = new Set();

    // Start traversal from head
    let temp = head;

    // Traverse linked list
    while (temp !== null) {

        // If current node is already visited
        // then a cycle exists
        if (visited.has(temp)) {
            return true;
        }

        // Add current node to Set
        visited.add(temp);

        // Move to next node
        temp = temp.next;
    }

    // Reached null => no cycle
    return false;
}

// ---------------- DRIVER CODE ----------------

// Create nodes
let node1 = new ListNode(1);
let node2 = new ListNode(2);
let node3 = new ListNode(3);
let node4 = new ListNode(4);
let node5 = new ListNode(5);

// Connect nodes
node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;

// Create cycle
// 5 -> 2
node5.next = node2;

// Call function
console.log(ListCycle(node1));


// optimal using two pointers 

function ListCycle(head) {

    // Slow pointer starts from head
    let slow = head;

    // Fast pointer starts from head
    let fast = head;

    // Continue while fast can move
    while (fast !== null && fast.next !== null) {

        // Move slow by 1 step
        slow = slow.next;

        // Move fast by 2 steps
        fast = fast.next.next;

        // If both meet,
        // cycle exists
        if (slow === fast) {
            return true;
        }
    }

    // Fast reached null
    // therefore no cycle
    return false;
}

// ---------------- DRIVER CODE ----------------

// Create nodes
let nodee1 = new ListNode(1);
let nodee2 = new ListNode(2);
let nodee3 = new ListNode(3);
let nodee4 = new ListNode(4);
let nodee5 = new ListNode(5);

// Connect nodes
nodee1.next = nodee2;
nodee2.next = nodee3;
nodee3.next = nodee4;
nodee4.next = nodee5;

// Create cycle
// 5 -> 2
nodee5.next = nodee2;

// Call function
console.log(ListCycle(nodee1));