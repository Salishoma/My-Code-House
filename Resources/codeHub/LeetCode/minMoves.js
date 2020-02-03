/*
Given a non-empty integer array of size n, find the minimum number of moves required to make all array elements equal, where a move is incrementing n - 1 elements by 1.

LeetCode: 453. Minimum Moves to Equal Array Elements
*/

function minMoves(nums) {
    let min = nums[0];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < min) {
            min = nums[i];
        }
    }
    let count = 0
    for (let i = 0; i < nums.length; i++) {
        count += nums[i] - min;
    }
    return count;
}
minMoves([2,3,4])