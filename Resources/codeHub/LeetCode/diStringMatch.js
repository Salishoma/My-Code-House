/*
Given a string S that only contains "I" (increase) or "D" (decrease), let N = S.length.

Return any permutation A of [0, 1, ..., N] such that for all i = 0, ..., N-1:

If S[i] == "I", then A[i] < A[i+1]
If S[i] == "D", then A[i] > A[i+1]

LeetCode: 942. DI String Match
*/

var diStringMatch = function(S) {
    let N = S.length;
    let i = 0;
    let arr = [];
    for(let s of S){
        if(s === "I"){
            arr.push(i++);
        }else{
            arr.push(N--);
        }
    }
    arr.push(i);
    return arr
};
diStringMatch("IDID")