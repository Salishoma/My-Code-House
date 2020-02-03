/*
Given an array A of non-negative integers, return an array consisting of all the even elements of A, followed by all the odd elements of A.

You may return any answer array that satisfies this condition.

LeetCode: 905. Sort Array By Parity
*/

var sortArrayByParity = function(A) {
   let arr = [];
    let arrOdd = [];
    for(let x of A){
        x % 2 === 0? arr.push(x) : arrOdd.push(x);
    }
    return arr.concat(arrOdd);
};
sortArrayByParity([1, 0])