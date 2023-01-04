/*
You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security system connected and it will automatically contact the police if two adjacent houses were broken into on the same night.

Given a list of non-negative integers representing the amount of money of each house, determine the maximum amount of money you can rob tonight without alerting the police.

LeetCode: 198. House Robber
*/

function rob(nums) {
    if(nums.length == 0){
        return 0;
    }else if(nums.length == 1){
        return nums[0];
    }else if(nums.length == 2){
        return Math.max(nums[0], nums[1]);
    }else if(nums.length == 3){
        return Math.max(nums[0] + nums[2], nums[1]);
    }
    let db = [];
    db[0] = nums[0];
    db[1] = nums[1];
    db[2] = nums[2] + nums[0];
    let max = Math.max(db[1], db[2]);
    for(let i = 3;i < nums.length;i++){
        db[i] = Math.max(db[i - 3] + nums[i], db[i - 2] + nums[i]);
        max = Math.max(max, db[i]);
    }
    return max;
}
rob([1,2,3,1])
