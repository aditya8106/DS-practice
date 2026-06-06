/* Evaluate Reverse Polish Notation
Medium
Topics
Company Tags
Hints
You are given an array of strings tokens that represents a valid arithmetic expression in Reverse Polish Notation.

Return the integer that represents the evaluation of the expression.

The operands may be integers or the results of other operations.
The operators include '+', '-', '*', and '/'.
Assume that division between integers always truncates toward zero.
Example 1:

Input: tokens = ["1","2","+","3","*","4","-"]

Output: 5

Explanation: ((1 + 2) * 3) - 4 = 5  */


// Solution 1: Using Stack
function evalRPN(tokens) {
    const stack = [];
    for (const token of tokens) {
        if (token === '+' || token === '-' || token === '*' || token === '/') {
            const b = stack.pop();
            const a = stack.pop();
            let result;
            switch (token) {         /*
                here we can use if-else statements instead of switch-case, but switch-case is more concise and easier to read when dealing with multiple cases.
                example of if-else:
                if (token === '+') {
                    result = a + b;
                } else if (token === '-') {
                    result = a - b;
                } else if (token === '*') {
                    result = a * b;
                } else if (token === '/') {
                    result = Math.trunc(a / b);
                }

                
                
                */
                case '+':
                    result = a + b;
                    break;
                case '-':
                    result = a - b;
                    break;
                case '*':
                    result = a * b;
                    break;
                case '/':
                    result = Math.trunc(a / b);
                    break;
            }   
            stack.push(result);
        }
        else {
            stack.push(parseInt(token));
        }
    }
    return stack.pop();
}

console.log(evalRPN(["1","2","+","3","*","4","-"])); // output is 5 because the expression evaluates to ((1 + 2) * 3) - 4 = 5
