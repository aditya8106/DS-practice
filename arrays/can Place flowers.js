/* Can Place Flowers
Easy
Topics
Company Tags
You have a long flowerbed in which some of the plots are planted, and some are not. However, flowers cannot be planted in adjacent plots.

You are given an integer array flowerbed containing 0's and 1's, where 0 means empty and 1 means not empty, and an integer n, return true if n new flowers can be planted in the flowerbed without violating the no-adjacent-flowers rule and false otherwise.

Example 1:

Input: flowerbed = [1,0,0,0,1], n = 1

Output: true
Example 2:

Input: flowerbed = [1,0,0,0,1], n = 2

Output: false
Constraints:

1 <= flowerbed.length <= 20,000
flowerbed[i] is 0 or 1.
There are no two adjacent flowers in flowerbed.
0 <= n <= flowerbed.length */


class Solution {
    /**
     * @param {number[]} flowerbed
     * @param {number} n
     * @return {boolean}
     */
    canPlaceFlowers(flowerbed, n) {

        // We don't need to plant anything
        if (n === 0) {
            return true;
        }

        for (let i = 0; i < flowerbed.length; i++) {

            // Current plot is empty
            // Left side is empty or doesn't exist
            // Right side is empty or doesn't exist
            if (
                flowerbed[i] === 0 &&
                (i === 0 || flowerbed[i - 1] === 0) &&
                (i === flowerbed.length - 1 || flowerbed[i + 1] === 0)
            ) {
                // Plant flower
                flowerbed[i] = 1;

                // One flower requirement completed
                n--;

                // All required flowers planted
                if (n === 0) {
                    return true;
                }
            }
        }

        // Couldn't plant enough flowers
        return false;
    }
}  
