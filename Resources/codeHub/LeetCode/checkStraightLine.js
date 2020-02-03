/*
You are given an array coordinates, coordinates[i] = [x, y], where [x, y] represents the coordinate of a point. Check if these points make a straight line in the XY plane.

LeetCode: 1232. Check If It Is a Straight Line
*/

var checkStraightLine = function(coordinates) {
    if(coordinates.length === 2) return true
    let n = coordinates.length - 2;
    for(let i = 1; i < n; i += 2){
        let c = coordinates;
        if((c[i][1] - c[i - 1][1]) * (c[i + 2][0] - c[i + 1][0]) !==
           (c[i][0] - c[i - 1][0]) * (c[i + 2][1] - c[i + 1][1])){
            return false;
        }
    }
    return true;
};
checkStraightLine([[1,1],[2,2],[3,4],[4,5],[5,6],[7,7]])