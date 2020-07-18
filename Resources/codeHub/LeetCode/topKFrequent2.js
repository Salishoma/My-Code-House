/*
Given a non-empty array of integers, return the k most frequent elements.

LeetCode: 347. Top K Frequent Elements
*/

var topKFrequent = function(nums, k) {
    const map = new Map();
    const arr = [];
    let n = nums.length;
    for(let num of nums){
        if(!map.has(num)) map.set(num, 1);
        else map.set(num, map.get(num) + 1)
    }
    for(let [key, value] of map){
        if(!arr[value]) arr[value] = [];
        arr[value].push(key)
    }
    const res = []
    for(let i = arr.length - 1; i >= 0; i--){
        if(arr[i]){
            res.push(...arr[i]);
            if(res.length === k) return res;
        }
    }
    return res.slice(k);
};
topKFrequent([1,1,1,2,2,3], 2)