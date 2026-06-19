/* Merge Two Sorted Linked Lists
Easy
Topics
Company Tags
Hints
You are given the heads of two sorted linked lists list1 and list2.

Merge the two lists into one sorted linked list and return the head of the new sorted linked list.

The new list should be made up of nodes from list1 and list2.

Example 1:



Input: list1 = [1,2,4], list2 = [1,3,5]

Output: [1,1,2,3,4,5]
Example 2:

Input: list1 = [], list2 = [1,2]

Output: [1,2]
Example 3:

Input: list1 = [], list2 = []

Output: []
Constraints:

0 <= The length of the each list <= 100.
-100 <= Node.val <= 100 */  

/// brute force using extra array 
class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

function printList(head) {
    let arr = [];

    while (head !== null) {
        arr.push(head.val);
        head = head.next;
    }

    console.log(arr.join(" -> "));
}

function mergeTwoListsBrute(list1, list2) {

    let arr = [];

    let temp = list1;
    while (temp !== null) {
        arr.push(temp.val);
        temp = temp.next;
    }

    temp = list2;
    while (temp !== null) {
        arr.push(temp.val);
        temp = temp.next;
    }

    arr.sort((a, b) => a - b);

    if (arr.length === 0) return null;

    let head = new ListNode(arr[0]);
    let current = head;

    for (let i = 1; i < arr.length; i++) {
        current.next = new ListNode(arr[i]);
        current = current.next;
    }

    return head;
}
// Optimal Solution - Two Pointer Approach

function mergeTwoListsOptimal(list1, list2) {

    // Dummy node
    let Dnode = new ListNode(-1);

    // Tail pointer of merged list
    let temp = Dnode;

    let temp1 = list1;
    let temp2 = list2;

    while (temp1 !== null && temp2 !== null) {

        // Attach smaller node
        if (temp1.val < temp2.val) {

            temp.next = temp1;
            temp = temp1;
            temp1 = temp1.next;

        } else {

            temp.next = temp2;
            temp = temp2;
            temp2 = temp2.next;
        }
    }

    // Attach remaining nodes
    if (temp1 !== null) {
        temp.next = temp1;
    } else {
        temp.next = temp2;
    }

    // Skip dummy node
    return Dnode.next;
}

// Test Data
let list1 = new ListNode(
    1,
    new ListNode(
        2,
        new ListNode(4)
    )
);

let list2 = new ListNode(
    1,
    new ListNode(
        3,
        new ListNode(5)
    )
);

let result = mergeTwoListsBrute(list1, list2);
let result2 = mergeTwoListsOptimal(list1,list2)

console.log(printList(result));
console.log(printList(result2))
