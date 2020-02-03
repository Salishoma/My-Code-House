/*
Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

LeetCode: 283. Move Zeroes
*/

function moveZeroes(nums) {
    let pos = 0;
    for(let i = 0; i < nums.length; i++){
        if(nums[i] != 0){
            nums[pos] = nums[i];
            pos++;
        }
    }
    for(let i = pos; i < nums.length; i++){
        nums[i] = 0;
    }
}
moveZeroes([0,1,0,3,12])