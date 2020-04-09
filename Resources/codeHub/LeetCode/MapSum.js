/*
Implement a MapSum class with insert, and sum methods.

For the method insert, you'll be given a pair of (string, integer). The string represents the key and the integer represents the value. If the key already existed, then the original key-value pair will be overridden to the new one.

For the method sum, you'll be given a string representing the prefix, and you need to return the sum of all the pairs' value whose key starts with the prefix.

LeetCode: 677. Map Sum Pairs
*/

/**
 * Initialize your data structure here.
 */
var MapSum = function() {
   this.map = new Map(); 
};

/** 
 * @param {string} key 
 * @param {number} val
 * @return {void}
 */
MapSum.prototype.insert = function(key, val) {
    return this.map.set(key, val);
};

/** 
 * @param {string} prefix
 * @return {number}
 */
MapSum.prototype.sum = function(prefix) {
    let sum = 0;
    for(let [key, value] of this.map){
        if(key.startsWith(prefix)) sum += value;
    }
    return sum;
};

/** 
 * Your MapSum object will be instantiated and called as such:
 * var obj = new MapSum()
 * obj.insert(key,val)
 * var param_2 = obj.sum(prefix)
 */

const map = new MapSum()
map.insert("apple", 3)
map.sum("ap") 
map.insert("app", 2)
map.sum("ap")