/*
Given the coordinates of four points in 2D space, return whether the four points could construct a square.

The coordinate (x,y) of a point is represented by an integer array with two integers.

LeetCode: 593. Valid Square
*/

var validSquare = function(...args) {
  const dists = new Set();
  for (let i = 0; i < args.length; i++) {
    for (let j = i + 1; j < args.length; j++) {
      const dist = getDist(args[i], args[j]);
      dists.add(dist);
      if (dist <= 0 || dists.size > 2) {
        return false;
      }
    }
  }
  return true;
};

function getDist([x1, y1], [x2, y2]) {
  return Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2);
}
validSquare([0,0],[1,1],[1,0],[1,1])
// validSquare([0,0],[1,1],[1,1],[0,1])
validSquare([0,0],[1,1],[1,0],[0,1])