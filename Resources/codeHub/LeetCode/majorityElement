/*
Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.

You may assume that the array is non-empty and the majority element always exist in the array.

LeetCode: 169. Majority Element
*/

var majorityElement = function(nums) {
    const map = new Map();
    for(let i = 0; i < nums.length; i++){
        if(!map.has(nums[i])){
            map.set(nums[i], 1);
        }else{
            map.set(nums[i], map.get(nums[i]) + 1);
        }
    }
    let max = 1;
    let mode;
    for(let[key, value] of map){
        if(max < value){
            max = value;
            mode = key;
        }
    }
    return mode;
};
majorityElement([3,2,3])
majorityElement([2,2,1,1,1,2,2])