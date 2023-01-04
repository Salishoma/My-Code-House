/*
Given a positive integer N, find and return the longest distance between two consecutive 1's in the binary representation of N.

If there aren't two consecutive 1's, return 0.

LeetCode: 868. Binary Gap
*/

var binaryGap = function(N) {
    let S = N.toString(2);
    n = S.length;
    let count = 0;
    let count2 = 0;
    let max = 0;
    for(let i = 0; i < n; i++){
        if(S[i] === "0") count++;
        else{
            count2++;
            max = Math.max(max, count + 1);
            count = 0;
        }
    }
    return count2 >= 2? max : 0;
};
binaryGap(22)