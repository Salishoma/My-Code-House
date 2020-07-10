/*
Given a set of distinct integers, nums, return all possible subsets (the power set).

Note: The solution set must not contain duplicate subsets.

LeetCode: 78. Subsets
*/

var subsets = function(nums) {
    const arr = [];
    for(let num of nums){
        let k = arr.length;
        arr.push([num]);
        for(let j = 0; j < k; j++){
            arr.push([...arr[j], num]);
        }
    }
    arr.push([]);
    return arr;
};
subsets([1,2,3])