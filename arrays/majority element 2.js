/*  Majority Element II
Medium
Topics
Company Tags
You are given an integer array nums of size n, find all elements that appear more than ⌊ n/3 ⌋ times. You can return the result in any order.

Example 1:

Input: nums = [5,2,3,2,2,2,2,5,5,5]

Output: [2,5]
Example 2:

Input: nums = [4,4,4,4,4]

Output: [4]
Example 3:

Input: nums = [1,2,3]

Output: []
*/ 

//optimal solution using Boyer-Moore Voting Algorithm


function majorityElement(nums) {
        let candidate1 = null;
        let candidate2 = null;

        let count1 = 0;
        let count2 = 0;

        // Step 2: Find possible candidates
        for (let num of nums) {

            // If matches candidate1
            if (num === candidate1) {
                count1++;
            }

            // If matches candidate2
            else if (num === candidate2) {
                count2++;
            }

            // If count1 becomes 0
            else if (count1 === 0) {
                candidate1 = num;
                count1 = 1;
            }

            // If count2 becomes 0
            else if (count2 === 0) {
                candidate2 = num;
                count2 = 1;
            }

            // Cancel both counts
            else {
                count1--;
                count2--;
            }
        }

        // Step 3: Verify candidates
        count1 = 0;
        count2 = 0;

        for (let num of nums) {
            if (num === candidate1) {
                count1++;
            }
            else if (num === candidate2) {
                count2++;
            }
        }

        // Step 4: Build answer
        let res = [];
        let n = nums.length;

        if (count1 > n / 3) {
            res.push(candidate1);
        }

        if (count2 > n / 3) {
            res.push(candidate2);
        }

        return res;
    }



    console.log(majorityElement([5,2,3,2,2,2,2,5,5,5])); // output [2,5]
    /* Explanation:
1. We initialize two candidate variables (candidate1 and candidate2) and their corresponding counts (count1 and count2) to keep track of potential majority elements.
2. We iterate through the input array nums to find possible candidates for the majority element. We update the candidates and their counts based on the current number.
3. After the first pass, we have at most two candidates that could be the majority elements.
4. We reset the counts and iterate through the array again to verify how many times each candidate appears.
5. Finally, we check if either candidate appears more than n/3 times and add them to the result array if they do. */
    
    //brute force solution using map

    function brute(nums){
        let freq = {};
        let res = [];
        let n = nums.length;
        for(let num of nums){
            freq[num] = (freq[num] || 0) + 1;
            if(freq[num] > n/3 && !res.includes(num)){
                res.push(num);
            }
        }
        return res;
    }

    console.log(brute([5,2,3,2,2,2,2,5,5,5])); // output [2,5]
    /* Explanation:
1. We initialize two candidate variables (candidate1 and candidate2) and their corresponding counts (count1 and count2) to keep track of potential majority elements.
2. We iterate through the input array nums to find possible candidates for the majority element. We update the candidates and their counts based on the current number.
3. After the first pass, we have at most two candidates that could be the majority elements.
4. We reset the counts and iterate through the array again to verify how many times each candidate appears.
5. Finally, we check if either candidate appears more than n/3 times and add them to the result array if they do. */

