/* Remove Nth Node From End of List
Medium
Topics
Company Tags
Hints
Given the head of a linked list and an integer n, remove the nth node from the end of the list and return its head.

Example 1:

Input: head = [1,2,3,4], n = 2

Output: [1,2,4]
Example 2:

Input: head = [5], n = 1

Output: []
Example 3:

Input: head = [1,2], n = 2

Output: [2]
Constraints:

The number of nodes in the list is sz.
1 <= sz <= 30
0 <= Node.val <= 100
1 <= n <= sz
*/

// using two pass brute force solution


class Solution1{
     constructor(val = 0, next = null) {
                this.val = val;
                   this.next = next;
        }
        Brute(head,n){
            let arr =[]
            let current = head
            while(current !== null){
                arr.push(current.val);
                current = current.next
            }
            arr.splice(arr.length - n ,1);
            if(arr.length === 0) return null;
            let head2 =new ListNode(arr[0]);
            let current2 = head2
            for(let i =1;i<arr.length;i++){
                current2.next = new ListNode(arr[i]);
                current2 = current2.next
            }
            return head2
        }

}