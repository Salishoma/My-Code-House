/*
Write an efficient algorithm that searches for a value in an m x n matrix. This matrix has the following properties:

Integers in each row are sorted in ascending from left to right.
Integers in each column are sorted in ascending from top to bottom.

LeetCode: 240. Search a 2D Matrix II
*/

var searchMatrix = function(matrix, target) {
    if(matrix.length === 0) return 0
    let j = matrix[0].length - 1; let k;
    let turn = false;
    for(let i = 0; i < matrix.length; i++){
        if(matrix[i][j] < target) continue;
        else if(matrix[i][j] === target) return true;
        else{            
            k = i;
            break;
        }
    }
    let i = k;
    k = 0;
    while(j >= 0){
      if(matrix[i] === undefined) return false;
        if(matrix[i][k] < target){
          k++
          continue;
        }else if(matrix[i][k] === target) return true;
        else{
          k = 0;
          j--;
          i++;
        }
    }
    return false;
};
searchMatrix([
  [1,   4,  7, 11, 15],
  [2,   5,  8, 12, 19],
  [3,   6,  9, 16, 22],
  [10, 13, 14, 17, 24],
  [18, 21, 23, 26, 30]
], 5)