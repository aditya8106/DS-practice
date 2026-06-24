/*   Reorder Linked List
Medium
Topics
Company Tags
Hints
You are given the head of a singly linked-list.

The positions of a linked list of length = 7 for example, can intially be represented as:

[0, 1, 2, 3, 4, 5, 6]

Reorder the nodes of the linked list to be in the following order:

[0, 6, 1, 5, 2, 4, 3]

Notice that in the general case for a list of length = n the nodes are reordered to be in the following order:

[0, n-1, 1, n-2, 2, n-3, ...]

You may not modify the values in the list's nodes, but instead you must reorder the nodes themselves.

Example 1:

Input: head = [2,4,6,8]

Output: [2,8,4,6]
Example 2:

Input: head = [2,4,6,8,10]

Output: [2,10,4,8,6]   */


// Brute force

function reorderList(head) {
    if (!head || !head.next) return head;

    let nodes = [];
    let curr = head;

    // Store all nodes in array
    while (curr) {
        nodes.push(curr);
        curr = curr.next;
    }

    let left = 0;
    let right = nodes.length - 1;

    while (left < right) {

        // connect left node to right node
        nodes[left].next = nodes[right];
        left++;

        // odd length protection
        if (left > right) break;

        // connect right node to next left node
        nodes[right].next = nodes[left];
        right--;
    }

    // terminate list
    nodes[left].next = null;

    return head;
}



/// optimal solution 
function reorderList(head) {

    if (!head || !head.next) return head;

    // ==========================
    // Step 1 : Find Middle
    // ==========================

    let slow = head;
    let fast = head;

    while (fast.next && fast.next.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    // ==========================
    // Step 2 : Reverse Second Half
    // ==========================

    let second = slow.next;

    // break the list
    slow.next = null;

    let prev = null;

    while (second) {

        let nextNode = second.next;

        second.next = prev;
        prev = second;

        second = nextNode;
    }

    // ==========================
    // Step 3 : Merge
    // ==========================

    let first = head;
    second = prev;

    while (second) {

        let temp1 = first.next;
        let temp2 = second.next;

        first.next = second;
        second.next = temp1;

        first = temp1;
        second = temp2;
    }

    return head;
}