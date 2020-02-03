/*
Given two positive integers x and y, an integer is powerful if it is equal to x^i + y^j for some integers i >= 0 and j >= 0.

Return a list of all powerful integers that have value less than or equal to bound.

You may return the answer in any order.  In your answer, each value should occur at most once.

LeetCode: 970. Powerful Integers
*/

var powerfulIntegers = function(x, y, bound) {
    if(bound === 0 || bound === 1) return [];
    let i = 0;
    let j = 0;
    let limit = bound;
    let set = new Set();;
    if(x === 1){
        for(let i = 0; i <= bound; i++){
            if(y ** i + 1 <= bound) set.add(y ** i + 1);
            else break;
        }
        return Array.from(set);
    }else if(y === 1){
        for(let i = 0; i < bound; i++){
            if(x ** i + 1 <= bound) set.add(x ** i + 1);
            else break;
        }
        return Array.from(set);
    }
    while(limit > 1){
        limit = Math.floor(limit / x);
        i++;
    }
    limit = bound;
    while(limit > 1){
        limit = Math.floor(limit / y);
        j++;
    }
    let k = 0;
    let l = 0
    while(k <= i){
        let sum = x ** k + y ** l;
        if(sum <= bound){
            set.add(sum);
            l++
        }else{
            l = 0;
            k++
        }
    }
    k = 0, l = 0;
    while(l <= j){
        let sum = x ** k + y ** l;
        if(sum <= bound){
            set.add(sum);
            k++
        }else{
            k = 0;
            l++
        }
    }
    arr = Array.from(set)
    return arr
};
powerfulIntegers(2,1,10)