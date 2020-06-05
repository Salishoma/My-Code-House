/*
Given a rectangular cake with height h and width w, and two arrays of integers horizontalCuts and verticalCuts where horizontalCuts[i] is the distance from the top of the rectangular cake to the ith horizontal cut and similarly, verticalCuts[j] is the distance from the left of the rectangular cake to the jth vertical cut.

Return the maximum area of a piece of cake after you cut at each horizontal and vertical position provided in the arrays horizontalCuts and verticalCuts. Since the answer can be a huge number, return this modulo 10^9 + 7.

LeetCode: 1465. Maximum Area of a Piece of Cake After Horizontal and Vertical Cuts.
*/

var maxArea = function(h, w, horizontalCuts, verticalCuts) {
    horizontalCuts.sort((a, b) => a - b);
    verticalCuts.sort((a, b) => a - b);
    let MOD = 1000000007;
    let hl = horizontalCuts.length;
    let vl = verticalCuts.length;
    let Hmax = Math.max(h - horizontalCuts[hl - 1], horizontalCuts[0]);
    let Vmax = Math.max(w - verticalCuts[vl - 1], verticalCuts[0]);
    for(let i = 1; i < Math.max(hl,vl); i++){
        let hd = horizontalCuts[i] - horizontalCuts[i - 1];
        let vd = verticalCuts[i] - verticalCuts[i - 1];
        if(isNaN(hd)) hd = 0;
        if(isNaN(vd)) vd = 0;
        Hmax = Math.max(Hmax, hd);
        Vmax = Math.max(Vmax, vd);
    }
    return (Hmax * Vmax) % MOD;
};
maxArea(5, 4, [1,2,4], [1,3])