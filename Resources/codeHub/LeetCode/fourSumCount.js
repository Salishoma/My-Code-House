/*
Given four lists A, B, C, D of integer values, compute how many tuples (i, j, k, l) there are such that A[i] + B[j] + C[k] + D[l] is zero.

To make problem a bit easier, all A, B, C, D have same length of N where 0 ≤ N ≤ 500. All integers are in the range of -228 to 228 - 1 and the result is guaranteed to be at most 231 - 1.

LeetCode: 454. 4Sum II
*/

var fourSumCount = function(A, B, C, D) {
    const map = new Map();
    let count = 0;
    for(let a of A){
        for(let b of B){
            if(!map.has(a + b)) map.set(a + b, 1);
            else map.set(a + b, map.get(a + b) + 1);
        }
    }
    for(let c of C){
        for(let d of D){
            if(map.has(-(c + d))){
                count += map.get(-(c + d));
            }
        }
    }
    return count;
};
fourSumCount([-1,-1],[-1,1],[-1,1],[1,-1])
// findRightInterval([ [3,4], [2,3], [1,2] ])
// findRightInterval([[1,12],[2,9],[3,10],[13,14],[15,16],[16,17]])