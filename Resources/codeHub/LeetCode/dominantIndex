/*
In a given integer array nums, there is always exactly one largest element.

Find whether the largest element in the array is at least twice as much as every other number in the array.

If it is, return the index of the largest element, otherwise return -1.

LeetCode: 747. Largest Number At Least Twice of Others
*/

var dominantIndex = function(nums) {
    let max = 0;
    let nextMax = 0;
    let index = -1;
    for(let i = 0; i < nums.length; i++){
        if(nums[i] > max){
            nextMax = max
            max = nums[i];
            index = i;
        }else if(nums[i] > nextMax) nextMax = nums[i];
    }
    return max / nextMax >= 2 ? index : -1;
};
dominantIndex([3, 6, 1, 0])