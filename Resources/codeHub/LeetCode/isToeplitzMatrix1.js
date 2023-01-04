/*
A matrix is Toeplitz if every diagonal from top-left to bottom-right has the same element.

Now given an M x N matrix, return True if and only if the matrix is Toeplitz.

LeetCode: 766. Toeplitz Matrix
*/

var isToeplitzMatrix = function(matrix) {
  for(let r = 1; r < matrix.length; r++){
    for(let c = 1; c < matrix[r].length; c++){
      if(matrix[r - 1][c - 1] !== matrix[r][c]) return false 
    }
  }
  return true
};
isToeplitzMatrix([
  [1,2],
  [2,2]
])