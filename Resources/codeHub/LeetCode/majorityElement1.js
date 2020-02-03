/*
Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.

You may assume that the array is non-empty and the majority element always exist in the array.

LeetCode: 169. Majority Element
*/

var majorityElement = function(nums) {
    let count = 1;
    let maj = nums[0]
    for(let i = 1; i < nums.length; i++){
        if(maj !== nums[i]){
            count--
        }else count++;
        if(count === 0){
            maj = nums[i];
            count = 1
        }
    }
    return maj;
};
majorityElement([3,2,3])