/*
Given two integer arrays A and B, return the maximum length of an subarray that appears in both arrays.

LeetCode: 718. Maximum Length of Repeated Subarray
*/

var findLength = function(A, B) {
    let T = Array.from({length:  A.length}, () => []);
    for(let i = 0; i < A.length; i++){
        for(let j = 0; j < B.length; j++){
            if((A[i] === B[j] && i === 0) ||((A[i] === B[j] && j === 0))){
                T[i][j] = 1;
            }
            else if(A[i] === B[j]){
                T[i][j] = 1 + T[i - 1][j - 1]
            }else T[i][j] = 0;
        }
    }
    let newT = [].concat(...T)
    return Math.max(...newT)
};
findLength([3,2,1,4,7],[1,2,3,2,1])