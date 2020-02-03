/*
Given an array of integers nums, sort the array in ascending order.

LeetCode: Sort an Array
*/

var sortArray = function(nums) {
    if(nums.length === 1) return nums;
    let mid = Math.floor(nums.length / 2);
    let left = sortArray(nums.slice(0, mid));
    let right = sortArray(nums.slice(mid));
    return merge(left, right);
};

function merge(arr1, arr2){
    let i = 0, j = 0;
    let arr = [];
    while(i < arr1.length && j < arr2.length){
        if(arr1[i] < arr2[j]){
            arr.push(arr1[i])
            i++
        }else{
            arr.push(arr2[j]);
            j++
        }
    }
    while(i < arr1.length){
        arr.push(arr1[i]);
        i++
    }
    while(j < arr2.length){
        arr.push(arr2[j]);
        j++
    }
    return arr;
}
sortArray([5,2,3,1])