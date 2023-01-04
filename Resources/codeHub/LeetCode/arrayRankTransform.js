/*
Given an array of integers arr, replace each element with its rank.

The rank represents how large the element is. The rank has the following rules:

Rank is an integer starting from 1.
The larger the element, the larger the rank. If two elements are equal, their rank must be the same.
Rank should be as small as possible.
 
 LeetCode: 1331. Rank Transform of an Array
*/

var arrayRankTransform = function(arr) {
    if(arr.length === 0) return arr;
    let sortArr = [...arr];
    sortArr = sortArr.sort((a, b) => a - b);
    const map = new Map();
    const res = [];
    let mem = sortArr[0];
    let count = 1;
    map.set(sortArr[0], count);
    for(let i = 1; i < arr.length; i++){
        if(mem < sortArr[i]){
            count++;
            mem = sortArr[i]
        }
        map.set(sortArr[i], count);
    }
    for(let c of arr){
        res.push(map.get(c))
    }
    return res;
};
arrayRankTransform([40,10,20,30])