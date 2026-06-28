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

function copyRandomList(head) {
        if(!head) return null;
        let current = head
        let map = new Map()
        while(current){
            let copy = new Node(current.val)
            map.set(current , copy)
            current = current.next
        }
        current = head
        while(current){
            const copy = map.get(current)
            copy.next = map.get(current.next)||null;
            copy.random = map.get(current.random)||null
            current = current.next
        }
        return map.get(head)
    }



    /// function Optimal with out Map

    function copyRandomList(head) {
        if(!head) return null;
        let current = head
        while(current){
            let copy = new Node(current.val)
            let next = current.next
            current.next = copy
            copy.next = next
            current = next
        }
        current = head
        while(current){
            const copy = current.next
           copy.random = current.random ? current.random.next : null;
           current = copy.next

        }
        current = head
        let copyHead = head.next
        while(current){
            const copy = current.next
            current.next = copy.next
            copy.next = copy.next ? copy.next.next : null
            current = current.next
        }
        return copyHead
    }