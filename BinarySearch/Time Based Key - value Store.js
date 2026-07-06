/* Time Based Key-Value Store
Medium
Topics
Company Tags
Hints
Design a time-based key-value data structure that can store multiple values for the same key at different time stamps and retrieve the key's value at a certain timestamp.

Implement the TimeMap class:

TimeMap() Initializes the object of the data structure.
void set(String key, String value, int timestamp) Stores the key key with the value value at the given time timestamp.
String get(String key, int timestamp) Returns a value such that set was called previously, with timestamp_prev <= timestamp. If there are multiple such values, it returns the value associated with the largest timestamp_prev. If there are no values, it returns "".
Example 1:

Input:
["TimeMap", "set", ["alice", "happy", 1], "get", ["alice", 1], "get", ["alice", 2], "set", ["alice", "sad", 3], "get", ["alice", 3]]

Output:
[null, null, "happy", "happy", null, "sad"]

Explanation:
TimeMap timeMap = new TimeMap();
timeMap.set("alice", "happy", 1);  // store the key "alice" and value "happy" along with timestamp = 1.
timeMap.get("alice", 1);           // return "happy"
timeMap.get("alice", 2);           // return "happy", there is no value stored for timestamp 2, thus we return the value at timestamp 1.
timeMap.set("alice", "sad", 3);    // store the key "alice" and value "sad" along with timestamp = 3.
timeMap.get("alice", 3);           // return "sad" */



// Optimal using Binary search
class TimeMap {
    constructor() {
        this.keyStore = new Map();
    }
    set(key, value, timestamp) {
        if(!this.keyStore.has(key)){
            this.keyStore.set(key,[])
        }
        this.keyStore.get(key).push([timestamp , value])
    }
    get(key, timestamp) {

        if(!this.keyStore.get(key)){
            return ''
        }
        let arr = this.keyStore.get(key)
        let left = 0
        let right = arr.length - 1
        let ans = ''
        while(left <= right){
            let mid = Math.floor((left+right)/2)
            if(arr[mid][0] == timestamp){
                ans = arr[mid][1]
            }
            if(arr[mid][0] <= timestamp){
                ans = arr[mid][1]
                left = mid +1
            }else{
                right = mid -1
            }
        }
        return ans
        
    }
}



//bruteForce solution

class TimeMap1 {
    constructor() {
        this.keyStore = new Map();
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key, value, timestamp) {
        if (!this.keyStore.has(key)) {
            this.keyStore.set(key, []);
        }

        this.keyStore.get(key).push([timestamp, value]);
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key, timestamp) {
        if (!this.keyStore.has(key)) {
            return "";
        }

        const arr = this.keyStore.get(key);
        let ans = "";

        for (let i = 0; i < arr.length; i++) {
            if (arr[i][0] <= timestamp) {
                ans = arr[i][1];
            } else {
                break;
            }
        }

        return ans;
    }
}