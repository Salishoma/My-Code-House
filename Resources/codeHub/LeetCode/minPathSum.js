/*
Given a m x n grid filled with non-negative numbers, find a path from top left to bottom right which minimizes the sum of all numbers along its path.

Note: You can only move either down or right at any point in time.

LeetCode: 64. Minimum Path Sum
*/

var minPathSum = function(grid) {
    for(let i=0;i<grid.length;i++){
        for(let j=0;j<grid[0].length;j++){
            if(i> 0 && j>0){
               grid[i][j] = grid[i][j]+Math.min(grid[i-1][j],grid[i][j-1]);
               }else if(i>0){
                 grid[i][j] = grid[i][j]+grid[i-1][j]  
               }else if(j>0){
                 grid[i][j] = grid[i][j]+grid[i][j-1]    
               }
        }
    }
    return grid[grid.length-1][grid[0].length-1]
};
minPathSum([[1,3,1],[1,5,1],[4,2,1]])