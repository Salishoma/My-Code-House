/*
An image is represented by a 2-D array of integers, each integer representing the pixel value of the image (from 0 to 65535).

Given a coordinate (sr, sc) representing the starting pixel (row and column) of the flood fill, and a pixel value newColor, "flood fill" the image.

To perform a "flood fill", consider the starting pixel, plus any pixels connected 4-directionally to the starting pixel of the same color as the starting pixel, plus any pixels connected 4-directionally to those pixels (also with the same color as the starting pixel), and so on. Replace the color of all of the aforementioned pixels with the newColor.

At the end, return the modified image.

LeetCode:  Flood Fill
*/


var floodFill = function(image, sr, sc, newColor) {
    const value = image[sr][sc];
    if(value === newColor) return image
    image[sr][sc] = newColor;
    const helper = (r, c) => {
        if(image[r]){
            if(image[r][c] === value){
                image[r][c] = newColor;
                return true
            }
        }
        return false;
    }
    const dfs = (r, c) => {
        if(!image[r] || !image[r][c]) return;
        const[rowUp, rowDown] = [r - 1, r + 1];
        const[colLeft, colRight] = [c - 1, c + 1];
        if(helper(rowUp, c)) dfs(rowUp, c);
        if(helper(rowDown, c)) dfs(rowDown, c);
        if(helper(r, colLeft)) dfs(r, colLeft);
        if(helper(r, colRight)) dfs(r, colRight);
    }
    dfs(sr, sc);
    return image
};
floodFill([[1,1,1],[1,1,0],[1,0,1]],1,1,2)