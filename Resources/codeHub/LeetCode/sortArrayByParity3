/*
Given an array A of non-negative integers, return an array consisting of all the even elements of A, followed by all the odd elements of A.

You may return any answer array that satisfies this condition.

LeetCode: 905. Sort Array By Parity
*/

var sortArrayByParity = function(A) {
    let i = 0, j = A.length - 1;
    while(i < j){
        if(A[i] % 2 > A[j] % 2){
            var temp = A[i];
            A[i] = A[j];
            A[j] = temp;
        }
        if(A[i] % 2 === 0) i++;
        if(A[j] % 2 === 1) j--
    }
    return A;
};
sortArrayByParity([1,6,3,4,8,5])