/*
Given an integer n, return any array containing n unique integers such that they add up to 0.

LeetCode: 1304. Find N Unique Integers Sum up to Zero
*/

var sumZero = function(n) {
    if(n === 1) return [0]
    let m = n / 2;
    let arr = [];
    if(m % 1 !== 0){
        m = Math.floor(m);
        for(let i = 0; i < n; i++){
            arr.push(m);
            m--;
        }
    }else{
        for(let i = 0; i <= n; i++){
            if(m !== 0) arr.push(m);
            m--;
        }
    }
    return arr;
};
sumZero(5)