/*
Find the total area covered by two rectilinear rectangles in a 2D plane.

LeetCode: 223. Rectangle Area
*/

var computeArea = function(A, B, C, D, E, F, G, H) {
    const area1 = Math.abs((C - A)) * Math.abs((D - B));
    const area2 = Math.abs((G - E)) * Math.abs((H - F));
    const left = Math.max(A, E);
    const right = Math.min(C, G);
    const bottom = Math.max(B, F);
    const top = Math.min(D, H);
    const rec3 = Math.max(0, right -left) * Math.max(0, top - bottom);
    const totalArea = area1 + area2 - rec3;
    return totalArea;
};
computeArea(-2,-2,2,2,-2,-2,2,2)