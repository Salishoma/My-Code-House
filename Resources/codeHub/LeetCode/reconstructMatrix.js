/*
Given the following details of a matrix with n columns and 2 rows :

The matrix is a binary matrix, which means each element in the matrix can be 0 or 1.
The sum of elements of the 0-th(upper) row is given as upper.
The sum of elements of the 1-st(lower) row is given as lower.
The sum of elements in the i-th column(0-indexed) is colsum[i], where colsum is given as an integer array with length n.
Your task is to reconstruct the matrix with upper, lower and colsum.

Return it as a 2-D integer array.

If there are more than one valid solution, any of them will be accepted.

If no valid solution exists, return an empty 2-D array.

LeetCode: 1253. Reconstruct a 2-Row Binary Matrix
*/

var reconstructMatrix = function(upper, lower, colsum) {
    const n = colsum.length;
    const row1 = Array(n).fill(0);
    const row2 = Array(n).fill(0);
    let count = 0;
    for(let i = 0; i < n; i++){
        if(colsum[i] === 2){
            row1[i] = 1;
            row2[i] = 1;
            upper--;
            lower--;
            if(upper < 0 || lower < 0) return [];
        }
    }
    for(let i = 0; i < n; i++){
        if(row1[i] === 0 && upper > 0 && colsum[i] !== 0){
            row1[i] = 1;
            upper--
        }else if(row2[i] === 0 && lower > 0 && colsum[i] !== 0){
            row2[i] = 1;
            lower--
        }
        if(row1[i] + row2[i] !== colsum[i]) return []
    }
    if(upper !== 0 || lower !== 0) return [];
    return [row1,row2]
};
reconstructMatrix(5, 5, [2,1,2,0,1,0,1,2,0,1])