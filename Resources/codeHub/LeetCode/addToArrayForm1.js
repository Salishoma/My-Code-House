/*
For a non-negative integer X, the array-form of X is an array of its digits in left to right order.  For example, if X = 1231, then the array form is [1,2,3,1].

Given the array-form A of a non-negative integer X, return the array-form of the integer X+K.

LeetCode: 989. Add to Array-Form of Integer
*/

var addToArrayForm = function(A, K) {
	const len = A.length;
	let cur = K;
	let res = [];
	let i = len - 1;
	while (i >= 0 || cur > 0) {
		if (i >= 0) {
			cur += A[i];
		}
		res.push(cur % 10);
		cur = parseInt(cur / 10);
		i--;
	}
	return res.reverse();
};
addToArrayForm([2,7,4], 181)