/* Add Two Numbers
Medium
Topics
Company Tags
Hints
You are given two non-empty linked lists, l1 and l2, where each represents a non-negative integer.

The digits are stored in reverse order, e.g. the number 321 is represented as 1 -> 2 -> 3 -> in the linked list.

Each of the nodes contains a single digit. You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Return the sum of the two numbers as a linked list.

Example 1:



Input: l1 = [1,2,3], l2 = [4,5,6]

Output: [5,7,9]

Explanation: 321 + 654 = 975.
Example 2:

Input: l1 = [9], l2 = [9]

Output: [8,1]
Constraints:

1 <= l1.length, l2.length <= 100.
0 <= Node.val <= 9 */

// optimal solution 
function      addTwoNumbers(l1, l2) {

        let carry = 0;

        // Dummy node helps build the result list
        let dummy = new ListNode(0);
        let current = dummy;

        // Continue while there are nodes left in either list
        // or there is a carry remaining
        while (l1 !== null || l2 !== null || carry !== 0) {

            // If a list is finished, use 0 as its value
            let val1 = l1 ? l1.val : 0;
            let val2 = l2 ? l2.val : 0;

            // Add both digits and the carry
            let sum = val1 + val2 + carry;

            // Store the last digit
            let digit = sum % 10;

            // Calculate carry for the next iteration
            carry = Math.floor(sum / 10);

            // Create a new node with the digit
            current.next = new ListNode(digit);

            // Move current to the newly created node
            current = current.next;

            // Move to the next nodes if they exist
            if (l1) l1 = l1.next;
            if (l2) l2 = l2.next;
        }

        // Skip the dummy node
        return dummy.next;
    }

