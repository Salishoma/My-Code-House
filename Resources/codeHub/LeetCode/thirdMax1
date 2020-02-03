/*
Given a non-empty array of integers, return the third maximum number in this array. If it does not exist, return the maximum number. The time complexity must be in O(n).

LeetCode: 414. Third Maximum Number
*/

var thirdMax = function(nums) {
  let max = -Infinity;
  let mid = -Infinity;
  let min = -Infinity;
  
  for (x of nums) {
    if (x > max) {
      min = mid;
      mid = max;
      max = x;
    }  else if (x > mid  && x < max) {
      min = mid;  
      mid = x;
    } else if (x > min && x < mid) {
      min = x;
    }
  }
  
  return (min > -Infinity) ? min : max;
}
thirdMax([3, 2,1,4,8,5,6])