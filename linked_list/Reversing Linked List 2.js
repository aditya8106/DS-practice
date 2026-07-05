/* Reverse Linked List II
Medium
Topics
Company Tags
You are given the head of a singly linked list and two integers left and right where left <= right, reverse the nodes of the list from position left to position right (1-indexed), and return the reversed list.

Example 1:



Input: head = [1,2,3,4,5], left = 1, right = 3

Output: [3,2,1,4,5]
Example 2:

Input: head = [1,1], left = 1, right = 1

Output: [1,1]
Constraints:

The number of nodes in the list is n.
1 <= n <= 500.
-500 <= Node.val <= 500
1 <= left <= right <= n  */



// brute force solution using  2 pass
class Solution {
    /**
     * @param {ListNode} head
     * @param {number} left
     * @param {number} right
     * @return {ListNode}
     */
    reverseBetween(head, left, right) {
     let curr  = head
     let arr = []
     while(curr != null){
        arr.push(curr.val)
        curr = curr.next
     }
     left = left -1
     right = right -1
     while(left < right){
        [arr[left] , arr[right]] = [arr[right] , arr[left]]
        left++
        right--
     }
     let curr1 = head
     let i = 0
     while(curr1){
        curr1.val = arr[i]
        curr1 = curr1.next;
        i++
     }

     return head
     
    }
}


/// optimal solution 
 
var reverseBetween = function(head, left, right) {
    let dummy = new ListNode(0)
    dummy.next = head
    let prev = dummy
    let curr = head
    for(let i =0;i< left-1;i++){
        prev = prev.next
        curr = curr.next
    }

    let sub = curr
    let prevNode = null
    for(let i =0;i<= right - left;i++){
        let next = curr.next
        curr.next = prevNode
        prevNode = curr
        curr = next
    }

    prev.next = prevNode
    sub.next = curr
    return dummy.next
};