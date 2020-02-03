/*
Given an array A of non-negative integers, return an array consisting of all the even elements of A, followed by all the odd elements of A.

You may return any answer array that satisfies this condition.

LeetCode: 905. Sort Array By Parity
*/

var sortArrayByParity = function(A) {
    let a = [];
    let j = 0;
    let n = A.length - 1;
    for(let i = 0; i <=n; i++){
        if(A[i] % 2 !== 0){
            a.push(i);
        }
    }
    j = 0;
    for(let i = n; i >= 0; i--){
        if(A[i] % 2 === 0 && a[j] < i){
            if(j === a.length) return A;
            var temp = A[a[j]];
            A[a[j]] = A[i];
            A[i] = temp;
            j++;
        }
    }
    return A;
};
// sortArrayByParity([3,1,2,4])
sortArrayByParity([0, 1])