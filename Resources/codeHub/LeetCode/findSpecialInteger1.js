/*
Given an integer array sorted in non-decreasing order, there is exactly one integer in the array that occurs more than 25% of the time.

Return that integer.

LeetCode: 1287. Element Appearing More Than 25% In Sorted Array
*/

var findSpecialInteger = function(arr) {
    let count = 1, num = arr[0], n = Math.floor(arr.length / 4);
    for(let i = 1; i <  4 * n; i++){
        if(arr[i] === arr[i - 1]) count++;
        else count = 1;
        if(count > n) return arr[i]
    }
    return num
};
findSpecialInteger(([1,2,2,6,6,6,6,7,10]))