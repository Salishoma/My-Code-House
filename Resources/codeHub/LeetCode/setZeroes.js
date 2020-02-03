/*
Given a m x n matrix, if an element is 0, set its entire row and column to 0. Do it in-place.

LeetCode: 73. Set Matrix Zeroes
*/

var setZeroes = function(matrix) {
    let arr = [];
    let i = 0;
    let j = 0;
    while(true){
        if(matrix[i][j] === 0){
            arr.push([i, j]);
        }
        j++;
        if(j === matrix[0].length){
            i++;
            if(i === matrix.length) break;
            j = 0
        }
    }
    let r = 0;
    i = 0; j = 0;
    while(i < arr.length){
        if(r === 0){
          matrix[arr[i][0]][j] = 0;
          j++;
          if(j === matrix[0].length){
            j = 0;  r = 1
          }
        }else if(r === 1){
          matrix[j][arr[i][1]] = 0;
          j++;
          if(j === matrix.length){
            i++;  r = 0; j = 0;
          }
        }
    }
    return matrix;
};
// setZeroes([
//   [1,1,1],
//   [1,0,1],
//   [1,1,1]
// ])
setZeroes(
[
  [0,1,2,0],
  [3,4,5,2],
  [1,3,1,5]
])