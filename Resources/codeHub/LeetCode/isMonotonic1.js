/*
An array is monotonic if it is either monotone increasing or monotone decreasing.

An array A is monotone increasing if for all i <= j, A[i] <= A[j].  An array A is monotone decreasing if for all i <= j, A[i] >= A[j].

Return true if and only if the given array A is monotonic.

LeetCode: 896. Monotonic Array
*/

var isMonotonic = function(A) {    
    let monotoneInc = true;
    let monotoneDec = true;
    
    if (A.length < 2){
        return true;
    }
    
    //check to see if increasing
    for (let i = 0; i < A.length-1; i++) {
        if (A[i+1] > A[i]) {
            monotoneDec = false;
        } else if (A[i+1] < A[i]){
            monotoneInc = false;
        }
    }
    
    return monotoneDec || monotoneInc;
};
isMonotonic([6,5,4,4])