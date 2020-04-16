/*
Given a m * n matrix grid which is sorted in non-increasing order both row-wise and column-wise. 

Return the number of negative numbers in grid.

LeetCode: 1351. Count Negative Numbers in a Sorted Matrix
*/

var countNegatives = function(grid) {
    let count = 0;
    for(let g of grid){
        for(let j = g.length - 1; j >= 0; j--){
            if(g[j] >= 0) break;
            count++;
        }
    }
    return count;
};
countNegatives([[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]])