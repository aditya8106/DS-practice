/* Implement Trie (Prefix Tree)
Medium
Topics
Company Tags
Hints
A prefix tree (also known as a trie) is a tree data structure used to efficiently store and retrieve keys in a set of strings. Some applications of this data structure include auto-complete and spell checker systems.

Implement the PrefixTree class:

PrefixTree() Initializes the prefix tree object.
void insert(String word) Inserts the string word into the prefix tree.
boolean search(String word) Returns true if the string word is in the prefix tree (i.e., was inserted before), and false otherwise.
boolean startsWith(String prefix) Returns true if there is a previously inserted string word that has the prefix prefix, and false otherwise.
Example 1:

Input:
["Trie", "insert", "dog", "search", "dog", "search", "do", "startsWith", "do", "insert", "do", "search", "do"]

Output:
[null, null, true, false, true, null, true]

Explanation:
PrefixTree prefixTree = new PrefixTree();
prefixTree.insert("dog");
prefixTree.search("dog");    // return true
prefixTree.search("do");     // return false
prefixTree.startsWith("do"); // return true
prefixTree.insert("do");
prefixTree.search("do");     // return true
Constraints:

1 <= word.length, prefix.length <= 1000
word and prefix are made up of lowercase English letters. */

// optimal solution using Array of size 26 for each node

class TreeNode {
    constructor() {
        // 26 positions for a-z
        this.children = new Array(26).fill(null);

        // true if a complete word ends at this node
        this.isEnd = false;
    }
}

class PrefixTree {
    constructor() {
        // Empty starting node
        this.root = new TreeNode();
    }

    /**
     * Insert a word into the Trie
     * @param {string} word
     * @return {void}
     */
    insert(word) {
        let curr = this.root;

        for (let ch of word) {

            // Convert character to index
            // a -> 0, b -> 1, ..., z -> 25
            let index = ch.charCodeAt(0) - 97;

            // If node doesn't exist, create it
            if (curr.children[index] === null) {
                curr.children[index] = new TreeNode();
            }

            // Move to the next node
            curr = curr.children[index];
        }

        // Mark the end of the complete word
        curr.isEnd = true;
    }

    /**
     * Search for an exact word
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        let curr = this.root;

        for (let ch of word) {

            // Convert character to index
            let index = ch.charCodeAt(0) - 97;

            // Character path doesn't exist
            if (curr.children[index] === null) {
                return false;
            }

            // Move to next node
            curr = curr.children[index];
        }

        // Path exists, but we also need the word to end here
        return curr.isEnd;
    }

    /**
     * Check if any word starts with the given prefix
     * @param {string} prefix
     * @return {boolean}
     */
    startsWith(prefix) {
        let curr = this.root;

        for (let ch of prefix) {

            // Convert character to index
            let index = ch.charCodeAt(0) - 97;

            // Prefix path doesn't exist
            if (curr.children[index] === null) {
                return false;
            }

            // Move to next node
            curr = curr.children[index];
        }

        // Entire prefix path exists
        return true;
    }
}   

//  using map 
class TreeNode {
    constructor() {
        // Stores character -> next TrieNode
        this.children = new Map();

        // True if a complete word ends here
        this.isEnd = false;
    }
}

class PrefixTree {
    constructor() {
        // Empty starting node
        this.root = new TreeNode();
    }

    /**
     * Insert a word into the Trie
     * @param {string} word
     * @return {void}
     */
    insert(word) {
        let curr = this.root;

        for (let ch of word) {

            // If character doesn't exist, create a node
            if (!curr.children.has(ch)) {
                curr.children.set(ch, new TreeNode());
            }

            // Move to the node of this character
            curr = curr.children.get(ch);
        }

        // Mark the end of the word
        curr.isEnd = true;
    }

    /**
     * Search for an exact word
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        let curr = this.root;

        for (let ch of word) {

            // Character doesn't exist
            if (!curr.children.has(ch)) {
                return false;
            }

            // Move to the next node
            curr = curr.children.get(ch);
        }

        // Path exists AND a word ends here
        return curr.isEnd;
    }

    /**
     * Check if any word starts with the prefix
     * @param {string} prefix
     * @return {boolean}
     */
    startsWith(prefix) {
        let curr = this.root;

        for (let ch of prefix) {

            // Character doesn't exist
            if (!curr.children.has(ch)) {
                return false;
            }

            // Move to the next node
            curr = curr.children.get(ch);
        }

        // Entire prefix exists
        return true;
    }
}