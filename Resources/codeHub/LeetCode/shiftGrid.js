/*
Given a 2D grid of size m x n and an integer k. You need to shift the grid k times.

In one shift operation:

Element at grid[i][j] moves to grid[i][j + 1].
Element at grid[i][n - 1] moves to grid[i + 1][0].
Element at grid[m - 1][n - 1] moves to grid[0][0].
Return the 2D grid after applying shift operation k times.

LeetCode: 1260. Shift 2D Grid
*/

var shiftGrid = function(grid, k) {
    let m = grid.length, n = grid[0].length;
    let arr = Array.from({length: m}, () => Array(n).fill(0));
    for(let i = 0; i < m; i++){
        for(let j = 0; j < n; j++){
            let l = (i + Math.floor((j + k) / n)) % m;
            arr[l][(j + k) % n] = grid[i][j]
        }
    }
    return arr;
};
// shiftGrid([[1,2,3],[4,5,6],[7,8,9]], 1)
shiftGrid([[3,8,1,9],[19,7,2,5],[4,6,11,10],[12,0,21,13]], 4)
shiftGrid([[1,2,3],[4,5,6],[7,8,9]], 9)