/*
We have some permutation A of [0, 1, ..., N - 1], where N is the length of A.

The number of (global) inversions is the number of i < j with 0 <= i < j < N and A[i] > A[j].

The number of local inversions is the number of i with 0 <= i < N and A[i] > A[i+1].

Return true if and only if the number of global inversions is equal to the number of local inversions.

LeetCode: 775. Global and Local Inversions
*/

function isIdealPermutation(A) {
    for(let i=1;i<A.length;i++){
        if((A[i-1]>A[i] && A[i]==i-1 && A[i-1]==i) || (A[i-1]<A[i]))continue;
        else return false;
    }
    return true;
}
isIdealPermutation([1,0,2])