/*
Given two arrays, write a function to compute their intersection.

LeetCode: 349. Intersection of Two Arrays
*/

var intersection = function(nums1, nums2) {
    let set = new Set(nums1);
    let arr = [];
    let n = nums2.length;
    for(let c of nums2){
        if(set.has(c)){
            arr.push(c);
            set.delete(c) 
        }
    }
    return arr;
};
intersection([1,2,2,1], [2,2])