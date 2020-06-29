/*
Given a string path, where path[i] = 'N', 'S', 'E' or 'W', each representing moving one unit north, south, east, or west, respectively. You start at the origin (0, 0) on a 2D plane and walk on the path specified by path.

Return True if the path crosses itself at any point, that is, if at any time you are on a location you've previously visited. Return False otherwise.

LeetCode: 1496. Path Crossing
*/

var isPathCrossing = function(path) {
    const comp = {"N": 1, "E": 1, "W": -1, "S": -1};
    const move = {};
    let [x, y] = [0, 0];
    move[`${x}#${y}`] = 1;
    for(let way of path){
        if(way === "E" || way === "W"){
            x += comp[way];
        }else y += comp[way];
        if(!move[`${x}#${y}`]) move[`${x}#${y}`] = 1;
        else return true
    }
    return false;
};
isPathCrossing("NESWW")