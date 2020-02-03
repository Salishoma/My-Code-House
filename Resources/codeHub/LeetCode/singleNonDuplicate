/*
You are given a sorted array consisting of only integers where every element appears exactly twice, except for one element which appears exactly once. Find this single element that appears only once.

LeetCode: 540. Single Element in a Sorted Array
*/

var singleNonDuplicate = function(nums) {
    let count = 0;
    let dup = nums[0];
    for(let i = 1; i < nums.length; i++){
        if(dup = nums[i]){
            count++;
        }else{
            if(count === 0) return nums[i - 1];
            count = 0;
            dup = nums[i];
        }
    }
};
singleNonDuplicate([1,1,2,3,3,4,4,8,8], 2)