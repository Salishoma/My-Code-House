/*
Given a sequence of n integers a1, a2, ..., an, a 132 pattern is a subsequence ai, aj, ak such that i < j < k and ai < ak < aj. Design an algorithm that takes a list of n numbers as input and checks whether there is a 132 pattern in the list.

Note: n will be less than 15,000.

LeetCode: 456. 132 Pattern
*/

function find132pattern(nums) {
    if (nums.length < 3) return false;    
    let stack = [];
    let min = [];
    min[0] = nums[0];
    let k = -1;
    for (let i = 1; i < nums.length; i++) min[i] = Math.min(min[i - 1], nums[i]);
    for (let j = nums.length - 1; j >= 0; j--) {
        if (nums[j] > min[j]) {
            while (stack && stack[k] <= min[j]){
                stack.pop();
                k--;
            }   
            if (stack && stack[k] < nums[j]) return true;
            stack.push(nums[j]);
            k++;
        }
    }
    return false;
}
find132pattern([1,2,3,4])
find132pattern([4,1,3,2])