/*
Given an array A of non-negative integers, return an array consisting of all the even elements of A, followed by all the odd elements of A.

You may return any answer array that satisfies this condition.

LeetCode: 905. Sort Array By Parity
*/

var sortArrayByParity = function(A) {
    let arr = [];
    let t = 0;
    for(let x of A){
        if(x % 2 === 0){
            arr[t++] = x;
        }
    }
    for(let x of A){
        if(x % 2 === 1){
            arr[t++] = x;
        }
    }
    return arr;
};
sortArrayByParity([1,2,0,6,5,3,4])