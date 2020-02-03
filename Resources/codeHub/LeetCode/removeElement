/*
Given an array nums and a value val, remove all instances of that value in-place and return the new length.

Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

The order of elements can be changed. It doesn't matter what you leave beyond the new length.

LeetCode: 27. Remove Element
*/

var removeElement = function(nums, val){
    let j = nums.length - 1
    while(j >= 0){
        if(nums[j] !== val) j--;
        else{
            let temp = nums[j];
            nums[j] = nums[nums.length - 1];
            nums[nums.length - 1] = temp;
            nums.pop();
            j--;
        }
    }
    return nums.length;
}
removeElement([3,2,2,3], 3)
removeElement([0,1,2,2,3,0,4,2], 2)