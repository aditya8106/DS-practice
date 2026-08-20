/*  Serialize and Deserialize Binary Tree
Hard
Topics
Company Tags
Hints
Implement an algorithm to serialize and deserialize a binary tree.

Serialization is the process of converting an in-memory structure into a sequence of bits so that it can be stored or sent across a network to be reconstructed later in another computer environment.

You just need to ensure that a binary tree can be serialized to a string and this string can be deserialized to the original tree structure. There is no additional restriction on how your serialization/deserialization algorithm should work.

Note: The input/output format in the examples is the same as how NeetCode serializes a binary tree. You do not necessarily need to follow this format.

Example 1:



Input: root = [1,2,3,null,null,4,5]

Output: [1,2,3,null,null,4,5]
Example 2:

Input: root = []

Output: []  */   


//Optimal solution 

var serialize = function(root) {
    let result = [];

    function dfs(node) {
        // If node is null, store "N"
        if (node === null) {
            result.push("N");
            return;
        }

        // Store current node
        result.push(node.val);

        // Preorder: Root -> Left -> Right
        dfs(node.left);
        dfs(node.right);
    }

    dfs(root);

    // Convert array to string
    return result.join(",");
};


var deserialize = function(data) {
    // Convert string back to array
    let values = data.split(",");

    let i = 0;

    function dfs() {
        // If current value is N, there is no node
        if (values[i] === "N") {
            i++;
            return null;
        }

        // Create node
        let node = new TreeNode(Number(values[i]));
        i++;

        // Build left subtree
        node.left = dfs();

        // Build right subtree
        node.right = dfs();

        return node;
    }

    return dfs();
};