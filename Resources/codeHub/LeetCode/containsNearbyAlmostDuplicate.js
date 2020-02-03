/*
Given an array of integers, find out whether there are two distinct indices i and j in the array such that the absolute difference between nums[i] and nums[j] is at most t and the absolute difference between i and j is at most k.

LeetCode: 220. Contains Duplicate III
*/

let containsNearbyAlmostDuplicate = function(nums, k, t) {
    let  i = 0, j = 1;
    let search =true;
    while(i < nums.length - 1){
            if(j - i <= k){
               if(Math.abs(nums[j] - nums[i]) <= t){
                  return true;
               }else{
                   j++;
                   if(j === nums.length){
                       i++;
                       j = i + 1
                   }
               }
            }else{
                i++;
                j = i + 1;
            }        
    }
    return false;
};
containsNearbyAlmostDuplicate([1,2,3,1], 0)