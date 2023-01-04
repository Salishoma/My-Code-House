/*
Given an array A of 0s and 1s, consider N_i: the i-th subarray from A[0] to A[i] interpreted as a binary number (from most-significant-bit to least-significant-bit.)

Return a list of booleans answer, where answer[i] is true if and only if N_i is divisible by 5.

LeetCode: 1018. Binary Prefix Divisible By 5
*/
var prefixesDivBy5 = function(A) {
    let res = [];
    let sum = 0;
    for (let i of A){
        sum = (2 * sum + i) % 5;
        if (sum == 0){
            res.push(true);
        }else{
            res.push(false);
        }
    }
    return res;
}
prefixesDivBy5([1,0,1,0,0,0,0,0,0,0,0,1,1,1,0,0,1,0,1,1,1,1,1,1,0,0,0,1,0,1,1,1,1,0,1,1,0,1,0,1,0,0,0,1,0,0,0,0,0,1,0,0,1,1,0,0])