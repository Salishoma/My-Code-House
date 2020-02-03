/*
Given an array arr.  You can choose a set of integers and remove all the occurrences of these integers in the array.

Return the minimum size of the set so that at least half of the integers of the array are removed.

LeetCode: 1342. Reduce Array Size to The Half
*/

var minSetSize = function(arr) {
    const map = new Map();  
	for(let c of arr){
        if(!map.has(c)) map.set(c, 1);
        else map.set(c, map.get(c) + 1);
    }
    let val = Array.from(map.values()).sort((a, b) => b - a);
    let count = 0;
    let sum = 0
    for(let v of val){
        sum += v;
        count++;
        if(sum >= arr.length / 2) return count;
    }    
};
minSetSize([3,3,3,3,5,5,5,2,2,7])