/*
We have some permutation A of [0, 1, ..., N - 1], where N is the length of A.

The number of (global) inversions is the number of i < j with 0 <= i < j < N and A[i] > A[j].

The number of local inversions is the number of i with 0 <= i < N and A[i] > A[i+1].

Return true if and only if the number of global inversions is equal to the number of local inversions.

LeetCode: 775. Global and Local Inversions
*/

var isIdealPermutation = function(A) {
	if (A.length === 1) return true;

	let localInversion = 0;
	for (let i = 0 ; i < A.length ; i++) {
    	if (A[i] > A[i + 1]) localInversion++;
    }
    if (localInversion === 0) return true;

    for (let i = 0 ; i < A.length - 2 ; i++) {    	
    	if (A[i + 2] < A[i] || A[i + 3] < A[i]) return false;
    }
    return true;
};
isIdealPermutation([1,2,0])