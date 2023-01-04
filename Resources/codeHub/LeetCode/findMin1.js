/*
Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.
(i.e.,  [0,1,2,4,5,6,7] might become  [4,5,6,7,0,1,2]).
Find the minimum element.
You may assume no duplicate exists in the array.

LeetCode: 153. Find Minimum in Rotated Sorted Array
*/

var findMin = function(nums) {
    if(nums.length === 1 || nums[0] < nums[nums.length - 1]) return nums[0];
    let i = 0, j = nums.length - 1, mid;
    while(i <= j){
        mid = Math.floor((i + j) / 2);
        if(nums[mid] < nums[mid + 1] && nums[mid] < nums[mid - 1]){
            return nums[mid];
        }else if(nums[mid] < nums[mid + 1] && nums[mid] < nums[0]){
            j = mid - 1;
        }else if(nums[mid] < nums[mid + 1] && nums[mid] > nums[0]){
            i = mid + 1;
        }
        else return nums[mid + 1];
    }
};
findMin([3,4,5,1,2])