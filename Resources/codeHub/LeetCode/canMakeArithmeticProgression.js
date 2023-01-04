/*
Given an array of numbers arr. A sequence of numbers is called an arithmetic progression if the difference between any two consecutive elements is the same.

Return true if the array can be rearranged to form an arithmetic progression, otherwise, return false.

LeetCode: 1502. Can Make Arithmetic Progression From Sequence
*/

var canMakeArithmeticProgression = function(arr) {
    let min = Infinity;
    let nextMin = Infinity;
    let max = arr[0]
    const set = new Set();
    for(let num of arr){
        if(min > num){
            nextMin = min;
            min = num;
        }else if(nextMin >num){
            nextMin = num;
        }
        set.add(num);
    }
    let diff = nextMin - min;
    if(!diff) return new Set(arr).size === 1;
    max = min + (arr.length - 1) * diff;
    for(let i = min; i <= max; i += diff){
        if(!set.has(i)) return false;
    }
    return true;
};
canMakeArithmeticProgression([1,2,4])