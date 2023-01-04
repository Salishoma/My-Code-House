/*
Implement a data structure supporting the following operations:

Inc(Key) - Inserts a new key with value 1. Or increments an existing key by 1. Key is guaranteed to be a non-empty string.
Dec(Key) - If Key's value is 1, remove it from the data structure. Otherwise decrements an existing key by 1. If the key does not exist, this function does nothing. Key is guaranteed to be a non-empty string.
GetMaxKey() - Returns one of the keys with maximal value. If no element exists, return an empty string "".
GetMinKey() - Returns one of the keys with minimal value. If no element exists, return an empty string "".
Challenge: Perform all these in O(1) time complexity.

LeetCode: 432. All O`one Data Structure
*/


/**
 * Initialize your data structure here.
 */
var AllOne = function() {
    this.pos = {}
    this.map = new Map();    
};

/**
 * Inserts a new key <Key> with value 1. Or increments an existing key by 1. 
 * @param {string} key
 * @return {void}
 */
AllOne.prototype.inc = function(key) {
    if(!this.pos[0]) this.pos[0] = ""
    if(!this.map.has(key)){
        this.map.set(key, 1);
        if(!this.pos[1]){
            this.pos[1] = new Set();
        }
        this.pos[1].add(key);
    }else{
        let ind = this.map.get(key);
        this.pos[ind].delete(key);
        if(!this.pos[ind].size) delete this.pos[ind];
        this.map.set(key, this.map.get(key) + 1);
        ind = this.map.get(key);
        if(!this.pos[ind]){
            this.pos[ind] = new Set();
        }
        this.pos[ind].add(key);
    }
    
};

/**
 * Decrements an existing key by 1. If Key's value is 1, remove it from the data structure. 
 * @param {string} key
 * @return {void}
 */
AllOne.prototype.dec = function(key) {
    if(this.map.has(key)){
        let ind = this.map.get(key);
        this.pos[ind].delete(key);
        if(!this.pos[ind].size) delete this.pos[ind];
        this.map.set(key, this.map.get(key) - 1);
        if(this.map.get(key) === 0) this.map.delete(key);
        else{
            ind = this.map.get(key);
            if(!this.pos[ind]){
                this.pos[ind] = new Set();
            }
            this.pos[ind].add(key);
        }
    }
};

/**
 * Returns one of the keys with maximal value.
 * @return {string}
 */
AllOne.prototype.getMaxKey = function() {
    const arr = Object.keys(this.pos);
    if(arr.length <= 1) return '';
    return this.pos[arr[arr.length - 1]].values().next().value;
};

/**
 * Returns one of the keys with Minimal value.
 * @return {string}
 */
AllOne.prototype.getMinKey = function() {
    const arr = Object.keys(this.pos);
    if(arr.length <= 1) return '';
    return this.pos[arr[1]].values().next().value;
};

const allOne = new AllOne()
allOne.inc('hello')
allOne.inc('hello')
allOne.getMaxKey()
allOne.getMinKey()
allOne.inc('leet')
allOne.getMaxKey()
allOne.getMinKey()

/** 
 * Your AllOne object will be instantiated and called as such:
 * var obj = new AllOne()
 * obj.inc(key)
 * obj.dec(key)
 * var param_3 = obj.getMaxKey()
 * var param_4 = obj.getMinKey()
 */