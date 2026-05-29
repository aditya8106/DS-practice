/* Valid Parentheses
Easy
Topics
Company Tags
Hints
You are given a string s consisting of the following characters: '(', ')', '{', '}', '[' and ']'.

The input string s is valid if and only if:

Every open bracket is closed by the same type of close bracket.
Open brackets are closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
Return true if s is a valid string, and false otherwise.

Example 1:

Input: s = "[]"

Output: true
Example 2:

Input: s = "([{}])"

Output: true
Example 3:

Input: s = "[(])"

Output: false
Explanation: The brackets are not closed in the correct order. */


// approach 1 using map

function Validparanthasis(s){
    let stack =[]
    let map = {
        ')' :'(',
        '}':'{',
        ']':'['
    }
    for(let char of s){
        if(map[char]){
            if(stack.length ==0||stack[stack.length - 1] !== map[char]){
                return false
            }
            stack.pop()
        }else{
            stack.push(char)
        }
    }
    return stack.length  ===0;
}
console.log(Validparanthasis("([{}])"));


// approach 2 with out using map 
function Validpp(s){
    let stack =[]
    for(let char of s){
        if(char ==='('||char == '{'||char == '['){
            stack.push(char)
        }else if(char==')'||char == '}'||char == ']'){
            let top = stack.pop()
            if(char ==')'&&top!=='('||char =='}'&& top!=='{'||char == ']'&& top!=='['){
                return false;
            }
        }
    }
    return stack.length ===0;
}
console.log(Validpp("([{}])"));
console.log(Validpp("[(])"));