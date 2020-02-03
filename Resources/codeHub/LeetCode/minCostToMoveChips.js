/*
There are some chips, and the i-th chip is at position chips[i].

You can perform any of the two following types of moves any number of times (possibly zero) on any chip:

Move the i-th chip by 2 units to the left or to the right with a cost of 0.
Move the i-th chip by 1 unit to the left or to the right with a cost of 1.
There can be two or more chips at the same position initially.

Return the minimum cost needed to move all the chips to the same position (any position).

LeetCode: 1217. Play with Chips
*/

var minCostToMoveChips = function(chips) {
    let count1 = 0, count2 = 0;
    for(let c of chips){
        if(c % 2 === 0) count1++;
        else count2++;
    }
    return count1 > count2 ? count2 : count1;
};
minCostToMoveChips([2,2,2,3,3])