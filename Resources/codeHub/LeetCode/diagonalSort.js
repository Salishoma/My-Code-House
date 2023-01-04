/*
Given a m * n matrix mat of integers, sort it diagonally in ascending order from the top-left to the bottom-right then return the sorted array.

LeetCode: 1329. Sort the Matrix Diagonally
*/

var diagonalSort = function(mat) {
    for(let i = 0; i < mat[0].length; i++){
        diagonal(mat,0,i)
    }
    for(let i = 1; i < mat.length; i++){
        diagonal(mat,i,0)
    }
    return mat
};
const diagonal = (mat,i,j) => {
    let r = i;
    let c = j
    const arr = [];
    while(r < mat.length && c < mat[0].length){
        arr.push(mat[r++][c++]);
    }
    arr.sort((a, b) => a - b);
    r = i;
    c = j;
    let ind = i === 0 ? r : c
    while(r < mat.length && c < mat[0].length){
        mat[r++][c++] = arr[ind++];
    }
    return mat;
}
diagonalSort([[3,3,1,1],[2,2,1,2],[1,1,1,2]])