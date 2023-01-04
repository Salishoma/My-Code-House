/*
Given an array of integers arr, write a function that returns true if and only if the number of occurrences of each value in the array is unique.

LeetCode: 1207. Unique Number of Occurrences
*/

var uniqueOccurrences = function(arr) {
    let seen = {};
    for(let c of arr){
        seen[c] = (seen[c] || 0) + 1;
    }
    let res = Object.values(seen);
    return res.length === new Set(res).size
};
uniqueOccurrences([1,2,2,1,1,3])