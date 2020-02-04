/*
Given n and m which are the dimensions of a matrix initialized by zeros and given an array indices where indices[i] = [ri, ci]. For each pair of [ri, ci] you have to increment all cells in row ri and column ci by 1.

Return the number of cells with odd values in the matrix after applying the increment to all indices.

LeetCode: 1252. Cells with Odd Values in a Matrix
*/

var oddCells = function(n, m, indices) {
    let arr = []
    for(let i = 0; i < n; i++){
        arr[i] =[];
        for(let j = 0; j < m; j++)
            arr[i].push(0);
    } 
    for(const [r, c] of indices){
        let j = 0, k = 0
        while(j < m){
            arr[r][j]++;
            j++;
        }
        while(k < n){
            arr[k][c]++;
            k++;
        }
    }
    arr = [].concat(...arr);
    let res = 0;
    for(const c of arr){
        if(c % 2 !== 0) res++;
    }
    return res;
};
oddCells(2,3, [[0,1],[1,1]])