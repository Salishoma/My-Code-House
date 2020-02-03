/*
Given an array with n integers, your task is to check if it could become non-decreasing by modifying at most 1 element.

We define an array is non-decreasing if array[i] <= array[i + 1] holds for every i (1 <= i < n).

LeetCode: 665. Non-decreasing Array
*/

var checkPossibility = function(nums) {
    if(nums.length === 1) return true;
    let count = 0;
    for(let i = 1; i < nums.length; i++){
        if(nums[i] < nums[i - 1]){
            if(nums[i + 1] < nums[i - 1]){
                nums[i - 1] = nums[i];
            }else{
                nums[i] = nums[i - 1]
            }
            count++;
            break;
        }
    }
    if(count === 0) return true;
    for(let i = 1; i < nums.length; i++){
        if(nums[i] < nums[i - 1]){
            return false;
        }
    }
    return true;
};
checkPossibility([4,2,3])