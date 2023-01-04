/*
Given a non-empty array of integers, return the k most frequent elements.

LeetCode: 347. Top K Frequent Elements
*/

var topKFrequent = function(nums, k) {
    let map = new Map();
    
    nums.forEach(n => {
        if (!map.get(n)) map.set(n, 1);
        else map.set(n, map.get(n)+1);
    });
    
    return [...map.keys()].sort((a, b) => map.get(b)-map.get(a)).slice(0, k);
};
topKFrequent([1,1,1,2,2,3,3,6,7,5,6,8], 4)