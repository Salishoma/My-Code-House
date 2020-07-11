/*
Given a collection of integers that might contain duplicates, nums, return all possible subsets (the power set).

Note: The solution set must not contain duplicate subsets.

LeetCode: 90. Subsets II
*/

var subsetsWithDup = function(nums) {
    const arr = [];
    for(let num of nums){
        let k = arr.length;
        arr.push([num]);
        for(let j = 0; j < k; j++){
            arr.push([...arr[j], num]);
        }
    }
    const res = [];
    const set = new Set()
    for(let num of arr){
        const str = JSON.stringify([...num.sort((a, b) => a - b)]);
        if(!set.has(str)){
            res.push(num);
            set.add(str);
        }
    }
    res.push([]);
    return res;
};
subsetsWithDup([1,2,1])