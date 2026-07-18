/*  Reverse Nodes in K-Group
Hard
Topics
Company Tags
Hints
You are given the head of a singly linked list head and a positive integer k.

You must reverse the first k nodes in the linked list, and then reverse the next k nodes, and so on. If there are fewer than k nodes left, leave the nodes as they are.

Return the modified list after reversing the nodes in each group of k.

You are only allowed to modify the nodes' next pointers, not the values of the nodes.

Example 1:



Input: head = [1,2,3,4,5,6], k = 3

Output: [3,2,1,6,5,4]
Example 2:



Input: head = [1,2,3,4,5], k = 3

Output: [3,2,1,4,5]
Constraints:

The length of the linked list is n.
1 <= k <= n <= 100
0 <= Node.val <= 100
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val === undefined ? 0 : val)
 *     this.next = (next === undefined ? null : next)
 * }
 */

var reverseKGroup = function(head, k) {

    // --------------------------------------------------------
    // Create a dummy node.
    //
    // Why?
    // If the first group gets reversed, the head of the list
    // changes. A dummy node helps us avoid handling that case
    // separately.
    //
    // Initial:
    //
    // dummy -> 1 -> 2 -> 3 -> 4 -> 5 -> 6
    // --------------------------------------------------------
    let dummy = new ListNode(0);
    dummy.next = head;

    // groupPrev always points to the node BEFORE the current group.
    //
    // Initially:
    //
    // dummy -> 1 -> 2 -> 3 -> 4 -> 5 -> 6
    //   ^
    // groupPrev
    //
    let gPrev = dummy;

    // Keep processing groups until we don't have k nodes left.
    while (true) {

        // ----------------------------------------------------
        // STEP 1 : Find the kth node
        // ----------------------------------------------------
        //
        // Example:
        //
        // dummy -> 1 -> 2 -> 3 -> 4 -> 5 -> 6
        //   ^
        // groupPrev
        //
        // k = 3
        //
        // Move 3 steps.
        //
        // dummy -> 1 -> 2 -> 3 -> 4 -> 5 -> 6
        //                ^
        //               kth
        //
        // If kth doesn't exist, it means fewer than k nodes
        // remain, so we simply return.
        //
        let Kth = gPrev;

        for (let i = 0; i < k; i++) {

            Kth = Kth.next;

            if (Kth == null) {
                return dummy.next;
            }
        }

        // ----------------------------------------------------
        // STEP 2 : Save the next group's starting node.
        //
        // Current:
        //
        // dummy -> 1 -> 2 -> 3 -> 4 -> 5 -> 6
        //                ^    ^
        //               kth groupNext
        //
        // We save node 4 because after reversing we must
        // reconnect the list.
        // ----------------------------------------------------
        let gN = Kth.next;

        // ----------------------------------------------------
        // STEP 3 : Reverse the current group.
        //
        // Current Group:
        //
        // 1 -> 2 -> 3
        //
        // groupNext = 4
        //
        // We start with:
        //
        // prev = 4
        // curr = 1
        //
        // Why prev = groupNext?
        //
        // Because after reversing we want:
        //
        // 3 -> 2 -> 1 -> 4
        //
        // Notice that 1 should automatically point to 4.
        // ----------------------------------------------------
        let prev = gN;
        let curr = gPrev.next;

        // Reverse until curr reaches the next group.
        while (curr !== gN) {

            // Save next node.
            //
            // Example:
            //
            // curr = 1
            // next = 2
            //
            let next = curr.next;

            // Reverse pointer.
            //
            // Before:
            //
            // 1 -> 2
            //
            // After:
            //
            // 1 -> 4
            //
            curr.next = prev;

            // Move prev forward.
            //
            // prev = 1
            //
            prev = curr;

            // Move curr forward.
            //
            // curr = 2
            //
            curr = next;
        }

        // After the loop:
        //
        // Current group becomes
        //
        // 3 -> 2 -> 1 -> 4
        //
        // But dummy is still pointing to 1.
        //
        // dummy -> 1
        //
        // We need to reconnect.

        // Save the old head.
        //
        // temp = 1
        //
        // After reversing,
        // 1 becomes the tail of this group.
        //
        let temp = gPrev.next;

        // Connect previous part with new head.
        //
        // Before:
        //
        // dummy -> 1
        //
        // After:
        //
        // dummy -> 3
        //
        gPrev.next = Kth;

        // Move groupPrev to the tail.
        //
        // Current:
        //
        // dummy -> 3 -> 2 -> 1 -> 4 -> 5 -> 6
        //                  ^
        //                 temp
        //
        // Next group starts after node 1.
        //
        gPrev = temp;
    }

    return dummy.next;
}
