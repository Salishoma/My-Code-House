/*
Given an array of integers A sorted in non-decreasing order, return an array of the squares of each number, also in sorted non-decreasing order.

LeetCode: 977. Squares of a Sorted Array
*/

var sortedSquares = function(A) {    
    let arr = Array(A.length).fill(0);
    let i = 0; let j = A.length - 1; let k = arr.length - 1;
    while(i <= j){
        if(Math.abs(A[i]) > Math.abs(A[j])){
            arr[k] = A[i];
            i++;
        }else{
            arr[k] = A[j];
            j--;
        }
        k--;
    }
    for(let i = 0; i < arr.length; i++)  arr[i] **= 2;       
    return arr;
};
sortedSquares([-4,-1,0,3,10])
// sortedSquares([-7,-3,2,3,11])