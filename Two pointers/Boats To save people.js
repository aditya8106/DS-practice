/* Boats to Save People
Medium
Topics
Company Tags
You are given an integer array people where people[i] is the weight of the ith person, and an infinite number of boats where each boat can carry a maximum weight of limit. Each boat carries at most two people at the same time, provided the sum of the weight of those people is at most limit.

Return the minimum number of boats to carry every given person.

Example 1:

Input: people = [5,1,4,2], limit = 6

Output: 2
Explanation:
First boat [5,1].
Second boat [4,2].

Example 2:

Input: people = [1,3,2,3,2], limit = 3

Output: 4
Explanation:
First boat [3].
Second boat [3].
Third boat [1,2].
Fourth boat [2].

Constraints:

1 <= people.length <= 50,000
1 <= people[i] <= limit <= 30,000  */


// optimal using two pointers
  function numRescueBoats(people, limit) {

    let n = people.length;
    let res = 0;
    // Sort array
    // Required for two pointers
    people.sort((a, b) => a - b); // sort the array in ascending order to use two pointers effectively for pairing the lightest and heaviest person together
    let left = 0;
    let right = n - 1;
    while (left <= right) { // no points cross each other
        if (people[left] + people[right] <= limit) { // if both people can fit in one boat, move left pointer
            left++;
        }
        right--; // move right pointer for every boat used, whether one or two people are on it
        res++;// increment boat count for each boat used
/*      
    here we can write it as 
     let sum = people[left] + people[right];
     if(sum <= limit){
         left++;
         right--;
     }        else{
            right--;
        }
        res++;
        but the above code is more concise and does the same thing. It checks if the sum of the weights of the two people at the left and right pointers is less than or equal to the limit. If it is, it means both people can fit in one boat, so we move the left pointer to the next person. Regardless of whether they fit together or not, we always move the right pointer to the next person and increment the result counter for each boat used.
*/

    }
    return res;
}