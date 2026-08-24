/* Design Add and Search Word Data Structure
Medium
Topics
Company Tags
Hints
Design a data structure that supports adding new words and searching for existing words.

Implement the WordDictionary class:

void addWord(word) Adds word to the data structure.
bool search(word) Returns true if there is any string in the data structure that matches word or false otherwise. word may contain dots '.' where dots can be matched with any letter.
Example 1:

Input:
["WordDictionary","addWord","addWord","addWord","search","search","search","search"]
[[],["day"],["bay"],["may"],["say"],["day"],[".ay"],["b.."]]

Output:
[null, null, null, null, false, true, true, true]

Explanation:
WordDictionary wordDictionary = new WordDictionary();
wordDictionary.addWord("day");
wordDictionary.addWord("bay");
wordDictionary.addWord("may");
wordDictionary.search("say"); // return false
wordDictionary.search("day"); // return true
wordDictionary.search(".ay"); // return true
wordDictionary.search("b.."); // return true
Constraints:

1 <= word.length <= 25
word in addWord consists of lowercase English letters.
word in search consist of '.' or lowercase English letters.
There will be at most 2 dots in word for search queries.
At most 10,000 calls will be made to addWord and search. */

class TreeNode {
    constructor() {
        // 26 possible lowercase English letters
        this.children = new Array(26).fill(null);

        // Marks the end of a complete word
        this.isEnd = false;
    }
}

class WordDictionary {
    constructor() {
        this.root = new TreeNode();
    }

    // Add a word into the Trie
    addWord(word) {
        let curr = this.root;

        for (let ch of word) {
            // Convert character to index
            // a -> 0, b -> 1, ..., z -> 25
            let index = ch.charCodeAt(0) - 97;

            // Create node if it doesn't exist
            if (curr.children[index] == null) {
                curr.children[index] = new TreeNode();
            }

            // Move to the next node
            curr = curr.children[index];
        }

        // Mark the last node as the end of a word
        curr.isEnd = true;
    }

    // Search for a word
    // '.' can represent any character
    search(word) {

        function dfs(node, i) {

            // We have processed the complete word
            if (i == word.length) {
                return node.isEnd;
            }

            let currChar = word[i];

            // Case 1: Current character is '.'
            if (currChar == '.') {

                // Try every possible character
                for (let j = 0; j < 26; j++) {

                    // If this child exists
                    if (node.children[j] !== null) {

                        // Continue searching from the next character
                        if (dfs(node.children[j], i + 1)) {
                            return true;
                        }
                    }
                }

                // No possible path matched
                return false;
            }

            // Case 2: Normal character
            else {

                // Convert character to index
                let index = currChar.charCodeAt(0) - 97;

                // Required character doesn't exist
                if (node.children[index] == null) {
                    return false;
                }

                // Follow that child
                return dfs(node.children[index], i + 1);
            }
        }

        // Start DFS from the root
        return dfs(this.root, 0);
    }
}