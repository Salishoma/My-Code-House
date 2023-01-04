/*
Given two integer arrays of equal length target and arr.

In one step, you can select any non-empty sub-array of arr and reverse it. You are allowed to make any number of steps.

Return True if you can make arr equal to target, or False otherwise.

LeetCode: 1460. Make Two Arrays Equal by Reversing Sub-arrays
*/

var canBeEqual = function(target, arr) {
    const map = new Map();
    for(let i = 0; i < target.length; i++){
        if(!map.has(target[i])) map.set(target[i], 1);
        else map.set(target[i], map.get(target[i]) + 1);
    }
    for(let val of arr){
        if(!map.has(val)) return false;
        map.set(val, map.get(val) - 1);
        if(map.get(val) === 0) map.delete(val)
    }
    return true;
};
canBeEqual([1,2,3,4],[2,4,1,3])