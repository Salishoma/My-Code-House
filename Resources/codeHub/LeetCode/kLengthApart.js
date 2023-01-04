/*
Given an array nums of 0s and 1s and an integer k, return True if all 1's are at least k places away from each other, otherwise return False.

LeetCode: 1437. Check If All 1's Are at Least Length K Places Away 
*/

var kLengthApart = function(nums, k) {
    let count = 0;
    let j = 0;
    for(let i = 0; i < nums.length; i++){
        if(nums[i] === 1){
            j = i;
            break;
        }
    }
    for(let i = j + 1; i < nums.length; i++){
        if(nums[i] === 0) count++;
        else{
            if(count >= k) count = 0;
            else return false;
        }
    }
    return true;
};
kLengthApart([1,0,0,1,0,0,0,1], 2)