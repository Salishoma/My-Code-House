/*
In a array A of size 2N, there are N+1 unique elements, and exactly one of these elements is repeated N times.

Return the element repeated N times.

LeetCode: 961. N-Repeated Element in Size 2N Array
*/

var repeatedNTimes = function(A) {
    let seen = {};
    let n = A.length;
    for(let i = 0; i < n; i++){
        seen[A[i]] = (seen[A[i]] || 0) + 1;
        if(seen[A[i]] > 1) return A[i];
    }
};
repeatedNTimes([5,1,5,2,5,3,5,4])