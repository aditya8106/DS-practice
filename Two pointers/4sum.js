/* 4Sum
Medium
Topics
Company Tags
You are given an integer array nums of size n, return an array of all the unique quadruplets [nums[a], nums[b], nums[c], nums[d]] such that:

0 <= a, b, c, d < n
a, b, c, and d are distinct.
nums[a] + nums[b] + nums[c] + nums[d] == target
You may return the answer in any order.

Note: [1,0,3,2] and [3,0,1,2] are considered as same quadruplets.

Example 1:

Input: nums = [3,2,3,-3,1,0], target = 3

Output: [[-3,0,3,3],[-3,1,2,3]]
Example 2:

Input: nums = [1,-1,1,-1,1,-1], target = 2

Output: [[-1,1,1,1]]  */   


  // brute force
function brute(nums, target) {
    let set = new Set();          // Store unique quadruplets
    let res = [];                 // Final answer array
    let n = nums.length;

    // Pick first element
    for (let i = 0; i < n; i++) {

        // Pick second element
        for (let j = i + 1; j < n; j++) {

            // Pick third element
            for (let k = j + 1; k < n; k++) {

                // Pick fourth element
                for (let l = k + 1; l < n; l++) {

                    // Calculate sum of four numbers
                    let sum = nums[i] + nums[j] + nums[k] + nums[l];

                    // If sum equals target
                    if (sum === target) {

                        // Sort to avoid different orders
                        // [3,-3,1,2] and [-3,1,2,3]
                        // become the same
                        let quad = [
                            nums[i],
                            nums[j],
                            nums[k],
                            nums[l]
                        ].sort((a, b) => a - b);

                        // Convert array to string
                        // because Set compares references
                        set.add(JSON.stringify(quad));
                    }
                }
            }
        }
    }

    // Convert strings back to arrays
    for (let item of set) {
        res.push(JSON.parse(item));
    }

    return res;
}


// optimal two pointers

var fourSum = function(nums, target) {

    let n = nums.length;
    let res = [];

    // Sort array
    // Required for two pointers
    nums.sort((a, b) => a - b);

    // First number
    for (let i = 0; i < n - 3; i++) {

        // Skip duplicate first numbers
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue;
        }

        // Second number
        for (let j = i + 1; j < n - 2; j++) {

            // Skip duplicate second numbers
            if (j > i + 1 && nums[j] === nums[j - 1]) {
                continue;
            }

            // Two pointers for remaining two numbers
            let left = j + 1;
            let right = n - 1;

            while (left < right) {

                // Current 4-number sum
                let sum =
                    nums[i] +
                    nums[j] +
                    nums[left] +
                    nums[right];

                // Need larger sum
                if (sum < target) {

                    left++;

                // Need smaller sum
                } else if (sum > target) {

                    right--;

                // Found valid quadruplet
                } else {

                    res.push([
                        nums[i],
                        nums[j],
                        nums[left],
                        nums[right]
                    ]);

                    // Move pointers
                    left++;
                    right--;

                    // Skip duplicate left values
                    while (
                        left < right &&
                        nums[left] === nums[left - 1]
                    ) {
                        left++;
                    }

                    // Skip duplicate right values
                    while (
                        left < right &&
                        nums[right] === nums[right + 1]
                    ) {
                        right--;
                    }
                }
            }
        }
    }

    return res;
};