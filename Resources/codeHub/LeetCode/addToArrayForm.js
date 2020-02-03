/*
For a non-negative integer X, the array-form of X is an array of its digits in left to right order.  For example, if X = 1231, then the array form is [1,2,3,1].

Given the array-form A of a non-negative integer X, return the array-form of the integer X+K.

LeetCode: 989. Add to Array-Form of Integer
*/

var addToArrayForm = function(A, K) {
    let k = "" + K;
    let rem;
    let carry = 0;
    let j  = A.length - 1;
    let arr = Array(Math.max(A.length, k.length))
    for(let i = arr.length - 1; i >= 0; i--){
        rem = K % 10;
        if(A[j] === undefined) arr[i] = rem + carry;
        else {
            arr[i] =A[j] + rem + carry;
            j--;
        }
        K = Math.floor(K / 10);
        if(arr[i] > 9){
            arr[i] -= 10;
            carry = 1;
        }else carry = 0;
    }
    if(carry > 0) arr.unshift(1);
    else arr = arr
    return arr
};
addToArrayForm([1,2,0,0], 34)