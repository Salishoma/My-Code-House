/*
Given an array of integers arr and two integers k and threshold.

Return the number of sub-arrays of size k and average greater than or equal to threshold.

LeetCode: 1343. Number of Sub-arrays of Size K and Average Greater than or Equal to Threshold
*/

var numOfSubarrays = function(arr, k, threshold) {
    let sum = 0;
    for(let i = 0; i < k; i++){
        sum += arr[i];
    }
    let count = sum / k < threshold ? 0 : 1;
    for(let i = k; i < arr.length; i++){
        sum += arr[i] - arr[i - k];
        if(sum / k >= threshold) count++;
    }
    return count;
};
numOfSubarrays([11,13,17,23,29,31,7,5,2,3], 3, 5)