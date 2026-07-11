/*  LRU Cache
Medium
Topics
Company Tags
Hints
Implement the Least Recently Used (LRU) cache class LRUCache. The class should support the following operations

LRUCache(int capacity) Initialize the LRU cache of size capacity.
int get(int key) Return the value corresponding to the key if the key exists, otherwise return -1.
void put(int key, int value) Update the value of the key if the key exists. Otherwise, add the key-value pair to the cache. If the introduction of the new pair causes the cache to exceed its capacity, remove the least recently used key.
A key is considered used if a get or a put operation is called on it.

Ensure that get and put each run in 
O
(
1
)
O(1) average time complexity.

Example 1:

Input:
["LRUCache", [2], "put", [1, 10],  "get", [1], "put", [2, 20], "put", [3, 30], "get", [2], "get", [1]]

Output:
[null, null, 10, null, null, 20, -1]

Explanation:
LRUCache lRUCache = new LRUCache(2);
lRUCache.put(1, 10);  // cache: {1=10}
lRUCache.get(1);      // return 10
lRUCache.put(2, 20);  // cache: {1=10, 2=20}
lRUCache.put(3, 30);  // cache: {2=20, 3=30}, key=1 was evicted
lRUCache.get(2);      // returns 20 
lRUCache.get(1);      // return -1 (not found)
Constraints:

1 <= capacity <= 100
0 <= key <= 1000
0 <= value <= 1000  */ 


// Node class for Doubly Linked List
class Node {
    constructor(key, value) {
        this.key = key;
        this.value = value;

        this.prev = null;
        this.next = null;
    }
}

class LRUCache {

    constructor(capacity) {
        // Maximum capacity of cache
        this.capacity = capacity;

        // Stores: key -> node
        this.map = new Map();

        // Dummy Head (MRU side)
        this.head = new Node(0, 0);

        // Dummy Tail (LRU side)
        this.tail = new Node(0, 0);

        // Initially:
        // Head <-> Tail
        this.head.next = this.tail;
        this.tail.prev = this.head;
    }

    // -------------------------------------------------
    // Add node immediately after Head
    // New node becomes Most Recently Used (MRU)
    // -------------------------------------------------
    add(node) {

        // Connect new node with first actual node
        node.next = this.head.next;

        // Connect new node with head
        node.prev = this.head;

        // First node points back to new node
        this.head.next.prev = node;

        // Head points to new node
        this.head.next = node;
    }

    // -------------------------------------------------
    // Remove any node from the linked list
    // O(1)
    // -------------------------------------------------
    remove(node) {

        // Previous node skips current node
        node.prev.next = node.next;

        // Next node skips current node
        node.next.prev = node.prev;
    }

    // -------------------------------------------------
    // Return value if key exists
    // Move node to front because it was recently used
    // -------------------------------------------------
    get(key) {

        // Key doesn't exist
        if (!this.map.has(key)) {
            return -1;
        }

        // Get node from HashMap
        let node = this.map.get(key);

        // Move node to front (MRU)
        this.remove(node);
        this.add(node);

        return node.value;
    }

    // -------------------------------------------------
    // Insert or Update
    // -------------------------------------------------
    put(key, value) {

        // ===============================
        // Case 1 : Key already exists
        // ===============================
        if (this.map.has(key)) {

            let node = this.map.get(key);

            // Update value
            node.value = value;

            // Move updated node to MRU
            this.remove(node);
            this.add(node);

            return;
        }

        // ===============================
        // Case 2 : Cache is Full
        // Remove Least Recently Used
        // ===============================
        if (this.map.size === this.capacity) {

            // LRU node is before Tail
            let lru = this.tail.prev;

            // Remove from Linked List
            this.remove(lru);

            // Remove from HashMap
            this.map.delete(lru.key);
        }

        // ===============================
        // Case 3 : Insert New Node
        // ===============================

        let newNode = new Node(key, value);

        // Insert at front (MRU)
        this.add(newNode);

        // Store in HashMap
        this.map.set(key, newNode);
    }
}