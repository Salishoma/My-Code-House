/*
We have a collection of rocks, each rock has a positive integer weight.

Each turn, we choose the two heaviest rocks and smash them together.  Suppose the stones have weights x and y with x <= y.  The result of this smash is:

If x == y, both stones are totally destroyed;
If x != y, the stone of weight x is totally destroyed, and the stone of weight y has new weight y-x.
At the end, there is at most 1 stone left.  Return the weight of this stone (or 0 if there are no stones left.)

LeetCode: 1046. Last Stone Weight
*/

var lastStoneWeight = function(stones) {
  if(stones.length == 0) return 0;
  if(stones.length == 1) return stones[0];
  let posMax = 0;
  let max = stones[0];
  stones.map(function(x, i, arr){
    if(x > max){
       max = x;
       posMax = i;
    }
  });
  stones[posMax] = 0;
  let secondPosMax = 0;
  let secondMax = stones[0];
  stones.map(function(x, i, arr){
    if(x > secondMax){
       secondMax = x;
       secondPosMax = i;
    }
  });
  if(secondMax == max){
    stones.splice(secondPosMax, 1);
    if(secondPosMax < posMax) posMax--;
    stones.splice(posMax, 1);
    return lastStoneWeight(stones);
  } else {
    stones[posMax] = max - secondMax;
    stones.splice(secondPosMax, 1);
    return lastStoneWeight(stones);
  }
};
lastStoneWeight([2,7,4,1,8,1])