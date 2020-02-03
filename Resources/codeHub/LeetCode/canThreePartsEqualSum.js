/*
Given an array A of integers, return true if and only if we can partition the array into three non-empty parts with equal sums.

Formally, we can partition the array if we can find indexes i+1 < j with (A[0] + A[1] + ... + A[i] == A[i+1] + A[i+2] + ... + A[j-1] == A[j] + A[j-1] + ... + A[A.length - 1])

LeetCode: 1013. Partition Array Into Three Parts With Equal Sum
*/

var canThreePartsEqualSum =  function (A) {
    let sum = 0;
    for(let i = 0; i < A.length; i++) {
    	sum += A[i];
    }
    let partialSum = Math.floor(sum / 3);
    let temp = partialSum;
    let count = 0;
    for(let i = 0; i < A.length; i++) {
    	temp-=A[i];
    	if(temp === 0) {
    		temp = partialSum;
    		count++;
    	}
    }
    return count === 3;
}
canThreePartsEqualSum([0,2,1,-6,6,-7,9,1,2,0,1])