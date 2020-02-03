/*
Write an efficient algorithm that searches for a value in an m x n matrix. This matrix has the following properties:

Integers in each row are sorted from left to right.
The first integer of each row is greater than the last integer of the previous row.

LeetCode: 74. Search a 2D Matrix
*/

var searchMatrix = function(matrix, target) {
    if(matrix.length === 0) return false
    let i = 0;
    let x = 0, y = matrix[0].length - 1, mid;
    while(x <= y){
        if(matrix[i][matrix[0].length - 1] < target){
            i++;
            if(i >= matrix.length) return false;
        }
        else{
            mid = Math.floor((x + y) / 2);
            if(matrix[i][mid] < target) x = mid + 1;
            else if(matrix[i][mid] > target) y = mid - 1;
            else return true;
        }
    }
    return false;
};
searchMatrix([
  [1,   3,  5,  7],
  [10, 11, 16, 20],
  [23, 30, 34, 50]
], 3)