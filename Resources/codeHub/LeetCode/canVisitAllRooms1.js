/*
There are N rooms and you start in room 0.  Each room has a distinct number in 0, 1, 2, ..., N-1, and each room may have some keys to access the next room. 

Formally, each room i has a list of keys rooms[i], and each key rooms[i][j] is an integer in [0, 1, ..., N-1] where N = rooms.length.  A key rooms[i][j] = v opens the room with number v.

Initially, all the rooms start locked (except for room 0). 

You can walk back and forth between rooms freely.

Return true if and only if you can enter every room.

LeetCode: 841. Keys and Rooms
*/

var canVisitAllRooms = function(rooms) {
    let visited = new Set();
    visited.add(0);
    let keys = [0];
    
    while(keys.length > 0) {
        let roomKeys = rooms[keys.pop()];
        for(let i = 0; i < roomKeys.length; i++) {
            if(!visited.has(roomKeys[i])) {
                visited.add(roomKeys[i]);
                keys.push(roomKeys[i]);
            }
        }
    }  
    return rooms.length === visited.size;
};
canVisitAllRooms([[6,7,8],[5,4,9],[],[8],[4],[],[1,9,2,3],[7],[6,5],[2,3,1]])