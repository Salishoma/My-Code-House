/*
We have a collection of rocks, each rock has a positive integer weight.

Each turn, we choose the two heaviest rocks and smash them together.  Suppose the stones have weights x and y with x <= y.  The result of this smash is:

If x == y, both stones are totally destroyed;
If x != y, the stone of weight x is totally destroyed, and the stone of weight y has new weight y-x.
At the end, there is at most 1 stone left.  Return the weight of this stone (or 0 if there are no stones left.)

LeetCode: 1046. Last Stone Weight
*/

var lastStoneWeight=function(arr) {
  let result;
  let res=arr.sort(function(a,b) {
    return b-a;
  })
  for(let i=0;i<res.length-1;i++) {
    if(res[i]==res[i+1])
	{
	  res.shift();
	  res.shift();
	  i--;
	}
	else {
	  res[i]=res[i]-res[i+1];
	  res.splice(i+1,1);
	  i--;
	}
	let res=arr.sort(function(a,b) {
     return b-a;
    })
  }
  return res;
}
lastStoneWeight([2,7,4,1,8,1])