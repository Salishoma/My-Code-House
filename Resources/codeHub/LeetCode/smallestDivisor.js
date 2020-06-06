/*
Given an array of integers nums and an integer threshold, we will choose a positive integer divisor and divide all the array by it and sum the result of the division. Find the smallest divisor such that the result mentioned above is less than or equal to threshold.

Each result of division is rounded to the nearest integer greater than or equal to that element. (For example: 7/3 = 3 and 10/2 = 5).

It is guaranteed that there will be an answer.

LeetCode: 1283. Find the Smallest Divisor Given a Threshold
*/

var smallestDivisor = function(nums, threshold) {
    let max = nums.reduce((acc, cur) => {
        if(acc < cur) return cur;
        return acc;
    });
    let left = 1;
    let right = max;
    while(left < right){
        let mid = Math.floor((left + right)/2);
        let sum = 0;
        for(let i = 0; i < nums.length; i++){
            sum += Math.ceil(nums[i] / mid);
        }
        sum > threshold ? left = mid + 1 : right = mid;       
    }
    return left
}
smallestDivisor([15,4,6,12,43,34,45,78,1,21,19,23,65,78,94],16)