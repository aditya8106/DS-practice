/* Staircase detail

This is a staircase of size :

   #
  ##
 ###
####
Its base and height are both equal to . It is drawn using # symbols and spaces. The last line is not preceded by any spaces.

Write a program that prints a staircase of size .

Function Description

Complete the  function with the following parameter(s):

: an integer
Print

Print a staircase as described above. No value should be returned.
Note: The last line is not preceded by spaces. All lines are right-aligned.

Input Format

A single integer, , denoting the size of the staircase.

Constraints

 .

Sample Input

6 
Sample Output

     #
    ##
   ###
  ####
 #####
######
Explanation

The staircase is right-aligned, composed of # symbols and spaces, and has a height and width of . */

function staircase(n) { 
    for (let i = 1; i <= n; i++) {
        console.log(' '.repeat(n - i) + '#'.repeat(i));
    }
}
staircase(6); //     #
                //    ##
                //   ###
                //  ####
                // #####
                //######

// Alternative solution using for loop
function staircase(n) {
    for (let i = 0; i <= n; i++) {
        let line = '';
        for (let j = 0; j <= n - i; j++) {
            if (j < n - i) {
                line += ' ';
            } else {
                line += '#';
            }
           

        }
        console.log(line);
    }
}

staircase(6); //     #
                //    ##
                //   ###
                //  ####
                // #####
                //######

        /*  another pattern like this

        #
        ##
        ###
        ####
        #####   we change if condition j<n-i to j<i or j<=i and remove space from line += ' ' and add space to line += '# ' to make it look like this
        #####
        */
       