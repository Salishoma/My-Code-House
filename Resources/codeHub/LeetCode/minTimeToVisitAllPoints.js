/*
On a plane there are n points with integer coordinates points[i] = [xi, yi]. Your task is to find the minimum time in seconds to visit all points.

You can move according to the next rules:

In one second always you can either move vertically, horizontally by one unit or diagonally (it means to move one unit vertically and one unit horizontally in one second).
You have to visit the points in the same order as they appear in the array.

LeetCode: 1266. Minimum Time Visiting All Points
*/

var minTimeToVisitAllPoints = function(points) {
    let time = 0;
    for(let i = 1; i < points.length; i++){
        time += Math.max(Math.abs(points[i][0] - points[i- 1][0]), Math.abs(points[i][1] - points[i- 1][1]))
    }
    return time;
};
minTimeToVisitAllPoints([[1,1],[3,4],[-1,0]])