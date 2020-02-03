/*
Design a data structure that supports all following operations in average O(1) time.

insert(val): Inserts an item val to the set if not already present.
remove(val): Removes an item val from the set if present.
getRandom: Returns a random element from current set of elements. Each element must have the same probability of being returned.

LeetCode: 380. Insert Delete GetRandom O(1)
*/

var RandomizedSet = function() {
    this.map = {};
    this.arr = [];
};

RandomizedSet.prototype.insert = function(val) {
    if(val in this.map) return false;
    this.map[val] = this.arr.length;
    this.arr.push(val);
    return true;
};

RandomizedSet.prototype.remove = function(val) {
    if(!(val in this.map)) return false;
    var end = this.arr[this.arr.length - 1];
    var original = this.map[val];
    this.map[end] = original;
    this.arr[original] = end;
    delete this.map[val];
    this.arr.pop();
    return true;
};

RandomizedSet.prototype.getRandom = function() {
    return this.arr[Math.floor(Math.random() * this.arr.length)];
};

const randomSet = new RandomizedSet();
randomSet.insert(1);
randomSet.remove(2);
randomSet.insert(2);
randomSet.getRandom();
randomSet.remove(1);
randomSet.insert(2);
randomSet.getRandom();