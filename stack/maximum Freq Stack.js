/* Maximum Frequency Stack
Hard
Topics
Company Tags
Design a stack-like data structure to push elements to the stack and pop the most frequent element from the stack.

Implement the FreqStack class:

FreqStack() constructs an empty frequency stack.
void push(int val) pushes an integer val onto the top of the stack.
int pop() removes and returns the most frequent element in the stack.
If there is a tie for the most frequent element, the element closest to the stack's top is removed and returned.
Example 1:

Input: ["FreqStack", "push", "push", "push", "push", "push", "push", "pop", "pop", "pop", "pop"]
[[], [5], [7], [5], [7], [4], [5], [], [], [], []]

Output: [null, null, null, null, null, null, null, 5, 7, 5, 4]
Explanation:
FreqStack freqStack = new FreqStack();
freqStack.push(5); // The stack is [5]
freqStack.push(7); // The stack is [5,7]
freqStack.push(5); // The stack is [5,7,5]
freqStack.push(7); // The stack is [5,7,5,7]
freqStack.push(4); // The stack is [5,7,5,7,4]
freqStack.push(5); // The stack is [5,7,5,7,4,5]
freqStack.pop(); // return 5, as 5 is the most frequent. The stack becomes [5,7,5,7,4].
freqStack.pop(); // return 7, as 5 and 7 is the most frequent, but 7 is closest to the top. The stack becomes [5,7,5,4].
freqStack.pop(); // return 5, as 5 is the most frequent. The stack becomes [5,7,4].
freqStack.pop(); // return 4, as 4, 5 and 7 is the most frequent, but 4 is closest to the top. The stack becomes [5,7]. */



class FreqStack {
    constructor() {
        this.freq = new Map();      // value -> frequency
        this.group = new Map();     // frequency -> stack of values
        this.maxFreq = 0;           // current highest frequency
    }

    push(val) {

        // increase frequency of val
        let f = (this.freq.get(val) || 0) + 1;
        this.freq.set(val, f);

        // update maximum frequency seen
        if (f > this.maxFreq) {
            this.maxFreq = f;
        }

        // create stack for this frequency if missing
        if (!this.group.has(f)) {
            this.group.set(f, []);
        }

        // put value into its frequency stack
        this.group.get(f).push(val);
    }

    pop() {

        // get stack of highest frequency
        let stack = this.group.get(this.maxFreq);

        // most recent element with max frequency
        let val = stack.pop();

        // decrease its frequency
        this.freq.set(val, this.freq.get(val) - 1);

        // if this frequency stack becomes empty
        if (stack.length === 0) {
            this.maxFreq--;
        }

        return val;
    }
}
let s1 = new FreqStack();
console.log(s1.push(5))
console.log(s1.push(7))
console.log(s1.push(4))
console.log(s1.push(7))
console.log(s1.push(5))
console.log(s1.push(5))


console.log(s1.pop())