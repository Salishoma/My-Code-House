/*
Given two positive integers x and y, an integer is powerful if it is equal to x^i + y^j for some integers i >= 0 and j >= 0.

Return a list of all powerful integers that have value less than or equal to bound.

You may return the answer in any order.  In your answer, each value should occur at most once.

LeetCode: 970. Powerful Integers
*/

var powerfulIntegers = function(x, y, bound) {
    let set = new Set();;
    for(let i = 0;  i < Math.sqrt(bound) && Math.pow(x, i) <= bound; i++){
        for(let j = 0;  j < Math.sqrt(bound) && Math.pow(y, j) <= bound; j++){
            let sum = Math.pow(x, i) + Math.pow(y, j);
            if(sum <= bound) set.add(sum);
        }
    }
    return Array.from(set)
};
powerfulIntegers(1,2,100)