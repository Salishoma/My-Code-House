/*
A subarray A[i], A[i+1], ..., A[j] of A is said to be turbulent if and only if:

For i <= k < j, A[k] > A[k+1] when k is odd, and A[k] < A[k+1] when k is even;
OR, for i <= k < j, A[k] > A[k+1] when k is even, and A[k] < A[k+1] when k is odd.
That is, the subarray is turbulent if the comparison sign flips between each adjacent pair of elements in the subarray.

Return the length of a maximum size turbulent subarray of A.

LeetCode: 978. Longest Turbulent Subarray
*/

var maxTurbulenceSize = function(A) {
    if(A.length === 1) return 1;
    let count = 1, max = 1, count1 = 1;
    for(let i = 0; i < A.length; i++){
        if(A[i] > A[i + 1]){
             count1 = 1;
            count++;
            max = Math.max(max, count,  count1)
            if(A[i + 1] < A[i + 2]){
                count++;
                max = Math.max(max, count,  count1)
                i++
            }else{
                count = 1; 
            }
        }else if(A[i] < A[i + 1]){
            count = 1;
            count1++;
            max = Math.max(max, count,  count1)
            if(A[i + 1] > A[i + 2]){
                count1++;
                max = Math.max(max, count,  count1);
                i++
            }else{
                count1 = 1; 
            }
        }else{
            count = 1;
            count1 = 1;
        }
    }
    return max;
};
maxTurbulenceSize([9,4,2,10,7,8,8,1,9,12,4,2,13,6,3,4,4,8,7,34,65,35])