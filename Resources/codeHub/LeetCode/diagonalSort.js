/*
Given a m * n matrix mat of integers, sort it diagonally in ascending order from the top-left to the bottom-right then return the sorted array.

LeetCode: 1329. Sort the Matrix Diagonally
*/

var diagonalSort = function(mat) {
    for(let i = 0; i < mat[0].length; i++){
        let r = 0;
        let c = i;
        let arr = [];
        while(r < mat.length && c < mat[0].length){
            arr.push(mat[r][c]);
            r++;
            c++;
        }
        arr.sort((a, b) => a - b);
        r = 0;
        c = i;
        while(r < mat.length && c < mat[0].length){
            mat[r][c] = arr[r]
            r++;
            c++;
        }
    }
    for(let i = 1; i < mat.length; i++){
        let r = i;
        let c = 0;
        let arr = [];
        while(r < mat.length && c < mat[0].length){
            arr.push(mat[r][c]);
            r++;
            c++;
        }
        arr.sort((a, b) => a - b);
        r = i;
        c = 0;
        while(r < mat.length && c < mat[0].length){
            mat[r][c] = arr[c]
            r++;
            c++;
        }
    }
    return mat
};
diagonalSort([[3,3,1,1],[2,2,1,2],[1,1,1,2]])