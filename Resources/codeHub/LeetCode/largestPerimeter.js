/*
Given an array A of positive lengths, return the largest perimeter of a triangle with non-zero area, formed from 3 of these lengths.

If it is impossible to form any triangle of non-zero area, return 0.

LeetCode: 976. Largest Perimeter Triangle
*/

var largestPerimeter = function(A) {
    A.sort((a, b) => a - b)
    for(let i = A.length - 3; i >= 0 ; i--){
        if(A[i] + A[i + 1] > A[i + 2]) return A[i] + A[i + 1] + A[i + 2]
    }
    return 0;
}
largestPerimeter([2,1,2])