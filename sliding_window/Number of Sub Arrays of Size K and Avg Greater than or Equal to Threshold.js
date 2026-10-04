/* Number of Sub Arrays of Size K and Avg Greater than or Equal to Threshold
Medium
Topics
Company Tags
You are given an array of integers arr and two integers k and threshold, return the number of sub-arrays of size k and average greater than or equal to threshold.

Example 1:

Input: arr = [2,2,2,2,5,5,5,8], k = 3, threshold = 4

Output: 3
Explanation: Sub-arrays [2,5,5],[5,5,5] and [5,5,8] have averages 4, 5 and 6 respectively. All other sub-arrays of size 3 have averages less than 4 (the threshold).

Example 2:

Input: arr = [11,13,17,23,29,31,7,5,2,3], k = 3, threshold = 5

Output: 6
Explanation: The first 6 sub-arrays of size 3 have averages greater than 5. Note that averages are not integers.

Constraints:

1 <= k <= arr.length <= 100,000
1 <= arr[i] <= 10,000
0 <= threshold <= 10,000

*/

// optimized solution using sliding window technique

function numOfSubarrays(arr, k, threshold){
        let left = 0
        let right = k
        let count = 0
        let wisum = 0
        for(let i = 0 ;i <k;i++){
            wisum+=arr[i]
        }
        if(wisum>= k * threshold){
            count++
        }
        while(right<arr.length){
            wisum +=arr[right]
            wisum -=arr[left]
              if(wisum>=k * threshold){
                count++
            } 
            right++
            left++
          
        }
        return count;
    }

    console.log(numOfSubarrays([2,2,2,2,5,5,5,8], 3, 4)) // 3