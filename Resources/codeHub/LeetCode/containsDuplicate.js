/*
Given an array of integers, find if the array contains any duplicates.

Your function should return true if any value appears at least twice in the array, and it should return false if every element is distinct.

LeetCode: 217. Contains Duplicate
*/
/*
Given an array of integers, find if the array contains any duplicates.

Your function should return true if any value appears at least twice in the array, and it should return false if every element is distinct.

LeetCode: 217. Contains Duplicate
*/

var containsDuplicate = function(nums) {
    let set = new Set();
    for(let num of nums){
        if(set.has(num)) return true;
        set.add(num);
    }
    return false;
};
containsDuplicate([1,1,1,3,3,4,3,2,4,2])