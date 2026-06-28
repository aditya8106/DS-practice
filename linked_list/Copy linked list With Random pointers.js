/* Copy Linked List with Random Pointer
Medium
Topics
Company Tags
Hints
You are given the head of a linked list of length n. Unlike a singly linked list, each node contains an additional pointer random, which may point to any node in the list, or null.

Create a deep copy of the list.

The deep copy should consist of exactly n new nodes, each including:

The original value val of the copied node
A next pointer to the new node corresponding to the next pointer of the original node
A random pointer to the new node corresponding to the random pointer of the original node
Note: None of the pointers in the new list should point to nodes in the original list.

Return the head of the copied linked list.

In the examples, the linked list is represented as a list of n nodes. Each node is represented as a pair of [val, random_index] where random_index is the index of the node (0-indexed) that the random pointer points to, or null if it does not point to any node.

Example 1:



Input: head = [[3,null],[7,3],[4,0],[5,1]]

Output: [[3,null],[7,3],[4,0],[5,1]]
Example 2:



Input: head = [[1,null],[2,2],[3,2]]

Output: [[1,null],[2,2],[3,2]]
Constraints:

0 <= n <= 100
-100 <= Node.val <= 100
Node values are not guaranteed to be unique.
random is null or is pointing to some node in the linked list.*/

/**
 * Optimal Solution
 *
 * Time  : O(n)
 * Space : O(1)
 *
 * Idea:
 * Step 1 : Insert copied nodes inside original list.
 * Step 2 : Connect random pointers.
 * Step 3 : Separate the two lists.
 */

function copyRandomList(head) {

    // Edge Case
    if (!head) return null;

    // ====================================================
    // STEP 1
    // Insert copied node after every original node.
    //
    // Before:
    // A -> B -> C
    //
    // After:
    // A -> A' -> B -> B' -> C -> C'
    // ====================================================

    let current = head;

    while (current) {

        // Create copied node
        const copy = new Node(current.val);

        // Save next original node
        const next = current.next;

        // Insert copied node
        current.next = copy;
        copy.next = next;

        // Move to next original node
        current = next;
    }

    // ====================================================
    // STEP 2
    // Connect random pointers.
    //
    // Since every copied node is immediately
    // after its original node,
    //
    // Copy of any node = node.next
    //
    // Example:
    //
    // A.random -> C
    //
    // Then
    //
    // A'.random -> C'
    //
    // C' = C.next
    // ====================================================

    current = head;

    while (current) {

        // Copied node
        const copy = current.next;

        // Connect random pointer
        copy.random = current.random
            ? current.random.next
            : null;

        // Skip copied node
        // Move to next original node
        current = copy.next;
    }

    // ====================================================
    // STEP 3
    // Separate original list and copied list.
    //
    // Before:
    //
    // A -> A' -> B -> B' -> C -> C'
    //
    // After:
    //
    // Original:
    // A -> B -> C
    //
    // Copied:
    // A' -> B' -> C'
    // ====================================================

    current = head;

    // Head of copied list
    const copyHead = head.next;

    while (current) {

        // Current copied node
        const copy = current.next;

        // Restore original list
        //
        // A -> A' -> B
        //
        // becomes
        //
        // A -> B
        current.next = copy.next;

        // Connect copied list
        //
        // A' -> B
        //
        // becomes
        //
        // A' -> B'
        copy.next = copy.next
            ? copy.next.next
            : null;

        // Move to next original node
        current = current.next;
    }

    // Return copied list
    return copyHead;
}
   /**
 * Optimal Solution
 *
 * Time  : O(n)
 * Space : O(1)
 *
 * Idea:
 * Step 1 : Insert copied nodes inside original list.
 * Step 2 : Connect random pointers.
 * Step 3 : Separate the two lists.
 */

function copyRandomList(head) {

    // Edge Case
    if (!head) return null;

    // ====================================================
    // STEP 1
    // Insert copied node after every original node.
    //
    // Before:
    // A -> B -> C
    //
    // After:
    // A -> A' -> B -> B' -> C -> C'
    // ====================================================

    let current = head;

    while (current) {

        // Create copied node
        const copy = new Node(current.val);

        // Save next original node
        const next = current.next;

        // Insert copied node
        current.next = copy;
        copy.next = next;

        // Move to next original node
        current = next;
    }

    // ====================================================
    // STEP 2
    // Connect random pointers.
    //
    // Since every copied node is immediately
    // after its original node,
    //
    // Copy of any node = node.next
    //
    // Example:
    //
    // A.random -> C
    //
    // Then
    //
    // A'.random -> C'
    //
    // C' = C.next
    // ====================================================

    current = head;

    while (current) {

        // Copied node
        const copy = current.next;

        // Connect random pointer
        copy.random = current.random
            ? current.random.next
            : null;

        // Skip copied node
        // Move to next original node
        current = copy.next;
    }

    // ====================================================
    // STEP 3
    // Separate original list and copied list.
    //
    // Before:
    //
    // A -> A' -> B -> B' -> C -> C'
    //
    // After:
    //
    // Original:
    // A -> B -> C
    //
    // Copied:
    // A' -> B' -> C'
    // ====================================================

    current = head;

    // Head of copied list
    const copyHead = head.next;

    while (current) {

        // Current copied node
        const copy = current.next;

        // Restore original list
        //
        // A -> A' -> B
        //
        // becomes
        //
        // A -> B
        current.next = copy.next;

        // Connect copied list
        //
        // A' -> B
        //
        // becomes
        //
        // A' -> B'
        copy.next = copy.next
            ? copy.next.next
            : null;

        // Move to next original node
        current = current.next;
    }

    // Return copied list
    return copyHead;
}