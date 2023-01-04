/*
An array is monotonic if it is either monotone increasing or monotone decreasing.

An array A is monotone increasing if for all i <= j, A[i] <= A[j].  An array A is monotone decreasing if for all i <= j, A[i] >= A[j].

Return true if and only if the given array A is monotonic.

LeetCode: 896. Monotonic Array
*/

var isMonotonic = function(A) {
    let n = A.length - 1;
    if(n === 0) return true;
    if(A[0] < A[n]){
       for(let i = 0; i < n; i++){
           if(A[i] > A[i + 1]) return false;
       }
       return true;
    }
    else if(A[0] > A[n]){
       for(let i = 0; i < n; i++){
           if(A[i] < A[i + 1]) return false;
       }
       return true;
   }else{
       for(let i = 0; i < n; i++){
           if(A[i] !== A[i + 1]) return false;
       }
       return true; 
   }
    return false;
};
isMonotonic([1,2,2,3])