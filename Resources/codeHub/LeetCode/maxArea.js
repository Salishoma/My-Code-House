/*
Given n non-negative integers a1, a2, ..., an , where each represents a point at coordinate (i, ai). n vertical lines are drawn such that the two endpoints of line i is at (i, ai) and (i, 0). Find two lines, which together with x-axis forms a container, such that the container contains the most water.

Note: You may not slant the container and n is at least 2.

LeetCode: 11. Container With Most Water
*/

var maxArea = function(height) {
    let i = 0; 
    let j = height.length - 1;
    let maxarea = 0;
    while(i < j){
        maxarea = Math.max(maxarea, Math.min(height[i], height[j]) * (j - i));
        if(height[i] < height[j]) i++;
        else j--;
    }
    return maxarea;
};
maxArea([1,2,100,1,1,1,1,1,2])