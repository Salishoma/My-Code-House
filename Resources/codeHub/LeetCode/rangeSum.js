/*
Given the array nums consisting of n positive integers. You computed the sum of all non-empty continous subarrays from the array and then sort them in non-decreasing order, creating a new array of n * (n + 1) / 2 numbers.

Return the sum of the numbers from index left to index right (indexed from 1), inclusive, in the new array. Since the answer can be a huge number return it modulo 10^9 + 7.

LeetCode: 1508. Range Sum of Sorted Subarray Sums
*/

var rangeSum = function(nums, n, left, right) {
    const map = new Map();
    for(let i = 0; i < nums.length; i++){
        let sum = 0;
        for(let j = i; j < nums.length; j++){
            sum += nums[j];
            if(!map.has(sum)) map.set(sum, 1);
            else map.set(sum, map.get(sum) + 1);
        }
    }
    let sum = 0
    const arr = Array.from(map.keys()).sort((a, b) => a - b);
    const mod = Math.pow(10, 9) + 7;
    let index = 0;
    for(let num of arr){
        index += map.get(num);
        if(index < left) continue;
        if(index - map.get(num) < left){
            if(index >= right){
                sum = (sum + num * (right - left + 1)) % mod;
                break;
            }
            sum = (sum + num * (index - left + 1)) % mod;
            continue;
        }
        if(index > right){
            if(index - map.get(num) < right){
                index -= map.get(num)
                sum =(sum + num * (right - index)) % mod;
            }
            break;
        }
        sum = (sum + num * map.get(num)) % mod;
        if(index === right) break;
    }
    return sum;
};
rangeSum([2,4,9,2,2,4,2,3],8,6,6)