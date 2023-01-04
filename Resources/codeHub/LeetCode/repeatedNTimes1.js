/*
In a array A of size 2N, there are N+1 unique elements, and exactly one of these elements is repeated N times.

Return the element repeated N times.

LeetCode: 961. N-Repeated Element in Size 2N Array
*/

var repeatedNTimes = function(A) {
    let n = A.length;
    for(let j = 1; j <= 3; j++){
        for(let i = 0; i < n; i++){
            if(A[i] === A[i + j]) return A[i];
        }
    }    
};
repeatedNTimes([2,1,2,5,3,2])