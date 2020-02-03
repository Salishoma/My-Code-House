/*
Given a sorted array, two integers k and x, find the k closest elements to x in the array. The result should also be sorted in ascending order. If there is a tie, the smaller elements are always preferred.

LeetCode: 658. Find K Closest Elements
*/

var findClosestElements = function(arr, k, x) {
    if(arr.length === 1) return arr;
    let index = 0;
    let min = Infinity;
    for(let i = 0; i < arr.length; i++){
        let val = Math.abs(arr[i] - x);
        if(min > val){
            min = val;
            index = i;
        }
    }
    let i = index, j = index + 1;
    let res = []
    while(k > 0){
        if(j >= arr.length){
            res.push(arr[i]);
            i--;
        }else if(i < 0){
            res.push(arr[j]);
            j++;
        }
        else if(Math.abs(x - arr[i]) <= Math.abs(arr[j] - x)){
            res.push(arr[i]);
            i--;
        }else{
            res.push(arr[j]);
            j++;
        }
        k--;
    }
    res.sort((a, b) => a - b);
    return res;
};
findClosestElements([1,2,,3,6,8,9],3)