/*
Given an array of integers and an integer k, find out whether there are two distinct indices i and j in the array such that nums[i] = nums[j] and the absolute difference between i and j is at most k.

LeetCode: 219. Contains Duplicate II
*/

var containsNearbyDuplicate = function(nums, k) {
    let seen = {}
    for(let i = 0; i < nums.length; i++){
        if(!(nums[i] in seen)) seen[nums[i]] = i;
        else{
            if(k >= i - seen[nums[i]]) return true;
            else{
                seen[nums[i]] = i;
            }
        }
    }
    return false;
};
containsNearbyDuplicate([1,2,3,1], 3)