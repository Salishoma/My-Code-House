/*
Students are asked to stand in non-decreasing order of heights for an annual photo.

Return the minimum number of students that must move in order for all students to be standing in non-decreasing order of height.

LeetCode: 1051. Height Checker
*/

var heightChecker = function(heights) {
    let arr = [...heights];
    arr.sort((a, b) => a - b);
    let count = 0;
    for(let i = 0; i < heights.length; i++){
        if(arr[i] !== heights[i]) count++;
    }
    return count;
};
heightChecker([1,1,4,2,1,3])