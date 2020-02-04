/*
Given n and m which are the dimensions of a matrix initialized by zeros and given an array indices where indices[i] = [ri, ci]. For each pair of [ri, ci] you have to increment all cells in row ri and column ci by 1.

Return the number of cells with odd values in the matrix after applying the increment to all indices.

LeetCode: 1252. Cells with Odd Values in a Matrix
*/

var oddCells = function(n, m, indices) {
    let rowIdx = new Set();
    let colIdx = new Set();
    
    indices.forEach( index => {
        let row = index[0];
        let col = index[1];
        
        rowIdx.has(row) ? rowIdx.delete(row) : rowIdx.add(row);
        colIdx.has(col) ? colIdx.delete(col) : colIdx.add(col);
    });
    
    let numRows = rowIdx.size;
    let numCols = colIdx.size;
    
    return numRows * m + numCols * n - numRows * numCols * 2
};
oddCells(2, 2, [[1,1],[0,0]])