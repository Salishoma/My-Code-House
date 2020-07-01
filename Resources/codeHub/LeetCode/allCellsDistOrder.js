/*
We are given a matrix with R rows and C columns has cells with integer coordinates (r, c), where 0 <= r < R and 0 <= c < C.

Additionally, we are given a cell in that matrix with coordinates (r0, c0).

Return the coordinates of all cells in the matrix, sorted by their distance from (r0, c0) from smallest distance to largest distance.  Here, the distance between two cells (r1, c1) and (r2, c2) is the Manhattan distance, |r1 - r2| + |c1 - c2|.  (You may return the answer in any order that satisfies this condition.)

LeetCode: 1030. Matrix Cells in Distance Order
*/

var allCellsDistOrder = function(R, C, r0, c0) {
    let arr = [];
    for(let i = 0; i < R; i++){
        for(let j = 0; j < C; j++){
            let sum = Math.abs(i - r0) + Math.abs(j - c0);
            if(!arr[sum]) arr[sum] = [];
            arr[sum].push([i, j])
        }
    }
    const res = []
    for(let num of arr){
        res.push(...num)
    }
    return res;
};
allCellsDistOrder(2, 2, 0, 1)