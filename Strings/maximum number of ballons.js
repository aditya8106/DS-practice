/* Maximum Number of Balloons
Easy
Topics
Company Tags
You are given a string text, you want to use the characters of text to form as many instances of the word "balloon" as possible.

You can use each character in text at most once. Return the maximum number of instances that can be formed.

Example 1:

Input: text = "nlaebolko"

Output: 1
Example 2:

Input: text = "loonbalxballpoon"

Output: 2
Example 3:

Input: text = "neetcode"

Output: 0
Constraints:

1 <= text.length <= 10,000
text consists of lower case English letters only. */


// Approach 1: Using a Hash Map to Store Frequencies
function maxNumberOfBalloons2(text) {
    const count = new Map([
        ['b', 0],
        ['a', 0],
        ['l', 0],
        ['o', 0],
        ['n', 0]
    ]);

    // Count only characters needed for "balloon"
    for (let ch of text) {
        if (count.has(ch)) {
            count.set(ch, count.get(ch) + 1);
        }
    }

    // Calculate how many "balloon"s each character can make
    const b = count.get('b');
    const a = count.get('a');
    const l = Math.floor(count.get('l') / 2);
    const o = Math.floor(count.get('o') / 2);
    const n = count.get('n');

    // The limiting character determines the answer
    return Math.min(b, a, l, o, n);
}


// Test
console.log(maxNumberOfBalloons("nlaebolko"));      // 1
console.log(maxNumberOfBalloons("loonbalxballpoon")); // 2
console.log(maxNumberOfBalloons("neetcode"));       // 0


// Approach 2: Using an Array to Store Frequencies
function maxNumberOfBalloons(text) {
    const count = new Array(26).fill(0);
    for (let ch of text) {
        count[ch.charCodeAt(0) - 'a'.charCodeAt(0)]++;
    }
    const b = count['b'.charCodeAt(0) - 'a'.charCodeAt(0)];
    const a = count['a'.charCodeAt(0) - 'a'.charCodeAt(0)];
    const l = Math.floor(count['l'.charCodeAt(0) - 'a'.charCodeAt(0)] / 2);
    const o = Math.floor(count['o'.charCodeAt(0) - 'a'.charCodeAt(0)] / 2);
    const n = count['n'.charCodeAt(0) - 'a'.charCodeAt(0)];
    return Math.min(b, a, l, o, n);
}

// Test
console.log(maxNumberOfBalloons2("nlaebolko"));
console.log(maxNumberOfBalloons2("loonbalxballpoon"));
console.log(maxNumberOfBalloons2("neetcode"));