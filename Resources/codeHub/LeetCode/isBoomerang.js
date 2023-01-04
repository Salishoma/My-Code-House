/*
A boomerang is a set of 3 points that are all distinct and not in a straight line.

Given a list of three points in the plane, return whether these points are a boomerang.

LeetCode: 1037. Valid Boomerang
*/

var isBoomerang = function(points) {
    return (points[0][1]-points[1][1])*(points[1][0]-points[2][0])!=(points[0][0]-points[1][0])*(points[1][1]-points[2][1]);
};
isBoomerang([[1,1],[2,3],[3,2]])