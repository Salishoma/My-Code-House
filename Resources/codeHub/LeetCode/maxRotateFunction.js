/*
Given an array of integers A and let n to be its length.

Assume Bk to be an array obtained by rotating the array A k positions clock-wise, we define a "rotation function" F on A as follow:

F(k) = 0 * Bk[0] + 1 * Bk[1] + ... + (n-1) * Bk[n-1].

Calculate the maximum value of F(0), F(1), ..., F(n-1).

Note:
n is guaranteed to be less than 105.

LeetCode: 396. Rotate Function
*/

var maxRotateFunction = function(A) {
    let curSum = 0;
    let numSum = 0;
    A.forEach((item, index) => {
        curSum += item * index;
        numSum += item;
    })
    const last = A.length;
    let maxSum = curSum;
    for (let i = last-1; i >= 0; i--) {
        curSum = curSum + numSum - last * A[i];
        maxSum = Math.max(maxSum, curSum);
    }
    return maxSum;
};
maxRotateFunction([4, 3, 2, 6])