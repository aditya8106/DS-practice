/* Find the Duplicate Number
Medium
Topics
Company Tags
Hints
You are given an array of integers nums containing n + 1 integers. Each integer in nums is in the range [1, n] inclusive.

There is exactly one repeated integer in nums, and every other integer appears at most once.

Return the repeated integer.

Example 1:

Input: nums = [1,2,3,2,2]

Output: 2
Example 2:

Input: nums = [1,2,3,4,4]

Output: 4
Follow-up: Can you solve the problem without modifying the array nums and using 
O
(
1
)
O(1) extra space?

Constraints:

1 <= n <= 10,000
nums.length == n + 1
1 <= nums[i] <= n  */

//  brute time O(n2) space O(1)

    function findDuplicate(nums) {

        // Compare every element with the remaining elements
        for (let i = 0; i < nums.length; i++) {

            for (let j = i + 1; j < nums.length; j++) {

                // Duplicate found
                if (nums[i] === nums[j]) {
                    return nums[i];
                }

            }

        }

    }

// using sorting time O(n log n) space O(1)

function  findDuplicate(nums) {

        // Sort the array
        nums.sort((a, b) => a - b);

        // Compare adjacent elements
        for (let i = 0; i < nums.length - 1; i++) {

            // Duplicate found
            if (nums[i] === nums[i + 1]) {
                return nums[i];
            }

        }

    }

    /// using hash set time O(n) space O(n)

    function findDuplicate(nums) {

        let set = new Set();

        for (let num of nums) {

            // Already seen -> duplicate
            if (set.has(num)) {
                return num;
            }

            // Store current number
            set.add(num);

        }

    }

    // optimal using floyd's cycle detection  time O(n) space O(1)

    function  findDuplicate(nums) {

        // Initialize both pointers
        let slow = 0;
        let fast = 0;

        // -------------------------------
        // Phase 1: Find meeting point
        // -------------------------------
        // We use do...while because both pointers
        // start at the same position (0).
        // We must move them first before comparing.
        do {
            /* here we can use while loop also 
            while(true){
            slow = nums[slow];
            fast = nums[nums[fast]];
            }
            
            */

            // Move slow pointer by one step
            slow = nums[slow];

            // Move fast pointer by two steps
            fast = nums[nums[fast]];

        } while (slow !== fast);

        // -------------------------------
        // Phase 2: Find cycle entrance
        // -------------------------------

        // Reset slow pointer to start
        slow = 0;

        // Move both pointers one step at a time.
        // They will meet at the duplicate number.
        while (slow !== fast) {

            slow = nums[slow];
            fast = nums[fast];

        }

        // Duplicate number
        return slow;

    }
