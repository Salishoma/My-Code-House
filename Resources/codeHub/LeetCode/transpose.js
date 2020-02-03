/*
Given a matrix A, return the transpose of A.

The transpose of a matrix is the matrix flipped over it's main diagonal, switching the row and column indices of the matrix.

LeetCode : 867. Transpose Matrix
*/

var transpose = function(A) {
    let r = A.length, c = A[0].length;
    let arr = Array.from({length: A[0].length}, () =>[])
    for(let i = 0; i < r; i++){
        for(let j = 0; j < c; j++){
           arr[j][i] = A[i][j]
        }
    }
    return arr;
};