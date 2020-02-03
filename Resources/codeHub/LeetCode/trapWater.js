/*
Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it is able to trap after raining.

LeetCode: 42. Trapping Rain Water
*/

var trap = function(height){
	if(height == null) return 0;
    let ans = 0;
    let size = height.length;
    let left_max = [], right_max = [];
    left_max[0] = height[0];
    for (let i = 1; i < size; i++) {
        left_max[i] = Math.max(height[i], left_max[i - 1]);
    }
    right_max[size - 1] = height[size - 1];
    for (let i = size - 2; i >= 0; i--) {
        right_max[i] = Math.max(height[i], right_max[i + 1]);
    }
    for (let i = 1; i < size - 1; i++) {
        ans += Math.min(left_max[i], right_max[i]) - height[i];
    }
    return ans;
}
trap([0,1,0,2,1,0,1,3,2,1,2,1])