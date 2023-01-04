/*
Given a sorted array, two integers k and x, find the k closest elements to x in the array. The result should also be sorted in ascending order. If there is a tie, the smaller elements are always preferred.

LeetCode: 658. Find K Closest Elements
*/

var findClosestElements = function(arr, k, x) {
    if (arr.length === 0) return [];
    let l = 0;
    let r = arr.length - k;
    
    while (l < r) {
        let start = l + ((r-l) >> 1);
        if (x - arr[start] > arr[start+k] - x) {
            l = start + 1;
        } else {
            r = start;
        }
    }
    
    return arr.slice(l, l + k);
};
findClosestElements([1,2,,3,6,8,9],4,3)