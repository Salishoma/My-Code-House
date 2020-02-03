/*
Given an array of integers A, a move consists of choosing any A[i], and incrementing it by 1.

Return the least number of moves to make every value in A unique.

LeetCode: 945. Minimum Increment to Make Array Unique
*/

var minIncrementForUnique = function(A) {
    A.sort((a, b) => a - b);
    let count = 0;
    let n = A.length;
    for(let i = 1; i < n; i++){
        if(A[i] <= A[i - 1]){
            count += A[i - 1] - A[i] + 1;
            A[i] = A[i - 1] + 1;
        }
    }
    return count;
};
minIncrementForUnique([3,2,1,2,1,7])