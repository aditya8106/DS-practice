/* Word Search II
Hard
Topics
Company Tags
Hints
Given a 2-D grid of characters board and a list of strings words, return all words that are present in the grid.

For a word to be present it must be possible to form the word with a path in the board with horizontally or vertically neighboring cells. The same cell may not be used more than once in a word.

Example 1:



Input:
board = [
  ["a","b","c","d"],
  ["s","a","a","t"],
  ["a","c","k","e"],
  ["a","c","d","n"]
],
words = ["bat","cat","back","backend","stack"]

Output: ["cat","back","backend"]
Example 2:



Input:
board = [
  ["x","o"],
  ["x","o"]
],
words = ["xoxo"]

Output: []
Constraints:

1 <= board.length, board[i].length <= 12
board[i] consists only of lowercase English letter.
1 <= words.length <= 30,000
1 <= words[i].length <= 10
words[i] consists only of lowercase English letters.
All strings within words are distinct.

*/


//using a trie to store the words and then using backtracking to find the words in the board

// ============================================
// Word Search II
// Trie + DFS + Backtracking
// Using Array[26] + isEnd
// ============================================


// --------------------------------------------
// Trie Node
// --------------------------------------------

class TrieNode {
    constructor() {

        // Array of 26 positions
        // 0 = a
        // 1 = b
        // 2 = c
        // ...
        // 25 = z
        this.children = new Array(26).fill(null);

        // true when this node represents
        // the end of a complete word
        this.isEnd = false;

        // Store the actual word
        // so we can directly add it to result
        this.word = null;
    }
}


// --------------------------------------------
// Trie
// --------------------------------------------

class Trie {

    constructor() {
        this.root = new TrieNode();
    }


    // Convert character to number
    // a -> 0
    // b -> 1
    // c -> 2
    // ...
    // z -> 25
    getIndex(char) {
        return char.charCodeAt(0) - 97;
    }


    // Insert one word
    insert(word) {

        let node = this.root;

        for (const char of word) {

            const index = this.getIndex(char);

            // If child doesn't exist
            if (node.children[index] === null) {

                node.children[index] = new TrieNode();
            }

            // Move to next node
            node = node.children[index];
        }

        // We reached the end of the word
        node.isEnd = true;

        // Store the word
        node.word = word;
    }
}


// --------------------------------------------
// Main Function
// --------------------------------------------

function findWords(board, words) {

    // Create Trie
    const trie = new Trie();


    // Insert all words
    for (const word of words) {
        trie.insert(word);
    }


    // Store answers
    const result = [];


    const rows = board.length;
    const cols = board[0].length;


    // ----------------------------------------
    // DFS + Backtracking
    // ----------------------------------------

    function dfs(row, col, node) {

        // Boundary check
        if (
            row < 0 ||
            row >= rows ||
            col < 0 ||
            col >= cols
        ) {
            return;
        }


        // Get current character
        const char = board[row][col];


        // "#" means already visited
        if (char === "#") {
            return;
        }


        // Convert character to Trie index
        const index = char.charCodeAt(0) - 97;


        // Check whether this character
        // exists in the Trie
        if (node.children[index] === null) {
            return;
        }


        // Move to next Trie node
        node = node.children[index];


        // ------------------------------------
        // Did we find a complete word?
        // ------------------------------------

        if (node.isEnd === true) {

            result.push(node.word);

            // Prevent duplicate result
            node.isEnd = false;
        }


        // ------------------------------------
        // BACKTRACKING
        // ------------------------------------

        // Save original character
        // "char" already contains it

        // Mark current cell as visited
        board[row][col] = "#";


        // ------------------------------------
        // Explore 4 directions
        // ------------------------------------

        // Down
        dfs(row + 1, col, node);

        // Up
        dfs(row - 1, col, node);

        // Right
        dfs(row, col + 1, node);

        // Left
        dfs(row, col - 1, node);


        // ------------------------------------
        // BACKTRACK
        // ------------------------------------

        // Restore original character
        board[row][col] = char;
    }


    // ----------------------------------------
    // Start DFS from every cell
    // ----------------------------------------

    for (let row = 0; row < rows; row++) {

        for (let col = 0; col < cols; col++) {

            dfs(row, col, trie.root);
        }
    }


    return result;
}


// ============================================
// TEST
// ============================================

const board = [
    ["a", "b", "c", "d"],
    ["s", "a", "a", "t"],
    ["a", "c", "k", "e"],
    ["a", "c", "d", "n"]
];

const words = [
    "bat",
    "cat",
    "back",
    "backend",
    "stack"
];


const answer = findWords(board, words);

console.log(answer);