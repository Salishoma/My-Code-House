/*
Given an array of integers, 1 ≤ a[i] ≤ n (n = size of array), some elements appear twice and others appear once.

Find all the elements that appear twice in this array.

Could you do it without extra space and in O(n) runtime?

LeetCode: 442. Find All Duplicates in an Array
*/

var findDuplicates = function(nums) {
    for (let i=0; i<nums.length; i++) {
        while (i+1 !== nums[i] && nums[nums[i]-1] !== nums[i]) {
            let temp = nums[i];
            nums[i] = nums[nums[i]-1];
            nums[temp-1] = temp;
        }
    }
    let dups = [];
    while (nums.length > 0) {
        if (nums[nums.length-1] !== nums.length) {
            dups.push(nums.pop());
        } else {
            nums.pop();
        }
    }
    return dups;    
};
findDuplicates([4,3,2,7,8,2,3,1])