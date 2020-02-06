/*
A matrix is Toeplitz if every diagonal from top-left to bottom-right has the same element.

Now given an M x N matrix, return True if and only if the matrix is Toeplitz.

LeetCode: 766. Toeplitz Matrix
*/

var isToeplitzMatrix = function(matrix) {
    let arr = [].concat(...matrix);
    let n = arr.length;
    let m = matrix[0].length
    for(let i = 0; i < n - m; i++){
        if(i % m !== m - 1 && arr[i] !== arr[i + m + 1]) return false;
    }
    return true;
};
isToeplitzMatrix([
  [1,2,3,4],
  [5,1,2,3],
  [9,5,1,2]
])