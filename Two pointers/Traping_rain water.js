/* rapping Rain Water
Hard
Topics
Company Tags
Hints
You are given an array of non-negative integers height which represent an elevation map. Each value height[i] represents the height of a bar, which has a width of 1.

Return the maximum area of water that can be trapped between the bars.

Example 1:



Input: height = [0,2,0,3,1,0,1,3,2,1]

Output: 9 */

// brute force 
function bruteforce(heights){

    let n = heights.length; // total number of bars in array

    let tot = 0; // stores total trapped water

    // loop through every index
    for(let i = 0; i < n; i++){

        let leftmax = 0; // stores tallest wall on left side

        // find tallest wall from 0 -> i
        for(let j = 0; j <= i; j++){

            // compare current leftmax with current height
            leftmax = Math.max(leftmax, heights[j]);
        }

        let rightmax = 0; // stores tallest wall on right side

        // find tallest wall from i -> n-1
        for(let j = i; j < n; j++){

            // compare current rightmax with current height
            rightmax = Math.max(rightmax, heights[j]);
        }

        // water trapped at current index
        // smaller boundary - current height
        tot += Math.min(leftmax, rightmax) - heights[i];
    }

    // final trapped water
    return tot;
}

console.log(bruteforce([0,2,0,3,1,0,1,3,2,1])); // oupt 9


//oprimal using two pointers 

function oprimal_trap_water(heights){

    let lmax = 0, rmax = 0, tot = 0, l = 0;
    // lmax  -> tallest wall seen from left
    // rmax  -> tallest wall seen from right
    // tot   -> total trapped water
    // l     -> left pointer

    let r = heights.length - 1;
    // r -> right pointer starts from last index

    // run until both pointers meet
    while(l < r){

        // if left height is smaller or equal
        if(heights[l] <= heights[r]){

            // if taller wall already exists on left side
            if(lmax > heights[l]){

                // water trapped at current left index
                tot += lmax - heights[l];

            }else{

                // update left maximum wall
                lmax = heights[l];
            }

            // move left pointer forward
            l++;

        }else{

            // if taller wall already exists on right side
            if(rmax > heights[r]){

                // water trapped at current right index
                tot += rmax - heights[r];

            }else{

                // update right maximum wall
                rmax = heights[r];
            }

            // move right pointer backward
            r--;
        }
    }

    // final total trapped water
    return tot;
}

console.log(oprimal_trap_water([0,2,0,3,1,0,1,3,2,1]));