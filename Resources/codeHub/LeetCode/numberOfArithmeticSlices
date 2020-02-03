/*
A sequence of number is called arithmetic if it consists of at least three elements and if the difference between any two consecutive elements is the same.

For example, these are arithmetic sequence:

LeetCode: 413. Arithmetic Slices
*/

var numberOfArithmeticSlices = function(A) {
    let len = A.length, count = 0;
    for(let i = 0; i < len-2; i++) {
        let d = A[i+1] - A[i];
        for(let j =i+2; j < len && A[j] - A[j-1] === d; j++) {
            count++;
        }
    }
    return count;
};
numberOfArithmeticSlices()
