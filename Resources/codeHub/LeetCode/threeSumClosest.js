/*
Given an array nums of n integers and an integer target, find three integers in nums such that the sum is closest to target. Return the sum of the three integers. You may assume that each input would have exactly one solution.

LeetCode: 16. 3Sum Closest
*/

var threeSumClosest = function(nums, target) {
    var i = 0; var j = 1; var k = 2;      
    var min = Infinity;
    var min1;
    var sum;
    var target1;
    while(nums.length >= 3 && i < nums.length - 2){
        sum = nums[i] + nums[j] + nums[k];
        if(sum === target) return sum;  
        else if(sum > target) target1 = sum - target;        
        else if(sum < target) target1 = target - sum;
        if(target1 < min){
            min = target1;
            min1 = sum;
        }                
        k++;
        if(k > nums.length - 1){
            j++
            k = j + 1;
        }                        
        if(j >  nums.length - 2){
            i++; j = i + 1; k = j + 1;
        }
    }
    return min1;
};
// threeSumClosest([-1,-1,3,-3], 1)
// threeSumClosest([-1,2,1,-4], 1)
threeSumClosest([1,2,4,8,16,32,64,128], 82)