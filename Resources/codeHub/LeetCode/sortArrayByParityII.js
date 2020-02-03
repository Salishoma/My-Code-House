/*
Given an array A of non-negative integers, half of the integers in A are odd, and half of the integers are even.

Sort the array so that whenever A[i] is odd, i is odd; and whenever A[i] is even, i is even.

You may return any answer array that satisfies this condition.

LeetCode: 922. Sort Array By Parity II
*/

var sortArrayByParityII = function(A) {
    let arr =[];
    let i = 0, j = 1;
    for(let c of A){
        if(c % 2 === 0){
            arr[i] = c;
            i += 2
        }else{
            arr[j] = c;
            j += 2;
        }
    }
    return arr;
};
sortArrayByParityII([4,2,5,7])